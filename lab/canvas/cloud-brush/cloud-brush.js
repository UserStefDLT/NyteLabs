const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particles = [];
const s = {
    x: window.innerWidth/2,
    y: window.innerHeight/2,
    z: 5
}
const brush = {
    active: true,
    w: false,
    ww: 16,
    width: 32,
    h: false,
    c: false,
    clr: 210,
    hue: 210,
    sat: 100,
    l: false,
    lum: 60,
    a: false,
    alp: 100,
    filter: false,
    erase: false,
    z: false
}
var states = {
    brushRainbow: true
}

/* ───── Scroll ───── */
function zoom(event) {
    console.log(`scale:${scale}`);
    console.log(`s.z:${s.z}`);
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    // s.z = (scale * 8) - 1;
    s.z = Math.floor((scale * 8) - 0);
    if(brush.w) {
        brush.ww += event.deltaY * -0.01;
        brush.ww = Math.min(Math.max(.125, brush.ww), 16);
        // brush.width = Math.floor(brush.ww * 2);
        brush.width = brush.ww * 2;
        console.log(`brush.width: ${brush.width}`);
    }
    if(brush.c) {
        brush.clr += event.deltaY * -0.01;
        brush.clr = Math.min(Math.max(.125, brush.clr), 36);
        if(brush.clr < 1) {
            brush.clr = 36;
        } else if(brush.clr == 36) {
            brush.clr = 0;
        }
        brush.hue = Math.floor((brush.clr * 10));
        console.log(`brush.hue: ${brush.hue}`);
    }
}
let scale = 1;
const el = document.querySelector('#canvas');
el.onwheel = zoom;

const mouseLog = [];
const touchLog = {
    0:[],
    1:[],
    2:[],
    3:[],
    4:[]
};



function paintBrush(x,y) {
    ctx.strokeStyle = `#000`;
    if(states.brushRainbow){
        let hue = (x+y)%360;
        ctx.strokeStyle = `hsla(${hue}, 100%, 60%, 1)`;
    }
    // ctx.lineWidth = (ev.clientX+ev.clientY)%s.z;
    ctx.lineWidth = s.z;
    ctx.beginPath();
    for (let i = 1; i < mouseLog.length; i++) {
        ctx.moveTo(mouseLog[0][0], mouseLog[0][1]);
        ctx.lineTo(mouseLog[i][0], mouseLog[i][1]);
    }
    ctx.lineTo(mouseLog[mouseLog.length-1][0], mouseLog[mouseLog.length-1][1]);
    ctx.stroke();
}
function paintBrush2(x,y) {
    if(brush.active){
        // ctx.strokeStyle = `#000`;
        ctx.strokeStyle = `#fff1`;
        ctx.strokeStyle = `#fff3`;
        let xy = x+y;
        let xy200 = xy%200;
        ctx.lineWidth = 12;
        if(brush.w){
            ctx.lineWidth = brush.width;
        }
        let lum = 60;
        if(brush.h){
            let hue = xy%360;
            ctx.strokeStyle = `hsla(${hue}, 100%, ${lum}%, 1)`;
        }
        if(brush.l){
            let hue = (xy%720)*.5;
            // let xy200 = xy%200
            if(xy200 > 100) xy200 = 200 - xy200;
            lum = ((xy200)*.5)+10;
            ctx.strokeStyle = `hsla(${hue}, 100%, ${lum}%, 1)`;
        }
        if(brush.c){
            // let xy = xy%200
            if(xy200 > 100) xy200 = 200 - xy200;
            lum = ((xy200)*.5)+10;
            ctx.strokeStyle = `hsla(${brush.hue}, 100%, ${lum}%, 1)`;
        }
    
        ctx.beginPath();
        for (let i = 1; i < mouseLog.length; i++) {
            // if(states.brushRainbow){
            //     let hue = (ev.clientX+ev.clientY)%360;
            //     // let sat = 40+i;
            //     let sat = 100;
            //     let lum = 10+i;
            //     // let alp = i;
            //     let alp = 20;
            //     ctx.strokeStyle = `hsla(${hue}, ${sat}%, ${lum}%, ${alp}%)`;
            // }
            if(i%5 == 0){
                ctx.moveTo(mouseLog[0][0], mouseLog[0][1]);
                ctx.lineTo(mouseLog[i][0], mouseLog[i][1]);
            }
            // ctx.moveTo(mouseLog[0][0], mouseLog[0][1]);
            // ctx.lineTo(mouseLog[i][0], mouseLog[i][1]);
        }
        ctx.lineTo(mouseLog[mouseLog.length-1][0], mouseLog[mouseLog.length-1][1]);
        ctx.stroke();
    }
}
function paintBrush3(x,y,fi) {
    // console.log(`paintBrush3(${x},${y},${fi})`);
    if(brush.active){
        let clr = `#fff1`;
        let xy = x+y;
        let xy200 = xy%200;
        if(xy200 > 100) xy200 = 200 - xy200;

        let hue = 210;
        let sat = 100;
        let lum = 60;
        let alp = 1;
        ctx.lineWidth = 12;
        
        if(brush.w){
            ctx.lineWidth = brush.width;
        }
        if(brush.h){
            hue = xy%360;
        }
        if(brush.l){
            hue = (xy%720)*.5;
            lum = ((xy200)*.5)+10;
        }
        if(brush.filter){
            sat = 50;
            hue = (xy%720)*.5;
            lum = ((xy200)*.25)+25;
        }
        if(brush.c){
            hue = brush.hue;
        }
        let lum_shadow = lum-20;
        ctx.filter = `blur(10px) drop-shadow(30px 30px 10px hsla(${hue}, ${sat}%, ${lum_shadow}%, ${alp-.5}))`;
        if(!brush.c && !brush.l && !brush.h){
            lum = 100;
            sat = 0;
            lum_shadow = 50;
            ctx.filter = `blur(10px) drop-shadow(15px 15px 15px hsla(${hue}, ${sat}%, ${lum_shadow}%, ${alp-.5}))`;
        }

        clr = `hsla(${hue}, ${sat}%, ${lum}%, ${alp})`;
        if(brush.erase){
            clr = `hsla(210, 0%, 5%, 100%)`;
            ctx.filter = `drop-shadow(0px 0px 0px hsla(210, 0%, 5%, 0))`;
        }
        ctx.strokeStyle = clr;        
        ctx.beginPath();
        for (let i = 1; i < touchLog[fi].length; i++) {
            // if(i%5 == 0){
            //     ctx.moveTo(touchLog[fi][0][0], touchLog[fi][0][1]);
            //     ctx.lineTo(touchLog[fi][i][0], touchLog[fi][i][1]);
            // }
            ctx.moveTo(touchLog[fi][0][0], touchLog[fi][0][1]);
            ctx.lineTo(touchLog[fi][i][0], touchLog[fi][i][1]);
        }
        ctx.lineTo(touchLog[fi][touchLog[fi].length-1][0], touchLog[fi][touchLog[fi].length-1][1]);
        ctx.stroke();
    }
}
function paintBrush4(x,y) {
    // console.log(`paintBrush3(${x},${y},${fi})`);
    if(brush.active){
        let clr = `#fff1`;
        let xy = x+y;
        let xy200 = xy%200;
        if(xy200 > 100) xy200 = 200 - xy200;

        let hue = 210;
        let sat = 100;
        let lum = 60;
        let alp = 1;
        ctx.lineWidth = 12;
        
        if(brush.w){
            ctx.lineWidth = brush.width;
        }
        if(brush.h){
            hue = xy%360;
        }
        if(brush.l){
            hue = (xy%720)*.5;
            lum = ((xy200)*.5)+10;
        }
        if(brush.filter){
            sat = 50;
            hue = (xy%720)*.5;
            lum = ((xy200)*.25)+25;
        }
        if(brush.c){
            hue = brush.hue;
        }
        let lum_shadow = lum-20;
        ctx.filter = `blur(10px) drop-shadow(30px 30px 10px hsla(${hue}, ${sat}%, ${lum_shadow}%, ${alp-.5}))`;
        if(!brush.c && !brush.l && !brush.h){
            lum = 100;
            sat = 0;
            lum_shadow = 50;
            ctx.filter = `blur(10px) drop-shadow(15px 15px 15px hsla(${hue}, ${sat}%, ${lum_shadow}%, ${alp-.5}))`;
        }

        clr = `hsla(${hue}, ${sat}%, ${lum}%, ${alp})`;
        if(brush.erase){
            clr = `hsla(210, 0%, 5%, 100%)`;
            ctx.filter = `drop-shadow(0px 0px 0px hsla(210, 0%, 5%, 0))`;
        }
        ctx.strokeStyle = clr;        
        ctx.beginPath();
        for (let i = 1; i < mouseLog.length; i++) {
            // if(i%5 == 0){
            //     ctx.moveTo(mouseLog[0][0], mouseLog[0][1]);
            //     ctx.lineTo(mouseLog[i][0], mouseLog[i][1]);
            // }
            ctx.moveTo(mouseLog[0][0], mouseLog[0][1]);
            ctx.lineTo(mouseLog[i][0], mouseLog[i][1]);
        }
        ctx.lineTo(mouseLog[mouseLog.length-1][0], mouseLog[mouseLog.length-1][1]);
        ctx.stroke();
    }
}



/* ───── Mouse Move ───── */
window.addEventListener('mousemove', (ev) =>{
    // if(mouseLog.length > 50) mouseLog.shift();
    if(mouseLog.length > 10) mouseLog.shift();
    mouseLog.push([ev.clientX,ev.clientY]);
    // paintBrush(ev.clientX,ev.clientY);
    // paintBrush2(ev.clientX,ev.clientY);
    paintBrush4(ev.clientX,ev.clientY);
});

/* ───── Touch Move ───── */
var ongoingTouches = [];
function handleStart(evt) {
    evt.preventDefault();
    var touches = evt.changedTouches;
    for (var i = 0; i < touches.length; i++) {
        ongoingTouches.push(copyTouch(touches[i]));
    }
}
function handleMove(evt) {
    evt.preventDefault();
    var touches = evt.changedTouches;
    // console.log(touches);
    for (var i = 0; i < touches.length; i++) {
        var idx = ongoingTouchIndexById(touches[i].identifier);
        if(!Object.keys(touchLog).includes(`${idx}`)) {
            console.log(` ♦•♦ index: ${idx+1} is out of limit.`);
            touchLog[idx] = [];
            console.log(` ♦└♦ adding new finger #${idx+1}, you monster!`);
        }
        // if(touchLog[idx].length > 50) touchLog[idx].shift();
        if(touchLog[idx].length > 10) touchLog[idx].shift();
        touchLog[idx].push([touches[i].pageX,touches[i].pageY]);
        paintBrush3(touches[i].pageX,touches[i].pageY,idx);
        if (idx >= 0) {
            ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
        } else {
            console.log("can't figure out which touch to continue");
        }
    }
}
function handleEnd(evt) {
    evt.preventDefault();
    var touches = evt.changedTouches;
    for (var i = 0; i < touches.length; i++) {
        var idx = ongoingTouchIndexById(touches[i].identifier);
        touchLog[idx] = [];
        if (idx >= 0) {
            ongoingTouches.splice(idx, 1);  // remove it; we're done
        } else {
            console.log("can't figure out which touch to end");
        }
    }
}
function handleCancel(evt) {
    evt.preventDefault();
    console.log("touchcancel.");
    var touches = evt.changedTouches;
    for (var i = 0; i < touches.length; i++) {
        var idx = ongoingTouchIndexById(touches[i].identifier);
        touchLog[idx] = [];
        ongoingTouches.splice(idx, 1);  // remove it; we're done
    }
}
function copyTouch({ identifier, pageX, pageY }) {
    return { identifier, pageX, pageY };
}
function ongoingTouchIndexById(idToFind) {
    for (var i = 0; i < ongoingTouches.length; i++) {
        var id = ongoingTouches[i].identifier;
        if (id == idToFind) {
            return i;
        }
    }
    return -1;    // not found
}
function startup() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
}

/* ───── Load ───── */
window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
    console.log(Object.keys(touchLog));
});
document.addEventListener("DOMContentLoaded", startup);

/* ───── Keydown Select ───── */
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    // console.log(event.key);
    // if(keyOptions.includes(event.key.toUpperCase())) keyDisplayToggle(event.key);
    Settings2(event.key)
    // switch (event.key) {
    //     case "e":
    //     case "E":
    //         brush.erase ? brush.erase = false : brush.erase = true;
    //         break;
    //     case "f":
    //     case "F":
    //         brush.filter ? brush.filter = false : brush.filter = true;
    //         canvas.classList.toggle('cloudy');
    //         break;
    //     case "w":
    //     case "W":
    //         brush.w ? brush.w = false : brush.w = true;
    //         break;
    //     case "l":
    //     case "L":
    //         brush.l ? brush.l = false : brush.l = true;
    //         break;
    //     case "c":
    //     case "C":
    //         brush.c ? brush.c = false : brush.c = true;
    //         break;
    //     case "h":
    //     case "H":
    //         brush.h ? brush.h = false : brush.h = true;
    //         break;
    //     case " ":
    //         states.brushRainbow ? states.brushRainbow = false : states.brushRainbow = true;
    //         brush.active ? brush.active = false : brush.active = true;
    //         break;
    //     case "Escape":
    //         clearCanvas();
    //         break;
    //     default:
    //         return; // Quit when this doesn't handle the key event.
    // }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);

function clearCanvas(){
    ctx.fillStyle = '#000f';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}


function turnOffSettings(){
    brush.erase = false;
    brush.w = false;
    brush.l = false;
    brush.c = false;
    brush.h = false;
}

function Settings2(k){
    switch (k) {
        case "e":
        case "E":
            brush.erase ? brush.erase = false : brush.erase = true;
            break;
        case "f":
        case "F":
            brush.filter ? brush.filter = false : brush.filter = true;
            // canvas.classList.toggle('cloudy');
            break;
        case "w":
        case "W":
            brush.w ? brush.w = false : brush.w = true;
            break;
        case "l":
        case "L":
            turnOffSettings();
            brush.l ? brush.l = false : brush.l = true;
            break;
        case "c":
        case "C":
            turnOffSettings();
            brush.c ? brush.c = false : brush.c = true;
            break;
        case "h":
        case "H":
            turnOffSettings();
            brush.h ? brush.h = false : brush.h = true;
            break;
        case " ":
            states.brushRainbow ? states.brushRainbow = false : states.brushRainbow = true;
            brush.active ? brush.active = false : brush.active = true;
            break;
        case "Escape":
            ClearCanvas();
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
}