/* Log Style */
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