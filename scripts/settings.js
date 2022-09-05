// const s = {
//     h: window.innerHeight,
//     w: window.innerWidth,

//     mouse: {
//         x: 0,
//         y: 0,
//         z: 0,
//         tracking: false
//     },

//     tile: {
//         real_h: 16,
//         real_w: 16,
//         h: 20,
//         w: 20,
//         margin: 16,
//         fill: 0
//     },
//     grid: {
//         h: window.innerHeight,
//         w: window.innerWidth,
//         cols: 15,
//         rows: 15,
//         margin: 16
//     },

//     canvas: {
//         h: window.innerHeight,
//         w: window.innerWidth,
//     },

//     s: false,
//     steps: false,
//     tags: false,
//     log: true,
//     lockKeys: false,
//     pause: false,
//     q: false
// }

/* Functions */
function q(){
    s.q = !s.q;
    sLog([`%cs%c.q:%c${s.q}`, logSty.s, logSty.c, logSty.bool]);
}
function openS(){
    if(!s.q){
        s.s = !s.s;
        sLog([`%cs%c.s:%c${s.s}`, logSty.s, logSty.c, logSty.bool]);
        let settingsBtn = document.getElementById('settings');
        if(settingsBtn){settingsBtn.dataset.paused = s.s;}
    }
}
function pause(){
    if(!s.q){
        s.pause = !s.pause;
        sLog([`%cs%c.pause:%c${s.pause}`, logSty.s, logSty.c, logSty.bool]);
        let pauseBtn = document.getElementById('pause');
        if(pauseBtn){pauseBtn.dataset.paused = s.pause;}
    }
}
function toggleTags(){
    if(!s.q){
        s.tags = !s.tags;
        sLog([`%cs%c.tags:%c${s.tags}`, logSty.s, logSty.c, logSty.bool]);
        let tagsBtn = document.getElementById('tags');
        if(tagsBtn){tagsBtn.dataset.active = s.tags;}

        // if(s.tags){
        //     DrawTags();
        // } else {
        //     ctx['canvas_tags'].clearRect(0,0,canvas['canvas_tags'].width, canvas['canvas_tags'].height);
        // }
    }
}
function toggleLog(){
    if(!s.q){
        s.log = !s.log;
        sLog([`%cs%c.log:%c${s.log}`, logSty.s, logSty.c, logSty.bool]);
    }
}

/* Events */
window.addEventListener("keydown", function (event) {
    if(event.key == 'Escape') {q();}
    if(s.q){console.log(`→ %ckey: %c${event.key}%c | keyCode: %c${event.keyCode}`, logSty.c, logSty.keyStyle, logSty.c, logSty.keyCodeStyle);}
    if(!s.q){
        if(event.key == ' ' || event.key == 'Enter') {pause();}
        if(event.key == '`') {openS();}
        // if(event.key == 'CapsLock') {lockKeys();}
        if(event.key == 'CapsLock') {s.lockKeys = !s.lockKeys;}
        if(!s.lockKeys){
            if(event.key == 'l' || event.key == 'L') {toggleLog();}
            // if(event.key == 'i' || event.key == 'I') {toggleTags();}
            // if(event.key == 'w' || event.key == 'W') {openW();}
        }
    }
});
window.addEventListener('mousemove', (ev) =>{
    if(s.mouse.tracking){
        if(!s.q && !s.pause){
            s.mouse.x = ev.clientX;
            s.mouse.y = ev.clientY;
        }
    }
});
// window.addEventListener('load', (ev) => {
//     console.log(`Welcome to my Lab!`);
// });


/* Log Style
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
    ██                         
    ██                         
    ██       ████████ ████████ 
    ██       ██    ██ ██    ██ 
    ██       ██    ██ ██    ██ 
    ████████ ████████ ████████ 
                            ██ 
                      ████████ 
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
*/
const logSty = {
    's': `background-color: #fff; color: #000; padding: .0625rem .125rem; border-radius: .25rem; font-weight: bold;`,
    'c': `color: #ccc;`,

    'keyCodeStyle': `background-color: #0369; padding: 2px 4px; border-radius: 4px; color: #39f;`,
    'keyStyle': `background: linear-gradient(180deg,#eee,#ddd); margin: 2px; padding: 4px 6px; border-radius: 4px; color: #111; font-size: .9rem; font-weight: 700; border-bottom: 2px solid #aaa; line-height: 1;`,

    'setting': `color: #fff;`,
    'bool': `background-color: #39f2; color: #39f; padding: .0625rem .25rem; border-radius: .25rem;`,
    
    'b': `background-color: #39f2; color: #39f; padding: .0625rem .25rem; border-radius: .25rem;`,
    'z': `color: #0000;`
}
/* sLog → settingsLog() */
function sLog(s_log = ['']){
    if(Array.isArray(s_log)){
        console.log(...s_log);
    }
    if(typeof s_log == 'string'){
        console.log(s_log);
    }
}
function safeLog(arr = ['']){
    if(!s.q){
        if(s.log){
            if(Array.isArray(arr)){
                console.log(...arr);
            }
            if(typeof arr == 'string'){
                console.log(arr);
            }
        }
    }
}
function safeLogList(msg = '___: ', arr = ['']){
    /* receives a list to log. */
    /* the first format will be normal, so 'logSty.c' */
    /* the next ones will be between 'logSty.b' and 'logSty.c' */
    if(!s.q){
        if(s.log){
            let arrString = arr.join('%c, %c');
            let toLog = [`%c→ ${msg}: %c${arrString}`];
            for (let i = 0; i < arr.length; i++) {
                toLog.push(logSty.c);
                toLog.push(logSty.b);
            }
            console.log(...toLog);
        }
    }
}
function safeLogList2(msg = '___: ', arr = [''], otherStyles = []){
    /* receives a list to log. */
    /* the first format will be normal, so 'logSty.c' */
    /* the next ones will be between 'logSty.b' and 'logSty.c' */
    if(!s.q){
        if(s.log){
            let arrString = arr.join('%c, %c');
            let toLog = [`%c→ ${msg}: %c${arrString}%c.`];
            toLog.push(logSty.c);
            if(otherStyles.length > 0){toLog.push(...otherStyles);}
            for (let i = 0; i < arr.length; i++) {
                toLog.push(logSty.b);
                toLog.push(logSty.c);
            }
            console.log(...toLog);
        }
    }
}