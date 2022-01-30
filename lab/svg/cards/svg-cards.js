var svgBasics = [
    {
        "id": "path-01", 
        "dim": {"h": 100, "w": 100},
        "code": [
            [1, "1", `<path d="M 10,10 c 0 40, 80 40 80 00" />`],
            [-1, "0", ``]
        ]
    },
    {
        "id": "path-02", 
        "dim": {"h": 100, "w": 100},
        "code": [
            [1, "1", `<path d="M 10,10 C 10 50, 90 50 90 10" />`],
            [-1, "0", ``]
        ]
    },
    {
        "id": "path-03", 
        "dim": {"h": 100, "w": 100},
        "code": [
            [1, "1", `<path d="M 10 10 h 80 v 80 h -80 Z" />`],
            [-1, "0", ``]
        ]
    },
    {
        "id": "path-04", 
        "dim": {"h": 100, "w": 100},
        "code": [
            [1, "1", `<path d="M 10 10 h 80 v 80 h -80 v -80 m 20 20 v 40 h 40 v -40 h -40 Z" />`],
            [-1, "0", ``]
        ]
    },

    { "id": "path3_Arc00", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 L 30 30 A 10 10 0 0 0 70 70 L 90 90 h -80 Z" fill="#1119" stroke="#111" />`],[-1, "0", ``]]
    },
    { "id": "path3_Arc01", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 L 30 30 A 10 10 0 0 1 70 70 L 90 90 h -80 Z" fill="#1119" stroke="#111" />`],[-1, "0", ``]] 
    },
    { "id": "path3_Arc10", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 L 30 30 A 10 10 0 1 0 70 70 L 90 90 h -80 Z" fill="#1119" stroke="#111" />`],[-1, "0", ``]] 
    },
    { "id": "path3_Arc11", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 L 30 30 A 10 10 0 1 1 70 70 L 90 90 h -80 Z" fill="#1119" stroke="#111" />`],[-1, "0", ``]] 
    },

    
    { "id": "path-x1-00", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 30 50 A 25 25 0 0 0 70 50 L 50 30 Z" fill="#39f9" stroke="#39f" stroke-width="1" />`]] 
    },
    { "id": "path-x1-10", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 30 50 A 25 25 0 1 0 70 50 L 50 30 Z" fill="#39f9" stroke="#39f" stroke-width="1" />`]] 
    },
    { "id": "path-x1-01", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 30 50 A 25 25 0 0 1 70 50 L 50 30 Z" fill="#39f9" stroke="#39f" stroke-width="1" />`]] 
    },
    { "id": "path-x1-11", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 30 50 A 25 25 0 1 1 70 50 L 50 30 Z" fill="#39f9" stroke="#39f" stroke-width="1" />`]] 
    },

    /* MDN Samples */
    { "id": "path-mdn-00", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<circle cx="60" cy="40" r="20"  fill="transparent" stroke="#0808" />`], [1, "1", `<circle cx="40" cy="60" r="20"  fill="transparent" stroke="#0808" />`], [1, "1", `<path d="M 40 40 A 20 20 0 0 0 60 60 L 60 40 Z" fill="#0808" stroke="#000" />`]] 
    },
    { "id": "path-mdn-10", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<circle cx="60" cy="40" r="20"  fill="transparent" stroke="#f008" />`], [1, "1", `<circle cx="40" cy="60" r="20"  fill="transparent" stroke="#f008" />`], [1, "1", `<path d="M 40 40 A 20 20 0 1 0 60 60 L 60 40 Z" fill="#f008" stroke="#000" />`]] 
    },
    { "id": "path-mdn-01", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<circle cx="60" cy="40" r="20"  fill="transparent" stroke="#8088" />`], [1, "1", `<circle cx="40" cy="60" r="20"  fill="transparent" stroke="#8088" />`], [1, "1", `<path d="M 40 40 A 20 20 0 0 1 60 60 L 60 40 Z" fill="#8088" stroke="#000" />`]] 
    },
    { "id": "path-mdn-11", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<circle cx="60" cy="40" r="20"  fill="transparent" stroke="#00f9" />`], [1, "1", `<circle cx="40" cy="60" r="20"  fill="transparent" stroke="#00f9" />`], [1, "1", `<path d="M 40 40 A 20 20 0 1 1 60 60 L 60 40 Z" fill="#00f8" stroke="#000" />`]] 
    },

    /* Z end */
    { "id": "path-z2", "dim": {"h": 100, "w": 100},
    "code": [[1, "1", `<path d="M 10 10 h 80 v 20 l -50 40 h 50 v 20 h -80 v -20 l 50 -40 h -50 z" />`],[-1, "0", ``]] 
    },
    { "id": "path-z", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 h 80 l -80 80 h 80" fill="transparent" stroke="black" stroke-width="4" />`],[-1, "0", ``]] 
    },

    {
        "id": "z", 
        "dim": {"h": 100, "w": 100},
        "code": [
            [1, "1", `<path d="M 10 10 h 80 v 80 h -80 Z" />`],
            [-1, "0", ``]
        ]
    }
];

var svgExperiments = [
    /* Experiments */
    { "id": "path-hex-00", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 h 20 a 10 10 0 0 0 40 0 h 20 v 80 Z" class="hexClr" />`]]
    },
    { "id": "path-hex-01", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 h 20 a 10 10 0 0 0 40 0 h 20 v 80 l -20 -20 a 1 1 0 0 1 -40 -40 Z" class="hexClr" />`]]
    },
    { "id": "path-hex-02", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 h 20 a 10 10 0 1 0 40 0 h 20 v 20 a 1 1 0 0 0 0 40 v 20 h -20 a 1 1 0 0 0 0 -40 h -20 v -20 a 1 1 0 0 0 -40 0 v -20 Z" class="hexClr" />`]]
    },
    { "id": "path-hex-03", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 h 20 a 10 10 0 1 0 40 0 h 20 v 20 a 1 1 0 0 0 0 40 v 20 h -20 a 1 1 0 0 0 -40 0 h -20 v -20 a 1 1 0 0 0 0 -40 v -20 Z" class="hexClr" />`]]
    },

    { "id": "path-hex-04", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 40 40 a 25 25 0 1 1 20 20 a 25 25 0 1 1 -20 -20 " class="hexClr" />`]]
    },
    { "id": "path-hex-05", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 h 20 a 10 10 0 0 0 40 0 h 20 v 80 l -20 -20 a 1 1 0 0 1 -40 -40 l 10 10 a 1 1 0 0 0 20 20 a 14 14 0 0 0 0 -20 a 14 14 0 0 1 -20 0 Z" class="hexClr" />`]]
    },
    { "id": "path-hex-06", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 h 20 a 10 10 0 1 0 40 0 h 20 v 20 a 1 1 0 0 0 0 40 v 20 h -20 a 1 1 0 0 0 0 -40 h -20 v -20 a 1 1 0 0 0 -40 0 a 1 1 0 1 1 60 60 h -60 Z" class="hexClr" />`]]
    },
    { "id": "path-hex-07", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 h 20 a 10 10 0 1 0 40 0 h 20 v 20 a 1 1 0 0 0 0 40 v 20 h -20 a 1 1 0 0 0 -40 0 h -20 v -20 a 1 1 0 0 0 0 -40 v -10 a 1 1 0 1 0 0 60 l 10 10 a 1 1 0 1 0 60 0 l 10 -10 a 1 1 0 1 0 0 -60 l -10 -10 a 1 1 0 1 0 -60 0 l -10 10 Z" class="hexClr" />`]]
    },

    /* Lab Potion Design */
    { "id": "path-hex-08", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 60 20 L 60 50 c 0 10, 20 30 20 40 L 80 90 c -10 10, -50 10 -60 0 L 20 90 c 0 -10, 20 -30 20 -40 L 40 20 " class="hexClr" />`]]
    },
    { "id": "path-hex-09", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 60 20 L 60 50 c 0 10, 20 30 20 40 L 80 90 c -10 10, -50 10 -60 0 L 20 90 c 0 -10, 20 -30 20 -40 L 40 50 v -30 v 20 h 20" class="hexClr" />`], [1, "1", `<ellipse cx="50" cy="20" rx="10" ry="3" class="hexClr" style="fill: #0000;" />`]]
    },
    { "id": "path-hex-10", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 60 20 L 60 50 c 0 10, 20 30 20 40 L 80 90 c -10 10, -50 10 -60 0 L 20 90 c 0 -10, 20 -30 20 -40 L 40 50 v -30 v 20 a 10 3 0 0 1 20 0 " style="stroke: #8888;" class="hexClr" />`], [1, "1", `<ellipse cx="50" cy="40" rx="10" ry="3" class="hexClr" style="stroke: #9c6;" />`], [1, "1", `<ellipse cx="50" cy="20" rx="10" ry="3" class="hexClr" style="fill: #0000; stroke: #8888;" />`]]
    },
    { "id": "path-hex-11", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 60 20 L 60 50 c 0 10, 20 30 20 40 L 80 90 c -10 10, -50 10 -60 0 L 20 90 c 0 -10, 20 -30 20 -40 L 40 50 v -30 v 20 c 3 -3 17 3 20 0 " class="hexClr" />`], [1, "1", `<ellipse cx="50" cy="20" rx="10" ry="3" class="hexClr" style="fill: #0000;" />`]]
    },

    /* Card Design */
    { "id": "card-01", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 0 0 C 14 0 20 6 20 20 v 60 C 20 94 14 100 0 100" class="hexClr" />`]]
    },
    { "id": "card-02", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 0 10 a 1 1 0 0 1 20 20 v 60 a 1 1 0 0 1 -20 20" class="hexClr" />`]]
    },
    { "id": "card-03", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 32 23 h 36 v 54 h -36 z" class="hexClr" />`]]
    },
    { "id": "card-04", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 30 25 a 1 1 0 0 1 2 -2 h 32 a 1 1 0 0 1 2 2 v 50 a 1 1 0 0 1 -2 2 h -32 a 1 1 0 0 1 -2 -2 z" class="hexClr" />`], [1, "1", `<path d="M 32 23 h 36 v 54 h -36 z" style="fill: transparent; stroke: #000f; stroke-width: .5;" />`]]
    },
    { "id": "card-05", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 0 0 C 14 0, 20 6 20 20 v 60 C 20 94, 14 100 0 100 C 0 94 6 80 20 80 h 60 v -60 h -60 C 6 20 0 14 0 0" class="hexClr" />`]]
    },
    { "id": "card-06", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 0 10 a 20 20 0 0 1 20 20 v 60 a 20 20 0 0 1 -20 20" class="hexClr" />`]]
    },
    { "id": "card-07", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 30 20 h 40 v 60 h -40 z" class="hexClr" />`]]
    },
    { "id": "card-08", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 25 15 h 50 v 70 h -50 z" class="hexClr" />`], [1, "1", `<path d="M 20 20 h 60 v 60 h -60 z" style="fill: transparent; stroke: #000f; stroke-width: .5;" />`]]
    },

    { "id": "card45-09", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 30 20 h 40 v 60 h -40 z" class="hexClr" />`]]
    },
    { "id": "card45-10", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 30 20 h 40 v 60 h -40 z" class="hexClr" />`],[1, 0, `<circle cx="50" cy="50" r="10" class="hexClr" style="stroke: transparent;"/>`]]
    },
    { "id": "card57-11", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 25 15 h 50 v 70 h -50 z" class="hexClr" />`]]
    },
    { "id": "card57-12", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 25 15 h 50 v 70 h -50 z" class="hexClr" />`],[1, 0, `<circle cx="50" cy="50" r="15" class="hexClr" style="stroke: transparent;"/>`]]
    },

    /* Letters or Glyps */
    { "id": "path-b1-s", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 50 10 A 40 20 0 0 1 90 30 h -10 A 40 20 0 0 0 20 30 h -10 v -20" />`],[-1, "0", ``]] 
    },
    { "id": "path-b2-s", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 10 30 a 40 20 0 0 1 80 0 h -10 a 30 10 0 0 0 -60 0 a 30 15 0 0 0 30 15 v 15 h -40" />`],[-1, "0", ``]] 
    },
    { "id": "path-b3-s", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 50 10 A 40 20 0 0 1 90 30 h -20 A 20 10 0 0 0 30 30 a 20 10 0 0 0 20 10 a 20 10 0 0 1 20 10 v 20 h -60 v -60" />`],[-1, "0", ``]] 
    },
    { "id": "path-b4-s", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 50 10 A 30 20 0 0 1 80 30 h -10 A 20 10 0 0 0 30 30 a 20 10 0 0 0 20 10 a 30 30 0 0 1 30 30 h -60 v -60" />`],[-1, "0", ``]] 
    },

    { "id": "path-b5-s", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 50 10 A 40 20 0 0 1 90 30 h -20 A 20 10 0 0 0 30 30 a 20 15 0 0 0 20 15 v 10 a 40 22.5 0 0 1 0 -45" />`],[-1, "0", ``]] 
    },
    { "id": "path-b6-s", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 50 10 A 30 20 0 0 1 80 30 h -10 A 20 10 0 0 0 30 30 a 20 15 0 0 0 20 15 v 10 a 30 22.5 0 0 1 0 -45" />`],[-1, "0", ``]] 
    },

    { "id": "path-s1", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 70 30 C 60 10 30 10 30 30 S 70 50 70 70 C 70 90 40 90 30 70" fill="transparent" stroke="black" stroke-width="4" />`],[1, 0, `<circle cx="70" cy="30" r="2" fill="#f00" />`],[1, 0, `<circle cx="30" cy="30" r="2" fill="#f00" />`],[1, 0, `<circle cx="70" cy="70" r="2" fill="#f00" />`],[1, 0, `<circle cx="30" cy="70" r="2" fill="#f00" />`]] 
    },
    { "id": "path-s2", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 70 30 C 70 10 30 10 30 30 S 70 50 70 70 S 30 90 30 70" fill="transparent" stroke="black" stroke-width="4" />`],[1, 0, `<circle cx="70" cy="30" r="2" fill="#f00" />`],[1, 0, `<circle cx="30" cy="30" r="2" fill="#f00" />`],[1, 0, `<circle cx="70" cy="70" r="2" fill="#f00" />`],[1, 0, `<circle cx="30" cy="70" r="2" fill="#f00" />`]] 
    },
    { "id": "path-s3", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 70 40 C 60 10 30 10 30 30 S 70 50 70 70 C 70 90 40 90 30 60" fill="transparent" stroke="black" stroke-width="4" />`],[1, 0, `<circle cx="70" cy="30" r="2" fill="#f00" />`],[1, 0, `<circle cx="30" cy="30" r="2" fill="#f00" />`],[1, 0, `<circle cx="70" cy="70" r="2" fill="#f00" />`],[1, 0, `<circle cx="30" cy="70" r="2" fill="#f00" />`]] 
    },
    { "id": "path-s4", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 70 30 L 50 15 30 30 L 70 70 L 50 85 30 70" fill="transparent" stroke="black" stroke-width="4" />`],[1, 0, `<circle cx="70" cy="30" r="2" fill="#f00" />`],[1, 0, `<circle cx="30" cy="30" r="2" fill="#f00" />`],[1, 0, `<circle cx="70" cy="70" r="2" fill="#f00" />`],[1, 0, `<circle cx="30" cy="70" r="2" fill="#f00" />`]] 
    },

    { "id": "path-z2", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 10 10 h 80 v 20 l -50 40 h 50 v 20 h -80 v -20 l 50 -40 h -50 z" />`],[-1, "0", ``]] 
    },
    { "id": "path-z", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 10 10 h 80 l -80 80 h 80" fill="transparent" stroke="black" stroke-width="4" />`],[-1, "0", ``]] 
    },



    { "id": "z",  "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 10 10 h 80 v 80 h -80 Z" />`]]
    }
]

var svgCards = [
    /* Lab Potion Design */
    { "id": "lab-0", "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 60 20 L 60 50 c 0 10, 20 30 20 40 L 80 90 c -10 10, -50 10 -60 0 L 20 90 c 0 -10, 20 -30 20 -40 L 40 50 v -30 v 20 a 10 3 0 0 1 20 0 " style="stroke: #8888;" class="hexClr" />`], [1, "1", `<ellipse cx="50" cy="40" rx="10" ry="3" class="hexClr" style="stroke: #9c6;" />`], [1, "1", `<ellipse cx="50" cy="20" rx="10" ry="3" class="hexClr" style="fill: #0000; stroke: #8888;" />`]]
    },
    { "id": "lab-01", "dim": {"h": 300, "w": 300},
        "code": [[1, 1, `<path d="M 180 60 l 0 90 c 0 30, 60 90 60 120 L 240 270 c -30 30, -150 30 -180 0 L 60 270 c 0 -30, 60 -90 60 -120 L 120 150 v -90 v 60 a 30 9 0 0 1 60 0 " style="stroke: #8888;" class="hexClr" />`], [1, "1", `<ellipse cx="150" cy="120" rx="30" ry="9" class="hexClr" style="stroke: #9c6;" />`], [1, "1", `<ellipse cx="150" cy="60" rx="30" ry="9" class="hexClr" style="fill: #0000; stroke: #8888;" />`]]
    },

    /* Card Design */
    { "id": "card-4x6", "dim": {"h": 300, "w": 200},
        "code": [[1, 1, `<path d="M 30 20 h 40 v 60 h -40 z" class="hexClr" />`]]
    },
    { "id": "card-5x7", "dim": {"h": 280, "w": 200},
        "code": [[1, 1, `<path d="M 25 15 h 50 v 70 h -50 z" class="hexClr" />`], [1, "1", `<path d="M 20 20 h 60 v 60 h -60 z" style="fill: transparent; stroke: #000f; stroke-width: .5;" />`]]
    },

    { "id": "card46-0", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" />`]]
    },
    { "id": "card57-0", "dim": {"h": 320, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 280 h -200 z" class="hexClr" />`], [0, "0", `<path d="M 20 60 h 200 v 200 h -200 z" style="fill: transparent; stroke: #000f; stroke-width: 1;" />`]]
    },


    { "id": "card46-1", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`]]
    },
    { "id": "card57-1", "dim": {"h": 320, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 280 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], [0, "0", `<path d="M 20 60 h 200 v 200 h -200 z" style="fill: transparent; stroke: #000f; stroke-width: 1;" />`]]
    },

    { "id": "card46-2", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card57-2", "dim": {"h": 320, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 280 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`],
        [1, 0, `<path d="M 120 110 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card46-3", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card57-3", "dim": {"h": 320, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 280 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`],
        [1, 0, `<path d="M 170 110 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 110 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    // { "id": "card46-04", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
    //     "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
    //     [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
    //     [1, 0, `<path d="M 170 120 a 100 100 0 0 0 -50 -50 a 100 100 0 0 0 -50 50 l 100 100 a 100 100 0 0 1 -50 50 a 100 100 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
    //     [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    // },
    // { "id": "card57-04", "dim": {"h": 320, "w": 240}, "svgclass": ["svg-bg20"], 
    //     "code": [[1, 1, `<path d="M 20 20 h 200 v 280 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`],
    //     [1, 0, `<path d="M 170 110 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
    //     [1, 0, `<path d="M 170 110 a 100 100 0 0 0 -50 -50 a 100 100 0 0 0 -50 50 l 100 100 a 100 100 0 0 1 -50 50 a 100 100 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
    //     [1, 0, `<path d="M 120 110 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    // },

    { "id": "card46-05a", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 170 120 a 100 50 0 0 0 -50 -50 a 100 50 0 0 0 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card57-05a", "dim": {"h": 320, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 280 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`],
        [1, 0, `<path d="M 170 110 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 170 110 a 100 50 0 0 0 -50 -50 a 100 50 0 0 0 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 110 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card46-05b", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 170 120 a 50 50 0 0 0 -50 -50 a 50 50 0 0 0 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card57-05b", "dim": {"h": 320, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 280 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`],
        [1, 0, `<path d="M 170 110 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 170 110 a 50 50 0 0 0 -50 -50 a 50 50 0 0 0 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 110 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card46-06a", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 100 50 0 0 0 -50 -50 a 100 50 0 0 0 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card57-06a", "dim": {"h": 320, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 280 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`],
        [1, 0, `<path d="M 170 110 a 100 50 0 0 0 -50 -50 a 100 50 0 0 0 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 110 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card46-06b", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 0 -50 -50 a 50 50 0 0 0 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card57-06b", "dim": {"h": 320, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 280 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`],
        [1, 0, `<path d="M 170 110 a 50 50 0 0 0 -50 -50 a 50 50 0 0 0 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 110 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    /* from Cards2 */
    { "id": "card46-06a", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 0 1 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card46-06b", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 100 50 0 0 0 -50 -50 a 100 50 0 0 0 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card46-06c", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 0 -50 -50 a 50 50 0 0 0 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card46-06d", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 l 100 100 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    
    { "id": "card46-07b", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 170 120 a 100 50 0 0 0 -50 -50 a 100 50 0 0 0 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card46-07c", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 170 120 a 50 50 0 0 0 -50 -50 a 50 50 0 0 0 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 -50 -50" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    
    { "id": "card46-07d", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 l 100 100 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50 z" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card46-07e", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 0 1 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50 z" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card46-08e", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 0 1 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50 l 100 -100 M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [0, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [0, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card46-08e2", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 l 50 -50 M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 0 1 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50 l 100 -100" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [0, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [0, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card46-08f", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 0 1 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50 l 75 -75 l -25 -25 l -50 50 h 100 l -50 50 l -50 -50 h 100 l -25 -25 z" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [0, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [0, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    
    { "id": "z",  "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 10 10 h 80 v 80 h -80 Z" />`]]
    }
];

// var svgCards2_backup = [
//     { "id": "card46-1", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
//         "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`]]
//     },
//     { "id": "card46-2", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
//         "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
//         [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
//     },
//     { "id": "card46-3", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
//         "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
//         [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
//         [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
//     },

//     { "id": "card46-06a", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
//         "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
//         [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 0 1 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
//         [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
//     },
//     { "id": "card46-06b", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
//         "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
//         [1, 0, `<path d="M 170 120 a 100 50 0 0 0 -50 -50 a 100 50 0 0 0 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
//         [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
//     },
//     { "id": "card46-06c", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
//         "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
//         [1, 0, `<path d="M 170 120 a 50 50 0 0 0 -50 -50 a 50 50 0 0 0 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
//         [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
//     },

//     { "id": "card46-06d", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
//         "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
//         [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 l 100 100 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
//         [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
//     },
    
//     { "id": "card46-07b", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
//         "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
//         [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
//         [1, 0, `<path d="M 170 120 a 100 50 0 0 0 -50 -50 a 100 50 0 0 0 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
//         [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
//     },

//     { "id": "card46-07c", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
//         "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
//         [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
//         [1, 0, `<path d="M 170 120 a 50 50 0 0 0 -50 -50 a 50 50 0 0 0 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 -50 -50" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
//         [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
//     },
    
//     { "id": "card46-07d", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
//         "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
//         [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 l 100 100 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50 z" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
//         [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
//     },
//     { "id": "card46-07e", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
//         "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
//         [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 0 1 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50 z" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
//         [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
//     },
    
//     { "id": "z",  "dim": {"h": 100, "w": 100},
//         "code": [[1, 1, `<path d="M 10 10 h 80 v 80 h -80 Z" />`]]
//     }
// ];

var svgCards2 = [
    { "id": "card46-1", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`]]
    },
    { "id": "card46-2", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card46-3", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card46-06b", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 100 50 0 0 0 -50 -50 a 100 50 0 0 0 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card46-06c", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 0 -50 -50 a 50 50 0 0 0 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card46-06d", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 l 100 100 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    
    { "id": "card46-07b", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 170 120 a 100 50 0 0 0 -50 -50 a 100 50 0 0 0 -50 50 l 100 100 a 100 50 0 0 1 -50 50 a 100 50 0 0 1 -50 -50" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card46-07c", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 l -50 -50 l -50 50 l 100 100 l -50 50 l -50 -50" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 170 120 a 50 50 0 0 0 -50 -50 a 50 50 0 0 0 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 -50 -50" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    { "id": "card46-07d", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 l 100 100 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50 z" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card46-07e", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 0 1 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50 z" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card46-08f", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 1, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr nyCard" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 0, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 0 1 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50 l 75 -75 l -25 -25 l -50 50 h 100 l -50 50 l -50 -50 h 100 l -25 -25 z" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [0, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [0, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },

    { "id": "card-10", "dim": {"h": 340, "w": 240}, "svgclass": ["svg-bg20"], 
        "code": [[1, 0, `<path d="M 20 20 h 200 v 300 h -200 z" class="hexClr nyCard" style="fill: #222; stroke: transparent; stroke-width: 0;" />`], 
        [1, 1, `<path d="M 170 120 a 50 50 0 0 1 -50 -50 a 50 50 0 1 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 0 1 -50 50 l 100 100 a 50 50 0 0 1 -50 50 a 50 50 0 0 1 50 -50 a 50 50 0 1 0 -50 50 a 50 50 0 0 0 -50 -50 l 75 -75 l -25 -25 l -50 50 h 100 l -50 50 l -50 -50 h 100 l -25 -25 z" style="fill: #ff04; stroke: #ff0; stroke-width: 1;" />`],
        [1, 0, `<path d="M 40 40 h 160 v 260 h -160 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`], 
        [0, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`],
        [0, 0, `<path d="M 120 120 l 50 50 l -50 50 l -50 -50 z" style="fill: transparent; stroke: #ff0; stroke-width: 1;" />`]]
    },
    
    { "id": "z",  "dim": {"h": 100, "w": 100},
        "code": [[1, 1, `<path d="M 10 10 h 80 v 80 h -80 Z" />`]]
    }
];
var svgDesigns = [
    /* Lab Potion Design */
    { "id": "design-lab", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 60 20 L 60 50 c 0 10, 20 30 20 40 L 80 90 c -10 10, -50 10 -60 0 L 20 90 c 0 -10, 20 -30 20 -40 L 40 50 v -30 v 20 a 10 3 0 0 1 20 0 " style="stroke: #8888;" class="hexClr" />`], [1, "1", `<ellipse cx="50" cy="40" rx="10" ry="3" class="hexClr" style="stroke: #9c6;" />`], [1, "1", `<ellipse cx="50" cy="20" rx="10" ry="3" class="hexClr" style="fill: #0000; stroke: #8888;" />`]]
    },

    /* Card Design */
    { "id": "card-4x6", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 30 20 h 40 v 60 h -40 z" class="hexClr" />`]]
    },
    { "id": "card-5x7", "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 25 15 h 50 v 70 h -50 z" class="hexClr" />`], [1, "1", `<path d="M 20 20 h 60 v 60 h -60 z" style="fill: transparent; stroke: #000f; stroke-width: .5;" />`]]
    },

    
    { "id": "z",  "dim": {"h": 100, "w": 100},
        "code": [[1, "1", `<path d="M 10 10 h 80 v 80 h -80 Z" />`]]
    }
];

const reg_Tag = /<(\w)+?\s/ig
const reg_Tag_end = /(\/)?>/ig
const reg_Attr = /\b(\w)+?="(.)+?"(\s)?/ig
const reg_Attr_Name = /\b(\w)+?=/ig
const reg_Attr_Val = /"(.)+?"/ig
const reg_Punctuation = /(')|(<)|(>)|(\/)|(=)|(")/ig;

function rPunctuation(match, p1, p2, p3, offset, string){
    return `<span class="token punctuation">${match}</span>`;
}
function rTagName(match, p1, p2, p3, offset, string){
    let line = match.replaceAll(reg_Punctuation, rPunctuation);
    return `<span class="token tag">${line}</span>`;
}
function rAttrVal(match, p1, p2, p3, offset, string){
    let line = match.replaceAll(reg_Punctuation, rPunctuation);
    return `<span class="token attr-val">${line}</span>`;
}
function rAttrName(match, p1, p2, p3, offset, string){
    let line = match.replaceAll(reg_Punctuation, rPunctuation);
    return `<span class="token attr-name">${line}</span>`;
}
function rAttr(match, p1, p2, p3, offset, string){
    let attrName = match.match(/\b(\w)+?=/ig);
    let attrVal = match.match(/"(.)+?"/ig);
    attrName = attrName[0].replaceAll(reg_Attr_Name, rAttrName);
    attrVal = attrVal[0].replaceAll(reg_Attr_Val, rAttrVal);
    return `<span class="token attr">${attrName}${attrVal}</span>`;
}

function codeToSpan(line){
    let newLine = '';
    console.log(`└♦Line→ ${line}`);
    let line_Start = line.match(reg_Tag);
    let line_End = line.match(reg_Tag_end);
    line_Start = line_Start[0].replaceAll(reg_Tag, rTagName);
    line_End = line_End[0].replaceAll(reg_Tag_end, rPunctuation);

    let attrs = line.match(reg_Attr);
    attrs = attrs.map(attr => { return attr.replaceAll(reg_Attr, rAttr); });
    newLine = `${line_Start} ${attrs.join(' ')} ${line_End}`;
    return newLine;
}
function experimentCase(exp){
    console.log(`♦Element→ ${exp.id}`);
    let svgCard = '';
    let svg_viewBox = `viewBox="0 0 ${exp.dim.w} ${exp.dim.h}" `;
    let svgTag = `<svg ${svg_viewBox} >`;
    let codeBlock = [];
    codeBlock.push(codeToSpan(svgTag));
    exp["code"].forEach(codeLine => {
        if(codeLine[1] > 0) {
            let line = codeLine[2];
            codeBlock.push(codeToSpan(line));
        }
    })
    codeBlock.push(`<span class="token punctuation">&lt;/<span class="token tag">svg</span>&gt;</span></p>`);
    let codeLines = [];
    exp.code.forEach(x => {if(x[0]) codeLines.push(x[2])});
    if(exp.svgclass){ svg_viewBox += `class="${exp.svgclass}" `; }
    svgCard = `
    <div class="svgCard">
        <input type="checkbox" class="codeToggler" name="${exp.id}" id="${exp.id}">
        <label for="${exp.id}">${exp.id}</label>
        <div class="svgBlock">
            <svg ${svg_viewBox} height="${exp.dim.h}" width="${exp.dim.w}">
                ${codeLines.join('')}
            </svg>
        </div>
        <code class="svgCode">
            ${codeBlock.join('</p><p>')}
        </code>
    </div>`;
    return svgCard;
}
function performExperiments(svgExperiments){
    let elementList = [];
    svgExperiments.forEach(exp => {
        if(exp.id != "z"){
            elementList.push(experimentCase(exp));
        }
    });
    return elementList;
}
window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);

    // let svgBasicElements = document.getElementById('svgBasics');
    // let basics = performExperiments(svgBasics);
    // svgBasicElements.innerHTML += basics.join('');

    // let ExperimentList = document.getElementById('ExperimentList');
    // let experiments = performExperiments(svgExperiments);
    // ExperimentList.innerHTML += experiments.join('');

    let CardDesigns = document.getElementById('svgCards');
    // let card_designs = performExperiments(svgCards);
    let card_designs = performExperiments(svgCards2);
    CardDesigns.innerHTML += card_designs.join('');

    // let svgElemDesigns = document.getElementById('svgDesigns');
    // let designs = performExperiments(svgDesigns);
    // svgElemDesigns.innerHTML += designs.join('');
});