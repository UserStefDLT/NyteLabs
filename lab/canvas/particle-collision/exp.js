


// let x_arc = Math.cos((Math.abs(this.x)%300)/100 - 1.5) * 30;

for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
        let step = 2;
        let xi = x % step;
        let yi = y % step;
        let xj = Math.cos(xi/step);
        let yj = Math.sin(yi/step);

        console.log(`(${x},${y}) → (${xi},${yi}) \n → (${xj},${yj})`);
    }
}

let spd = 20;
let rad = 60 * Math.PI / 180;
let y = Math.sin(rad);
let x = Math.cos(rad);
console.log(`(y:${y},x:${x})`);
for (let i = 0; i < 20; i++) {
    let dis = i * spd + 5;
    let dy = Math.floor(y * dis);
    let dx = Math.floor(x * dis);
    // console.log(`(y:${y},x:${x}) * (d:${dis}) \n\t → d(y:${dy},x:${dx})`);
    
    let step = 20;
    let xi = dx % step;
    let yi = dy % step;
    // console.log(`(d:${dis}) \n\t → d(y:${dy},x:${dx}) \n\t → i(y:${yi},x:${xi})`);
    let xj = Math.cos(xi/step);
    let yj = Math.sin(yi/step);
    console.log(`(d:${dis}) \n\t → d(y:${dy},x:${dx}) \n\t → i(y:${yi},x:${xi}) \n\t → j(y:${yj},x:${xj})`);

    // console.log(`(${x},${y}) → (${xi},${yi}) \n → (${xj},${yj})`);
}

let rad = 60 * Math.PI / 180;
let y = Math.sin(rad);
let x = Math.cos(rad);
let spd = 5;
console.log(`(y:${y},x:${x})`);
for (let i = 1; i < 20; i++) {
    let dis = (i * 20);
    let dy = Math.floor(y * dis);
    let dx = Math.floor(x * dis);
    // console.log(`(y:${y},x:${x}) * (d:${dis}) \n\t → d(y:${dy},x:${dx})`);
    
    let step = 31.4;
    let xi = dx % step;
    let yi = dy % step;
    // console.log(`(d:${dis}) \n\t → d(y:${dy},x:${dx}) \n\t → i(y:${yi},x:${xi})`);
    let xj = Math.cos(xi/5 - 15);
    let yj = Math.sin(yi/5 - 15);
    console.log(`(d:${dis}) \n\t → d(y:${dy},x:${dx}) \n\t → i(y:${yi},x:${xi}) \n\t → j(y:${yj},x:${xj})`);

    // console.log(`(${x},${y}) → (${xi},${yi}) \n → (${xj},${yj})`);
}



let rad = 60 * Math.PI / 180;
let y = Math.sin(rad);
let x = Math.cos(rad);

console.log(`(y:${y},x:${x})`);
for (let i = 1; i < 50; i++) {
    let dis = (i * 1);
    let dy = Math.floor(y * dis);
    let y1 = Math.floor((dy % 31.4) * 100) / 100;
    let y2 = Math.floor((y1/5) * 100) / 100;
    let y3 = Math.floor(Math.cos(y2) * 100) / 100;
    console.log(`(d:${dis}) → d(y:${dy}) \n\t → 1(y:${y1}) → 2(y:${y2}) → 3(y:${y3})`);
}




/* ───────────────────────────── */
/* ───────────────────────────── */
/* ───────────────────────────── */
/* ───────────────────────────── */
/* ───────────────────────────── */

function xyToAngle(x, y){
    let angle = 0;
    if(y == 0){
        if(x > 0) {angle = 90;}
        if(x < 0) {angle = 270;}
    } else {
        if(y > 0) {
            angle += 180;
        }
        if(x != 0) {
            angle += Math.atan(x/y) * 180 / Math.PI;
        }
    }
    return angle;
}

xyToAngle(-1,-1);
// → 45


/*  Angles for (x,y) 
    location on the screen.

        270deg
         ↑
180deg ← • → 0deg
         ↓
         90deg
    
    y\x:    [-],    [0],    [+]
    [-]   +180     270      +0 
    [0]    180       0       0
    [+]   +180      90      +0

    if(x is negative) then +180.
    if(x is 0) then 
        if(y is positive) then 90.
        if(y is negative) then 270.
    if(y is 0) then +0.
    if(y is not 0) then `arctan(y/x) * 180 / 3.14`

    if(x < 0) a += 180;
    if(x == 0) {
        if(y > 0) return 90;
        if(y < 0) return 270;
    }
    if(y != 0) a = Math.atan(y/x) * 180 / Math.PI;
*/
function XYtoAngle_screen(x,y){
    let angle = 0;
    if(x == 0) {
        if(y > 0) {return 90;}
        if(y < 0) {return 270;}
    }
    if(x < 0) { angle += 180; }
    if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
    return angle;
}
XYtoAngle_screen(3,4);
// → 53.13010235415598
XYtoAngle_screen(4,4);
// → 45
XYtoAngle_screen(8.66,5);
// → 30.000727780827372
XYtoAngle_screen(5,8.66);
// → 59.99927221917263

/* ───────────────────────────── */

/*
    Angles for CSS hsl colors.

            0deg
             ↑
    270deg ← • → 90deg
             ↓
          180deg

    y\x:    [-],    [0],    [+]
    [-]     +0       0      +0 
    [0]    270       0      90
    [+]   +180     180    +180
    
    if(y == 0) {
        if(x > 0) return 90;
        if(x < 0) return 270;
    }
    if(y > 0) a += 180;
    if(x != 0) a = Math.atan(x/y) * 180 / Math.PI;

*/
function XYtoHue(x,y){
    let a = 90;
    if(x == 0) {
        if(y > 0) {return 90;}
        if(y < 0) {return 270;}
    }
    if(x < 0) { a += 180; }
    if(y != 0) { a += Math.atan(y/x) * 180 / Math.PI; }
    return a;
}
XYtoHue(4,4);
// → 135
XYtoHue(-4,4);
// → 225
XYtoHue(4,-4);
// → 45


// function XYtoUnitCircle(x,y){
//     let angle = 0;
//     if(x == 0) {
//         if(y > 0) {return 90;}
//         if(y < 0) {return 270;}
//     }
//     if(x < 0) { angle += 180; }
//     if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
//     return angle;
// }

/* ───────────────────────────── */
/* ───────────────────────────── */
/* ───────────────────────────── */
/* ───────────────────────────── */
/* ───────────────────────────── */


for (let i = 0; i < 12; i++) {
    let a = i * 30;
    console.log(a);
}

/*
if 30 and 330:
    (30 - 330 + 360) % 360
    → 60

if 15 and 300:
    (15 - 300 + 360) % 360
    → 75

if 60 and 120:
    (120 - 60 + 360) % 360
    → 60
*/

for (let i = 0; i < 12; i++) {
    let a = i * 30;
    for (let i2 = 0; i2 < 12; i2++) {
        let b = i2 * 30;
        // console.log(`a: ${a}, b: ${b}`);
        let rtag = '';
        let dis = (a - b + 360) % 360;
        let tDis = dis;
        if(dis > 180) {
            let revDis = 360 - dis;
            rtag = ` ↔ ${revDis}`;
            // dis = 360 - dis;
            tDis = revDis;
        }
        if(tDis < 95) {
            console.log(`(a: ${a} - b: ${b}) → ${dis}${rtag}`);
        }
    }
}


for (let i = 0; i < 12; i++) {
    let a = i * 30;
    for (let i2 = 0; i2 < 12; i2++) {
        let b = i2 * 30;
        
        let dis = Math.abs(a - b);
        if(dis > 180) {
            dis = 360 - dis;
        }
        if(dis < 90) {
            console.log(`(${a} - ${b}) → ${dis}`);
        }
    }
}


