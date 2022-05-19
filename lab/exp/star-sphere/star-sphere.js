function srlgRand(start = 0, range, list_size = 1, group_size = 1){
    let list = [];
    for(let i = 0; i < list_size; i++){
        let n = [];
        for(let j = 0; j < group_size; j++){
            n.push(Math.floor(Math.random() * range)+start);
        }
        list.push(n);
    }
    return list;
}

var starMap = [];
var nList = [];
var settings2 = {
    "x":[30,70],
    "y":[30,70],
    "deg":[0,90],
    "ang":1
};
function updateDOM_arc2(_list){
    let elems = document.querySelectorAll('.xi');
    Object.keys(_list).forEach(i => {
        let angle = _list[i][1];
        let rad = angle*Math.PI/180;
        let xr = 0;
        let yr = 0;
        if(angle == 90) { xr = 0; yr = 1; }
        else if(angle == 180) { xr = -1; yr = 0; }
        else {
            xr = Math.cos(rad);
            yr = Math.sin(rad);
        }
        let xz = _list[i][0] * xr;
        let yz = _list[i][0] * yr;

        /* reset angle */
        if(_list[i][1] > 90){
            _list[i][1] -= 1;
        } else if(_list[i][1] > 0) {
            _list[i][1] -= 120;
        } else {
            _list[i][1] = Math.floor(Math.random() * 15) + 185;
        }
        
        /* to pixels */
        let x = 100 + (xz/100);
        let y = 100 - (yz/100);
        elems[i].style = `transform: translateX(${x}vw) translateY(${y}vh);`;
    });
    // starMap.push(_list.join(';'));
    return _list;
}

function makeStars_deg2(_list){
    let starFielf = document.querySelector('.star-field');
    _list.forEach(xt => {
        // let rad = xt[1]*Math.PI/180;
        // let xr = 0; let yr = 0;
        // if(xt[1] == 90) { xr = 0; yr = 1; }
        // else if(xt[1] == 180) { xr = -1; yr = 0; }
        // else {
        //     xr = Math.floor(Math.cos(rad)*10)/10;
        //     yr = Math.floor(Math.sin(rad)*10)/10;
        // }
        // let xz = xt[0] * xr;
        // let yz = xt[0] * yr;
        // /* to pixels */
        // let x = 100 + Math.floor(xz/100);
        // let y = 100 - Math.floor(yz/100);

        let x = xt[0];
        let y = xt[1];
        console.log(`x: ${x}; y: ${y};`)

        let star = document.createElement('div');
        // star.classList.add('star', 'xi');
        star.classList.add('star2', 'xi');
        // star.style = `transform: translateX(${x}vh) translateY(${y}vw);`;
        // star.style = `--xdeg:${x}; --ydeg:${y};`;
        star.style = `transform: translateX(-50%) translateY(-50%) rotate3d(1,0,0,${x}deg) rotate3d(0,1,0,${y}deg) translateY(100px);`;
        starFielf.appendChild(star);
    });
}

function yToAngle(_list){
    _list.forEach(pair => {
        pair[1] = Math.floor(Math.random() * 90) + 95;
    });
}


window.addEventListener('load', (ev) => {
    console.log(`Welcome Adventurer!`);
    nList = srlgRand(0,360,50,2);
    console.log(nList);
    // yToAngle(nList);
    makeStars_deg2(nList);
    // constantUpdate2();
});

function constantUpdate2() {
    for(let i = 0; i<240; i++) {
        let t = i*500;
        setTimeout(() => {console.log(`time: ${i}`); updateDOM_arc2(nList);}, t);
    }
}