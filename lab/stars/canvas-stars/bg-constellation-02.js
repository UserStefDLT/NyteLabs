const canvas = document.getElementById('canvas-stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const stars = [];
class Star {
    constructor(id = 0){
        this.id = id;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        // from [0.0] to [1.25];
        this.base_size = Math.random() * .75;
        this.pulse = Math.random() * (this.base_size*2/3) - (this.base_size/3);
        // from [0.25] to [1.5];
        this.size = .5 + this.base_size + this.pulse;

        this.spX = .001;
        this.spY = -.001;
    }
    flickering(){
        this.pulse = Math.random() * (this.base_size*2/3) - (this.base_size/3);
        this.size = .5 + this.base_size + this.pulse;
    }
    update(){
        if(!s.pause){
            this.x += canvas.width * this.spX;
            this.y += canvas.height * this.spY;

            if(this.x > canvas.width || this.y < 0){
                if(Math.floor(this.id)%2 == 0) {
                    this.x = Math.random() * (canvas.width) + (canvas.width/8);
                    this.y = Math.random() * (canvas.height/8) + canvas.height;
                } else {
                    this.x = Math.random() * (canvas.width/8) * -1;
                    this.y = Math.random() * (canvas.height) + (canvas.height/8);
                }
            }
        }
        // this.flickering();
    }
    draw(){
        // ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        ctx.strokeStyle = `#fff0`;
        ctx.fillStyle = `#fff`;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function start(){
    let count = 50;
    // let count = 1;
    for (let index = 0; index < count; index++) {
        stars.push(new Star(index));
    }
}
function handleParticles(){
    for (let index = 0; index < stars.length; index++) {
        const element = stars[index];
        element.update();
        element.draw();
    }
    // Constellation2();
}
function animate (){
    if(!s.q && !s.pause){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        handleParticles();
    }
    // if(!s.q){
    //     ctx.clearRect(0,0,canvas.width, canvas.height);
    //     handleParticles();
    // }
    requestAnimationFrame(animate);
}

/* ─── */

function Constellation(){
    ctx.fillStyle = `#fff0`;
    ctx.strokeStyle = `#fff`;
    ctx.lineWidth = 1;
    for (let i = 0; i < stars.length; i++) {
        const e1 = stars[i];
        ctx.beginPath();
        ctx.arc(e1.x, e1.y, 4, 0, Math.PI * 2);
        let ss = {'id': -1, 'h2': 999};
        for (let j = 0; j < stars.length; j++) {
            if(j != i){
                const e2 = stars[j];
                let x2 = e1.x - e2.x;
                let y2 = e1.y - e2.y;
                let h2 = Math.sqrt(x2 * x2 + y2 * y2);
                if(ss.h2 > h2){
                    ss.id = j;
                    ss.h2 = h2;
                }
            }
        }
        let ns = stars[ss.id];
        ctx.moveTo(e1.x, e1.y);
        ctx.lineTo(ns.x, ns.y);
        ctx.stroke();
    }
}

function Constellation2(){
    ctx.fillStyle = `#fff0`;
    ctx.strokeStyle = `#fff`;
    ctx.lineWidth = 1;
    for (let i = 0; i < stars.length; i++) {
        const e1 = stars[i];
        ctx.beginPath();
        ctx.arc(e1.x, e1.y, 4, 0, Math.PI * 2);
        let ss = {'id': -1, 'h2': 999};
        let ss2 = {'id': -1, 'h2': 999};
        for (let j = 0; j < stars.length; j++) {
            if(j != i){
                const e2 = stars[j];
                let x2 = e1.x - e2.x;
                let y2 = e1.y - e2.y;
                let h2 = Math.sqrt(x2 * x2 + y2 * y2);
                if(ss.h2 > h2){
                    ss.id = j;
                    ss.h2 = h2;
                } else if (ss2.h2 > h2){
                    ss2.id = j;
                    ss2.h2 = h2; 
                }
            }
        }
        let ns = stars[ss.id];
        ctx.moveTo(e1.x, e1.y);
        ctx.lineTo(ns.x, ns.y);
        let ns2 = stars[ss2.id];
        ctx.moveTo(e1.x, e1.y);
        ctx.lineTo(ns2.x, ns2.y);
        ctx.stroke();
    }
}

