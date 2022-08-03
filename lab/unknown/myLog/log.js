'use strict'


/*
─, │, ┌, ┐, └, ┘, ├, ┤, ┬, ┴, ┼, ═, ║, ╒, ╓, ╔, ╕, ╖, ╗, ╘, ╙, ╚, ╛, ╜, ╝, ╞, ╟, ╠, ╡, ╢, ╣, ╤, ╥, ╦, ╧, ╨, ╩, ╪, ╫, ╬,
✓, ✗, 
 ─────────────── 
    0+1→9
    │─└┴┘├┼┤┌┬┐
      ╙╨╜╟╫╢╓╥╖
      ╘╧╛╞╪╡╒╤╕
    ║═╚╩╝╠╬╣╔╦╗
 ─────────────── 

*/

var t0 = {
    'a': {
        'aa': 0,
        'ab': 1,
        'ac': 2
    },
    'b': {
        'ba': {
            'baa': 'a',
            'bab': 'b',
            'bac': 'c'
        },
        'bb': {
            'bba': [1,2,3],
            'bbb': ['a','b','c'],
            'bbc': true
        },
        'bc': {
            'bca': {
                'bca1': {
                    'bca1a': 'a',
                    'bca1b': 'b',
                    'bca1c': 'c'
                },
                'bca2': {
                    'bca21': [-9,-8,-7],
                    'bca22': ['x','y','z'],
                    'bca23': false
                },
            },
            'bcb': {},
            'bcc': {}
        }
    }
}

function PrintPath(ob){
    let rootStyle = 'background-color: #d2c057; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
    let pipeStyle = 'color: #d2c057;';
    let leafStyle = 'background-color: #55FF55; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
    let space = `├`;
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = `└`;}
        if(typeof ob[k] == 'object'){
            // let gp = `%c${space}─${k}:`;
            // console.group(gp, pipeStyle);
            let gp = `%c${space}─%c${k}:`;
            console.group(gp, pipeStyle, rootStyle);
            PrintPath(ob[k]);
            console.groupEnd(gp);
        } else {console.info(`%c${space}─%c${k}: ${ob[k]}`, pipeStyle, leafStyle);}
    }
}
function PrintObj(ob, name = 'ob'){
    let rootStyle = 'background-color: #d2c057; color: #000000; border-radius: .25rem; font-weight: bold; padding: .125rem .25rem;';
    let pipeStyle = 'color: #d2c057;';
    let leafStyle = 'background-color: #55FF55; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
    let path = `%c•[${name}]`;
    console.group(path, rootStyle);
    let space = '├';
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = '└';}
        if(typeof ob[k] == 'object'){
            let gp = `%c${space}─%c${k}:`;
            console.group(gp, pipeStyle, rootStyle);
            PrintPath(ob[k]);
            console.groupEnd(gp);
        } else {
            console.info(`%c${space}─%c${k}: ${ob[k]}`, pipeStyle, leafStyle);
        }
    }
    console.groupEnd(path);
}

PrintObj(t0, 't0')

/*
const timeline1 = 'New York 2012';
const timeline2 = 'Camp Lehigh 1970';
console.group(timeline1);
console.info('Mind');
console.info('Time');
console.group(timeline2);
console.info('Space');
console.info('Extra Pym Particles');
console.groupEnd(timeline2);
console.groupEnd(timeline1);
*/

// let style = 'background-color: #55FF55; color: #000000; font-size: 1em; border-radius: .25rem; font-weight: bold; padding: .125rem .25rem;';
// let style = 'background-color: #AA5500 #d2c057; color: #000000; font-size: 1em; border-radius: .25rem; font-weight: bold; padding: .125rem .25rem;';
// console.log('%c├──%cleaf', 'color: #d2c057;', 'background-color: #55FF55; color: #000000; font-size: 1em; border-radius: .25rem; font-weight: bold; padding: .125rem .25rem;');



/* ─, │, ┌, ┐, └, ┘, ├, ┤, ┬, ┴, ┼, ═, ║, ╒, ╓, ╔, ╕, ╖, ╗, ╘, ╙, ╚, ╛, ╜, ╝, ╞, ╟, ╠, ╡, ╢, ╣, ╤, ╥, ╦, ╧, ╨, ╩, ╪, ╫, ╬, */

var t0 = {
    'a': {
        'aa': 0,
        'ab': 1,
        'ac': 2
    },
    'b': {
        'ba': {
            'baa': 'a',
            'bab': 'b',
            'bac': 'c'
        },
        'bb': {
            'bba': [1,2,3],
            'bbb': ['a','b','c'],
            'bbc': true
        },
        'bc': {
            'bca': {
                'bca1': {
                    'bca1a': 'a',
                    'bca1b': 'b',
                    'bca1c': 'c'
                },
                'bca2': {
                    'bca21': [null,NaN,undefined],
                    'bca22': ['x','y','z'],
                    'bca23': false
                },
            },
            'bcb': {},
            'bcc': {}
        }
    }
}


function PrintPath1(ob, sp = 1){
    let path = '';
    let space = ' '.repeat(sp*2) + '├─';
    // let last_space = ' '.repeat(sp*2) + '└─';
    let keys = Object.keys(ob);
    // keys.forEach(k => {
    //     if(typeof ob[k] == 'object'){
    //         path += `${space}${k}:\n`
    //         path += PrintPath(ob[k], sp+1);
    //     } else {
    //         path += `${space}${k}: ${ob[k]}\n`
    //     }
    // });
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {
            // space = last_space;
            space = ' '.repeat(sp*2) + '└─';
        }
        if(typeof ob[k] == 'object'){
            path += `${space}${k}:\n`
            path += PrintPath(ob[k], sp+1);
        } else {
            path += `${space}${k}: ${ob[k]}\n`
        }
    }
    return path;
}
function PrintObj1(ob){
    let path = '';
    let space = '├─';
    let keys = Object.keys(ob);
    // keys.forEach(k => {
    //     if(typeof ob[k] == 'object'){
    //         path += `└─${k}:\n`
    //         path += PrintPath(ob[k]);
    //     } else {
    //         path += `└─${k}: ${ob[k]}\n`
    //     }
    // });
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {
            space = '└─';
        }
        if(typeof ob[k] == 'object'){
            path += `${space}${k}:\n`
            path += PrintPath(ob[k]);
        } else {
            path += `${space}${k}: ${ob[k]}\n`
        }
    }
    console.log(path);
}

function PrintPath2(ob, sp = 1){
    let path = '';
    let space = ' '.repeat(sp*2) + '├─';
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = ' '.repeat(sp*2) + '└─';}
        if(typeof ob[k] == 'object'){
            path += `${space}${k}:\n`;
            path += PrintPath(ob[k], sp+1);
        } else {path += `${space}${k}: ${ob[k]}\n`;}
    }
    return path;
}
function PrintObj2(ob){
    let path = '';
    let space = '├─';
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = '└─';}
        if(typeof ob[k] == 'object'){
            path += `${space}${k}:\n`;
            path += PrintPath(ob[k]);
        } else {path += `${space}${k}: ${ob[k]}\n`;}
    }
    console.log(path);
}


function PrintPath3(ob, sp = 1){
    let path = '';
    let space = `${sp} ├`;
    let space2 = `${sp} │`;
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = `${sp} └`; space2 = `${sp}  `;}
        if(typeof ob[k] == 'object'){
            path += `${space}─${k}:\n`;
            path += PrintPath(ob[k], space2);
        } else {path += `${space}─${k}: ${ob[k]}\n`;}
    }
    return path;
}
function PrintObj3(ob){
    let path = '';
    let space = '├';
    let space2 = '│';
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = '└'; space2 = ' ';}
        if(typeof ob[k] == 'object'){
            path += `${space}─${k}:\n`;
            path += PrintPath(ob[k], space2);
        } else {path += `${space}─${k}: ${ob[k]}\n`;}
    }
    console.log(path);
}

function PrintPath3b(ob, sp = ' '){
    let path = '';
    let space = `${sp} ├`;
    let space2 = `${sp} │`;
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = `${sp} └`; space2 = `${sp}  `;}
        if(typeof ob[k] == 'object'){
            path += `${space}─${k}:\n`;
            path += PrintPath(ob[k], space2);
        } else {path += `${space}─${k}: ${ob[k]}\n`;}
    }
    return path;
}
function PrintObj3b(ob, name = 'ob'){
    let path = `•[${name}]\n`;
    let space = '├';
    let space2 = '│';
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = '└'; space2 = ' ';}
        if(typeof ob[k] == 'object'){
            path += `${space}─${k}:\n`;
            path += PrintPath(ob[k], space2);
        } else {path += `${space}─${k}: ${ob[k]}\n`;}
    }
    console.log(path);
}


function PrintPath4(ob, sp = ''){
    let pipeStyle = 'color: #d2c057;';
    let leafStyle = 'background-color: #55FF55; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
    let space = `├`;
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = `└`;}
        if(typeof ob[k] == 'object'){
            let gp = `%c${space}─${k}:`;
            console.group(gp, pipeStyle);
            PrintPath(ob[k]);
            console.groupEnd(gp);
        } else {console.info(`%c${space}─%c${k}: ${ob[k]}`, pipeStyle, leafStyle);}
    }
}
function PrintObj4(ob, name = 'ob'){
    let rootStyle = 'background-color: #d2c057; color: #000000; border-radius: .25rem; font-weight: bold; padding: .125rem .25rem;';
    let pipeStyle = 'color: #d2c057;';
    let leafStyle = 'background-color: #55FF55; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
    let path = `%c•[${name}]`;
    console.group(path, rootStyle);
    let space = '├';
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = '└';}
        if(typeof ob[k] == 'object'){
            let gp = `%c${space}─${k}:`;
            console.group(gp, pipeStyle);
            PrintPath(ob[k]);
            console.groupEnd(gp);
        } else {
            console.info(`%c${space}─%c${k}: ${ob[k]}`, pipeStyle, leafStyle);
        }
    }
    console.groupEnd(path);
}

function PrintPath4b(ob){
    let rootStyle = 'background-color: #d2c057; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
    let pipeStyle = 'color: #d2c057;';
    let leafStyle = 'background-color: #55FF55; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
    let space = `├`;
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = `└`;}
        if(typeof ob[k] == 'object'){
            // let gp = `%c${space}─${k}:`;
            // console.group(gp, pipeStyle);
            let gp = `%c${space}─%c${k}:`;
            console.group(gp, pipeStyle, rootStyle);
            PrintPath(ob[k]);
            console.groupEnd(gp);
        } else {console.info(`%c${space}─%c${k}: ${ob[k]}`, pipeStyle, leafStyle);}
    }
}
function PrintObj4b(ob, name = 'ob'){
    let rootStyle = 'background-color: #d2c057; color: #000000; border-radius: .25rem; font-weight: bold; padding: .125rem .25rem;';
    let pipeStyle = 'color: #d2c057;';
    let leafStyle = 'background-color: #55FF55; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
    let path = `%c•[${name}]`;
    console.group(path, rootStyle);
    let space = '├';
    let keys = Object.keys(ob);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = '└';}
        if(typeof ob[k] == 'object'){
            let gp = `%c${space}─%c${k}:`;
            console.group(gp, pipeStyle, rootStyle);
            PrintPath(ob[k]);
            console.groupEnd(gp);
        } else {
            console.info(`%c${space}─%c${k}: ${ob[k]}`, pipeStyle, leafStyle);
        }
    }
    console.groupEnd(path);
}