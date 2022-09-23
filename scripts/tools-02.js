'use strict'
/*
    • [tools.js]
    └─> functions I might use in different projects.
    └─> code that I still need to remember.

    types of functions.
    - calculating formulas.
    - building layout.

*/

/* ─── */
/* ─────────────── */

/**
 * Documentation
 * @param {number} h height of the grid, aligned with the 'y' axis.
 * @param {number} w width of the grid, aligned with the 'x' axis.
 * @returns a two dimensional array filled with the number 0.
 */
function MakeGridZero(h,w){
    let grid = [];
    for(let y = 0; y < h; y++) {
        grid.push([]);
        for(let x = 0; x < w; x++) {
            grid[y].push([]);
            grid[y][x] = 0;
        }
    }
    return grid;
}

/**
 * Documentation
 * @param {number} h height of the grid, aligned with the 'y' axis.
 * @param {number} w width of the grid, aligned with the 'x' axis.
 * @param {*} val what ever value is wanted on each cell of the grid.
 * @returns a two dimensional array filled with the value provided.
 */
function MakeGridOf(h,w,val = 0){
    let grid = [];
    for(let y = 0; y < h; y++) {
        grid.push([]);
        for(let x = 0; x < w; x++) {
            grid[y].push([]);
            grid[y][x] = val;
        }
    }
    return grid;
}

/**
 * Documentation
 * @param {number} sideA adjecent side of the triangle.
 * @param {number} sideB opposite side of the triangle.
 * @returns the hypotenuse of the triangle.
 */
function getH(sideA, sideB){
    return Math.sqrt(sideA**2 + sideB**2);
}



function AngleToXY(angle){
    angle = angle%360;
    let rad = angle * Math.PI / 180;
    let xy = {"x":0,"y":0};
    if(angle == 180) {xy.y = 0;} else {xy.y = Math.sin(rad);}
    if(angle == 90 || angle == 270) {xy.x = 0;} else {xy.x = Math.cos(rad);}
    return xy;
}
function XYtoAngle(x,y){
    // x = Math.round(x*1000);
    // y = Math.round(y*1000);
    let angle = 0;
    if(x == 0) {
        if(y > 0) {return 90;}
        if(y < 0) {return 270;}
    }
    if(x < 0) { angle += 180; }
    if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
    return angle;
}
function XYtoCSSAngle(x,y){
    let angle = 90;
    if(x == 0){
        if(y > 0) {return 180;}
        if(y < 0) {return 0;}
    }
    if(x > 0) { angle += 180; }
    if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
    return angle;
}



function BuildGrid(w=3,h=3){
    // grid_settings = {"w": w, "h": h};
    grid_settings["w"] = w;
    grid_settings["h"] = h;

    // let container = document.createElement('div');
    // container.classList.add('grid-container');

    let grid = document.createElement('div');
    grid.classList.add('grid');
    grid.id="GridMap";
    grid.style = `--tiles-per-col: ${h}; --tiles-per-row: ${w};`;

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            let tile = document.createElement('div');
            tile.classList.add('tile');
            tile.dataset.yx = `${y}-${x}`;
            tile.dataset.y = `${y}`;
            tile.dataset.x = `${x}`;
            tile.dataset.tile = `wn`;

            // tile.addEventListener('click', OpenTileChoices);
            grid.appendChild(tile);
        }
    }

    let displayElem = document.getElementById('display');
    displayElem.appendChild(grid);
}

/* ─────────────── */
/* ─── */





/* ─────────────── */

/*
    In a web page, by default,
    the location is determined by x and y axis.
    the top left corner is at (0,0)
    the y coordinate increases vertically
    the x coordinate increases horizontally.

    By default:
    y\x:    [-],    [0],    [+]
    [-]    225      270      315 
    [0]    180       •       0
    [+]    135      90      45

    To CSS Hues:
    y\x:    [-],    [0],    [+]
    [-]    315       0      45 
    [0]    270       •      90
    [+]    225     180     135
    

    By default:
    y\x:    [-],    [0],    [+]
    [-]   +180     270      +0 
    [0]    180       0       0
    [+]   +180      90      +0

    To CSS Hues
    y\x:    [-],    [0],    [+]
    [-]     +0       0      +0 
    [0]    270       0      90
    [+]   +180     180    +180
    

*/

/* ─────────────── */

function AngleToXY(angle){
    let rad = angle * Math.PI / 180;
    let xy = {"x":"0","y":"0"};
    angle %= 360;
    switch(angle){
        case 0:
            xy.x = 1; xy.y = 0;
            break;
        case 90:
            xy.x = 0; xy.y = 1;
            break;
        case 180:
            xy.x = -1; xy.y = 0;
            break;
        case 270:
            xy.x = 0; xy.y = -1;
            break;
        default:
            xy.x = Math.cos(rad);
            xy.y = Math.sin(rad);
    }
    return xy;
}
function a2xy(a){
    let rad = a * Math.PI / 180;
    let xy = {"x":0,"y":0};
    if(angle%180 != 0) {xy.y = Math.sin(rad);}
    if((angle+90)%180 != 0) {xy.x = Math.cos(rad);}
    return xy;
}
function xy2a(x,y){
    let a = 0;
    if(x == 0) {
        if(y > 0) {return a + 90;}
        if(y < 0) {return a + 270;}
    }
    if(x < 0) { a += 180; }
    if(y != 0) { a += Math.atan(y/x) * 180 / Math.PI; }
    return a;
}

/*
Triangle(3,4,5)
→Angles: 36.87, 53.13, 90.

|\
| \
4  5
|   \
|_3__\

    A
    ⋮⋱
    ⋮  ⋱
    ⋮    ⋱
    4     5
    ⋮        ⋱
    ⋮          ⋱
    ⋮_____3______⋱
    C             B


⊾A = Math.atan(3/4); //→ 0.6435011087932844
⊾B = Math.atan(4/3); //→ 0.9272952180016122

⊾A = Math.atan(3/4) * 180 / Math.PI; //→ 36.86989764584402
⊾B = Math.atan(4/3) * 180 / Math.PI; //→ 53.13010235415598
*/

/*
    ⋮, ⋯, ⋰, ⋱, 

                 B
                ⋰⋮
              ⋰  ⋮
            ⋰    ⋮
          5      4
        ⋰        ⋮
      ⋰          ⋮
    ⋰_____3______⋮
   A             C

x: 3
y: 4
h: 5

⊾A = Math.atan(4/3) * 180 / Math.PI; 
    //→ 53.13010235415598
⊾B = Math.atan(3/4) * 180 / Math.PI; 
    //→ 36.86989764584402

let angle = Math.atan(y/x) * 180 / Math.PI;
*/


/* ─Basic Code to Remember─ */

// setTimeout(() => {
//     // delayed code goes here.
// }, 1500);

