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
        this.expansion = .125;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.x = Math.random() * (canvas.width * (1 + this.expansion)) - (canvas.width * this.expansion / 2);
        this.y = Math.random() * (canvas.height * (1 + this.expansion)) - (canvas.height * this.expansion / 2);

        // from [0.0] to [1.25];
        this.base_size = Math.random() * .75;
        this.pulse = Math.random() * (this.base_size*2/3) - (this.base_size/3);
        // from [0.25] to [1.5];
        this.size = .5 + this.base_size + this.pulse;

        // this.spX = .001;
        // this.spY = -.001;
        this.spX = .0002;
        this.spY = -.0002;

        // this.expansion = .125;
        this.xLim = (canvas.width + (canvas.width * this.expansion));
        this.yLim = (canvas.height * this.expansion * -1);
    }
    flickering(){
        this.pulse = Math.random() * (this.base_size*2/3) - (this.base_size/3);
        this.size = .5 + this.base_size + this.pulse;
    }
    update(){
        if(!s.pause){
            this.x += canvas.width * this.spX;
            this.y += canvas.height * this.spY;

            if(this.x > this.xLim || this.y < this.yLim){
                if(Math.floor(this.id)%2 == 0) {
                    this.x = Math.random() * (canvas.width) + (canvas.width * this.expansion);
                    this.y = Math.random() * (canvas.height * this.expansion) + canvas.height;
                } else {
                    this.x = Math.random() * (canvas.width * this.expansion) * -1;
                    this.y = Math.random() * (canvas.height) + (canvas.height * this.expansion);
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
var stepCount = 0;
var stepLim = 300;
function handleParticles(){
    for (let index = 0; index < stars.length; index++) {
        const element = stars[index];
        element.update();
        element.draw();
    }
    stepCount++
    if(stepCount > stepLim){
        /* from -100 to 100 */
        let step = Math.abs(50 + stepLim - stepCount);
        // /* 0 to 200 */
        // let mod = alp % 100;
        // let alp2 = (100 - mod) / 100;
        let alp = (50 - step) / 50;
        Constellation2(alp);
        if(stepCount > (stepLim + 100)){
            stepCount = 0;
        }
    }
    // Constellation2(.5);
    // Constellation();
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
    // requestAnimationFrame(animate);
    setTimeout(() => {
        requestAnimationFrame(animate);
    }, s.timeOut)
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

function Constellation2(alp){
    ctx.fillStyle = `#fff0`;
    ctx.strokeStyle = `hsla(210, 100%, 100%, ${alp/2})`;
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