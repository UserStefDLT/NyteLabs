/*





0: `x + y`,
1: `x * y`,
2: `2x * 2y`,
3: `xx + yy`,
4: `xx * yy`,
5: `2xx + 2yy`,
6: `2xx * 2yy`,
7: `x2x2 + y2y2`,
8: `x2x2 * y2y2`,
9: `2xx + 2yy + x2x2 + y2y2`,
10: `2xx + 2yy + xx + yy`,
11: `hh + h2`,
12: `hh * h2`,
13: `hh + hh`,
14: `100 * h / ( hh / 4 + 1)`,
15: `hh`,
16: `hh + h4`,
17: `h * h4`,
18: `hh * h4`,
19: `x * 15`,
20: `x2 * 5`,
21: `xx * 5`,
22: `(x * 15 ) + h4`,
23: `(xx * 10 ) + h4`,
24: `(x * .5) * h4`,
25: `(y * .5) * (x * .5) * h4`,
26: `(xx * .5) * h4`,
27: `(x - 5) * (y + 5))`,
28: `(x * hh) * h4`,
29: ` (x * 15) + (y * 5) `,
30: `(x * -2) * (y * 2)`,
31: `(x + hh) * h4`,
32: `( (x * 15) + (y * 5) ) * (h / 1)`,

--x: calc(var(--lights-x) + 1 - var(--i));
--y: calc(var(--lights-y) + 1 - var(--j));

--scale: 2;
--y2: calc(var(--y) * var(--scale));
--x2: calc(var(--x) * var(--scale));

--yy: calc(var(--y) * var(--y));
--xx: calc(var(--x) * var(--x));

--yy2: calc(var(--y) * var(--y2));
--xx2: calc(var(--x) * var(--x2));

--y2y2: calc(var(--y2) * var(--y2));
--x2x2: calc(var(--x2) * var(--x2));

--h: calc(var(--y) + var(--x));
--hh: calc(var(--yy) + var(--xx));
--h2: calc(var(--y2) * var(--x2));

--h100hh4: calc(100 * var(--h) / ( var(--hh) / 4 + 1) );


h = x + y
xx = x * x
yy = y * y
hh = xx + yy

h2 = y2 * x2

x2 = x * 2;
y2 = y * 2;
xx2 = x * x2 = x * x * 2;
yy2 = y * y2 = y * y * 2;
x2x2 = x2 * x2 = x * 2 * x * 2 = x * x * 4;
x2x2 = x * 2 * x * 2;
x2x2 = x * x * 4;
x2x2 = x^2 * 4;
y2y2 = y2 * y2 = y * 2 * y * 2;


h = x + y
xx = x * x
yy = y * y
hh = xx + yy

x2x2 = x^2 * 4;
y2y2 = y^2 * 4;

hh = xx + yy = x * x + y * y;
h2 = y2 * x2 = y * 2 * x * 2;




─List─

x + y
x * y

x2 * y2 = x * y * 2
xx + yy = x * x + y * y
xx * yy = x * x * y * y

xx2 + yy2 = 
xx2 * yy2 = 
x2x2 + y2y2
x2x2 * y2y2
xx2 + yy2 + x2x2 + y2y2
xx2 + yy2 + xx + yy


hh + h2 = 
hh * h2 = 
hh + hh = 
100 * h / ( hh / 4 + 1)
hh
hh + h4
h * h4
hh * h4
x * 15
x2 * 5
xx * 5
(x * 15 ) + h4
(xx * 10 ) + h4
(x * .5) * h4
(y * .5) * (x * .5) * h4
(xx * .5) * h4
(x - 5) * (y + 5))
(x * hh) * h4
 (x * 15) + (y * 5) 
(x * -2) * (y * 2)
(x + hh) * h4
( (x * 15) + (y * 5) ) * (h / 1)


*/

/*
.grid[data-tile="0"] .tile {--hue: calc(var(--x) + var(--y));}
.grid[data-tile="1"] .tile {--hue: calc(var(--x) * var(--y));}
.grid[data-tile="2"] .tile {--hue: calc(var(--x) * var(--y) * 2);}
.grid[data-tile="3"] .tile {--hue: calc(var(--xx) + var(--yy));}
.grid[data-tile="4"] .tile {--hue: calc(var(--xx) * var(--yy));}
.grid[data-tile="5"] .tile {--hue: calc(var(--xx2) + var(--yy2));}
.grid[data-tile="6"] .tile {--hue: calc(var(--xx2) * var(--yy2));}
.grid[data-tile="7"] .tile {--hue: calc(var(--x2x2) + var(--y2y2));}
.grid[data-tile="8"] .tile {--hue: calc(var(--x2x2) * var(--y2y2));}
.grid[data-tile="9"] .tile {--hue: calc(var(--xx2) + var(--yy2) + var(--x2x2) + var(--y2y2));}
.grid[data-tile="10"] .tile {--hue: calc(var(--xx2) + var(--yy2) + var(--xx) + var(--yy));}
.grid[data-tile="11"] .tile {--hue: calc(var(--hh) + var(--h2));}
.grid[data-tile="12"] .tile {--hue: calc(var(--hh) * var(--h2));}
.grid[data-tile="13"] .tile {--hue: calc(var(--hh) + var(--hh));}
.grid[data-tile="14"] .tile {--hue: calc(100 * var(--h) / ( var(--hh) / 4 + 1) );}
.grid[data-tile="15"] .tile {--hue: calc(var(--hh));}
.grid[data-tile="16"] .tile {--hue: calc(var(--hh) + var(--h100hh4));}
.grid[data-tile="17"] .tile {--hue: calc(var(--h) * var(--h100hh4));}
.grid[data-tile="18"] .tile {--hue: calc(var(--hh) * var(--h100hh4));}
.grid[data-tile="19"] .tile {--hue: calc(var(--x) * 15);}
.grid[data-tile="20"] .tile {--hue: calc(var(--x2) * 5);}
.grid[data-tile="21"] .tile {--hue: calc(var(--xx) * 5);}
.grid[data-tile="22"] .tile {--hue: calc((var(--x) * 15 ) + var(--h100hh4));}
.grid[data-tile="23"] .tile {--hue: calc((var(--xx) * 10 ) + var(--h100hh4));}
.grid[data-tile="24"] .tile {--hue: calc((var(--x) * .5) * var(--h100hh4));}
.grid[data-tile="25"] .tile {--hue: calc((var(--y) * .5) * (var(--x) * .5) * var(--h100hh4));}
.grid[data-tile="26"] .tile {--hue: calc((var(--xx) * .5) * var(--h100hh4));}
.grid[data-tile="27"] .tile {--hue: calc((var(--x) - 5) * (var(--y) + 5)); }
.grid[data-tile="28"] .tile {--hue: calc((var(--x) * var(--hh)) * var(--h100hh4));}
.grid[data-tile="29"] .tile {--hue: calc( (var(--x) * 15) + (var(--y) * 5) );}
.grid[data-tile="30"] .tile {--hue: calc((var(--x) * -2) * (var(--y) * 2));}
.grid[data-tile="31"] .tile {--hue: calc((var(--x) + var(--hh)) * var(--h100hh4));}
.grid[data-tile="32"] .tile {--hue: calc( ( (var(--x) * 15) + (var(--y) * 5) ) * (var(--h) / 1) );}


.grid[data-tile="0"] .tile {--hue: ;}
.grid[data-tile="1"] .tile {--hue: ;}
.grid[data-tile="2"] .tile {--hue: ;}
.grid[data-tile="3"] .tile {--hue: ;}
.grid[data-tile="4"] .tile {--hue: ;}
.grid[data-tile="5"] .tile {--hue: ;}
.grid[data-tile="6"] .tile {--hue: ;}
.grid[data-tile="7"] .tile {--hue: ;}
.grid[data-tile="8"] .tile {--hue: ;}
.grid[data-tile="9"] .tile {--hue: ;}
.grid[data-tile="10"] .tile {--hue: ;}
.grid[data-tile="11"] .tile {--hue: ;}
.grid[data-tile="12"] .tile {--hue: ;}
.grid[data-tile="13"] .tile {--hue: ;}
.grid[data-tile="14"] .tile {--hue: ;}
.grid[data-tile="15"] .tile {--hue: ;}
.grid[data-tile="16"] .tile {--hue: ;}
.grid[data-tile="17"] .tile {--hue: ;}
.grid[data-tile="18"] .tile {--hue: ;}
.grid[data-tile="19"] .tile {--hue: ;}
.grid[data-tile="20"] .tile {--hue: ;}
.grid[data-tile="21"] .tile {--hue: ;}
.grid[data-tile="22"] .tile {--hue: ;}
.grid[data-tile="23"] .tile {--hue: ;}
.grid[data-tile="24"] .tile {--hue: ;}
.grid[data-tile="25"] .tile {--hue: ;}
.grid[data-tile="26"] .tile {--hue: ;}
.grid[data-tile="27"] .tile {--hue:  }
.grid[data-tile="28"] .tile {--hue: ;}
.grid[data-tile="29"] .tile {--hue: ;}
.grid[data-tile="30"] .tile {--hue: ;}
.grid[data-tile="31"] .tile {--hue: ;}
.grid[data-tile="32"] .tile {--hue: ;}


calc(var(--x) + var(--y))
calc(var(--x) * var(--y))
calc(var(--x) * var(--y) * 2)
calc(var(--xx) + var(--yy))
calc(var(--xx) * var(--yy))
calc(var(--xx2) + var(--yy2))
calc(var(--xx2) * var(--yy2))
calc(var(--x2x2) + var(--y2y2))
calc(var(--x2x2) * var(--y2y2))
calc(var(--xx2) + var(--yy2) + var(--x2x2) + var(--y2y2))
calc(var(--xx2) + var(--yy2) + var(--xx) + var(--yy))
calc(var(--hh) + var(--h2))
calc(var(--hh) * var(--h2))
calc(var(--hh) + var(--hh))
calc(100 * var(--h) / ( var(--hh) / 4 + 1) )
calc(var(--hh))
calc(var(--hh) + var(--h100hh4))
calc(var(--h) * var(--h100hh4))
calc(var(--hh) * var(--h100hh4))
calc(var(--x) * 15)
calc(var(--x2) * 5)
calc(var(--xx) * 5)
calc((var(--x) * 15 ) + var(--h100hh4))
calc((var(--xx) * 10 ) + var(--h100hh4))
calc((var(--x) * .5) * var(--h100hh4))
calc((var(--y) * .5) * (var(--x) * .5) * var(--h100hh4))
calc((var(--xx) * .5) * var(--h100hh4))
calc((var(--x) - 5) * (var(--y) + 5));
calc((var(--x) * var(--hh)) * var(--h100hh4))
calc( (var(--x) * 15) + (var(--y) * 5) )
calc((var(--x) * -2) * (var(--y) * 2))
calc((var(--x) + var(--hh)) * var(--h100hh4))
calc( ( (var(--x) * 15) + (var(--y) * 5) ) * (var(--h) / 1) )


*/

/*
var(--x) + var(--y)
var(--x) * var(--y)
var(--x) * var(--y) * 2
var(--xx) + var(--yy)
var(--xx) * var(--yy)
var(--xx2) + var(--yy2)
var(--xx2) * var(--yy2)
var(--x2x2) + var(--y2y2)
var(--x2x2) * var(--y2y2)
var(--xx2) + var(--yy2) + var(--x2x2) + var(--y2y2)
var(--xx2) + var(--yy2) + var(--xx) + var(--yy)
var(--hh) + var(--h2)
var(--hh) * var(--h2)
var(--hh) + var(--hh)
100 * var(--h) / ( var(--hh) / 4 + 1) 
var(--hh)
var(--hh) + var(--h100hh4)
var(--h) * var(--h100hh4)
var(--hh) * var(--h100hh4)
var(--x) * 15
var(--x2) * 5
var(--xx) * 5
(var(--x) * 15 ) + var(--h100hh4)
(var(--xx) * 10 ) + var(--h100hh4)
(var(--x) * .5) * var(--h100hh4)
(var(--y) * .5) * (var(--x) * .5) * var(--h100hh4)
(var(--xx) * .5) * var(--h100hh4)
(var(--x) - 5) * (var(--y) + 5))
(var(--x) * var(--hh)) * var(--h100hh4)
(var(--x) * 15) + (var(--y) * 5) 
(var(--x) * -2) * (var(--y) * 2)
(var(--x) + var(--hh)) * var(--h100hh4)
( (var(--x) * 15) + (var(--y) * 5) ) * (var(--h) / 1) 


100 * var(--h) / ( var(--hh) / 4 + 1)
100 * h / ( hh / 4 + 1 )



function Equation_To_CSSCustomProperties(){}
function Eq_To_CSSCustomProperties(){}
function EqToCustomPropertiesInCSS(){}
function EqToCustomProperties(){}

var eqlist = [
    `x + y`,
    `x * x`,
    `y * y`,
    `xx + yy`,
    `100 * h / ( hh / 4 + 1 )`,
    `100*h/(hh/4+1)`,
];

function EqToVar(eq){

}
function EqListToVar(eqlist){

}

───────────────
*/


/*  
───────────────
var t0 = [
    `x + y`,
    `x * x`,
    `y * y`,
    `xx + yy`,
    `x2 * y2`,
    `(x + hh) * h4`,
    `100 * h / ( hh / 4 + 1 )`,
    `100*h/(hh/4+1)`,
];
[➕, ➖, ➗, ✖, ✔, ✅, ⭐, 🆎, 🆔, ⭕, ❌]
for (let i = 0; i < t0.length; i++) {
    let t1 = t0[i];
    console.log(t1.replaceAll(/\d+/ig, '🔢'));
}
for (let i = 0; i < t0.length; i++) {
    let t1 = t0[i];
    console.log(t1.replaceAll(/\w+/ig, '🔡'));
}
for (let i = 0; i < t0.length; i++) {
    let t1 = t0[i];
    console.log(t1.replaceAll(/[a-z]+/ig, '✅|🔤|🆎'));
}
for (let i = 0; i < t0.length; i++) {
    let t1 = t0[i];
    console.log(t1.replaceAll(/\W+/ig, '🔣'));
}

for (let i = 0; i < t0.length; i++) {
    let t1 = t0[i];
    console.log(t1.replaceAll(/[a-z]+\d+/ig, '✅'));
}

function EqToVar(eq){
    let eq_terms = eq.split(' ');
    
    [x + y] → ['x', '+', 'y']
    [x * x] → ['x', '*', 'x']
    [y * y] → ['y', '*', 'y']
    [xx + yy] → ['xx', '+', 'yy']
    [100 * h / ( hh / 4 + 1 )] → ['100', '*', 'h', '/', '(', 'hh', '/', '4', '+', '1', ')']

    eq_terms.forEach(ab => {
        
    });

}
*/

/*
[ • Parts of an Equation • ]

3x + 5 = 29

[3] → Coefficient
[x] → Variable
[+] → Operation
[5] → Constant
[3x + 5] → Expression
[3x + 5 = 29] → Equation

[3x] → Term 1
[5] → Term 2



───────────────
h = x + y
xx = x * x
yy = y * y
hh = xx + yy

*/

let ts = `
for (let i = 0; i < t0.length; i++) {
    let t1 = t0[i];
    console.log(t1.replaceAll(/[a-z]+\d*/ig, '✅'));
}

let regex = /[a-z]+\d*/ig;

for (let i = 0; i < t0.length; i++) {
    let t1 = t0[i];
    console.log(t1.replaceAll(regex, '✅'));
}

`
var eqlist = [
    `x + y`,
    `x * x`,
    `y * y`,
    `xx + yy`,
    `100 * h / ( hh / 4 + 1 )`,

    `x2 * y2`,
    `(x + hh) * h4`,

    ``,
];

let regex = /[a-z]+\d*/ig;
function varReplacer(match) {
    return `var(--${match})`;
}
for (let i = 0; i < t0.length; i++) {
    let t1 = t0[i];
    console.log(t1.replaceAll(regex, varReplacer));
}

let t2 = [
    `y2 = y * 2`,
    `x2 = x * 2`,
    `xx = x * x`,
    `yy = y * y`,
    `h = x + y`,
    `h2 =  x2 * y2`,
    `hh = xx + yy`,
    `h4 = 100 * h / ( hh / 4 + 1 )`,
]

for (let i = 0; i < t2.length; i++) {
    let t3 = t2[i].split(' = ');
    console.log(`--${t3[0]} = calc(${t3[1].replaceAll(regex, varReplacer)});`);
}

// for (let i = 0; i < t2.length; i++) {
//     let t3 = t2[i];
//     console.log(t3.replaceAll(regex, varReplacer));
// }

/* ─────────────── */



function EqListToVar(eqlist){
    let cssList = [];
    eqlist.forEach(eq => {
        cssList.push(eq.replaceAll(/[a-z]+\d*/ig, (match)=>{return `var(--${match})`;}));
    });
    console.log(cssList)
    console.log(cssList.join('\n'));
}

let eqdefs = [
    `y2 = y * 2`,
    `x2 = x * 2`,
    `xx = x * x`,
    `yy = y * y`,
    `h = x + y`,
    `h2 =  x2 * y2`,
    `hh = xx + yy`,
    `h4 = 100 * h / ( hh / 4 + 1 )`,
]
function EqDefsToVar1(eqdefs){
    let cssList = [];
    eqdefs.forEach(eq => {
        let exps = eq.split(' = ');
        let ex2 = exps[1].replaceAll(/[a-z]+\d*/ig, (match)=>{return `var(--${match})`;});
        cssList.push(`--${exps[0]} = calc(${ex2});`);
    });
    console.log(cssList)
    console.log(cssList.join('\n'));
}

function EqDefsToVar(eqdefs){
    let cssList = [];
    eqdefs.forEach(eq => {
        let exps = eq.split(' = ');
        cssList.push(`--${exps[0]} = calc(${exps[1].replaceAll(/[a-z]+\d*/ig, (match)=>{return `var(--${match})`;})});`);
    });
    console.log(cssList)
    console.log(cssList.join('\n'));
    return cssList;
}

// eqlist, eqdefs

let defs = `
x = xlen + 1 - i
y = ylen + 1 - j
y2 = y * 2
x2 = x * 2
yy = y * y
xx = x * x
yy2 = y * y2
xx2 = x * x2
y2y2 = y2 * y2
x2x2 = x2 * x2
h = y + x
hh = yy + xx
h2 = y2 * x2
h100hh4 = 100 * h / ( hh / 4 + 1)
`;

let eqs = `
x + y
x * y
x * y * 2
xx + yy
xx * yy
xx2 + yy2
xx2 * yy2
x2x2 + y2y2
x2x2 * y2y2
xx2 + yy2 + x2x2 + y2y2
xx2 + yy2 + xx + yy
hh + h2
hh * h2
hh + hh
100 * h / ( hh / 4 + 1) 
hh
hh + h4
h * h4
hh * h4
x * 15
x2 * 5
xx * 5
(x * 15 ) + h4
(xx * 10 ) + h4
(x * .5) * h4
(y * .5) * (x * .5) * h4
(xx * .5) * h4
(x - 5) * (y + 5))
(x * hh) * h4
(x * 15) + (y * 5) 
(x * -2) * (y * 2)
(x + hh) * h4
( (x * 15) + (y * 5) ) * (h / 1)
`;

/*
var(--x) + var(--y)
var(--x) * var(--y)
var(--x) * var(--y) * 2
var(--xx) + var(--yy)
var(--xx) * var(--yy)
var(--xx2) + var(--yy2)
var(--xx2) * var(--yy2)
var(--x2x2) + var(--y2y2)
var(--x2x2) * var(--y2y2)
var(--xx2) + var(--yy2) + var(--x2x2) + var(--y2y2)
var(--xx2) + var(--yy2) + var(--xx) + var(--yy)
var(--hh) + var(--h2)
var(--hh) * var(--h2)
var(--hh) + var(--hh)
100 * var(--h) / ( var(--hh) / 4 + 1) 
var(--hh)
var(--hh) + var(--h100hh4)
var(--h) * var(--h100hh4)
var(--hh) * var(--h100hh4)
var(--x) * 15
var(--x2) * 5
var(--xx) * 5
(var(--x) * 15 ) + var(--h100hh4)
(var(--xx) * 10 ) + var(--h100hh4)
(var(--x) * .5) * var(--h100hh4)
(var(--y) * .5) * (var(--x) * .5) * var(--h100hh4)
(var(--xx) * .5) * var(--h100hh4)
(var(--x) - 5) * (var(--y) + 5))
(var(--x) * var(--hh)) * var(--h100hh4)
(var(--x) * 15) + (var(--y) * 5) 
(var(--x) * -2) * (var(--y) * 2)
(var(--x) + var(--hh)) * var(--h100hh4)
( (var(--x) * 15) + (var(--y) * 5) ) * (var(--h) / 1)

x + y
x * y
x * y * 2
xx + yy
xx * yy
xx2 + yy2
xx2 * yy2
x2x2 + y2y2
x2x2 * y2y2
xx2 + yy2 + x2x2 + y2y2
xx2 + yy2 + xx + yy
hh + h2
hh * h2
hh + hh
100 * h / ( hh / 4 + 1) 
hh
hh + h100hh4
h * h100hh4
hh * h100hh4
x * 15
x2 * 5
xx * 5
(x * 15 ) + h100hh4
(xx * 10 ) + h100hh4
(x * .5) * h100hh4
(y * .5) * (x * .5) * h100hh4
(xx * .5) * h100hh4
(x - 5) * (y + 5))
(x * hh) * h100hh4
(x * 15) + (y * 5) 
(x * -2) * (y * 2)
(x + hh) * h100hh4
( (x * 15) + (y * 5) ) * (h / 1)
*/
/*
x: calc( var(--lights-x) + 1 - var(--i) );
y: calc( var(--lights-y) + 1 - var(--j) );
y2: calc( var(--y) * var(--scale) );
x2: calc( var(--x) * var(--scale) );
yy: calc( var(--y) * var(--y) );
xx: calc( var(--x) * var(--x) );
yy2: calc( var(--y) * var(--y2) );
xx2: calc( var(--x) * var(--x2) );
y2y2: calc( var(--y2) * var(--y2) );
x2x2: calc( var(--x2) * var(--x2) );
h: calc( var(--y) + var(--x) );
hh: calc( var(--yy) + var(--xx) );
h2: calc( y2 * x2 );
h100hh4: calc( 100 * var(--h) / ( var(--hh) / 4 + 1) );

y2 = y * 2
x2 = x * 2
xx = x * x
yy = y * y
h = x + y
h2 =  x2 * y2
hh = xx + yy
h4 = 100 * h / ( hh / 4 + 1 )
*/




/* ───────────────  ───────────────  ─────────────── */

const defs = [
'x = xlen + 1 - i',
'y = ylen + 1 - j',
'yy = y * y',
'xx = x * x',
'h = y + x',
'xy = y * x',
'hh = yy + xx',
'q = yy + xx',
'hh = h * h',

'y2 = y * 2',
'x2 = x * 2',
'yy2 = y * y2',
'xx2 = x * x2',
'y2y2 = y2 * y2',
'x2x2 = x2 * x2',
'h2 = y2 * x2',

// 'h1 = h / ( hh / 4 + 1 )',
// 'h4 = 100 * h / ( hh / 4 + 1 )',
// 'hh4 = 100 * h1 * h1',

'hq = h / ( q / 4 + 1 )',
'hq4 = 100 * h / ( q / 4 + 1 )',
'hq2 = 100 * hq * hq',

];

const eqs = [
'x + y',
'x * y',
'x2 * y2',
'x * y * 2',
'xx + yy',
'xx * yy',
'xx2 + yy2',
'xx2 * yy2',
'x2x2 + y2y2',
'x2x2 * y2y2',
'xx2 + yy2 + x2x2 + y2y2',
'xx2 + yy2 + xx + yy',
'hh + h2',
'hh * h2',
'hh + hh',
'100 * h / ( hh / 4 + 1) ',
'hh',
'hh + h4',
'h * h4',
'hh * h4',
'x * 15',
'x2 * 5',
'xx * 5',
'(x * 15 ) + h4',
'(xx * 10 ) + h4',
'(x * .5) * h4',
'(y * .5) * (x * .5) * h4',
'(xx * .5) * h4',
'(x - 5) * (y + 5)',
'(x * hh) * h4',
'(x * 15) + (y * 5) ',
'(x * -2) * (y * 2)',
'(x + hh) * h4',
'( (x * 15) + (y * 5) ) * (h / 1)',
];

/* ───────────────  ───────────────  ─────────────── */


function EqListToVar(eqlist){
    let cssList = [];
    for (let i = 0; i < eqlist.length; i++) {
        const eq = eqlist[i];
        cssList.push(`.grid[data-tile="${i}"] .tile {--hue: calc(${eq.replaceAll(/[a-z]+\d*/ig, (match)=>{return `var(--${match})`;})});}`);
    }
    console.log(cssList)
    console.log(cssList.join('\n'));
    return cssList;
}

function EqDefsToVar(eqdefs){
    let cssList = [];
    eqdefs.forEach(eq => {
        let exps = eq.split(' = ');
        cssList.push(`--${exps[0]}: calc(${exps[1].replaceAll(/[a-z]+\d*/ig, (match)=>{return `var(--${match})`;})});`);
    });
    console.log(cssList)
    console.log(cssList.join('\n'));
    return cssList;
}

// .grid[data-tile="0"] .tile {--hue: calc(var(--x) + var(--y));}

/* ───────────────  ───────────────  ─────────────── */

// Result:
EqListToVar(eqs);
EqDefsToVar(defs);


let cssList = [];

EqListToVar(eqs).join('\n');
EqDefsToVar(defs).join('\n');

cssList.push(EqListToVar(eqs).join('\n'));
cssList.push(EqDefsToVar(defs).join('\n'));


/* ─────────────── */
let t5 = [];
t5.push(EqDefsToVar(t7).join('\n'));
t5.push(EqListToVar(t6).join('\n'));

console.log(t5.join('\n'));



/* ─────────────── */
/*
'h = x + y',
'hh = xx + yy',
'h2 = y2 * x2',
*/
const eqs = [
    'x + y',
    'x * y',
    'x2 * y2',
    'x * y * 2',
    'xx + yy',
    'xx * yy',
    'xx2 + yy2',
    'xx2 * yy2',
    'x2x2 + y2y2',
    'x2x2 * y2y2',
    'xx2 + yy2 + x2x2 + y2y2',
    'xx2 + yy2 + xx + yy',
    'hh + h2',
    'hh * h2',
    'hh + hh',
    '100 * h / ( hh / 4 + 1) ',
    'hh',
    'hh + h4',
    'h * h4',
    'hh * h4',
    'x * 15',
    'x2 * 5',
    'xx * 5',
    '(x * 15 ) + h4',
    '(xx * 10 ) + h4',
    '(x * .5) * h4',
    '(y * .5) * (x * .5) * h4',
    '(xx * .5) * h4',
    '(x - 5) * (y + 5)',
    '(x * hh) * h4',
    '(x * 15) + (y * 5) ',
    '(x * -2) * (y * 2)',
    '(x + hh) * h4',
    '( (x * 15) + (y * 5) ) * (h / 1)',
];
const eqs2 = [
    'x + y',
    'hh',
    'xx + yy',
    'xx2 + yy2',
    'x2x2 + y2y2',
    'xx2 + yy2 + x2x2 + y2y2',
    'xx + yy + xx2 + yy2',
    'hh + h2',
    'xx + yy + x + y',
    'hh + hh',
    'xx + yy + xx + yy',
    
    'x * y',
    'x2 * y2',
    'x * y * 2',
    'xx * yy',
    'xx2 * yy2',
    'x2x2 * y2y2',
    'hh * h2',
    'xx + yy * y2 * x2',
    '(x * -2) * (y * 2)',
    '(x - 5) * (y + 5)',
    '( (x * 15) + (y * 5) ) * (h / 1)',    
    
    'x * 15',
    'x2 * 5',
    'xx * 5',
    '(x * 15) + (y * 5) ',

    '100 * h / ( hh / 4 + 1)',
    'hh + h4',
    'h * h4',
    'hh * h4',
    '(x * 15 ) + h4',
    '(xx * 10 ) + h4',
    '(x * .5) * h4',
    '(y * .5) * (x * .5) * h4',
    '(xx * .5) * h4',
    '(x * hh) * h4',
    '(x + hh) * h4',
];

const eqs3 = [
    // [○]
    'x + y',
    'xx + yy',
    '(xx + yy) * 2',
    '(xx + yy) * 3',
    '(xx + yy) * 4',
    '(xx + yy) * 6',

    // [+]
    'hh + h2',
    'hh + xy * 4',
    'x * y',
    'x * y * 2',
    'x * y * 4',
    '(x - 5) * (y + 5)',
    'h2 + x * -50 + y * -50',


    // [?]
    'xx * yy',
    'xx2 * yy2',
    'x2x2 * y2y2',
    'hh * h2',
    'xx + yy * y2 * x2',
    
    // [><]
    'xx * 15 / yy',
    'xx * h / yy',

    // [~/~]
    '( (x * 15) + (y * 5) ) * (h / 1)',    

    // [|]
    'x * 15',
    'x2 * 5',
    'xx * 5',
    '(x * 15) + (y * 5) ',

    // [••]
    '100 * h / ( hh / 4 + 1)',
    'hh + h4',
    'h * h4',
    'hh * h4',
    '(x * 15 ) + h4',
    '(xx * 10 ) + h4',
    '(x * .5) * h4',
    '(y * .5) * (x * .5) * h4',
    '(xx * .5) * h4',
    '(x * hh) * h4',
    '(x + hh) * h4',
    '(x / hh) * h4',
    '(x * hh) / h4',
    '(x * hh) + h4',
    '(x * hh) - h4',
    '(x * h) + h4',
    '(x * h * 3) + h4',
    '(x * h * .4) * h4',
    '(x * h * 150) / h4',
    '(x * h * h) + h4',
    '(x * h * y) + h4',
    '(y * h * xx) / h4',
    '100 * h1 * h1',
    'hh + hh4',
    'h * hh4',
];

const eqs4 = [
    // [○]
    'x + y',
    'xx + yy',
    '(xx + yy) * 2',
    '(xx + yy) * 3',
    '(xx + yy) * 4',
    '(xx + yy) * 6',

    // [+]
    'q + h2',
    'q + xy * 4',
    'x * y',
    'x * y * 2',
    'x * y * 4',
    '(x - 5) * (y + 5)',
    'h2 + x * -50 + y * -50',


    // [?]
    'xx * yy',
    'xx2 * yy2',
    'x2x2 * y2y2',
    'q * h2',
    'xx + yy * y2 * x2',

    // [><]
    'xx * 15 / yy',
    'xx * h / yy',

    // [~/~]
    '( (x * 15) + (y * 5) ) * (h / 1)',    

    // [|]
    'x * 15',
    'x2 * 5',
    'xx * 5',
    '(x * 15) + (y * 5) ',

    // [••]
    '100 * h / ( q / 4 + 1)',
    'q + hq4',
    'h * hq4',
    'q * hq4',
    '(x * 15 ) + hq4',
    '(xx * 10 ) + hq4',
    '(x * .5) * hq4',
    '(y * .5) * (x * .5) * hq4',
    '(xx * .5) * hq4',
    '(x * q) * hq4',
    '(x + q) * hq4',
    '(x / q) * hq4',
    '(x * q) / hq4',
    '(x * q) + hq4',
    '(x * q) - hq4',
    '(x * h) + hq4',
    '(x * h * 3) + hq4',
    '(x * h * .4) * hq4',
    '(x * h * 150) / hq4',
    '(x * h * h) + hq4',
    '(x * h * y) + hq4',
    '(y * h * xx) / hq4',
    '100 * hq * hq',
    'q + hq2',
    'h * hq2',
];
const eqs5 = [
    // [○]
    'x + y',
    '(x + y) * 5',
    'xx + yy',
    '(xx + yy) * 2',
    '(xx + yy) * 3',
    '(xx + yy) * 4',
    '(xx + yy) * 6',

    // [+]
    'q + h2',
    'q + xy * 4',
    'x * y',
    'x * y * 2',
    'x * y * 4',
    '(x - 5) * (y + 5)',
    'h2 + x * -50 + y * -50',
    'xy * 150 / q',
    'xy * 150 / (q / 3 + 1)',


    // [?]
    'xx * yy',
    'xx2 * yy2',
    'x2x2 * y2y2',
    'q * h2',
    'xx + yy * y2 * x2',

    // [><]
    'xx * 15 / yy',
    'xx * h / yy',

    // [~/~]
    '( (x * 15) + (y * 5) ) * (h / 1)',    

    // [|]
    'x * 15',
    'x2 * 5',
    'xx * 5',
    '(x * 15) + (y * 5) ',

    // [••]
    '100 * h / ( q / 4 + 1)',
    'q + hq4',
    'h * hq4',
    'q * hq4',
    '(x * 15 ) + hq4',
    '(xx * 10 ) + hq4',
    '(x * .5) * hq4',
    '(y * .5) * (x * .5) * hq4',
    '(xx * .5) * hq4',
    '(x * q) * hq4',
    '(x + q) * hq4',
    '(x / q) * hq4',
    '(x * q) / hq4',
    '(x * q) + hq4',
    '(x * q) - hq4',
    '(x * h) + hq4',
    '(x * h * 3) + hq4',
    '(x * h * .4) * hq4',
    '(x * h * 150) / hq4',
    '(x * h * h) + hq4',
    '(x * h * y) + hq4',
    '(y * h * xx) / hq4',
    '100 * hq * hq',
    'q + hq2',
    'h * hq2',
];

/*
.grid[data-tile="0"] .tile {--hue: calc(var(--x) + var(--y));}
.grid[data-tile="1"] .tile {--hue: calc(var(--hh));}
.grid[data-tile="2"] .tile {--hue: calc(var(--xx) + var(--yy));}
.grid[data-tile="3"] .tile {--hue: calc(var(--xx2) + var(--yy2));}
.grid[data-tile="4"] .tile {--hue: calc(var(--x2)var(--x2) + var(--y2)var(--y2));}
.grid[data-tile="5"] .tile {--hue: calc(var(--xx2) + var(--yy2) + var(--x2)var(--x2) + var(--y2)var(--y2));}
.grid[data-tile="6"] .tile {--hue: calc(var(--xx) + var(--yy) + var(--xx2) + var(--yy2));}
.grid[data-tile="7"] .tile {--hue: calc(var(--hh) + var(--h2));}
.grid[data-tile="8"] .tile {--hue: calc(var(--xx) + var(--yy) + var(--x) + var(--y));}
.grid[data-tile="9"] .tile {--hue: calc(var(--hh) + var(--hh));}
.grid[data-tile="10"] .tile {--hue: calc(var(--xx) + var(--yy) + var(--xx) + var(--yy));}
.grid[data-tile="11"] .tile {--hue: calc(var(--x) * var(--y));}
.grid[data-tile="12"] .tile {--hue: calc(var(--x2) * var(--y2));}
.grid[data-tile="13"] .tile {--hue: calc(var(--x) * var(--y) * 2);}
.grid[data-tile="14"] .tile {--hue: calc(var(--xx) * var(--yy));}
.grid[data-tile="15"] .tile {--hue: calc(var(--xx2) * var(--yy2));}
.grid[data-tile="16"] .tile {--hue: calc(var(--x2)var(--x2) * var(--y2)var(--y2));}
.grid[data-tile="17"] .tile {--hue: calc(var(--hh) * var(--h2));}
.grid[data-tile="18"] .tile {--hue: calc(var(--xx) + var(--yy) * var(--y2) * var(--x2));}
.grid[data-tile="19"] .tile {--hue: calc((var(--x) * -2) * (var(--y) * 2));}
.grid[data-tile="20"] .tile {--hue: calc((var(--x) - 5) * (var(--y) + 5));}
.grid[data-tile="21"] .tile {--hue: calc(( (var(--x) * 15) + (var(--y) * 5) ) * (var(--h) / 1));}
.grid[data-tile="22"] .tile {--hue: calc(var(--x) * 15);}
.grid[data-tile="23"] .tile {--hue: calc(var(--x2) * 5);}
.grid[data-tile="24"] .tile {--hue: calc(var(--xx) * 5);}
.grid[data-tile="25"] .tile {--hue: calc((var(--x) * 15) + (var(--y) * 5) );}
.grid[data-tile="26"] .tile {--hue: calc(100 * var(--h) / ( var(--hh) / 4 + 1));}
.grid[data-tile="27"] .tile {--hue: calc(var(--hh) + var(--h4));}
.grid[data-tile="28"] .tile {--hue: calc(var(--h) * var(--h4));}
.grid[data-tile="29"] .tile {--hue: calc(var(--hh) * var(--h4));}
.grid[data-tile="30"] .tile {--hue: calc((var(--x) * 15 ) + var(--h4));}
.grid[data-tile="31"] .tile {--hue: calc((var(--xx) * 10 ) + var(--h4));}
.grid[data-tile="32"] .tile {--hue: calc((var(--x) * .5) * var(--h4));}
.grid[data-tile="33"] .tile {--hue: calc((var(--y) * .5) * (var(--x) * .5) * var(--h4));}
.grid[data-tile="34"] .tile {--hue: calc((var(--xx) * .5) * var(--h4));}
.grid[data-tile="35"] .tile {--hue: calc((var(--x) * var(--hh)) * var(--h4));}
.grid[data-tile="36"] .tile {--hue: calc((var(--x) + var(--hh)) * var(--h4));}

variants2: {
    0: `x + y`,
    1: `x * y`,
    2: `2x * 2y`,
    3: `xx + yy`,
    4: `xx * yy`,
    5: `2xx + 2yy`,
    6: `2xx * 2yy`,
    7: `x2x2 + y2y2`,
    8: `x2x2 * y2y2`,
    9: `2xx + 2yy + x2x2 + y2y2`,
    10: `2xx + 2yy + xx + yy`,
    11: `hh + h2`,
    12: `hh * h2`,
    13: `hh + hh`,
    14: `100 * h / ( hh / 4 + 1)`,
    15: `hh`,
    16: `hh + h4`,
    17: `h * h4`,
    18: `hh * h4`,
    19: `x * 15`,
    20: `x2 * 5`,
    21: `xx * 5`,
    22: `(x * 15 ) + h4`,
    23: `(xx * 10 ) + h4`,
    24: `(x * .5) * h4`,
    25: `(y * .5) * (x * .5) * h4`,
    26: `(xx * .5) * h4`,
    27: `(x - 5) * (y + 5)`,
    28: `(x * hh) * h4`,
    29: ` (x * 15) + (y * 5) `,
    30: `(x * -2) * (y * 2)`,
    31: `(x + hh) * h4`,
    32: `( (x * 15) + (y * 5) ) * (h / 1)`,


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36

    0: 'x + y',

    '→p': '○ circles',
    '♦': '1 = 2',
    1: 'hh',
    2: 'xx + yy',
    3: 'xx2 + yy2',
    4: 'x2x2 + y2y2',
    5: 'xx2 + yy2 + x2x2 + y2y2',
    6: 'xx + yy + xx2 + yy2',
    8: 'xx + yy + x + y',

    '♦': '9 = 10',
    9: 'hh + hh',
    10: 'xx + yy + xx + yy',

    '→p': '+ pattern',
    7: 'hh + h2',
    11: 'x * y',
    12: 'x * y * 2',
    13: 'x2 * y2',
    19: '(x * -2) * (y * 2)',
    20: '(x - 5) * (y + 5)',

    '♦': 'bananas',
    14: 'xx * yy',
    15: 'xx2 * yy2',
    16: 'x2x2 * y2y2',
    17: 'hh * h2',
    18: 'xx + yy * y2 * x2',
    
    '→p': 'unk',
    21: '( (x * 15) + (y * 5) ) * (h / 1)',    

    '→p': 'linear',
    22: 'x * 15',
    23: 'x2 * 5',
    24: 'xx * 5',
    25: '(x * 15) + (y * 5) ',

    '→p': 'bubbles and beyond',
    26: '100 * h / ( hh / 4 + 1)',
    27: 'hh + h4',
    28: 'h * h4',
    29: 'hh * h4',
    30: '(x * 15 ) + h4',
    31: '(xx * 10 ) + h4',
    32: '(x * .5) * h4',
    33: '(y * .5) * (x * .5) * h4',
    34: '(xx * .5) * h4',
    35: '(x * hh) * h4',
    36: '(x + hh) * h4',
},

26: '100 * h / ( hh / 4 + 1)',
    → Bubbles

27: 'hh + h4',
    → squished bubble

28: 'h * h4',
    → rays of explosion

29: 'hh * h4',
    → bubbles collapsing under pressure

30: '(x * 15 ) + h4',
    → twirl

31: '(xx * 10 ) + h4',
    → looks like wood

32: '(x * .5) * h4',
    → hourglass x

33: '(y * .5) * (x * .5) * h4',
    → six pointed star

34: '(xx * .5) * h4',
    → strange angle and wave

35: '(x * hh) * h4',
    → needs a perspective(30000px); to be seen
    
36: '(x + hh) * h4',
    → like color shifting in a bubble.
    

37: '(x / hh) * h4',
    → like two dots in the center orbiting.
38: '(x * hh) / h4',
    → like a objects colliding.
39: '(x * hh) + h4',
    → a strange pattern of two circles with an exploting one.
40: '(x * hh) - h4',
    → a strange pattern of two circles with an exploting one.
    → the center one makes an s.

41: '(x * h) + h4',
    → strange distorted shape.
42: '(x * h * 3) + h4',
    → strange distorted shape.
43: '(x * h * .4) * h4',
    → strange distorted shape.
44: '(x * h * 150) / h4',
    → strange distorted shape like a seed.
45: '(x * h * h) + h4',
    → odd twirls
46: '(x * h * y) + h4',
    → six pointed spikes.
47: '(y * h * xx) / h4',
    → romboid.
*/

/*
const defs = [
'x = xlen + 1 - i',
'y = ylen + 1 - j',
'y2 = y * 2',
'x2 = x * 2',
'yy = y * y',
'xx = x * x',
'yy2 = y * y2',
'xx2 = x * x2',
'y2y2 = y2 * y2',
'x2x2 = x2 * x2',
'h = y + x',
'hh = yy + xx',
'h2 = y2 * x2',
'xy = y * x',
'h4 = 100 * h / ( hh / 4 + 1)',
];

    [○]
    'x + y',
    'xx + yy',
    '(xx + yy) * 2',
    '(xx + yy) * 3',
    '(xx + yy) * 4',
    '(xx + yy) * 6',

    [+]
    'hh + h2',
    'hh + xy * 4',
    'x * y',
    'x * y * 2',
    'x * y * 4',
    '(x - 5) * (y + 5)',
    'h2 + x * -50 + y * -50',


    [?]
    'xx * yy',
    'xx2 * yy2',
    'x2x2 * y2y2',
    'hh * h2',
    'xx + yy * y2 * x2',
    
    [><]
    'xx * 15 / yy',
    'xx * h / yy',

    [~/~]
    '( (x * 15) + (y * 5) ) * (h / 1)',    

    [|]
    'x * 15',
    'x2 * 5',
    'xx * 5',
    '(x * 15) + (y * 5) ',

    [••]
    '100 * h / ( hh / 4 + 1)',
    'hh + h4',
    'h * h4',
    'hh * h4',
    '(x * 15 ) + h4',
    '(xx * 10 ) + h4',
    '(x * .5) * h4',
    '(y * .5) * (x * .5) * h4',
    '(xx * .5) * h4',
    '(x * hh) * h4',
    '(x + hh) * h4',
    '(x / hh) * h4',
    '(x * hh) / h4',
    '(x * hh) + h4',
    '(x * hh) - h4',
    '(x * h) + h4',
    '(x * h * 3) + h4',
    '(x * h * .4) * h4',
    '(x * h * 150) / h4',
    '(x * h * h) + h4',
    '(x * h * y) + h4',
    '(y * h * xx) / h4',

───

    0: 'x + y',

    '→p': '○ circles',
    '♦': '1 = 2',
    2: 'xx + yy', (1)
    8: 'xx + yy + x + y', (1.5)
    3: 'xx2 + yy2', (2)
    6: 'xx + yy + xx2 + yy2', (3)
    4: 'x2x2 + y2y2', (4)
    5: 'xx2 + yy2 + x2x2 + y2y2', (6)

    '♦': '3 = 9 = 10',
    9: 'hh + hh',
    10: 'xx + yy + xx + yy',

        yy + xx + (y * x * 4)
    'h2 = y * x * 4',

    '→p': '+ pattern',
    7: 'hh + h2',
    11: 'x * y',
    12: 'x * y * 2',
    13: 'x2 * y2',
    19: '(x * -2) * (y * 2)',
    20: '(x - 5) * (y + 5)',

    '♦': 'bananas',
    14: 'xx * yy',
    15: 'xx2 * yy2',
    16: 'x2x2 * y2y2',
    17: 'hh * h2',
    18: 'xx + yy * y2 * x2',
    
    '→p': 'unk',
    21: '( (x * 15) + (y * 5) ) * (h / 1)',    

    '→p': 'linear',
    22: 'x * 15',
    23: 'x2 * 5',
    24: 'xx * 5',
    25: '(x * 15) + (y * 5) ',


    '→p': 'bubbles and beyond',
    26: '100 * h / ( hh / 4 + 1)',
    27: 'hh + h4',
    28: 'h * h4',
    29: 'hh * h4',
    30: '(x * 15 ) + h4',
    31: '(xx * 10 ) + h4',
    32: '(x * .5) * h4',
    33: '(y * .5) * (x * .5) * h4',
    34: '(xx * .5) * h4',
    35: '(x * hh) * h4',
    36: '(x + hh) * h4',


26: '100 * h / ( hh / 4 + 1)',
    → Bubbles

27: 'hh + h4',
    → squished bubble

28: 'h * h4',
    → rays of explosion

29: 'hh * h4',
    → bubbles collapsing under pressure

30: '(x * 15 ) + h4',
    → twirl

31: '(xx * 10 ) + h4',
    → looks like wood

32: '(x * .5) * h4',
    → hourglass x

33: '(y * .5) * (x * .5) * h4',
    → six pointed star

34: '(xx * .5) * h4',
    → strange angle and wave

35: '(x * hh) * h4',
    → needs a perspective(30000px); to be seen
    
36: '(x + hh) * h4',
    → like color shifting in a bubble.
    

37: '(x / hh) * h4',
    → like two dots in the center orbiting.
38: '(x * hh) / h4',
    → like a objects colliding.
39: '(x * hh) + h4',
    → a strange pattern of two circles with an exploting one.
40: '(x * hh) - h4',
    → a strange pattern of two circles with an exploting one.
    → the center one makes an s.

41: '(x * h) + h4',
    → strange distorted shape.
42: '(x * h * 3) + h4',
    → strange distorted shape.
43: '(x * h * .4) * h4',
    → strange distorted shape.
44: '(x * h * 150) / h4',
    → strange distorted shape like a seed.
45: '(x * h * h) + h4',
    → odd twirls
46: '(x * h * y) + h4',
    → six pointed spikes.
47: '(y * h * xx) / h4',
    → romboid.

*/


/*

@keyframes undulate {
0%{}
50%{}
100%{}
}

animation: undulate 5000ms ease-in-out both;

animation-delay: calc(1ms * var(--hue));

@keyframes undulate {
0%{transform: 
rotate3d(0,0,1,calc(1deg)) 
translateZ(calc(1px));}
50%{transform: 
rotate3d(0,0,1,calc(45deg)) 
translateZ(calc(20px));}
100%{transform: 
rotate3d(0,0,1,calc(1deg)) 
translateZ(calc(1px));}
}


@keyframes undulate2 {
0%{transform: 
rotate3d(0,0,1,calc(1deg * var(--hue))) 
translateZ(calc(var(--hue) * 1px));}
100%{transform: 
rotate3d(0,0,1,calc(2deg * var(--hue))) 
translateZ(calc(var(--hue) * 2px));}
}




{transform: 
rotate3d(0,0,0,0deg);}

{transform: 
rotate3d(-1,-1,0,calc(1deg * var(--hue)));}

{transform: 
rotate3d(-1,-1,-1,calc(1deg * var(--hue)));}

{transform: 
rotate3d(-1,-1,-1,calc(1deg * var(--hue))) 
translateZ(calc(var(--hue) * 1px));}

{transform: 
rotate3d(0,0,1,calc(1deg * var(--hue))) 
translateZ(calc(var(--hue) * 1px));}




*/