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
function buildGraph() {
    let mygrid = document.getElementById('mygrid');
    for (let i = 0; i < s.xw; i++) {
        let xc = document.createElement('div');
        xc.classList.add('bar-container');
        let xi = document.createElement('div');
        xi.classList.add('bar');
        xi.dataset.id = i;
        // xi.id = i;

        let hToAdd = Math.floor(Math.random() * 300);
        xi.style.height = `${hToAdd}px`;
        xi.dataset.h = hToAdd;

        xc.appendChild(xi);
        mygrid.appendChild(xc);
    }
}
function buildGraph2() {
    let mygrid = document.getElementById('mygrid');
    let myMarkers = document.getElementById('mid-markers');
    let markersW = s.grid_w - 6;
    myMarkers.style.width = `${markersW}px`;

    // /* Option 1: */
    // // let xcy = Math.cos(i)*100;
    // let rangeH = 100;
    // let offH = 150;

    // /* Option 2: */
    // // let xcy = i*i * .5;
    // let rangeH = 200;
    // let offH = 50;

    let rangeH = 200;
    let offH = 50;
    let hLim = (s.xw-1)*(s.xw-1);
    let rScale = hLim/(rangeH-.25);
    let arScale = 1/(hLim/(rangeH-.25));
    
    console.log(`hLim: ${hLim} | rScale: ${rScale} | (1/rScale): ${(1/rScale)}`);

    for (let i = 0; i < s.xw; i++) {
        let xc = document.createElement('div');
        xc.classList.add('bar-container');
        let xi = document.createElement('div');
        xi.classList.add('bar');
        xi.dataset.id = i;
        // xi.id = i;
        
        // let xcy = Math.floor(Math.random() * 100);
        // let xcy = Math.floor(Math.cos(i)*100);
        // let xcy = Math.floor(Math.sin(i)*100);
        // let xcy = Math.sin(i)*100;
        // let hToAdd = Math.floor(xcy) + 150;
        // let hToAdd = xcy + 150;
        // let hToAdd = (xcy%100) + 150;
        // let hToAdd = Math.floor(xcy%100) + 150;
        // let offH = 150;
        // let hToAdd = Math.floor(xcy%100) + offH;

        // /* Option 1: */
        // let xcy = Math.cos(i)*100;
        // let rangeH = 100;
        // let offH = 150;

        // /* Option 2: */
        // let xcy = i*i * .5;
        // let rangeH = 200;
        // let offH = 50;

        /* Option 3: */
        let xcy = i*i * rScale;


        let hToAdd = Math.round(xcy%rangeH) + offH;
        xi.style.height = `${hToAdd}px`;
        xi.dataset.h = hToAdd;

        xc.appendChild(xi);
        mygrid.appendChild(xc);
    }
}
const fs = {
    f_cos: {
        name: 'Cosine Wave',
        xcy: 'Math.cos(i)*100',
        rangeH: 100,
        offH: 150,
    },
    f_sin: {
        name: 'Sine Wave',
        xcy: 'Math.sin(i)*100',
        rangeH: 100,
        offH: 150,
    },
    f_exp: {
        name: 'Exponential Curve',
        hLim: '(s.xw-1)*(s.xw-1)',
        xcy: 'i*i * arScale',
        rangeH: 200,
        offH: 50,
    },
    f_sqr: {
        name: 'Squared Curve',
        hLim: 'Math.sqrt(s.xw-1)',
        xcy: 'Math.sqrt(i) * arScale',
        rangeH: 200,
        offH: 50,
    },
    f_exsq: {
        name: 'Exponential Squared Curve',
        hLim: 'Math.sqrt(s.xw-1)*(s.xw-1)',
        xcy: 'Math.sqrt(i)*i * arScale',
        rangeH: 200,
        offH: 50,
    },
    f_frc: {
        name: 'Fractional Curve',
        hLim: '1/(1)',
        xcy: '1/(i+1) * arScale',
        rangeH: 200,
        offH: 50,
    },
    f_lin: {
        name: 'Linear Progression',
        hLim: '(s.xw-1)',
        xcy: 'i * arScale',
        rangeH: 200,
        offH: 50,
    },
    f_z: {
        name: 'none',
        xcy: '100',
        rangeH: 200,
        offH: 50,
    }
}
function buildGraph4() {
    let main = document.getElementById('myMain');
    Object.keys(fs).forEach(key=>{
        let shelf = document.createElement('div');
        shelf.classList.add('shelf');
        let shelfTitle = document.createElement('div');
        shelfTitle.classList.add('shelf-title');
        shelfTitle.innerHTML = fs[key].name;
        console.log(`name = ${fs[key].name};`);
        let myGrid = document.createElement('div');
        myGrid.classList.add('grid-h');
        let myMarkers = document.createElement('div');
        myMarkers.classList.add('mid-line');
        let myMarkersW = s.grid_w - 6;
        myMarkers.style.width = `${myMarkersW}px`;
        myGrid.appendChild(myMarkers);
        
        shelf.appendChild(shelfTitle);
        shelf.appendChild(myGrid);
        main.appendChild(shelf);

        let rangeH = fs[key].rangeH;
        let offH = fs[key].offH;

        let hLim = 1;
        if(fs[key].hLim) {
            eval(`hLim = ${fs[key].hLim};`);
        }
        let rScale = hLim/(rangeH-.25);
        let arScale = 1/(hLim/(rangeH-.25));

        // let xcyEval = fs[key].xcy;
        // console.log(`xcy = ${xcyEval};`);

        for (let i = 0; i < s.xw; i++) {
            let xc = document.createElement('div');
            xc.classList.add('bar-container');
            let xi = document.createElement('div');
            xi.classList.add('bar');
            xi.dataset.id = i;
            // xi.id = i;

            // let xcy = 50;
            let xcy = 0;
            // eval(`xcy = ${xcyEval};`);
            eval(`xcy = ${fs[key].xcy};`);

            let hToAdd = Math.round(xcy%rangeH) + offH;
            xi.style.height = `${hToAdd}px`;
            xi.dataset.h = hToAdd;
            xc.appendChild(xi);
            myGrid.appendChild(xc);
        }
    });
}
const fs2 = {
    f_cos_sin: {
        name: 'Cosine & Sine Waves',
        xcy_2: 'Math.cos(i)*100',
        xcy_1: 'Math.sin(i)*100',
        rangeH: 100,
        offH: 150,
    },
    f_exp_sqr: {
        name: 'Exponential & Squared Curves',
        hLim_2: '(s.xw-1)*(s.xw-1)',
        xcy_2: 'i*i * arScale_2',
        hLim_1: 'Math.sqrt(s.xw-1)',
        xcy_1: 'Math.sqrt(i) * arScale_1',
        rangeH: 200,
        offH: 50,
    },
    f_lin: {
        name: 'Linear Progression',
        hLim_2: '(s.xw-1)',
        xcy_2: 'i * arScale_2',
        hLim_1: '(s.xw-1)',
        xcy_1: '100',
        rangeH: 200,
        offH: 50,
    }
}
function buildGraph8() {
    let main = document.getElementById('myMain');
    Object.keys(fs2).forEach(key=>{
        let shelf = document.createElement('div');
        shelf.classList.add('shelf');
        let shelfTitle = document.createElement('div');
        shelfTitle.classList.add('shelf-title');
        shelfTitle.innerHTML = fs2[key].name;
        console.log(`name = ${fs2[key].name};`);
        let myGrid = document.createElement('div');
        myGrid.classList.add('grid-h');
        let myMarkers = document.createElement('div');
        myMarkers.classList.add('mid-line');
        let myMarkersW = s.grid_w - 6;
        myMarkers.style.width = `${myMarkersW}px`;
        myGrid.appendChild(myMarkers);
        
        shelf.appendChild(shelfTitle);
        shelf.appendChild(myGrid);
        main.appendChild(shelf);

        let rangeH = fs2[key].rangeH;
        let offH = fs2[key].offH;

        let hLim_2 = 1;
        if(fs2[key].hLim_2) {eval(`hLim_2 = ${fs2[key].hLim_2};`);}
        let arScale_2 = 1/(hLim_2/(rangeH-.25));

        let hLim_1 = 1;
        if(fs2[key].hLim_1) {eval(`hLim_1 = ${fs2[key].hLim_1};`);}
        let arScale_1 = 1/(hLim_1/(rangeH-.25));

        for (let i = 0; i < s.xw; i++) {
            let xc = document.createElement('div');
            xc.classList.add('bar-container-2');
            xc.dataset.id = i;
            
            let xi_2 = document.createElement('div');
            xi_2.classList.add('bar-2');
            let xcy_2 = 0;
            eval(`xcy_2 = ${fs2[key].xcy_2};`);
            let hToAdd_2 = Math.round(xcy_2%rangeH) + offH;
            xi_2.style.height = `${hToAdd_2}px`;
            xi_2.dataset.h = hToAdd_2;
            xc.appendChild(xi_2);
            
            let xi_1 = document.createElement('div');
            xi_1.classList.add('bar-2');
            let xcy_1 = 0;
            eval(`xcy_1 = ${fs2[key].xcy_1};`);
            let hToAdd_1 = Math.round(xcy_1%rangeH) + offH;
            xi_1.style.height = `${hToAdd_1}px`;
            xi_1.dataset.h = hToAdd_1;
            xc.appendChild(xi_1);

            myGrid.appendChild(xc);
        }
    });
}


window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
    // perceptionRoll();
    // buildGraph();
    // buildGraph2();
    // buildGraph4();
    // buildGraph8();
});