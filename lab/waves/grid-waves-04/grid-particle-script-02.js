/* stats */
const s = {
    widthPerCol: 40,
    z: 0
};
function perceptionRoll(){
    let wh = window.innerHeight;
    let ww = window.innerWidth;
    console.log(`Height: ${wh}`);
    console.log(`Width: ${ww}`);

    let w90 = ww*.9;
    let xw = Math.round(w90/s.widthPerCol);
    console.log(`xw: ${xw}`);
    s['grid_w'] = xw*s.widthPerCol;

    s['xw'] = xw;
}

// const g = { h: 9, w: 15, z: 0 }
// const g = { h: 15, w: 15, magnitude: 1, state: false, z: 0 }
const g = {
    wish_h: 30,
    wish_w: 50,
    h: 20,
    w: 30,
    magnitude: 1,
    state: false,
    z: 0
}
const xyGrid = [];
const xyGridDirection = [];
const xyGridForces = [];
var timeMark = 0;
const xyGridTimeLine = [];
function StartGrid() {
    for (let y = 0; y < g.h; y++) {
        xyGrid.push([]);
        // xyGridDirection.push([]);
        xyGridForces.push([]);
        for (let x = 0; x < g.w; x++) {
            xyGrid[y].push(0);
            // xyGridDirection[y].push(0);
            xyGridForces[y].push(0);
        }
    }
    console.log(xyGrid);
}
function RecordForcesFrame(){
    let nforces = [];
    xyGridForces.forEach(row=>{
        let nrow = [];
        row.forEach(node_force=>{
            if(node_force != 0){
                nrow.push(node_force.toFixed(1));
            } else {
                // nrow.push(node_force.toFixed(0));
                nrow.push('');
            }
        });
        nforces.push(nrow);
    });
    // let gg = {};
    xyGridTimeLine[timeMark]["forces"] = nforces;
    // xyGridTimeLine.push(gg);
}
function RecordGridFrame(){
    let ngrid = [];
    xyGrid.forEach(row=>{
        let nrow = [];
        row.forEach(node_val=>{
            if(node_val != 0){
                nrow.push(node_val.toFixed(1));
            } else {
                // nrow.push(node_val.toFixed(0));
                nrow.push('');
            }
        });
        ngrid.push(nrow);
    });
    // let gg = {};
    xyGridTimeLine[timeMark]["grid"] = ngrid;
    // xyGridTimeLine.push(gg);
}
function BuildGrid() {
    let MyGridContainer = document.getElementById('MyGridContainer');
    let myGrid = document.createElement('div');
    myGrid.classList.add('grid-v');
    for (let y = 0; y < g.h; y++) {
        let xc_row = document.createElement('div');
        // xc_row.classList.add('row-container');
        xc_row.classList.add('row');
        // xc_row.dataset.row = y;
        for (let x = 0; x < g.w; x++) {
            let xi_node = document.createElement('div');
            xi_node.classList.add('node');
            // xi_node.dataset.row = y;
            // xi_node.dataset.col = x;
            xi_node.id = `xi-${y}-${x}`;
            xi_node.dataset.y = y;
            xi_node.dataset.x = x;
            xi_node.dataset.rod = 0;
            xi_node.dataset.active = false;
            xi_node.dataset.id = `${y}|${x}`;
            // xi_node.dataset.xy = `${x}${y}`;
            xi_node.addEventListener('click', (ev) => {
                ev.target.dataset.active = true;
                GridPush(ev.target.dataset.y,ev.target.dataset.x);
            });
            xi_node.addEventListener('mousemove', (ev) => {
                ev.target.dataset.active = true;
                GridSpark(ev.target.dataset.y,ev.target.dataset.x);
            });
            // xi_node.addEventListener('mouseenter', (ev) => {
            //     ev.target.dataset.active = true;
            //     GridSpark(ev.target.dataset.y,ev.target.dataset.x);
            // });

            xc_row.appendChild(xi_node);
        }
        myGrid.appendChild(xc_row);
    }
    MyGridContainer.appendChild(myGrid);
}

function AddingForces(a, b) {
    let force_a = a[0];
    let angle_a = a[1];
    let force_b = b[0];
    let angle_b = b[1];

    let cir_x_a = Math.cos(Math.PI*(angle_a/180)) * force_a;
    let cir_y_a = Math.sin(Math.PI*(angle_a/180)) * force_a;

    let cir_x_b = Math.cos(Math.PI*(angle_b/180)) * force_b;
    let cir_y_b = Math.sin(Math.PI*(angle_b/180)) * force_b;

    let cir_x_ab = cir_x_a + cir_x_b;
    let cir_y_ab = cir_y_a + cir_y_b;

    let force_ab = Math.sqrt(cir_x_ab*cir_x_ab + cir_y_ab*cir_y_ab);
    let angle_ab = Math.acos(((force_ab**2) + (cir_x_ab**2) - (cir_y_ab**2))/(2*force_ab*cir_x_ab));

    let nodeForce = [force_ab,angle_ab];
    return nodeForce;
    // A = arccos((b**2 + c**2 - a**2) / (2bc));
    /*

        C
       /|
      b a
     /  |
    A─c─B

    */

    /*
    let t1 = [10,0];
    let t2 = [10,90];
    let t3 = AddingForces(t1,t2);
    t3
    →(2) [14.142135623730951, 0.7853981633974484]
    
    */

}

const NodeArea_o = [
    [1,-1],[1,0],[1,1],
    [0,-1],[0,0],[0,1],
    [-1,-1],[-1,0],[-1,1]
];
const NodeAreaDeg_o = [
    315,0,45,
    270,0,90,
    225,180,135,
];
const NodeAreaScale_o = [
    .7,1,.7,
    1,0,1,
    .7,1,.7,
];
const NodeArea_rod = [
    [1,-1],[1,0],[0,0],
    [0,-1],[0,0],[0,1],
    [-1,-1],[-1,0],[0,0]
];
const NodeArea = [
    [0,0],[1,0],[1,1],
    [0,-1],[0,0],[0,1],
    [0,0],[-1,0],[-1,1]
];
const NodeAreaDeg = [
    315,0,45,
    270,0,90,
    225,180,135,
];
const NodeAreaScale_rod = [
    1,1,0,
    1,0,1,
    1,1,0,
];
const NodeAreaScale = [
    0,1,1,
    1,0,1,
    0,1,1,
];
function isStable(){
    // let gridIsStable = true;
    let gridErr = false;
    let yxErr = [];
    // g.state = false;
    for (let y = 0; y < g.h; y++) {
        for (let x = 0; x < g.w; x++) {
            if(xyGrid[y][x] != 0) {
                // gridIsStable = false;
                // g.state = true;
            }
            if(xyGrid[y][x] > 20) {
                gridErr = true;
                yxErr.push([y,x]);
            }
        }
    }
    // if(!gridIsStable && !gridErr) {
    //     setTimeout(() => {
    //         console.log(`time: ${timeMark}`); 
    //         UpdateGrid();
    //     }, 10);
    //     // UpdateGrid();
    // }
    if(!gridErr) {
        setTimeout(() => {
            // console.log(`time: ${timeMark}`); 
            UpdateGrid();
        }, 100);
        // UpdateGrid();
    }
    // if(gridErr) {
    //     console.log(`─`.repeat(12));
    //     let nodeErr = xyGrid[yxErr[0][0]][yxErr[0][1]];
    //     console.log(`♦Error!: Node(${yxErr[0][0]},${yxErr[0][1]}) reached critical measurment of ${nodeErr}!`);
    //     console.log(xyGridTimeLine);
    //     // g.state = false;
    // }
}
function UpdateNodes(){
    for (let y = 0; y < g.h; y++) {
        for (let x = 0; x < g.w; x++) {
            // console.log(`yx: ${y},${x}`);
            let xvf = xyGridForces[y][x];
            if(xvf != 0) {
                xyGrid[y][x] += xvf;
                xyGridForces[y][x] = 0;
                if(xyGrid[y][x] > 0){
                    let node = document.getElementById(`xi-${y}-${x}`);
                    if(node.dataset.active == "false"){
                        node.dataset.active = true;
                    }
                }
            }
        }
    }
}
function UpdateNodeForces(y,x){
    // console.log(`y:${y}, x:${x}`);
    let xv = xyGrid[y][x];

    let rod = (y%2 == 0);
    
    // let xu = (xv*xv)/10;
    // let xu = xv-(Math.sqrt(xv));
    let xu = 0;
    let xvn = 0;
    // if(xv>10) {
    //     // xu = xv-(xv*.25);
    //     // xu = (xv*xv)/10;
    //     xu = xv-(xv*.5);
    // } else {
    //     // xu = xv-1;
    //     xu = (xv*xv)/10;
    // }
    // xu = (xv*xv)/10;
    // xu = (xv*xv);
    // xu = xv-(xv*.2);
    // xu = xv-(xv*.1);
    // xvn = xv*.9;
    // xu = xv-(xv*.2);
    // xu = xv-(xv*.15);

    // xu = xv-(xv*.1);
    // xvn = xv*.9;

    // xu = xv-(xv*.3);
    // xvn = xv*.9;

    xu = xv-(xv*.2);
    xvn = xu*.8;

    // xu = xv-(xv*.15);
    // xvn = xv*.8;

    if(xu < .1) xu = 0;

    // xyGrid[y][x] = xu;
    xyGridForces[y][x] += xu - xyGrid[y][x];
    // console.log(`xyGrid[${y}][${x}]: ${xyGrid[y][x]}`);

    if(xu > 0) {
        // xvn = xv-1;
        // xvn = xv-.2;
        // xvn = xv;
        // xvn = xv*.9;
        // xvn = xv*.7;
        // xvn = xv*.8;
        // xvn = xv*.85;
        // console.log(`xvn: ${xvn}`);

        for (let yx = 0; yx < 9; yx++) {
            let nextY = y+NodeArea[yx][0];
            let nextX = x+NodeArea[yx][1];
            if(rod){
                nextY = y+NodeArea_rod[yx][0];
                nextX = x+NodeArea_rod[yx][1];
            }
            // nextY = y+NodeArea[yx][0];
            // nextX = x+NodeArea[yx][1];
            // console.log(`nextY:${nextY}, nextX:${nextX}`);
            // let inGrid = (nextY > -1 && nextY < g.h) && (nextX > -1 && nextX < g.w);
            if((nextY > -1 && nextY < g.h) && (nextX > -1 && nextX < g.w)) {
                // let isLower = xvn > xyGrid[nextY][nextX];
                if(xvn > xyGrid[nextY][nextX]){
                    let xvn2 = (xvn-xyGrid[nextY][nextX])/2;

                    let addyx = xvn2*NodeAreaScale[yx];
                    if(rod){
                        addyx = xvn2*NodeAreaScale_rod[yx];
                    }
                    // let addyx = xvn2;
                    // console.log(`addyx: ${addyx}`);
                    xyGridForces[nextY][nextX] += addyx;
                    if(xyGridForces[nextY][nextX] > 9) {xyGridForces[nextY][nextX] = 9;}
                }
            }
        }
    }
}
function UpdateGrid() {
    let updateList = [];
    for (let y = 0; y < g.h; y++) {
        for (let x = 0; x < g.w; x++) {
            if(xyGrid[y][x]>0) {
                // console.log(`y:${y}, x:${x}`);
                updateList.push([y,x]);
            }
        }
    }
    updateList.forEach(node => {
        UpdateNodeForces(node[0],node[1]);
    });

    // xyGridTimeLine.push({});
    // RecordForcesFrame();

    UpdateNodes();
    UpdateDisplay();

    // RecordGridFrame();
    // timeMark++;

    isStable();
}
function UpdateDisplay1() {
    let nodeList = document.querySelectorAll('.node');
    nodeList.forEach(node =>{
        let nid = node.dataset.id.split('|');
        let val = xyGrid[nid[0]][nid[1]].toFixed(1);
        node.dataset.val = val;
        node.style = `--val: ${val};`;
    });
}
function UpdateDisplay() {
    let nodeList = document.querySelectorAll(`[data-active="true"]`);
    nodeList.forEach(node =>{
        let y = node.dataset.y;
        let x = node.dataset.x;
        let val = xyGrid[y][x].toFixed(1);
        node.dataset.val = val;
        node.style = `--val: ${val};`;
        if(xyGrid[y][x] == 0){node.dataset.active = false;}
    });
}

function GridPush(y,x) {
    // let node = ev.target;
    // let nid = node.dataset.id.split('|');
    if(xyGrid[y][x] == 0) {
        xyGrid[y][x] = g.magnitude;
    } else {
        let toLimit = g.magnitude-xyGrid[y][x];
        let adding = toLimit*.7;
        xyGrid[y][x] += adding;
    }
    // console.log(xyGrid);
    // UpdateGrid();
    // if(!g.state) {
    //     UpdateGrid();
    // }
}
function GridSpark(y,x) {
    let adding = (g.magnitude-xyGrid[y][x])*.7;
    xyGrid[y][x] += adding;
}

window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
    StartGrid();
    BuildGrid();
    UpdateGrid();
});


