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
    w: true,
    c: false,
    a: false,
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
}
let scale = 1;
const el = document.querySelector('#canvas');
el.onwheel = zoom;


const mouseLog = [];
const map = [];
const mapYX = {};
const stats = {
    w: 800,
    h: 700,
    q: 1500
}



// function

/* ───── Mouse Move ───── */
// var sub = document.querySelector('.xyLog');
window.addEventListener('mousemove', (ev) =>{
    if(mouseLog.length > 50) mouseLog.shift();
    mouseLog.push([ev.clientX,ev.clientY]);

    ctx.strokeStyle = `#000`;
    if(states.brushRainbow){
        let hue = (ev.clientX+ev.clientY)%360;
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
});


/* ───── Load ───── */
window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
});

/* ───── Keydown Select ───── */
var states = {
    brushRainbow: true
}
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    // console.log(event.key);
    // if(keyOptions.includes(event.key.toUpperCase())) keyDisplayToggle(event.key);
    switch (event.key) {
        // case "q":
        // case "Q":
        //     spellBook.lightning ? spellBook.lightning = false : spellBook.lightning = true;
        //     break;
        // case "w":
        // case "W":
        //     spellBook.rocket ? spellBook.rocket = false : spellBook.rocket = true;
        //     break;
        // case "e":
        // case "E":
        //     spellBook.huering ? spellBook.huering = false : spellBook.huering = true;
        //     break;
        case " ":
            states.brushRainbow ? states.brushRainbow = false : states.brushRainbow = true;
            break;
        case "Escape":
            ctx.fillStyle = '#000f';
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);


