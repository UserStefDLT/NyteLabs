

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

for (let i = 10; i > 0; i--) {
    let r1 = Math.sqrt(i) * 20;
    let r2 = Math.round(r1);
    console.log('.'.repeat(20+r2));
}
for (let i = 10; i > 0; i--) {
    let r1 = Math.sqrt(i);
    console.log(r1);
}
for (let i = 10; i > 0; i--) {
    let r1 = (i*i)/10;
    console.log(r1);
}
for (let i = 0; i < 12; i++) {
    let r0 = i/10;
    let r1 = Math.floor(((3*(1 - r0)**2) * r0)*100)/100;
    console.log(r1);
}

for (let i = 100; i > 0; i--) {
    let r0 = i/10;
    let r1 = r0*r0;
    console.log(r1);
}

for (let i = 10; i > 0; i--) {
    let r0 = i/10;
    let r1 = (r0**-2)/100;
    console.log(r1);
}


// Math.floor(((3(1 - timefs)**2) * timefs))/100

for (let index = 0; index < 150; index++) {
    let r0 = index - (150/2);
    // let r1 = (Math.sin(r0) * 10) + (r0 * .1);
    let r1 = Math.cos((r0%60)/20 - 1.5) * 15;
    let r2 = Math.round(r1);
    console.log('.'.repeat(20+r2));
    console.log('.'.repeat(20)+"|");
}


for (let index = 0; index < 100; index++) {
    // let r1 = (Math.sin(r0) * 10) + (r0 * .1);
    let r1 = Math.cos((index%60)/20 - 1.5) * 15;
    let r2 = Math.round(r1);
    console.log('.'.repeat(20+r2));
    console.log('.'.repeat(20)+"|");
}

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        // let r1 = (Math.sin(r0) * 10) + (r0 * .1);
        let r1 = Math.cos((i*j)*3).toFixed(2);
        console.log(r1);
        // console.log('.'.repeat(20+r2));
        // console.log('.'.repeat(20)+"|");
    }
}




`
y = 5 * cos(x*y);

f(x) = [(x**2 - 1) x (x-2-i)**2] / [x**2 + 2 + 2i]
`;