
// var display = document.getElementById('display');

var keyTips = {
    "ArrowDown":{"key":"↓", "tooltip": "Down"},
    "ArrowUp":{"key":"↑", "tooltip": "Up"},
    "ArrowLeft":{"key":"←", "tooltip": "Left"},
    "ArrowRight":{"key":"→", "tooltip": "Right"},
    "S":{"key":"S", "tooltip":"↓"},
    "W":{"key":"W", "tooltip":"↑"},
    "A":{"key":"A", "tooltip":"←"},
    "D":{"key":"D", "tooltip":"→"},
    "s":{"key":"s", "tooltip":"↓"},
    "w":{"key":"w", "tooltip":"↑"},
    "a":{"key":"a", "tooltip":"←"},
    "d":{"key":"d", "tooltip":"→"},
    " ":{"key":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "tooltip":"Space"},
    "Escape":{"key":"esc", "tooltip": 0}
};

var keyLog = [];

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }

    var display = document.getElementById('display');
    let msg = ['<span>You pressed: </span>','.'];
    let key = '';
    if(Object.keys(keyTips).includes(event.key)) {
        key = `<kbd data-key="${keyTips[event.key].key}" data-tooltip="${keyTips[event.key].tooltip}">${keyTips[event.key].key}</kbd>`
    } else {
        key = `<kbd class="kbd-disable">${event.key}</kbd>`
    }
    keyLog.push(key);
    let keyList = keyLog.join('');
    display.innerHTML = msg[0] + keyList;

    event.preventDefault();
}, true);

window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
});