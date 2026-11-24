(function () {
  'use strict';

  /* ---------------- Sample browser ---------------- */
  var FAMILY = {
    recovery: 'Recovery', ward_multi: 'Multi-bed ward', ward_single: 'Single-bed ward', infusion: 'Infusion',
    emergency: 'Emergency', icu: 'ICU', isolation: 'Isolation', corridor: 'Corridor', endoscopy: 'Endoscopy',
    operating_room: 'Operating room', nurse_station: 'Nurse station', ct: 'CT', xray: 'X-ray',
    ultrasound: 'Ultrasound', examination: 'Examination', phlebotomy: 'Phlebotomy'
  };
  var TYPE_CLASS = {
    'Count': 't-count', 'Re-ID': 't-reid', 'Light owner': 't-light', 'Device ref.': 't-device',
    'Patient frame': 't-patient', 'Direction': 't-direction', 'Route': 't-route', 'Passability': 't-pass'
  };
  var VIEW_NOTE = {
    photo: 'Photorealistic clip as given to the models (10 s, 60 frames).',
    render: 'Source render from the simulated 3D scene.',
    masks: 'Instance masks overlaid on the photorealistic clip, one color per object (walls, floor and other structural parts not colored).'
  };

  var samples = window.C3D_SAMPLES || [];
  var strip = document.getElementById('clip-strip');
  var video = document.getElementById('sample-video');
  var meta = document.getElementById('clip-meta');
  var qBox = document.getElementById('questions');
  var note = document.getElementById('view-note');
  var toggleBtns = document.querySelectorAll('.view-toggle .button');
  var current = 0, view = 'photo';

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function famName(s) { return FAMILY[s.family] || s.family; }

  function setVideo(keepTime) {
    var s = samples[current];
    var t = keepTime ? video.currentTime : 0;
    var playing = !video.paused;
    video.src = 'static/videos/' + s.clip + '_' + view + '.mp4';
    video.poster = 'static/images/thumbs/' + s.clip + '.jpg';
    video.addEventListener('loadedmetadata', function once() {
      video.removeEventListener('loadedmetadata', once);
      if (t) { try { video.currentTime = Math.min(t, video.duration - 0.05); } catch (e) {} }
      if (playing || !keepTime) { var p = video.play(); if (p && p.catch) p.catch(function () {}); }
    });
    note.textContent = VIEW_NOTE[view];
  }

  function renderQuestions() {
    var s = samples[current];
    qBox.innerHTML = '';
    s.questions.forEach(function (q) {
      var card = el('div', 'q-card');
      var head = el('div');
      head.appendChild(el('span', 'type-tag ' + (TYPE_CLASS[q.type] || ''), q.type));
      card.appendChild(head);
      card.appendChild(el('p', 'q-text', q.question));
      var ol = el('ol');
      var items = [];
      q.choices.forEach(function (c, i) {
        var li = el('li');
        li.appendChild(el('b', null, String.fromCharCode(65 + i) + '.'));
        li.appendChild(document.createTextNode(' ' + c));
        ol.appendChild(li); items.push(li);
      });
      card.appendChild(ol);
      var foot = el('div', 'q-foot');
      var btn = el('button', 'button is-small is-rounded is-light', 'Show answer');
      var ans = el('span', 'answer-text', '');
      btn.addEventListener('click', function () {
        var shown = items[q.answer].classList.toggle('is-correct');
        btn.textContent = shown ? 'Hide answer' : 'Show answer';
        ans.textContent = shown ? 'Answer: ' + q.answer_letter : '';
      });
      foot.appendChild(btn); foot.appendChild(ans);
      card.appendChild(foot);
      qBox.appendChild(card);
    });
  }

  function selectClip(i) {
    current = i;
    Array.prototype.forEach.call(strip.children, function (b, j) {
      b.classList.toggle('is-active', j === i);
      b.setAttribute('aria-selected', j === i ? 'true' : 'false');
    });
    var s = samples[i];
    meta.innerHTML = '';
    meta.appendChild(el('span', 'fam', famName(s)));
    meta.appendChild(el('span', 'sub', 'clip ' + (i + 1) + ' of ' + samples.length + ' · scene state ' + s.state.toUpperCase()));
    setVideo(false);
    renderQuestions();
  }

  if (samples.length && strip) {
    samples.forEach(function (s, i) {
      var b = el('button', 'clip-thumb');
      b.type = 'button';
      b.setAttribute('role', 'option');
      b.title = famName(s) + ' (' + s.questions.map(function (q) { return q.type; }).join(', ') + ')';
      var img = el('img'); img.src = 'static/images/thumbs/' + s.clip + '.jpg'; img.alt = famName(s); img.loading = 'lazy';
      b.appendChild(img);
      b.appendChild(el('span', null, famName(s)));
      b.addEventListener('click', function () { selectClip(i); });
      strip.appendChild(b);
    });
    Array.prototype.forEach.call(toggleBtns, function (b) {
      b.addEventListener('click', function () {
        if (b.dataset.view === view) return;
        view = b.dataset.view;
        Array.prototype.forEach.call(toggleBtns, function (x) { x.classList.toggle('is-selected', x === b); });
        setVideo(true);
      });
    });
    selectClip(0);
  }

  /* ---------------- Leaderboard ---------------- */
  var rows = window.C3D_LEADERBOARD || [];
  var TYPES = ['Count', 'Re-ID', 'Light owner', 'Patient frame', 'Device ref.', 'Direction', 'Route', 'Passability'];
  var COLS = [
    { key: 'rank', label: 'Rank', num: true, sticky: false },
    { key: 'model', label: 'Model', num: false, sticky: true },
    { key: 'frames', label: 'Frames', num: true }
  ].concat(TYPES.map(function (t) { return { key: t, label: t, num: true, metric: true }; }))
   .concat([{ key: 'avg', label: 'Avg.', num: true, metric: true }]);
  var GROUPS = [
    { id: 'References', short: 'References' },
    { id: 'Proprietary Models (API)', short: 'Proprietary' },
    { id: 'Open-source General Models', short: 'Open-source General' },
    { id: 'Open-source Spatial Models', short: 'Open-source Spatial' },
    { id: 'Fine-tuned on Clinical3D-Train', short: 'Fine-tuned' }
  ];
  var ZERO_SHOT = ['Proprietary Models (API)', 'Open-source General Models', 'Open-source Spatial Models'];
  var FINETUNED = ['Fine-tuned on Clinical3D-Train'];

  rows.forEach(function (r, i) { r._order = i; });

  // best / second best per metric column within zero-shot and within fine-tuned (as in the paper)
  function marks(groupIds) {
    var out = {};
    COLS.forEach(function (c) {
      if (!c.metric) return;
      var vals = rows.filter(function (r) { return groupIds.indexOf(r.group) >= 0; })
        .map(function (r) { return parseFloat(r[c.key]); });
      var uniq = vals.filter(function (v, i, a) { return a.indexOf(v) === i; }).sort(function (a, b) { return b - a; });
      out[c.key] = { best: uniq[0], second: uniq[1] };
    });
    return out;
  }
  var markZS = marks(ZERO_SHOT), markFT = marks(FINETUNED);

  var sortKey = null, sortDir = 1, groupFilter = 'all';

  function sortVal(r, c) {
    var v = r[c.key];
    if (c.key === 'model') return v.toLowerCase();
    var f = parseFloat(v);
    return isNaN(f) ? null : f;
  }

  function renderHead() {
    var head = document.getElementById('lb-head');
    head.innerHTML = '';
    COLS.forEach(function (c) {
      var th = el('th', (c.num ? 'num ' : '') + (c.sticky ? 'col-sticky ' : '') + (c.key === 'avg' ? 'avg ' : '') + (sortKey === c.key ? 'is-sorted' : ''));
      th.appendChild(document.createTextNode(c.label));
      var ind = el('span', 'sort-ind', sortKey === c.key ? (sortDir > 0 ? '▲' : '▼') : '↕');
      th.appendChild(ind);
      th.setAttribute('role', 'button');
      th.setAttribute('data-key', c.key);
      th.tabIndex = 0;
      th.title = 'Sort by ' + c.label;
      function go() {
        if (sortKey === c.key) sortDir = -sortDir;
        else { sortKey = c.key; sortDir = (c.metric) ? -1 : 1; }
        render();
      }
      th.addEventListener('click', go);
      th.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
      head.appendChild(th);
    });
  }

  function renderBody() {
    var body = document.getElementById('lb-body');
    body.innerHTML = '';
    GROUPS.forEach(function (g) {
      if (groupFilter !== 'all' && groupFilter !== g.id) return;
      var gr = rows.filter(function (r) { return r.group === g.id; });
      if (sortKey) {
        var c = COLS.filter(function (x) { return x.key === sortKey; })[0];
        gr = gr.slice().sort(function (a, b) {
          var va = sortVal(a, c), vb = sortVal(b, c);
          if (va === null && vb === null) return a._order - b._order;
          if (va === null) return 1;
          if (vb === null) return -1;
          if (va < vb) return -sortDir;
          if (va > vb) return sortDir;
          return a._order - b._order;
        });
      }
      var tr = el('tr', 'group-row');
      var td = el('td', null, g.id); td.colSpan = COLS.length;
      tr.appendChild(td); body.appendChild(tr);
      var mk = ZERO_SHOT.indexOf(g.id) >= 0 ? markZS : (FINETUNED.indexOf(g.id) >= 0 ? markFT : null);
      gr.forEach(function (r) {
        var row = el('tr', /ours/i.test(r.model) ? 'ours' : '');
        COLS.forEach(function (c) {
          var v = r[c.key];
          var text = v;
          if (c.key === 'frames' && !v) text = '–';
          if (c.key === 'rank' && v === '--') text = '–';
          var cls = (c.num ? 'num ' : '') + (c.sticky ? 'col-sticky model ' : '') + (c.key === 'avg' ? 'avg ' : '');
          if (mk && c.metric) {
            var f = parseFloat(v);
            if (f === mk[c.key].best) cls += 'best ';
            else if (f === mk[c.key].second) cls += 'second ';
          }
          var cell = el('td', cls, text);
          cell.setAttribute('data-col', c.key);
          row.appendChild(cell);
        });
        body.appendChild(row);
      });
    });
  }

  function renderFilters() {
    var box = document.getElementById('lb-filters');
    box.innerHTML = '';
    [{ id: 'all', short: 'All' }].concat(GROUPS).forEach(function (g) {
      var b = el('button', 'button is-small is-rounded' + (groupFilter === g.id ? ' is-selected' : ''), g.short);
      b.type = 'button';
      b.addEventListener('click', function () { groupFilter = g.id; render(); });
      box.appendChild(b);
    });
  }

  function render() { renderFilters(); renderHead(); renderBody(); }
  if (rows.length) render();

  /* ---------------- BibTeX copy ---------------- */
  var copyBtn = document.getElementById('copy-bib');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var txt = document.getElementById('bib-text').innerText;
      var label = copyBtn.querySelector('span:last-child');
      function done(ok) { label.textContent = ok ? 'Copied' : 'Select and copy'; setTimeout(function () { label.textContent = 'Copy'; }, 1600); }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(txt).then(function () { done(true); }, function () { done(false); });
      } else {
        var ta = document.createElement('textarea');
        ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        var ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta); done(ok);
      }
    });
  }
})();
