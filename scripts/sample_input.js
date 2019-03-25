"use strict";

// Global Variable
var EG_MOORE_1 = {}; // Example: Moore #1
var EG_MOORE_2 = {}; // Example: Moore #2
var EG_MEALY = {}; // Example: Mealy
var EG_DJ = {}; // Example: Mealy

/* =========================== Example: Moore #1 =========================== */

/* ---------- Section I - Inputs, Outputs, States and Reset State ---------- */

// data type: string array
EG_MOORE_1.inputs = ["TA", "TB"];

// data type: string array
EG_MOORE_1.outputs = ["LA1", "LA0", "LB1", "LB0"];

// data type: string array
EG_MOORE_1.states = ["S0", "S1", "S2", "S3"];

// data type: string
EG_MOORE_1.resetState = "S0";

/* ---------- Section II - State Transition Table -------------------------- */

// data type: 2D string array
EG_MOORE_1.transitionT = [
//  [curState, inputs, nextState]
    [  "S0",    "0X",     "S1"  ],
    [  "S0",    "1X",     "S0"  ],
    [  "S1",    "XX",     "S2"  ],
    [  "S2",    "X0",     "S3"  ],
    [  "S2",    "X1",     "S2"  ],
    [  "S3",    "XX",     "S0"  ]
];

/* ---------- Section III - Machine Type and Output Table ------------------ */

// data type: string
EG_MOORE_1.type = "Moore"; // either "Moore" or "Mealy"

// data type: 2D string array
EG_MOORE_1.outputT = [
//  [curState, outputs] for moore machine
    [  "S0",   "0010" ],
    [  "S1",   "0110" ],
    [  "S2",   "1000" ],
    [  "S3",   "1001" ]
];

/* ---------- Section IV - Diagrams ---------------------------------------- */

// data type: string (HTML)
EG_MOORE_1.diagram =
    "<h2>State Transition Diagram</h2>" +
    "<img src='moore_1/state_transition_diagram.jpg' alt='Moore #1 State Transition Diagram'>" +
    "<h2>State Transition Table</h2>" +
    "<img src='moore_1/state_transition_table.jpg' alt='Moore #1 State Transition Table'>" +
    "<h2>Output Table</h2>" +
    "<img src='moore_1/output_table.jpg' alt='Moore #1 Output Table'>" +
    "<p>D. M. Harris and S. L. Harris, <i>Digital Design and Computer Architecture</i>, 2nd ed. Waltham, MA: Elsevier, 2013, pp. 125-127.</p>";

/* =========================== Example: Moore #2 =========================== */

EG_MOORE_2.inputs = ["A"];
EG_MOORE_2.outputs = ["Y"];
EG_MOORE_2.states = ["S0", "S1", "S2"];
EG_MOORE_2.resetState = "S0";

EG_MOORE_2.transitionT = [
    [  "S0",     "0",     "S1"  ],
    [  "S0",     "1",     "S0"  ],
    [  "S1",     "0",     "S1"  ],
    [  "S1",     "1",     "S2"  ],
    [  "S2",     "0",     "S1"  ],
    [  "S2",     "1",     "S0"  ]
];

EG_MOORE_2.type = "Moore";
EG_MOORE_2.outputT = [
    [  "S0",     "0"  ],
    [  "S1",     "0"  ],
    [  "S2",     "1"  ]
];

EG_MOORE_2.diagram =
    "<h2>State Transition Diagram</h2>" +
    "<img src='moore_2/state_transition_diagram.jpg' alt='Moore #2 State Transition Diagram'>" +
    "<h2>State Transition Table</h2>" +
    "<img src='moore_2/state_transition_table.jpg' alt='Moore #2 State Transition Table'>" +
    "<h2>Output Table</h2>" +
    "<img src='moore_2/output_table.jpg' alt='Moore #2 Output Table'>" +
    "<p>D. M. Harris and S. L. Harris, <i>Digital Design and Computer Architecture</i>, 2nd ed. Waltham, MA: Elsevier, 2013, pp. 133.</p>";

/* =========================== Example: Mealy ============================== */

EG_MEALY.inputs = ["A"];
EG_MEALY.outputs = ["Y"];
EG_MEALY.states = ["S0", "S1"];
EG_MEALY.resetState = "S0";

EG_MEALY.transitionT = [
    [  "S0",     "0",     "S1"  ],
    [  "S0",     "1",     "S0"  ],
    [  "S1",     "0",     "S1"  ],
    [  "S1",     "1",     "S0"  ]
];

EG_MEALY.type = "Mealy";
EG_MEALY.outputT = [
//  [curState, inputs, outputs] for mealy machine
    [  "S0",     "0",    "0"  ],
    [  "S0",     "1",    "0"  ],
    [  "S1",     "0",    "0"  ],
    [  "S1",     "1",    "1"  ]
];

EG_MEALY.diagram =
    "<h2>State Transition Diagram</h2>" +
    "<img src='mealy/state_transition_diagram.jpg' alt='Mealy State Transition Diagram'>" +
    "<h2>State Transition and Output Table</h2>" +
    "<img src='mealy/state_transition_output_table.jpg' alt='Mealy State Transition and Output Table'>" +
    "<p>D. M. Harris and S. L. Harris, <i>Digital Design and Computer Architecture</i>, 2nd ed. Waltham, MA: Elsevier, 2013, pp. 133-134.</p>";
	
	
/* ---------- Section I - Inputs, Outputs, States and Reset State ---------- */

// data type: string array
EG_DJ.inputs = ["LOCK", "DIR"];

// data type: string array
EG_DJ.outputs = ["SEG", "AN3","AN2","AN1","AN0"];

// data type: string array
EG_DJ.states = ["S0", "S1", "S2", "S3", "S4","S5", "S6", "S7", "S8", "S9" ];

// data type: string
EG_DJ.resetState = "S0";

/* ---------- Section II - State Transition Table -------------------------- */

// data type: 2D string array
EG_DJ.transitionT = [
//  [curState, inputs, nextState]
    [  "S0",    "1X",     "S0"  ],
    [  "S0",    "00",     "S1"  ],
    [  "S0",    "01",     "S9"  ],
    [  "S1",    "1X",     "S1"  ],
    [  "S1",    "00",     "S2"  ],
    [  "S1",    "01",     "S0"  ],
    [  "S2",    "1X",     "S2"  ],
    [  "S2",    "00",     "S3"  ],
    [  "S2",    "01",     "S1"  ],
    [  "S3",    "1X",     "S3"  ],
    [  "S3",    "00",     "S4"  ],
    [  "S3",    "01",     "S2"  ],
	[  "S4",    "1X",     "S4"  ],
    [  "S4",    "00",     "S5"  ],
    [  "S4",    "01",     "S3"  ],
    [  "S5",    "1X",     "S5"  ],
    [  "S5",    "00",     "S6"  ],
    [  "S5",    "01",     "S4"  ],
    [  "S6",    "1X",     "S6"  ],
    [  "S6",    "00",     "S7"  ],
    [  "S6",    "01",     "S5"  ],
    [  "S7",    "1X",     "S7"  ],
    [  "S7",    "00",     "S8"  ],
    [  "S7",    "01",     "S6"  ],
	[  "S8",    "1X",     "S8"  ],
    [  "S8",    "00",     "S9"  ],
    [  "S8",    "01",     "S7"  ],
	[  "S9",    "1X",     "S9"  ],
    [  "S9",    "00",     "S0"  ],
    [  "S9",    "01",     "S8"  ]
];

/* ---------- Section III - Machine Type and Output Table ------------------ */

// data type: string
EG_DJ.type = "Moore"; // either "Moore" or "Mealy"

// data type: 2D string array
EG_DJ.outputT = [
//  [curState, outputs] for moore machine
    [  "S0",   "H1001" ],
    [  "S1",   "E1001" ],
    [  "S2",   "L1001" ],
    [  "S3",   "L1001" ],
	[  "S4",   "O1001" ],
    [  "S5",   "-1001" ],
    [  "S6",   "C1001" ],
    [  "S7",   "D1001" ],
	[  "S8",   "J1001" ],
    [  "S9",   ".1001" ]    
];

/* ---------- Section IV - Diagrams ---------------------------------------- */

// data type: string (HTML)
EG_DJ.diagram =
    "<h2>State Transition Diagram</h2>" +
    "<img src='dj/state_transition_diagram.jpg' alt='Moore #1 State Transition Diagram'>" +
    "<h2>State Transition Table</h2>" +
    
    "<h2>Output Table</h2>" 
   ;