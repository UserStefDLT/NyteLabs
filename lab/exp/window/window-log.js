'use strict';



function WindowLog_navigator(){
    let sBrowser;
    const sUsrAg = navigator.userAgent;
    
    // The order matters here, and this may report false positives for unlisted browsers.
    
    if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
      // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
      sBrowser = "Samsung Internet";
      // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
      sBrowser = "Opera";
      // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
      sBrowser = "Microsoft Internet Explorer";
      // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
      sBrowser = "Microsoft Edge (Legacy)";
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Edg") > -1) {
      sBrowser = "Microsoft Edge (Chromium)";
      // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64
    } else if (sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Google Chrome or Chromium";
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
      // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
      sBrowser = "unknown";
    }
    
    // alert(`You are using: ${sBrowser}`);
    return `You are using: <span class="res">${sBrowser}</span>`;
}

function WindowLog_devicePixelRatio(){
    // return window.devicePixelRatio;
    return `Your device's pixel ratio <code>'window.devicePixelRatio'</code> is: <span class="res">${window.devicePixelRatio}</span>`;
}

function WindowLog_LayoutViewport(){
    let wLog = '';

    let ih = `Height <code>'window.innerHeight'</code> is: <span class="res">${window.innerHeight}</span>`;
    let iw = `Width <code>'window.innerWidth'</code> is: <span class="res">${window.innerWidth}</span>`;

    let oh = `Height <code>'window.outerHeight'</code> is: <span class="res">${window.outerHeight}</span>`;
    let ow = `Width <code>'window.outerWidth'</code> is: <span class="res">${window.outerWidth}</span>`;

    wLog = `<p>${ih}</p>
<p>${iw}</p>
<p>${oh}</p>
<p>${ow}</p>`;

    return wLog;
}

function WindowLog_location(){
    // return location;
    return `URL <code>'location'</code> is: <span class="res">${location}</span>`;
}



// function WindowLog_deviceorientation(){
//     addEventListener('deviceorientation', (event) => { });

//     ondeviceorientation = (event) => { };

//     if (window.DeviceOrientationEvent) {
//         window.addEventListener("deviceorientation", function(event) {
//             // alpha: rotation around z-axis
//             const rotateDegrees = event.alpha;
//             // gamma: left to right
//             const leftToRight = event.gamma;
//             // beta: front back motion
//             const frontToBack = event.beta;
    
//             handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
//         }, true);
//     }
    
//     const handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
//         // do something amazing
//     };
//     return `URL <code>'location'</code> is: <span class="res">${location}</span>`;
// }

// function WindowLog_deviceorientation(){
//     // addEventListener('deviceorientation', (event) => {
//     //     if (window.DeviceOrientationEvent) {
//     //         window.addEventListener("deviceorientation", function(event) {
//     //             // alpha: rotation around z-axis
//     //             const rotateDegrees = event.alpha;
//     //             // gamma: left to right
//     //             const leftToRight = event.gamma;
//     //             // beta: front back motion
//     //             const frontToBack = event.beta;
        
//     //             handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
//     //         }, true);
//     //     }
//     // });
    
//     // const handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
//     //     // do something amazing
//     // };

//     // return `URL <code>'location'</code> is: <span class="res">${location}</span>`;
// }

/*
isTrusted: true
altKey: false
altitudeAngle: 1.5707963267948966
azimuthAngle: 0
bubbles: true
button: 0
buttons: 0
cancelBubble: false
cancelable: true
clientX: 555
clientY: 68
composed: true
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 1
eventPhase: 0
fromElement: null
height: 1
isPrimary: false
layerX: 537
layerY: -1
metaKey: false
movementX: 0
movementY: 0
offsetX: 538
offsetY: -1
pageX: 555
pageY: 68
path: (5) [main, body, html, document, Window]
pointerId: 1
pointerType: "mouse"
pressure: 0
relatedTarget: null
returnValue: true
screenX: 555
screenY: 139
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: main
tangentialPressure: 0
target: main
tiltX: 0
tiltY: 0
timeStamp: 780.0999999046326
toElement: null
twist: 0
type: "click"
view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
which: 1
width: 1
x: 555
y: 68


isTrusted
["altKey", "altitudeAngle", "azimuthAngle", "bubbles", "button", "buttons", "cancelBubble", "cancelable", "clientX", "clientY", "composed", "ctrlKey", "currentTarget", "defaultPrevented", "detail", "eventPhase", "fromElement", "height", "isPrimary", "layerX", "layerY", "metaKey", "movementX", "movementY", "offsetX", "offsetY", "pageX", "pageY", "path", "pointerId", "pointerType", "pressure", "relatedTarget", "returnValue", "screenX", "screenY", "shiftKey", "sourceCapabilities", "srcElement", "tangentialPressure", "target", "tiltX", "tiltY", "timeStamp", "toElement", "twist", "type", "view", "which", "width", "x", "y"]
*/
// var myEvent = 0;
// var eventKeys = [
//     "altKey", "altitudeAngle", "azimuthAngle", "bubbles", "button", "buttons", 
//     "cancelBubble", "cancelable", "clientX", "clientY", "composed", "ctrlKey", "currentTarget", 
//     "defaultPrevented", "detail", "eventPhase", "height", "isPrimary", 
//     "layerX", "layerY", "metaKey", "movementX", "movementY", "offsetX", "offsetY", 
//     "pageX", "pageY", "pointerId", "pointerType", "pressure", "relatedTarget", "returnValue", 
//     "screenX", "screenY", "shiftKey", "srcElement", "tangentialPressure", "target", 
//     "tiltX", "tiltY", "timeStamp", "twist", "type", "which", "width", "x", "y"];
// window.addEventListener('click', (ev) => {
//     console.log(ev);
//     // myEvent = ev;
//     PrintObj1(ev, 'ev', eventKeys);
// });



// var windowElements = {
//     'Window.navigator': 1,
//     'Window.devicePixelRatio': 1,
//     'Window.innerHeight': 1,
//     'Window.innerWidth': 1,
//     'Window.outerHeight': 1,
//     'Window.outerWidth': 1,
//     'Window.location': 1,
//     'Window: deviceorientation event': 0,
// }

function WindowLoad(){
    let win_nav = document.getElementById('win_nav');
    win_nav.innerHTML = WindowLog_navigator();

    let win_dpi = document.getElementById('win_dpi');
    win_dpi.innerHTML = WindowLog_devicePixelRatio();

    let win_dim = document.getElementById('win_dim');
    win_dim.innerHTML = WindowLog_LayoutViewport();

    let win_url = document.getElementById('win_url');
    win_url.innerHTML = WindowLog_location();

}
window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
    WindowLoad();
});


function PrintPath(ob, count = 0){
    if(count < 5){
        let rootStyle = 'background-color: #d2c057; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
        let pipeStyle = 'color: #d2c057;';
        let leafStyle = 'background-color: #55FF55; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
        let space = `├`;
        let keys = Object.keys(ob);
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            if(i == keys.length-1) {space = `└`;}
            if(ob[k] != null){
                if(typeof ob[k] == 'object'){
                    if(ob[k].length > 0){
                        // let gp = `%c${space}─${k}:`;
                        // console.group(gp, pipeStyle);
                        let gp = `%c${space}─%c${k}:`;
                        console.group(gp, pipeStyle, rootStyle);
                        PrintPath(ob[k], count+1);
                        console.groupEnd(gp);
                    } else {
                        console.info(`%c${space}─%c${k}: ${ob[k]}`, pipeStyle, leafStyle);
                    }
                } else {console.info(`%c${space}─%c${k}: ${ob[k]}`, pipeStyle, leafStyle);}
            }
        }
    }
}
function PrintObj(ob, name = 'ob', keyArr = []){
    let rootStyle = 'background-color: #d2c057; color: #000000; border-radius: .25rem; font-weight: bold; padding: .125rem .25rem;';
    let pipeStyle = 'color: #d2c057;';
    let leafStyle = 'background-color: #55FF55; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
    let path = `%c•[${name}]`;
    console.group(path, rootStyle);
    let space = '├';
    let keys = [];
    if(keyArr.length > 0){
        keys = keyArr;
    } else {
        keys = Object.keys(ob);
    }
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

function PrintObj1(ob, name = 'ob', keyArr = []){
    let rootStyle = 'background-color: #d2c057; color: #000000; border-radius: .25rem; font-weight: bold; padding: .125rem .25rem;';
    let pipeStyle = 'color: #d2c057;';
    let leafStyle = 'background-color: #55FF55; color: #000000; border-radius: .25rem; padding: .125rem .25rem;';
    let path = `%c•[${name}]`;
    console.group(path, rootStyle);
    let space = '├';
    let keys = [];
    if(keyArr.length > 0){
        keys = keyArr;
    } else {
        keys = Object.keys(ob);
    }
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if(i == keys.length-1) {space = '└';}
        if(ob[k] != null){
            if(typeof ob[k] == 'object'){
                let pm = '';
                if(Array.isArray(ob[k])){
                    pm = `(${ob[k].length})`;
                } else {
                    pm = `(${Object.keys(ob[k]).length})`;
                }
                console.info(`%c${space}─%c${k}: %c${pm}`, pipeStyle, rootStyle, leafStyle);
            } else {
                console.info(`%c${space}─%c${k}: ${ob[k]}`, pipeStyle, leafStyle);
            }
        }
    }
    console.groupEnd(path);
}