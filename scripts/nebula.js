


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    s.x = window.innerWidth/2;
    s.y = window.innerHeight/2;

    s.midX = window.innerWidth/2;
    s.midY = window.innerHeight/2;
});

const particles = [];
const click_particles = [];
const mouse_particles = [];
const s = {
    x: 0,
    y: 0,

    r: 3,
    c: 0,
    hue: 0,
    hue_steps: 6,
    hue_step: 360/6,
    lum_step: 20,
    z: 30
}
// window.addEventListener('mousemove', (ev) =>{
//     // let chance = Math.floor(Math.random()*100) + 1;
//     s.x = ev.clientX;
//     s.y = ev.clientY;
//     // hueHelix();

//     // let centerX = canvas.width/2;
//     // let centerY = canvas.height/2;
// });

// function zoom(event) {
//     event.preventDefault();
//     scale += event.deltaY * -0.01;
//     scale = Math.min(Math.max(.125, scale), 4);
//     s.z = (scale * 10)+20;
// }
// let scale = 1;
// // const el = document.querySelector('#canvas');
// canvas.onwheel = zoom;


// const s2 = {
//     x: 0,
//     y: 0,
    
//     r: 3,
//     c: 0,
//     hue: 0,
//     hue_steps: 6,
//     hue_step: 360/6,
//     lum_step: 20,
//     z: 30
// }

class Nebula {
    constructor(id, count){
        this.id = id;
        this.nodeCount = count;
        this.depth = (this.id / this.nodeCount);
        this.xc = s.x;
        this.yc = s.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.angle = Math.random() * 360;
        this.angleZ = Math.random() * 360;
        this.rotSp = Math.random() + .5;
        this.radius = Math.random() * 1;

        this.timeLim = 200;
        this.time = this.timeLim;
        this.entropy = 1;
        
        this.hue = 0;
        this.sat = 100;
        this.lum = 60;
        this.alp = 1;

        this.sizeLim = 2;
        this.sizeMin = .5;
        this.hueStart = Math.random() * 10 + (this.xc + this.yc)%360;
        this.hueRange = 60;
        this.radiusLim = 200;
        this.radiusMin = 1;

        this.size = Math.random() * 2 + .1;
        this.spX = Math.random() * 3 - 1.5;
        this.spY = Math.random() * 3 - 1.5;
    }
    update(){
        this.time -= this.entropy;
        if(this.time < 1){
            this.time = 0;
            this.angle = Math.random() * 360;
            this.angleZ = Math.random() * 360;
        }
        let timef = this.time / this.timeLim;
        let timefs = 1-(this.time / this.timeLim);

        this.angle += 2;
        if(this.angle > 360) this.angle -=360;
        this.radius = ((3*(1 - timefs) * (timefs**2)) * this.radiusLim) + this.radiusMin;

        this.alp = 1;
        this.hue = Math.floor(this.hueRange * timef) + this.hueStart;
        this.size = this.sizeLim * timefs + this.sizeMin;
        
        // let gravity = (timefs * timefs) * (this.radiusLim / 3);

        this.lum = 10 + (this.depth*50);

        let cirZx = Math.cos(Math.PI*(this.angleZ/180));
        let cirX = Math.cos(Math.PI*(this.angle/180)) * this.radius * cirZx;
        let cirY = Math.sin(Math.PI*(this.angle/180)) * this.radius;
        this.x = cirX + this.xc;
        this.y = cirY + this.yc;
        // this.y = cirY + this.yc + gravity;
    }
    draw(){
        ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Nebula2 {
    constructor(id, count, orbit, lives = 3){
        this.orbit = orbit;
        this.lives = lives - 1;
        this.secondScout = 1;
        this.id = id;
        this.nodeCount = count;
        this.depth = (this.id / this.nodeCount);
        this.xc = s.x;
        this.yc = s.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.angle = Math.random() * 360;
        this.angleZ = Math.random() * 360;
        this.rotSp = Math.random() + .5;
        this.radius = Math.random() * 1;

        this.timeLim = 200;
        this.time = this.timeLim;
        this.entropy = 1;
        
        this.hue = 0;
        this.sat = 100;
        this.lum = 60;
        this.alp = 1;

        this.sizeLim = 2;
        this.sizeMin = .5;
        this.hueStart = Math.random() * 10 + (this.xc + this.yc)%360;
        this.hueRange = 60;
        this.radiusLim = 300;
        this.radiusMin = 1;
        this.highestRadius = 0;

        this.size = Math.random() * 2 + .1;
        this.spX = Math.random() * 3 - 1.5;
        this.spY = Math.random() * 3 - 1.5;
    }
    orbitalExtension(){
        // click_particles.push(new Nebula(index, spellBook.particles));
        // orbit
        // console.log("prepearing scout.");
        // if(this.lives > 0){
        //     // this.orbit.push(new Nebula2(this.id, this.nodeCount, this.orbit, this.lives));
        //     // constructor(x, y, angle, angleZ, id, count)
        //     // this.orbit.push(new NebulaScout(this.x, this.y, this.angle, this.angleZ, this.id, this.nodeCount));
        //     this.orbit.push(new NebulaScout2(this.x, this.y, this.angle, this.angleZ, this.hue, this.id, this.nodeCount, this.orbit, this.lives));
        //     // constructor(x, y, angle, angleZ, hue, id, count, orbit, lives = 3){
        //     this.secondScout = 0;
        //     // console.log("sending a second scout.");
        // }
    }
    update(){
        this.time -= this.entropy;
        if(this.time < 1){
            this.time = 0;
            this.angle = Math.random() * 360;
            this.angleZ = Math.random() * 360;
        }
        let timef = this.time / this.timeLim;
        let timefs = 1-(this.time / this.timeLim);

        this.angle += 2;
        if(this.angle > 360) this.angle -=360;
        this.radius = ((3*(1 - timefs) * (timefs**2)) * this.radiusLim) + this.radiusMin;
        // if(this.secondScout == 1){
        //     this.highestRadius > this.radius ? this.orbitalExtension() : this.highestRadius = this.radius;
        // }

        this.alp = 1;
        this.hue = Math.floor(this.hueRange * timef) + this.hueStart;
        this.size = this.sizeLim * timefs + this.sizeMin;
        
        // let gravity = (timefs * timefs) * (this.radiusLim / 3);

        this.lum = 10 + (this.depth*50);

        let cirZx = Math.cos(Math.PI*(this.angleZ/180));
        let cirX = Math.cos(Math.PI*(this.angle/180)) * this.radius * cirZx;
        let cirY = Math.sin(Math.PI*(this.angle/180)) * this.radius;
        this.x = cirX + this.xc;
        this.y = cirY + this.yc;
        // this.y = cirY + this.yc + gravity;
    }
    draw(){
        ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
class NebulaMouse2 {
    constructor(id, count){
        this.id = id;
        this.nodeCount = count;
        this.depth = (this.id / this.nodeCount);
        this.xc = s.x;
        this.yc = s.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.angle = Math.random() * 360;
        this.angleZ = Math.random() * 360;
        this.rotSp = Math.random() + .5;
        this.radius = Math.random() * 1;

        this.time = 50;
        this.entropy = 1;
        
        this.hue = 0;
        this.sat = 100;
        this.lum = 60;
        this.alp = 1;
        
        this.timeLim = 50;

        this.sizeLim = 1;
        this.sizeMin = .5;
        this.hueStart = Math.random() * 10 + (this.xc + this.yc)%360;
        this.hueRange = 60;
        this.radiusLim = 150;
        this.radiusMin = 1;

        this.size = Math.random() * 2 + .1;
        this.spX = Math.random() * 3 - 1.5;
        this.spY = Math.random() * 3 - 1.5;
    }
    update(){
        this.time -= this.entropy;
        if(this.time < 1){
            this.time = 0;
            this.angle = Math.random() * 360;
            this.angleZ = Math.random() * 360;
        }
        let timef = this.time / this.timeLim;
        let timefs = 1-(this.time / this.timeLim);

        this.angle += 2;
        if(this.angle > 360) this.angle -=360;
        this.angleZ += 2;
        if(this.angleZ > 360) this.angleZ -=360;
        this.radius = ((3*(1 - timefs) * (timefs**2)) * this.radiusLim) + this.radiusMin;

        this.alp = 7;
        this.hue = Math.floor(this.hueRange * timef) + this.hueStart;
        this.hue = (this.x + this.y)%360 + Math.floor(this.hueRange * timef);
        this.size = this.sizeLim * timefs + this.sizeMin;
        
        // let gravity = (timefs * timefs) * (this.radiusLim / 3);

        // this.lum = 10 + (this.depth*50);

        let cirZx = Math.cos(Math.PI*(this.angleZ/180));
        let cirX = Math.cos(Math.PI*(this.angle/180)) * this.radius * cirZx;
        let cirY = Math.sin(Math.PI*(this.angle/180)) * this.radius;
        this.x = cirX + this.xc;
        this.y = cirY + this.yc;
        // this.y = cirY + this.yc + gravity;
        // this.x = cirX + s.x;
        // this.y = cirY + s.y;
        // this.y = cirY + s.y + gravity;
    }
    draw(){
        ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}


function start(){
    let nodeCount = 50;
    for (let index = 0; index < nodeCount; index++) {
        click_particles.push(new Nebula(index, nodeCount));
    }
}
function handleParticles(){

    /* mouse_particles */
    if(mouse_particles.length > 0){
        // console.log(`Mouse Particles Len: ${mouse_particles.length}`);
        for (let index = 0; index < mouse_particles.length; index++) {
            const element = mouse_particles[index];
            element.update();
            element.draw();
            if(element.time == 0) {
                mouse_particles.splice(index,1);
                index--;
            }
        }
    }
    /* click_particles */
    if(click_particles.length > 0){
        // console.log(`Clic Particles Len: ${click_particles.length}`);
        for (let index = 0; index < click_particles.length; index++) {
            const element = click_particles[index];
            element.update();
            element.draw();
            if(element.time == 0) {
                click_particles.splice(index,1);
                index--;
            }
        }
    }
    

    if(particles.length > 0) {
        // console.log(`Particles Len: ${particles.length}`);
        for (let index = 0; index < particles.length; index++) {
            const element = particles[index];
            element.update();
            element.draw();
            if(element.time == 0) {
                particles.splice(index,1);
                index--;
            }
        }
    }
}

function animate (){
    // ctx.fillStyle = `#000f`;
    // // ctx.fillStyle = `#0008`;
    // // ctx.fillStyle = `#0002`;
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    let particleCount = particles.length + click_particles.length + mouse_particles.length;
    if(particleCount > 0){
        handleParticles();
    }
    requestAnimationFrame(animate);
}


var spellBook = {
    "boom": false,
    "particles": 100,
    "whoob": true,
    "whoobly": 20,
    "pause": false,
    "current": "none"
}
window.addEventListener('click', (ev) =>{
    if(spellBook.boom){
        for (let index = 0; index < spellBook.particles; index++) {
            click_particles.push(new FireWorks2(index, spellBook.particles));
        }
    }
    if(spellBook.whoob){
        for (let index = 0; index < spellBook.whoobly; index++) {
            // click_particles.push(new Nebula(index, spellBook.particles));
            click_particles.push(new Nebula2(index, spellBook.whoobly, click_particles, 3));
        }
    }
});

/* ───── Mouse Move ───── */
window.addEventListener('mousemove', (ev) =>{
    s.x = ev.clientX;
    s.y = ev.clientY;
    moveSpark();
});
function moveSpark() {
    let nodeCount = 1;
    if(mouse_particles.length < 50) {
        mouse_particles.push(new NebulaMouse2(0, nodeCount));
    }
}

window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
    s.x = canvas.width/2;
    s.y = canvas.height/2;
    start();
    animate();
});