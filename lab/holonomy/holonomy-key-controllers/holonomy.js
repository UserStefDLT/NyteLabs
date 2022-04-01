
// var display = document.getElementById('display');
var arrowKeys = {
    "ArrowDown":"↓",
    "ArrowUp":"↑",
    "ArrowLeft":"←",
    "ArrowRight":"→",
    " ":"Space",
    "Escape":"esc"
};
var keyLog = [];

var holonomyStatus = {
    "go":1,
    "sp":45,
    "x":0,
    "y":0,
    "z":0
}


function HolonomyRotate(x,y,z){
    var HolonomyCheck = document.getElementById('HolonomyCheck');
    if(holonomyStatus["go"]) {
        console.log(`holonomyStatus["x"]: ${holonomyStatus["x"]}`);
        console.log(`x: ${x}`);
        console.log(`typeof holonomyStatus["x"]: ${typeof holonomyStatus["x"]}`);
        console.log(`typeof x: ${typeof x}`);

        holonomyStatus["x"] = (1 * holonomyStatus["x"]) + (x * holonomyStatus['sp']);
        holonomyStatus["y"] = (1 * holonomyStatus["y"]) + (y * holonomyStatus['sp']);
        holonomyStatus["z"] = (1 * holonomyStatus["z"]) + (z * holonomyStatus['sp']);

        HolonomyCheck.style = `
        --holonomy-x: ${holonomyStatus["x"]}deg;
        --holonomy-y: ${holonomyStatus["y"]}deg;
        --holonomy-z: ${holonomyStatus["z"]}deg;
        `;
    }
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    var display = document.getElementById('display');
    // let msg = '';
    // let msg = ['<p>You pressed: ','</p>'];
    let msg = ['<span>You pressed: </span>','.'];
    let key = '';
    if(Object.keys(arrowKeys).includes(event.key)) {
        key = `<kbd>${arrowKeys[event.key]}</kbd>`
        // msg = `<p>You pressed: <kbd>${arrowKeys[event.key]}</kbd>. (a.k.a. ${event.key})</p>`
    } else {
        key = `<kbd class="kbd-disable">${event.key}</kbd>`
        // msg = `<p>You press <kbd>${event.key}</kbd> (${event.key}). Which does nothing.</p>`
    }
    // keyLog.push(key);
    // let keyList = keyLog.join('');
    let keyList = key;
    display.innerHTML = msg[0] + keyList;

    
    switch (event.key) {
        // case "Down": // IE/Edge specific value
        case "ArrowDown":
            HolonomyRotate(1,0,0);
            break;
        // case "Up": // IE/Edge specific value
        case "ArrowUp":
            // Do something for "up arrow" key press.
            HolonomyRotate(-1,0,0);
            break;
        // case "Left": // IE/Edge specific value
        case "ArrowLeft":
            // Do something for "left arrow" key press.
            HolonomyRotate(0,-1,0);
            break;
        // case "Right": // IE/Edge specific value
        case "ArrowRight":
            // Do something for "right arrow" key press.
            HolonomyRotate(0,1,0);
            break;
        case " ":
            // Do something for "enter" or "return" key press.
            holonomyStatus["go"] == 0 ? holonomyStatus["go"] = 1 : holonomyStatus["go"] = 0;
            break;
        // case "Esc": // IE/Edge specific value
        // case "Escape":
        //     // Do something for "esc" key press.
        //     break;
        default:
            // display.innerHTML = `You press ${keyBtn} (${event.key}). Which does nothing.`;
            
            return; // Quit when this doesn't handle the key event.
    }
    // display.innerHTML += msg;

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);


window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
});