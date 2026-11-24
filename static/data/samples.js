window.C3D_SAMPLES = [
 {
  "clip": "recovery_param_006_e",
  "family": "recovery",
  "state": "e",
  "mask_frames": 60,
  "questions": [
   {
    "id": "ceee21eefd777b5c",
    "type": "Re-ID",
    "question": "The leftmost patient monitor in the frame at 3.2 s: which one is it in the frame at 7.3 s?",
    "choices": [
     "the 1st from the left",
     "the 2nd from the left",
     "not in that frame"
    ],
    "answer": 0,
    "answer_letter": "A"
   },
   {
    "id": "add0813f5ae817d3",
    "type": "Device ref.",
    "question": "What holds the patient monitor closest to the storage cabinet in place? (Go by where the device actually is, not by any label on it.)",
    "choices": [
     "its own wheeled floor stand",
     "an arm projecting from the wall",
     "the top of a cart",
     "the shelf of a ceiling-mounted pendant"
    ],
    "answer": 0,
    "answer_letter": "A"
   },
   {
    "id": "1f7bfd72b9aa4a83",
    "type": "Light owner",
    "question": "Each hospital bed has a reading light on its bedhead service panel. Whose reading light is on? (Answer with the hospital bed's plate number.)",
    "choices": [
     "BED 01",
     "BED 02",
     "Cannot be determined from the video"
    ],
    "answer": 1,
    "answer_letter": "B"
   },
   {
    "id": "a2f31af756301252",
    "type": "Patient frame",
    "question": "Imagine a patient lying on their back in the hospital bed labelled \"BED 01\", head at the head end. Is the infusion pump on the patient's left or right?",
    "choices": [
     "on the patient's left",
     "on the patient's right"
    ],
    "answer": 0,
    "answer_letter": "A"
   }
  ]
 },
 {
  "clip": "ward_multi_param_028_e",
  "family": "ward_multi",
  "state": "e",
  "mask_frames": 60,
  "questions": [
   {
    "id": "50a48e1a79ef5bbb",
    "type": "Direction",
    "question": "Imagine you are standing at the foot of the hospital bed labelled \"BED 02\", facing its head. In which direction is the hospital bed labelled \"BED 01\" from you?",
    "choices": [
     "front-left",
     "front-right",
     "back-left",
     "back-right"
    ],
    "answer": 1,
    "answer_letter": "B"
   },
   {
    "id": "4fba455711741489",
    "type": "Passability",
    "question": "You need to push a crash cart from where the camera is at the start of the video to the patient monitor (turns allowed). Is there a passage at least 0.9 m wide all the way?",
    "choices": [
     "yes",
     "no"
    ],
    "answer": 0,
    "answer_letter": "A"
   },
   {
    "id": "af3ef47a63c3b233",
    "type": "Count",
    "question": "Of the infusion pumps that appear in the video, how many are not visible in the last frame (at 9.8 s)? Count each one once, even if it is seen several times. (Fully hidden or out of view counts as not visible; clearly partly visible counts as visible.)",
    "choices": [
     "0",
     "1",
     "2",
     "3",
     "4 or more"
    ],
    "answer": 2,
    "answer_letter": "C"
   },
   {
    "id": "7f8942b77fb06b73",
    "type": "Route",
    "question": "Imagine you are standing where the camera is at the start of the video, facing the way it faces then. Which hospital bed is nearest to you by the walking route (around furniture and walls)? (Distance is to the nearest spot where you can stand beside it; the nearest is at least 0.6 m nearer than the next.)",
    "choices": [
     "the hospital bed labelled \"BED 02\"",
     "the hospital bed labelled \"BED 01\""
    ],
    "answer": 0,
    "answer_letter": "A"
   }
  ]
 },
 {
  "clip": "infusion_param_037_b",
  "family": "infusion",
  "state": "b",
  "mask_frames": 60,
  "questions": [
   {
    "id": "16e7fe00a4bb3f82",
    "type": "Re-ID",
    "question": "The leftmost IV pole in the frame at 1.7 s: which one is it in the frame at 7.3 s?",
    "choices": [
     "the 1st from the left",
     "the 2nd from the left",
     "not in that frame"
    ],
    "answer": 0,
    "answer_letter": "A"
   },
   {
    "id": "0cfaa2602e9f190d",
    "type": "Device ref.",
    "question": "What holds the infusion pump closest to the handwash station in place? (Go by where the device actually is, not by any label on it.)",
    "choices": [
     "the top of the bedside locker",
     "the column of a ceiling-mounted pendant",
     "an IV pole"
    ],
    "answer": 0,
    "answer_letter": "A"
   },
   {
    "id": "b25a20e19025ba3e",
    "type": "Direction",
    "question": "Imagine you are standing where the camera is at the start of the video, facing the way it faces then. In which direction is the handwash station from you?",
    "choices": [
     "front-left",
     "front-right",
     "back-left",
     "back-right"
    ],
    "answer": 0,
    "answer_letter": "A"
   }
  ]
 },
 {
  "clip": "emergency_param_002_a",
  "family": "emergency",
  "state": "a",
  "mask_frames": 60,
  "questions": [
   {
    "id": "905b5973f72a9045",
    "type": "Patient frame",
    "question": "Imagine a patient lying on their back in the resuscitation stretcher labelled \"BED 01\", head at the head end. Is the handwash station on the patient's left or right?",
    "choices": [
     "on the patient's right",
     "on the patient's left"
    ],
    "answer": 1,
    "answer_letter": "B"
   },
   {
    "id": "dbe2b23ca735c2d5",
    "type": "Route",
    "question": "Imagine you are standing next to the IV pole, facing the instrument cart and walk the shortest walkable route (around furniture and walls) to the resuscitation stretcher whose bedhead reading light is on. The route is: 1. [please fill in]; 2. Go forward until the resuscitation stretcher labelled \"BED 01\"; 3. [please fill in]; 4. Go forward until the resuscitation stretcher whose bedhead reading light is on. Fill in each [please fill in] with the turn, in order (ignore direction changes under 30 degrees; step 1 is the move at the start, which may be no turn).",
    "choices": [
     "turn left, turn right",
     "turn around, turn right",
     "turn right, turn right",
     "turn right, turn left"
    ],
    "answer": 3,
    "answer_letter": "D"
   },
   {
    "id": "63e32c0a65c05334",
    "type": "Direction",
    "question": "Imagine you are standing at the foot of the resuscitation stretcher labelled \"BED 01\", facing its head and walk the shortest walkable route (around furniture and walls) to the resuscitation cart. What is your first change of direction on the route? (Ignore direction changes under 30 degrees; turning more than 135 degrees at the start counts as turning around.)",
    "choices": [
     "no turn: walk straight ahead all the way",
     "turn around first (face the other way)",
     "turn left",
     "turn right"
    ],
    "answer": 3,
    "answer_letter": "D"
   }
  ]
 },
 {
  "clip": "icu_param_026_a",
  "family": "icu",
  "state": "a",
  "mask_frames": 60,
  "questions": [
   {
    "id": "ce29c9582440c2d3",
    "type": "Passability",
    "question": "You need to push a crash cart from where the camera is at the start of the video to the patient monitor (turns allowed). Is there a passage at least 0.9 m wide all the way?",
    "choices": [
     "no",
     "yes"
    ],
    "answer": 1,
    "answer_letter": "B"
   },
   {
    "id": "13a090b74c8413ad",
    "type": "Patient frame",
    "question": "Imagine a patient lying on their back in the hospital bed labelled \"BED 01\", head at the head end. Is the infusion pump on the patient's left or right?",
    "choices": [
     "on the patient's right",
     "on the patient's left"
    ],
    "answer": 1,
    "answer_letter": "B"
   },
   {
    "id": "3a625b461a92d015",
    "type": "Route",
    "question": "Imagine you are standing at the foot of the hospital bed labelled \"BED 01\", facing its head and walk the shortest walkable route (around furniture and walls) to the patient monitor. The route is: 1. [please fill in]; 2. Go forward until the IV pole; 3. [please fill in]; 4. Go forward until the patient monitor. Fill in each [please fill in] with the turn, in order (ignore direction changes under 30 degrees; step 1 is the move at the start, which may be no turn).",
    "choices": [
     "turn left, turn left",
     "no turn, turn right",
     "turn left, turn right",
     "turn right, turn left"
    ],
    "answer": 3,
    "answer_letter": "D"
   }
  ]
 },
 {
  "clip": "ward_single_param_012_a",
  "family": "ward_single",
  "state": "a",
  "mask_frames": 60,
  "questions": [
   {
    "id": "1e4be0bd6269ff63",
    "type": "Patient frame",
    "question": "Imagine a patient lying on their back in the hospital bed labelled \"BED 01\", head at the head end. Is the patient monitor on the patient's left or right?",
    "choices": [
     "on the patient's left",
     "on the patient's right"
    ],
    "answer": 1,
    "answer_letter": "B"
   },
   {
    "id": "cd205d17b16ca1c3",
    "type": "Passability",
    "question": "You need to push a crash cart from where the camera is at the start of the video to the patient monitor (turns allowed). Is there a passage at least 0.9 m wide all the way?",
    "choices": [
     "no",
     "yes"
    ],
    "answer": 1,
    "answer_letter": "B"
   }
  ]
 },
 {
  "clip": "isolation_param_015_a",
  "family": "isolation",
  "state": "a",
  "mask_frames": 60,
  "questions": [
   {
    "id": "dafaa6531393f9fb",
    "type": "Direction",
    "question": "Imagine you are standing at the foot of the hospital bed labelled \"BED 01\", facing its head and walk the shortest walkable route (around furniture and walls) to the patient monitor. What is your first change of direction on the route? (Ignore direction changes under 30 degrees; turning more than 135 degrees at the start counts as turning around.)",
    "choices": [
     "turn right",
     "no turn: walk straight ahead all the way",
     "turn around first (face the other way)",
     "turn left"
    ],
    "answer": 3,
    "answer_letter": "D"
   },
   {
    "id": "d23156f03835b21a",
    "type": "Route",
    "question": "Imagine you are standing next to the bedside cabinet, facing the IV pole and walk the shortest walkable route (around furniture and walls) to the patient monitor. The route is: 1. [please fill in]; 2. Go forward until the hospital bed labelled \"BED 01\"; 3. [please fill in]; 4. Go forward until the patient monitor. Fill in each [please fill in] with the turn, in order (ignore direction changes under 30 degrees; step 1 is the move at the start, which may be no turn).",
    "choices": [
     "turn right, turn left",
     "turn around, turn left",
     "turn left, turn left",
     "turn right, turn right"
    ],
    "answer": 0,
    "answer_letter": "A"
   }
  ]
 },
 {
  "clip": "corridor_param_035_c",
  "family": "corridor",
  "state": "c",
  "mask_frames": 60,
  "questions": [
   {
    "id": "cf5f54714e49e4d0",
    "type": "Passability",
    "question": "A straight route is marked on the floor. A patient transport bed 1.0 m wide, 2.2 m long and 1.0 m tall starts at one end of the line and is pushed along it to the other end (4.2 m) without turning. Keeping at least 0.02 m clearance at both sides and above, can it pass?",
    "choices": [
     "no, it is blocked",
     "yes, it can pass"
    ],
    "answer": 0,
    "answer_letter": "A"
   },
   {
    "id": "886aebba82ae4dd0",
    "type": "Count",
    "question": "Of the room doors (not counting the entrance) that have appeared up to 7.3 s into the video, how many are not visible in the frame at 7.3 s? Count each one once, even if it is seen several times. (Fully hidden or out of view counts as not visible; clearly partly visible counts as visible.)",
    "choices": [
     "0",
     "1",
     "2",
     "3",
     "4 or more"
    ],
    "answer": 2,
    "answer_letter": "C"
   }
  ]
 },
 {
  "clip": "endoscopy_param_037_a",
  "family": "endoscopy",
  "state": "a",
  "mask_frames": 60,
  "questions": [
   {
    "id": "dabbdf61826ed09e",
    "type": "Route",
    "question": "Imagine you are standing where the camera is at the start of the video, facing the way it faces then. Which of these is nearest to you by the walking route (around furniture and walls)? (Distance is to the nearest spot where you can stand beside it; the nearest is at least 0.6 m nearer than the next.)",
    "choices": [
     "the handwash station",
     "the patient monitor",
     "the endoscopy tower",
     "the examination couch"
    ],
    "answer": 2,
    "answer_letter": "C"
   },
   {
    "id": "5992f5ee3e8abc9c",
    "type": "Direction",
    "question": "Imagine you are standing where the camera is at the start of the video, facing the way it faces then. In which direction is the handwash station from you?",
    "choices": [
     "front-left",
     "front-right",
     "back-left",
     "back-right"
    ],
    "answer": 2,
    "answer_letter": "C"
   }
  ]
 },
 {
  "clip": "operating_room_param_014_a",
  "family": "operating_room",
  "state": "a",
  "mask_frames": 60,
  "questions": [
   {
    "id": "c9de3f7260e5e2b6",
    "type": "Direction",
    "question": "Imagine you are standing where the camera is at the start of the video, facing the way it faces then and walk the shortest walkable route (around furniture and walls) to the anaesthesia workstation. What is your first change of direction on the route? (Ignore direction changes under 30 degrees; turning more than 135 degrees at the start counts as turning around.)",
    "choices": [
     "turn right",
     "no turn: walk straight ahead all the way",
     "turn around first (face the other way)",
     "turn left"
    ],
    "answer": 0,
    "answer_letter": "A"
   },
   {
    "id": "8bca8f0fffc3d128",
    "type": "Passability",
    "question": "You need to push a transport bed from where the camera is at the start of the video to the patient monitor (turns allowed). Is there a passage at least 1.2 m wide all the way?",
    "choices": [
     "yes",
     "no"
    ],
    "answer": 0,
    "answer_letter": "A"
   }
  ]
 },
 {
  "clip": "nurse_station_param_016_a",
  "family": "nurse_station",
  "state": "a",
  "mask_frames": 60,
  "questions": [
   {
    "id": "5c997c6ef993ec8f",
    "type": "Re-ID",
    "question": "The leftmost chair in the frame at 1.7 s: which one is it in the frame at 5.7 s?",
    "choices": [
     "the 1st from the left",
     "the 2nd from the left",
     "not in that frame"
    ],
    "answer": 0,
    "answer_letter": "A"
   },
   {
    "id": "6cddaa4fc7c2ddeb",
    "type": "Count",
    "question": "Of the visitor chairs that appear in the video, how many are not visible in the last frame (at 9.8 s)? Count each one once, even if it is seen several times. (Fully hidden or out of view counts as not visible; clearly partly visible counts as visible.)",
    "choices": [
     "0",
     "1",
     "2",
     "3",
     "4 or more"
    ],
    "answer": 2,
    "answer_letter": "C"
   }
  ]
 },
 {
  "clip": "ct_param_014_a",
  "family": "ct",
  "state": "a",
  "mask_frames": 60,
  "questions": [
   {
    "id": "787064bd8d495832",
    "type": "Route",
    "question": "Imagine you are standing where the camera is at the start of the video, facing the way it faces then. Which of these is nearest to you by the walking route (around furniture and walls)? (Distance is to the nearest spot where you can stand beside it; the nearest is at least 0.6 m nearer than the next.)",
    "choices": [
     "the patient monitor",
     "the CT gantry",
     "the handwash station"
    ],
    "answer": 0,
    "answer_letter": "A"
   },
   {
    "id": "5d5b0c7e68482026",
    "type": "Direction",
    "question": "Imagine you are standing where the camera is at the start of the video, facing the way it faces then. In which direction is the patient monitor from you?",
    "choices": [
     "front-left",
     "front-right",
     "back-left",
     "back-right"
    ],
    "answer": 2,
    "answer_letter": "C"
   }
  ]
 }
];
