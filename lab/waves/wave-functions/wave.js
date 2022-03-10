

// let outElem = document.getElementById('output');


// // print a wave
// for (let index = 0; index < 150; index++) {
//     let r1 = Math.cos((index%30)/10 - 1.5) * 10;
//     let r2 = Math.round(r1);
//     console.log('-'.repeat(10+r2));
// }


for (let index = 0; index < 150; index++) {
    let r1 = Math.cos((index%60)/20 - 1.5) * 20;
    let r2 = Math.round(r1);
    console.log('.'.repeat(10+r2));
}

for (let index = 0; index < 150; index++) {
    let r1 = Math.cos(index/100);
    console.log(r1);
}


for (let index = 0; index < 150; index++) {
    let r1 = Math.cos(index*index) * 10;
    // console.log(r1);
    let r2 = Math.round(r1);
    console.log('.'.repeat(10+r2));
}


// Works
for (let index = 0; index < 150; index++) {
    let r1 = Math.cos(index) * 20;
    let r2 = Math.round(r1);
    console.log('.'.repeat(20+r2));
}
// ♦♦♦


for (let index = 0; index < 150; index++) {
    let r0 = index - (150/2);
    let r1 = (Math.sin(r0) * 10) + (r0 * .1);
    let r2 = Math.round(r1);
    console.log('.'.repeat(20+r2));
}




`
y = 5 * cos(x*y);

f(x) = [(x**2 - 1) x (x-2-i)**2] / [x**2 + 2 + 2i]
`;