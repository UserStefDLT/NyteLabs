const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particles = [];
const mouse_particles = [];
const click_spell = [];
const s = {
    // x: 0,
    // y: 0,
    x: window.innerWidth,
    y: window.innerHeight,
    z: 30
}
const state = {
    "p": true,
    "m": true,
    "c": true
}





/*
Particles

███████   ██████  ███████  ██████████ ██████   ██████ ██       ████████   ████   
██    ██ ██    ██ ██    ██     ██       ██    ██      ██       ██       ██    ██ 
██    ██ ██    ██ ██    ██     ██       ██   ██       ██       ██████     ██     
███████  ████████ ██████       ██       ██   ██       ██       ██           ██   
██       ██    ██ ██   ██      ██       ██    ██      ██       ██       ██    ██ 
██       ██    ██ ██    ██     ██     ██████   ██████ ████████ ████████   ████   

*/

class Particle {
    constructor(x = 0, y = 0, size = 5, hueOn = false){
        // this.x = s.x;
        // this.y = s.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        // this.x = canvas.width/2;
        // this.y = canvas.height/2;
        if(x == 0){ this.x = canvas.width/2; } else {this.x = x}
        if(y == 0){ this.y = canvas.height/2; } else {this.y = y}

        this.hueOn = hueOn;
        this.hue = Math.random() * 360;
        this.hueSp = Math.random() * 3;

        // this.size = Math.random() * 5 + 1;
        // this.size = Math.random() * 5 + 5;
        // this.size = Math.random() * 5 + 1;
        this.size = Math.random() * 3 + size;
        this.spX = Math.random() * 3 - 1.5;
        this.spY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.spX;
        this.y += this.spY;
        if(this.y > canvas.height || this.x > canvas.width || this.y < 0 || this.x < 0){
            this.x = Math.random() * (canvas.width/2) + (canvas.width/4);
            this.y = Math.random() * (canvas.height/2) + (canvas.height/4);
        }
        this.size -= .05;
        if(this.size < 0.2) this.size = 0.2;
        // this.size += Math.random() * 2 - 1;
        // if(this.size < 2) this.size += 1;
        // if(this.size > 5) this.size -= 1;
        this.hue += this.hueSp;
        if(this.hue > 360) this.hue -= 360;
    }
    draw(){
        // ctx.fillStyle = '#f398';
        // ctx.fillStyle = `hsl(${this.hue}, 100%, 40%)`;
        ctx.fillStyle = `hsl(60, 100%, 40%)`;
        if(this.hueOn){
            ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Spark {
    constructor(hp = 5, size = 5, hueOn = false){
        this.x = s.x;
        this.y = s.y;
        this.hp = hp;

        this.hueOn = hueOn;
        this.hue = Math.random() * 360;
        this.hueSp = Math.random() * 3;

        this.size = Math.random() * size + size;
        // this.size = 2;

        this.dx = Math.random() *.5;
        this.dy = Math.random() *.5;
    }
    update(){
        this.dx += Math.random() * .2;
        this.dy += Math.random() * .2;

        let cirX = Math.cos(Math.PI*(this.hue/180)) * this.dx;
        let cirY = Math.sin(Math.PI*(this.hue/180)) * this.dy;
        this.x += cirX;
        this.y += cirY;


        this.hp -= .05;
        if(this.hp < 0) this.hp = 0;
        this.size -= .05;
        if(this.size < 0.2) this.size = 0.2;

        // this.hue += this.hueSp;
        // this.hue += 5;
        this.hue += this.size;
        if(this.hue > 360) this.hue -= 360;
    }
    draw(){
        // ctx.fillStyle = '#f398';
        // ctx.fillStyle = `hsl(${this.hue}, 100%, 40%)`;
        ctx.fillStyle = `hsl(60, 100%, 40%)`;
        if(this.hueOn){
            ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Rocket {
    constructor(hp = 5, size = 5, hueOn = false){
        this.x = s.x;
        this.y = s.y;
        this.hp = hp;
        this.di = 1;

        this.hueOn = hueOn;
        this.hue = Math.random() * 360;
        this.hueSp = Math.random() * 3;

        this.size = Math.random() * size + size;
        // this.size = 2;

        this.dx = Math.random() *.5;
        this.dy = Math.random() *.5;
    }
    update(){
        this.dx += Math.random() * .2;
        this.dy += Math.random() * .2;

        let cirX = Math.cos(Math.PI*(this.hue/180)) * this.dx;
        let cirY = Math.sin(Math.PI*(this.hue/180)) * this.dy;
        this.x += cirX;
        this.y += cirY;

        this.hp -= .05;
        if(this.hp < 0) this.hp = 0;
        this.size -= .05;
        if(this.size < 0.2) this.size = 0.2;


        this.di += Math.random() * .2;
        if(Math.floor(this.di)%2 == 0) {
            this.hue += 3;
        } else {
            this.hue -= 3;
        }
        if(this.hue > 360) this.hue -= 360;
        if(this.hue < 0) this.hue += 360;
    }
    repeatDraw(){
        this.update();
        ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    draw(){
        // ctx.fillStyle = '#f398';
        // ctx.fillStyle = `hsl(${this.hue}, 100%, 40%)`;
        ctx.fillStyle = `hsl(60, 100%, 40%)`;
        if(this.hueOn){
            ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        if(!spellBook.pause){
            this.repeatDraw();
            this.repeatDraw();
        }
    }
}

class SmallLighting {
    constructor(hp = 5, links = 5, length = 10, size = 5){
        this.x = s.x;
        this.y = s.y;
        this.dots = [];
        
        this.links = links;
        // this.hp = Math.random() * hp + hp;
        this.hp = hp;
        
        this.hue = Math.random() * 360;
        this.sat = 100;
        this.lum = 70;
        this.alp = 50;
        // this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp}%)`;
        this.deg = Math.random() * 360;

        this.len = Math.random() * length + length;
        this.size = Math.random() * size + size;

        this.d = 5;
    }
    getDots(dots){
        let x = this.x;
        let y = this.y;
        let d = this.d;
        let h = this.hue;
        let angle = this.deg;

        for (let index = 0; index < dots; index++) {
            if(index%2 == 0) {
                angle += Math.random() * -120 - 30;
            } else {
                angle += Math.random() * 120 + 30;
            }
            // angle += Math.random() * 360;
            if(angle > 360) angle -= 360;
            if(angle< 0) angle += 360;

            if(index%2 == 0) {
                h += Math.random() * -30 - 30;
            } else {
                h += Math.random() * 30 + 30;
            }
            // h += Math.random() * 360;
            if(h > 360) h -= 360;
            if(h< 0) h += 360;
            
            d += Math.random() * this.len + this.len;

            let cirX = Math.cos(Math.PI*(h/180)) * d;
            let cirY = Math.sin(Math.PI*(h/180)) * d;
            x += cirX;
            y += cirY;
            this.dots.push([x,y,h,angle]);
        }
    }
    update(){
        this.hp -= .1;
        if(this.hp < 0) this.hp = 0;

        this.size -= .05;
        if(this.size < 0.1) this.size = 0.1;

        if(this.dots.length < 5){
            this.getDots(this.links);
        }
    }
    draw(){
        ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp}%)`;
        ctx.fillStyle = `hsla(${this.hue}, 100%, ${this.lum}%, .5)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        

        let px = this.x;
        let py = this.y;
        let ps = this.size;
        let angle = this.deg;
        let ph = this.hue;
        this.dots.forEach(dot => {
            let gradient = ctx.createLinearGradient(px, py, dot[0], dot[1]);
            gradient.addColorStop(0, `hsla(${ph}, ${this.sat}%, ${this.lum}%, ${this.alp}%)`);
            gradient.addColorStop(1, `hsla(${dot[2]}, ${this.sat}%, ${this.lum}%, ${this.alp}%)`);
            ctx.strokeStyle = gradient;

            ctx.lineWidth = ps * 2.1;
            ctx.beginPath();
            ctx.moveTo(px, py);

            ctx.lineTo(dot[0], dot[1]);
            ctx.stroke();

            ctx.fillStyle = `hsla(${dot[2]}, ${this.sat}%, ${this.lum}%, ${this.alp}%)`;
            ctx.beginPath();
            ctx.arc(dot[0], dot[1], ps, 0, Math.PI * 2);
            ctx.fill();

            px = dot[0];
            py = dot[1];
            ph = dot[2];
            ps -= .1;
            if(ps < 0.01) ps = 0.01;
        });
    }
}

class Lighting2 {
    constructor(hp = 5, links = 5, length = 10, size = 5){
        this.x = s.x;
        this.y = s.y;
        this.dots = [];
        
        this.links = links;
        // this.hp = Math.random() * hp + hp;
        this.hp = hp;
        
        this.hue = Math.random() * 360;
        this.sat = 100;
        this.lum = 70;
        this.alp = 100;
        // this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp}%)`;
        this.deg = Math.random() * 360;

        this.len = Math.random() * length + length;
        this.size = Math.random() * size + size;

        this.d = 5;
    }
    getDots(dots){
        let x = this.x;
        let y = this.y;
        let d = this.d;
        let h = this.hue;
        let angle = this.deg;

        for (let index = 0; index < dots; index++) {
            if(index%2 == 0) {
                angle += Math.random() * -120 - 30;
            } else {
                angle += Math.random() * 120 + 30;
            }
            // angle += Math.random() * 360;
            if(angle > 360) angle -= 360;
            if(angle< 0) angle += 360;

            if(index%2 == 0) {
                h += Math.random() * -30 - 30;
            } else {
                h += Math.random() * 30 + 30;
            }
            // h += Math.random() * 360;
            if(h > 360) h -= 360;
            if(h< 0) h += 360;
            
            d += Math.random() * this.len + this.len;

            let cirX = Math.cos(Math.PI*(h/180)) * d;
            let cirY = Math.sin(Math.PI*(h/180)) * d;
            x += cirX;
            y += cirY;
            this.dots.push([x,y,h,angle]);
        }
    }
    update(){
        this.hp -= .05;
        if(this.hp < 0) this.hp = 0;

        this.size -= .05;
        if(this.size < 0.1) this.size = 0.1;

        if(this.dots.length < 5){
            this.getDots(this.links);
        }
    }
    draw(){
        ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp}%)`;
        ctx.fillStyle = `hsla(${this.hue}, 100%, ${this.lum}%, .5)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        

        let px = this.x;
        let py = this.y;
        let ps = this.size;
        let angle = this.deg;
        let ph = this.hue;
        this.dots.forEach(dot => {
            let gradient = ctx.createLinearGradient(px, py, dot[0], dot[1]);
            gradient.addColorStop(0, `hsla(${ph}, ${this.sat}%, ${this.lum}%, ${this.alp}%)`);
            gradient.addColorStop(1, `hsla(${dot[2]}, ${this.sat}%, ${this.lum}%, ${this.alp}%)`);
            ctx.strokeStyle = gradient;

            ctx.lineWidth = ps * 2.1;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(dot[0], dot[1]);
            ctx.stroke();

            ctx.fillStyle = `hsla(${dot[2]}, ${this.sat}%, ${this.lum}%, ${this.alp}%)`;
            ctx.beginPath();
            ctx.arc(dot[0], dot[1], ps, 0, Math.PI * 2);
            ctx.fill();

            px = dot[0];
            py = dot[1];
            ph = dot[2];
            ps -= .1;
            if(ps < 0.01) ps = 0.01;
        });
    }
}





/*
Events

████████ ██      ██ ████████ ██    ██ ██████████   ████   
██       ██      ██ ██       ██    ██     ██     ██    ██ 
██████    ██    ██  ██████   ████  ██     ██       ██     
██         ██  ██   ██       ██  ████     ██         ██   
██          ████    ██       ██    ██     ██     ██    ██ 
████████     ██     ████████ ██    ██     ██       ████   

*/

function start(){
    for (let index = 0; index < 50; index++) {
        // particles.push(new Particle());
        click_spell.push(new Spark(8, 5, true));
    }
}

/* ───── Animate ───── */

function handleParticles(){
    /* mouse_particles */
    if(mouse_particles.length > 0){
        for (let index = 0; index < mouse_particles.length; index++) {
            const element = mouse_particles[index];
            if(!spellBook.pause){
                element.update();
            }
            element.draw();
            if(element.hp == 0) {
                mouse_particles.splice(index,1);
                index--;
            }
        }
    }
    /* click_spell */
    if(click_spell.length > 0){
        for (let index = 0; index < click_spell.length; index++) {
            const element = click_spell[index];
            if(!spellBook.pause){
                element.update();
            }
            element.draw();
            if(element.hp == 0) {
                click_spell.splice(index,1);
                index--;
            }
        }
    }
    /* particles */
    if(particles.length > 0){
        for (let index = 0; index < particles.length; index++) {
            const element = particles[index];
            if(!spellBook.pause){
                element.update();
            }
            element.draw();
            if(element.size <= .1) {
                particles.splice(index,1);
                index--;
            }
        }
    }
}

/* ───── Animate ───── */
function animate (){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    let particleCount = particles.length + click_spell.length + mouse_particles.length;
    if(particleCount > 0){
        // console.log(particleCount);
        handleParticles();
    }
    requestAnimationFrame(animate);
}

/* ───── Scroll ───── */
function zoom(event) {
    console.log(`scale:${scale}`);
    console.log(`s.z:${s.z}`);
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    s.z = (scale * 8) - 1;
}
let scale = 1;
const el = document.querySelector('#canvas');
el.onwheel = zoom;


/* ───── Click ───── */

var spellBook = {
    "lightning": true,
    "rays": 4,
    "rocket": false,
    "ammo": 20,
    "huering": false,
    "sparks": 50,
    "boom": false,
    "particles": 100,
    "pause": false,
    "current": "none"
}

var fireworksType = 0;
window.addEventListener('click', (ev) =>{
    // let chance = Math.floor(Math.random()*100) + 1;
    if(spellBook.lightning && click_spell.length < 100){
        for (let index = 0; index < spellBook.rays; index++) {
            // constructor(hp = 5, links = 5, length = 10, size = 5)
            click_spell.push(new Lighting2(5, 10, 10, 2));
        }
    }
    if(spellBook.rocket && click_spell.length < 200){
        for (let index = 0; index < spellBook.ammo; index++) {
            click_spell.push(new Rocket(5, 5, true));
        }
    }
    if(spellBook.huering && click_spell.length < 300){
        for (let index = 0; index < spellBook.sparks; index++) {
            click_spell.push(new Spark(8, 5, true));
        }
    }
    // if(spellBook.boom){
    //     for (let index = 0; index < spellBook.particles; index++) {
    //         click_spell.push(new Particle(ev.clientX, ev.clientY, 5, true));
    //     }
    // }
    
});

/* ───── Mouse Move ───── */
window.addEventListener('mousemove', (ev) =>{
    // let chance = Math.floor(Math.random()*100) + 1;
    s.x = ev.clientX;
    s.y = ev.clientY;
    moveSpark();
});

function moveSpark() {
    if(spellBook.lightning){
        if(mouse_particles.length < spellBook.rays) {
            for (let index = 0; index < spellBook.rays; index++) {
                // constructor(hp = 5, links = 5, length = 10, size = 5)
                mouse_particles.push(new SmallLighting(3, 5, 8, 1));
            }
        }
    }
    if(spellBook.rocket){
        if(mouse_particles.length < 200) {
            for (let index = 0; index < 10; index++) {
                mouse_particles.push(new Rocket(2, 1, true));
            }
        }
    }
    if(spellBook.huering){
        if(mouse_particles.length < 200) {
            for (let index = 0; index < 2; index++) {
                mouse_particles.push(new Spark(3, 2, true));
            }
        }
    }
}

/* ───── Keydown Select ───── */

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    switch (event.key) {
        case "q":
        case "Q":
            spellBook.lightning ? spellBook.lightning = false : spellBook.lightning = true;
            break;
        case "w":
        case "W":
            spellBook.rocket ? spellBook.rocket = false : spellBook.rocket = true;
            break;
        case "e":
        case "E":
            spellBook.huering ? spellBook.huering = false : spellBook.huering = true;
            break;
        case " ":
            spellBook.pause ? spellBook.pause = false : spellBook.pause = true;
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);

/* ───── Load ───── */
window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
    start();
    animate();
});
