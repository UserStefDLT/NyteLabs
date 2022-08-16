const canvas = {}
const ctx = {}
var layers = ['canvas_gf', 'canvas_grid','canvas_trace','canvas_orbit','canvas_over'];
// var layers_clear = ['0','0','.1','1','1'];
var layers_clear = [0,0,-1,1,1];
const toggle_layers = {
    'canvas_trace': false,
    'canvas_gf': true,
    'canvas_grid': true,
    'canvas_orbit': true,
    'canvas_over': true
};

const particles = [];
const s = {
    x: window.innerWidth/2,
    y: window.innerHeight/2,

    xh2: window.innerWidth/2,
    yh2: window.innerHeight/2,
    zh2: (window.innerWidth+window.innerHeight)/4,

    r: 3,
    c: 0,
    hue: 0,
    hue_steps: 6,
    hue_step: 360/6,
    lum_step: 20,

    'vh': window.innerHeight,
    'vw': window.innerWidth,
    'hh': Math.sqrt(window.innerWidth**2 + window.innerHeight**2),

    gf: {'x':0,'y':0},
    gfr: 100,
    gfiamp: 1,
    gfamp: 10,
    gf_reduction: 100,
    gf_amplification: 10,
    fLost: .1,

    gf_active: false,

    arrow: false,
    huesp: true,
    quid: false,
    speedsize: false,
    trace: false,
    tags: false,
    log: false,
    pause: false,
    s: false,
    w: false,
    q: false,
    z: 30
}
const o = {'x': s.vw/2, 'y': s.vh/2};

const sectorGf = {}
const sector = {};
const ss = {
    "sector": {"size": 100, "pps": 10}
};

const adjecentSectors3 = [[0,1],[1,-1],[1,0],[1,1]];
// var directions = {
//     '1': {'x':-1, 'y':1},
//     '2': {'x':0, 'y':1},
//     '3': {'x':1, 'y':1},
//     '4': {'x':-1, 'y':0},
//     '5': {'x':0, 'y':0},
//     '6': {'x':1, 'y':0},
//     '7': {'x':-1, 'y':-1},
//     '8': {'x':0, 'y':-1},
//     '9': {'x':1, 'y':-1}
// }

var initialSpeed = 0;
var sStyle = {
    's': `background-color: #fff; color: #000; padding: .0625rem .125rem; border-radius: .25rem; font-weight: bold;`,
    'n': `color: #ccc;`,
    'setting': `color: #fff;`,
    'bool': `background-color: #39f2; color: #39f; padding: .0625rem .25rem; border-radius: .25rem;`,
};

function StartLayers(){
    layers.forEach(layer=>{
        canvas[layer] = document.getElementById(layer);
        ctx[layer] = canvas[layer].getContext('2d');
        canvas[layer].width = window.innerWidth;
        canvas[layer].height = window.innerHeight;
    })
}
window.addEventListener('resize', () =>{
    layers.forEach(layer=>{
        canvas[layer].width = window.innerWidth;
        canvas[layer].height = window.innerHeight;
    })
    s.vh = window.innerHeight;
    s.vw = window.innerWidth;
    s.hh = Math.sqrt(window.innerWidth**2 + window.innerHeight**2)
    
    s.xh2 = window.innerWidth/2,
    s.yh2 = window.innerHeight/2,
    s.zh2 = (window.innerWidth+window.innerHeight)/4,
    o.x = s.vw/2;
    o.y = s.vh/2;

    ctx['canvas_grid'].clearRect(0,0,canvas['canvas_grid'].width, canvas['canvas_grid'].height);
    DrawGrid(ctx['canvas_grid']);
});

function DrawGrid(ctx, space = 100){
    let rowCount = s.vh / space;
    let colCount = s.vw / space;
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#222';
    ctx.beginPath();
    for (let y = 0; y < rowCount; y++) {
        let ys = y*space;

        ctx.moveTo(0, ys);
        ctx.lineTo(s.vw, ys);
    }
    for (let x = 0; x < colCount; x++) {
        let xs = x*space;

        ctx.moveTo(xs, 0);
        ctx.lineTo(xs, s.vh);
    }
    ctx.stroke();

    for (let y = 0; y < rowCount; y++) {
        for (let x = 0; x < colCount; x++) {
            let ys = (y*space)+50;
            let xs = (x*space)+50;
            let text = `(${x},${y})`;
            DrawTileText(ctx, text, {'x':xs,'y':ys}, hsla = {}, fontSize = 16, color = '#fff9', size = 1, fill = true)
        }
    }
}
function DrawTileText(ctx, text, yx = {'x':0,'y':0}, hsla = {}, fontSize = 16, color = '', size = 1, fill = true){
    let colorStyle = '#0000';
    let colorStyle_stroke = '#ffff';
    let colorStyle_fill = '#fff3';

    if(Object.keys(hsla).length > 0){
        colorStyle = `hsla(${hsla.h}, ${hsla.s}%, ${hsla.l}%, ${hsla.a})`;
        colorStyle_stroke = `hsla(${hsla.h}, ${hsla.s}%, ${hsla.l}%, 1)`;
        colorStyle_fill = `hsla(${hsla.h}, ${hsla.s}%, 10%, 1)`;
    }
    if(color != '') {
        colorStyle = color;
        colorStyle_stroke = color;
        colorStyle_fill = color;
    }
    
    ctx.font = `${fontSize}px serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    let padding = 2;
    let x = yx.x + padding;
    let y = yx.y + padding;

    if(fill){
        ctx.fillStyle = colorStyle_stroke;
        ctx.fillText(text, x, y);
    } else {
        ctx.strokeStyle = colorStyle_stroke;
        ctx.strokeText(text, x, y);
    }
    // console.log(` ─────────────── `);
}
function DrawTags(ctxid = 'canvas_over'){
    // ctx[ctxid].clearRect(0,0,canvas[ctxid].width, canvas[ctxid].height);
    let this_ctx = ctx[ctxid];

    particles.forEach(p => {

        // let padding = 2;
        // let x = p.x + padding;
        // let y = p.y + padding;
        let fontSize = 6+p.size;

        this_ctx.font = `${fontSize}px serif`;
        this_ctx.textBaseline = "middle";
        this_ctx.textAlign = "center";

        this_ctx.fillStyle = p.clr;
        this_ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, 10%, ${p.alp})`;
        // this_ctx.fillText(p.id, x, y);
        this_ctx.fillText(p.id, p.x, p.y);


        // let val = sectorGf[sid];
        // if(val > 10) {val = 10;}
        // let hue = 210 - (val * 30);
        // let sat = 100;
        // let lum = 20;
        // // let alp = ((val%5)/10 + .25).toFixed(2);
        // let alp = ((val)/20 + .25).toFixed(2);
        // let clr = `hsla(${hue}, ${sat}%, ${lum}%, ${alp})`;
        // this_ctx.beginPath();
        // this_ctx.fillStyle = clr;
        // this_ctx.arc(x, y, space/2, 0, Math.PI * 2);
        // this_ctx.fill();
    });
    // s.tags = true;
}

function DrawGf(ctxid = 'canvas_gf', space = 100){
    ctx[ctxid].clearRect(0,0,canvas[ctxid].width, canvas[ctxid].height);
    let targets = Object.keys(sectorGf);
    let this_ctx = ctx[ctxid];

    targets.forEach(sid => {
        let x = parseInt(sid.split(',')[0])*100 + space/2;
        let y = parseInt(sid.split(',')[1])*100 + space/2;

        let val = sectorGf[sid];
        if(val > 10) {val = 10;}
        let hue = 210 - (val * 30);
        let sat = 100;
        let lum = 20;
        // let alp = ((val%5)/10 + .25).toFixed(2);
        let alp = ((val)/20 + .25).toFixed(2);
        let clr = `hsla(${hue}, ${sat}%, ${lum}%, ${alp})`;
        this_ctx.beginPath();
        this_ctx.fillStyle = clr;
        this_ctx.arc(x, y, space/2, 0, Math.PI * 2);
        this_ctx.fill();
    });
}

function settingsLog(s_log = ['']){
    if(!s.q){
        if(Array.isArray(s_log)){
            console.log(...s_log);
        }
        if(typeof s_log == 'string'){
            console.log(s_log);
        }
    }
}
function safeLog(arr = [''], bypass = false){
    if(!s.q){
        if(s.log || bypass){
            if(Array.isArray(arr)){
                console.log(...arr);
            }
            if(typeof arr == 'string'){
                console.log(arr);
            }
        }
    }
}


// class point {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
// }

class MouseParticle3 {
    constructor(ctxid, id = 29, speed = 0, xyzd = []){
        this.ctx = ctx[ctxid];
        this.canvas = canvas[ctxid];
        this.depth = (this.canvas.height + this.canvas.width)/2;
        this.id = id;
        /* location = ('x', 'y'), and direction = ('d') */

        this.size = 10;

        // this.x = s.vw/2;
        // this.y = s.vh/2;
        // this.d = Math.floor(Math.random() * 360);
        this.speed = speed;
        
        if(xyzd.length > 0) {
            this.x = xyzd[0];
            this.y = xyzd[1];
            this.z = xyzd[2];
            this.d = xyzd[3];
        } else {
            this.x = Math.random() * (this.canvas.width - this.size*2) + this.size;
            this.y = Math.random() * (this.canvas.height - this.size*2) + this.size;
            this.z = Math.random() * (this.depth - this.size*2) + this.size;
            this.d = Math.floor(Math.random() * 360);
        }
        this.d2 = Math.floor(Math.random() * 360);
        
        this.size = 5 + (this.z/this.depth * 10);


        // this.hue = this.id * 60;
        this.huesp = 210 - (this.speed * 30);
        this.huei = Math.floor(Math.random() * 360);
        this.hue = 210;
        this.sat = 100;
        this.lum = 60;
        this.lum = 20 + (this.z/this.depth * 40);
        this.alp = 1;
        this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;

        this.path = [[this.x,this.y,this.hue]];

        // this.size = 10;
        this.rad = 0;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.directionUpdate();

        this.forceQueue = [];
        this.momentumQueue = [];

        this.sid = '';
        this.stepCount = 0;
        this.sectorCheck();

        this.mass = 1;
        this.vel = 1;
        this.ke = this.mass * this.vel;

        this.tpsp = 0;

        this.trace = [];

        this.idStyle = `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`;
        this.pstyle = `background-color: ${this.clr}; color: hsl(${this.hue}, 100%, 5%); padding: .125rem .25rem; border-radius: .25rem;`;
        safeLog([`🌌%cid:${this.id}%c💫 at (%c${this.x.toFixed(1)}%c,%c${this.y.toFixed(1)}%c)`, this.idStyle, 'color: #999;', this.pstyle, 'color: #999;', this.pstyle, 'color: #999;']);

        this.initialTime = new Date();
        this.time = new Date();
        this.intervalID = 0;
    }
    getTime(){
        return Date.now() - this.time.getTime();
        // startStep(){
        //     this.intervalID = setInterval(this.setStep(), 1000);
        // }
        // setStep(){
        //     if(!s.q && !s.pause){
        //         this.updateTrace();
        //     }
        // }
        // endStep(){
        //     clearInterval(this.intervalID);
        // }
    }
    sectorCheck(){
        /* change it so it takes more than 100, about 20 more on each side. */
        /* also, so it doesn't delete it unless it is outside of this extra area. */
        let xid = Math.floor(this.x/100);
        let yid = Math.floor(this.y/100);
        let sid = `${xid},${yid}`;
        // console.log(sid);
        if(sid != this.sid){
            // console.log(`Particle (#${this.id}) → new sid: (${sid})`);
            if(this.sid != ''){
                delete sector[this.sid][this.id];
                sectorGf[this.sid] = Object.keys(sector[this.sid]).length;
                if(Object.keys(sector[this.sid]).length == 0) {
                    delete sector[this.sid];
                    delete sectorGf[this.sid];
                }
            }
            if(!Object.keys(sector).includes(sid)) {
                sector[sid] = {}
            }
            sector[sid][this.id] = this;

            sectorGf[sid] = Object.keys(sector[sid]).length;
            DrawGf();

            this.sid = sid;
        }
        // console.log(`─────────────────────────────`);
    }
    identify(){
        // console.log(`id:${this.id} → ${this.d}deg.`);
        console.log(`─────────────────────────────`);
        console.log(`id:${this.id} \n\t→ a: ${this.d}deg. \n\t→ sp: ${this.speed}. \n\t→ x: ${this.x}, y: ${this.y}`);
        // console.log(`\t→ x: ${this.x}, y: ${this.y}`);
        // if(this.forceQueue.length > 0){
        //     console.log(`\t→ forceQueue: ${this.forceQueue.length}`);
        // }
        console.log(`─────────────────────────────`);
    }
    identifyXY(){
        console.log(`\tid:${this.id} move → (x:${this.x}, y:${this.y})`);
    }
    updateColors(){
        // this.hue = 210 - (this.speed%10 * 30);
        if(!s.huesp){
            this.huesp = 210 - (this.speed%10 * 30);
            this.hue = this.huesp;
        } else {
            // this.huei += parseFloat((Math.random() * 3 - 1.5).toFixed(2));
            this.huei += parseFloat((Math.random() * 3 - 1.5).toFixed(2));
            this.hue = this.huei%360;

            // let sat = parseFloat((Math.random() * 2 - 1).toFixed(2));
            // this.sat += sat;
            // if(this.sat > 100 || this.sat < 50) { this.sat -= sat*2; }
            
            // let lum = parseFloat((Math.random() * 2 - 1).toFixed(2));
            // this.lum += lum;
            // if(this.lum > 70 || this.lum < 20) { this.lum -= lum*2; }
            
            // this.lum = 20 + (this.z/this.depth * 40);
        }
        // safeLog([`this.hue: %c${this.hue.toFixed(1)}`, `background-color: hsla(210, 100%, 100%, .2); color: #fff; padding: .125rem .25rem; border-radius: .25rem;`]);
        this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        this.pstyle = `background-color: ${this.clr}; color: hsl(${this.hue}, 100%, 5%); padding: .125rem .25rem; border-radius: .25rem;`;
        this.idStyle = `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`;
    }
    addForces(){
        let this_x_force = this.speed * this.dx;
        let this_y_force = this.speed * this.dy;

        let adding_x_force = this_x_force;
        let adding_y_force = this_y_force;

        this.forceQueue.forEach(force => {
            // console.log(`%cforce.speed: %c${force.speed.toFixed(8)}%c, force.d: %c${force.d.toFixed(1)}°`, "color: white", this.pstyle, "color: white", this.pstyle);
            let xy = this.AngleToXY(force.d);
            // console.log(`%cxy.x: %c${xy.x}%c, xy.y: %c${xy.y}`, "color: white", this.pstyle, "color: white", this.pstyle);
            let fsp = parseFloat(force.speed);
            // console.log(`fsp: %c${fsp}`, this.pstyle);
            let new_x_force = fsp * xy.x;
            let new_y_force = fsp * xy.y;
            // console.log(`%cnew_x_force: %c${new_x_force}%c, new_y_force: %c${new_y_force}`, "color: white", this.pstyle, "color: white", this.pstyle);

            adding_x_force += new_x_force;
            adding_y_force += new_y_force;
            // console.log(`%cadding_x_force: %c${adding_x_force}%c, adding_y_force: %c${adding_y_force}`, "color: white", this.pstyle, "color: white", this.pstyle);
        });
        this.d = this.XYtoAngle(adding_x_force,adding_y_force);
        this.speed = Math.sqrt(adding_x_force**2 + adding_y_force**2);

        // let nd = this.XYtoAngle(adding_x_force,adding_y_force);
        // console.log(`📐 nd: %c${nd.toFixed(1)}°`, this.pstyle);
        // this.d = nd;
        // let nsp = Math.sqrt(adding_x_force**2 + adding_y_force**2);
        // console.log(`⏱ nsp: %c${nsp.toFixed(8)}`, this.pstyle);
        // this.speed = nsp;

        // safeLog([`%c${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, `background-color: white; color: black; padding: .125rem .25rem; border-radius: .25rem;`, "color: white", this.pstyle, "color: white", this.pstyle]);
        // safeLog([`%cid:${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`, "color: white", this.pstyle, "color: white", this.pstyle]);
        // safeLog([`%cid:${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, this.idStyle, "color: white", this.pstyle, "color: white", this.pstyle]);

        // if(this.speed > 5) {this.speed = 5;}
        if(this.speed > 10) {this.speed = 10;}
        
        this.forceQueue = [];
        this.updateColors();
        this.directionUpdate();
        this.move();
    }
    AngleToXYZ(){
        this.rad = this.d * Math.PI / 180;
        this.rad2 = this.d2 * Math.PI / 180;
        if(this.d == 180) {this.dy = 0;} else {this.dy = Math.sin(this.rad);}
        if(this.d == 90 || this.d == 270) {this.dx = 0;} else {this.dx = Math.cos(this.rad);}

        /* xy axis will do a circle, and z will use a second circle. */
        /* the circle for z will be rotated on z axis  */
        // if(this.d2 == 180) {
        //     this.dy = 0;
        // } else {
        //     this.dy = Math.sin(this.rad);
        // }
        // if(this.d2 == 90 || this.d2 == 270) {
        //     this.dx = 0;
        // } else {
        //     this.dx = Math.cos(this.rad);
        // }
    }
    AngleToXY(angle){
        angle = angle%360;
        let rad = angle * Math.PI / 180;
        let xy = {"x":0,"y":0};
        if(angle == 180) {xy.y = 0;} else {xy.y = Math.sin(rad);}
        if(angle == 90 || angle == 270) {xy.x = 0;} else {xy.x = Math.cos(rad);}
        return xy;
    }
    XYtoAngle(x,y){
        x = Math.round(x*1000);
        y = Math.round(y*1000);
        let angle = 0;
        if(x == 0) {
            if(y > 0) {return 90;}
            if(y < 0) {return 270;}
        }
        if(x < 0) { angle += 180; }
        if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
        return angle;
    }
    updateTrace(){
        this.trace.push([this.x,this.y,this.hue,this.getTime()]);
        if(this.trace.length > 6) {
            this.trace.shift();
        }
    }
    updatePath(){
        this.path.push([this.x,this.y,this.hue]);
        if(this.path.length > 3) {
            this.path.shift();
        }
    }
    directionUpdate(){
        // this.d = (this.d+360)%360;
        this.rad = this.d * Math.PI / 180;
        if(this.d == 180) {this.dy = 0;} else {this.dy = Math.sin(this.rad);}
        if(this.d == 90 || this.d == 270) {this.dx = 0;} else {this.dx = Math.cos(this.rad);}

        // let xy = AngleToXY(this.d);
        // let xyz = AngleToXY(this.d2);


        // this.size = 5 + (this.z/this.depth * 10);
        // this.vx = this.speed * this.dx;
        // this.vy = this.speed * this.dy;
        this.updatePath();

        // this.hue = this.direction - 90;
        // this.hue = this.hueStart + (this.direction%90) - 45;
        // this.size -= this.size/8;
        // if(this.size < 3) this.size = 3;

        // this.collisionCheck();
    }
    wallBounce(wall_angle){
        let aper1 = (wall_angle + 90) % 360;
        let aper2 = (wall_angle + 270) % 360;
        let new_angle = 0;
        let dif = Math.abs(wall_angle - this.d)%180;
        if(dif != 0) {
            let a1 = Math.max(aper1,aper2);
            let a2 = Math.min(aper1,aper2);
            new_angle = a1 + (a2 - this.d);
        }
        this.d = (new_angle + 360) % 360;
    }
    followCursor(){
        let xAway = s.x - this.x;
        let yAway = s.y - this.y;
        let dAway = XYtoAngle(xAway,yAway);
        let h2 = Math.sqrt(xAway**2 + yAway**2) - 20;
        let hd = h2/s.hh;
        let f0 = hd * .5;
        this.forceQueue.push({'speed':f0, 'd':dAway});
        // statusReport({'x':xAway,'y':yAway,'d':dAway,'h':h2,'f':this.speed});
        statusReport({'x':s.x,'y':s.y,'d':dAway,'h':h2,'f':this.speed});
    }
    mousePull(){
        // let xAway = s.x - this.x;
        // let yAway = s.y - this.y;
        let xAway = s.xh2 - this.x;
        let yAway = s.yh2 - this.y;
        // let xAway = this.x - s.x;
        // let yAway = s.x - this.x;
        // safeLog([`%cxAway: %c${xAway}%c | yAway: %c${yAway}`, 'color: #ccc;', this.pstyle, 'color: #ccc;', this.pstyle]);
        // let hAway = Math.sqrt(xAway**2 + yAway**2);
        let h1 = Math.abs(xAway) + Math.abs(yAway);
        // safeLog([`distance: %c${h1}`, this.pstyle]);
        let f1 = 0;
        let dAway = 0;
        if(h1 > this.size){
            f1 = 1 / (h1 + 10);
            dAway = XYtoAngle(xAway,yAway);
            this.forceQueue.push({'speed':f1, 'd':dAway});
        }
        // statusReport({'x':xAway,'y':yAway,'d':dAway,'h':h1,'f':f1});
    }
    move(){
        this.x += this.speed * this.dx;
        this.y += this.speed * this.dy;

        if(this.x > this.canvas.width-this.size || this.x < this.size){
            this.wallBounce(90);
            this.directionUpdate();
        }
        if(this.y > this.canvas.height-this.size || this.y < this.size){
            this.wallBounce(0);
            this.directionUpdate();
        }

        this.stepCount += 1;
        if(this.stepCount > this.size){
            this.updateTrace();
            this.sectorCheck();
            this.stepCount = 0;
        }

        // if(this.stepCount > this.size){
        //     this.updateTrace();
        // }
        // this.updateTrace();
    }
    update(){
        if(this.forceQueue.length > 0){
            // console.log(`─────`);
            this.addForces();
            // console.log(`─────`);
        }
        if(this.momentumQueue.length > 0){this.addMomentum();}

        if(this.speed > 9) {
            console.warn('💢Too Fast❗');
            slowDown();
        }
        this.move();
        // this.calcSpeed();
        // this.mousePull();
        this.followCursor();
    }
    drawArrow(){
        let arrow_len = 10;
        let arrow_thickness = 10;
        let nx = this.x + (this.dx * (this.speed + 1) * arrow_len);
        let ny = this.y + (this.dy * (this.speed + 1) * arrow_len);
        let nx2 = nx + (this.dx * arrow_thickness);
        let ny2 = ny + (this.dy * arrow_thickness);
        let nd = this.rad + (.8 * Math.PI);
        let nd2 = this.rad - (.8 * Math.PI);

        let ctx_over = ctx['canvas_over'];

        ctx_over.beginPath();
        ctx_over.lineWidth = arrow_thickness*.5;
        // // ctx_trace.lineWidth = sz*.5;
        ctx_over.strokeStyle = '#fffc';
        ctx_over.moveTo(this.x, this.y);
        ctx_over.lineTo(nx, ny);
        ctx_over.stroke();

        ctx_over.beginPath();
        ctx_over.fillStyle = '#fffc';
        ctx_over.arc(nx2, ny2, arrow_thickness, nd, nd2);
        ctx_over.lineTo(nx2, ny2);
        ctx_over.fill();
    }
    draw(){
        // this.drawPath();
        if(s.trace){this.drawTrace();}

        this.ctx.beginPath();
        this.ctx.fillStyle = this.clr;
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();

        if(s.arrow){this.drawArrow();}
    }
    drawPath(){
        // this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // let alp2 = 1;
        if(this.path.length > 1){
            this.ctx.beginPath();
            let ox = this.x;
            let oy =  this.y;
            for (let i = this.path.length - 1; i > 0; i--) {
                let nx = this.path[i][0];
                let ny = this.path[i][1];
                this.ctx.lineWidth = i + 2;
                let alp2 = (i / this.path.length * .7) + .2;
                this.ctx.strokeStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${alp2})`;
                this.ctx.moveTo(ox, oy);
                this.ctx.lineTo(nx, ny);
                this.ctx.stroke();
                ox = nx;
                oy = ny;
            }
        }
    }
    drawTrace(){
        if(this.trace.length > 1){
            let ctx_trace = ctx['canvas_trace'];
            let ox = this.x;
            let oy = this.y;
            for (let i = this.trace.length - 1; i > -1; i--) {
                let nx = this.trace[i][0];
                let ny = this.trace[i][1];
                let sz = (i / this.trace.length * 4) + 2;
                ctx_trace.beginPath();
                ctx_trace.fillStyle = this.clr;
                ctx_trace.arc(nx, ny, sz, 0, Math.PI * 2);
                ctx_trace.fill();
                ox = nx;
                oy = ny;
            }
        }
    }
}


class MouseParticle2 {
    constructor(ctxid, id = 29, speed = 0, xyzd = []){
        this.ctx = ctx[ctxid];
        this.canvas = canvas[ctxid];
        this.depth = (this.canvas.height + this.canvas.width)/2;
        this.id = id;
        /* location = ('x', 'y'), and direction = ('d') */

        this.size = 10;

        // this.x = s.vw/2;
        // this.y = s.vh/2;
        // this.d = Math.floor(Math.random() * 360);
        this.speed = speed;
        
        if(xyd.length > 0) {
            this.x = xyd[0];
            this.y = xyd[1];
            this.z = xyd[2];
            this.d = xyd[3];
        } else {
            this.x = Math.random() * (this.canvas.width - this.size*2) + this.size;
            this.y = Math.random() * (this.canvas.height - this.size*2) + this.size;
            this.z = Math.random() * (this.depth - this.size*2) + this.size;
            this.d = Math.floor(Math.random() * 360);
        }
        
        this.size = 5 + (this.z/this.depth * 10);


        // this.hue = this.id * 60;
        this.huesp = 210 - (this.speed * 30);
        this.huei = Math.floor(Math.random() * 360);
        this.hue = 210;
        this.sat = 100;
        this.lum = 60;
        this.lum = 20 + (this.z/this.depth * 40);
        this.alp = 1;
        this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;

        this.path = [[this.x,this.y,this.hue]];

        // this.size = 10;
        this.rad = 0;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.directionUpdate();

        this.forceQueue = [];
        this.momentumQueue = [];

        this.sid = '';
        this.stepCount = 0;
        this.sectorCheck();

        this.mass = 1;
        this.vel = 1;
        this.ke = this.mass * this.vel;

        this.tpsp = 0;

        this.trace = [];

        this.idStyle = `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`;
        this.pstyle = `background-color: ${this.clr}; color: hsl(${this.hue}, 100%, 5%); padding: .125rem .25rem; border-radius: .25rem;`;
        safeLog([`🌌%cid:${this.id}%c💫 at (%c${this.x.toFixed(1)}%c,%c${this.y.toFixed(1)}%c)`, this.idStyle, 'color: #999;', this.pstyle, 'color: #999;', this.pstyle, 'color: #999;']);

        this.initialTime = new Date();
        this.time = new Date();
        this.intervalID = 0;
    }
    getTime(){
        return Date.now() - this.time.getTime();
        // startStep(){
        //     this.intervalID = setInterval(this.setStep(), 1000);
        // }
        // setStep(){
        //     if(!s.q && !s.pause){
        //         this.updateTrace();
        //     }
        // }
        // endStep(){
        //     clearInterval(this.intervalID);
        // }
    }
    sectorCheck(){
        /* change it so it takes more than 100, about 20 more on each side. */
        /* also, so it doesn't delete it unless it is outside of this extra area. */
        let xid = Math.floor(this.x/100);
        let yid = Math.floor(this.y/100);
        let sid = `${xid},${yid}`;
        // console.log(sid);
        if(sid != this.sid){
            // console.log(`Particle (#${this.id}) → new sid: (${sid})`);
            if(this.sid != ''){
                delete sector[this.sid][this.id];
                sectorGf[this.sid] = Object.keys(sector[this.sid]).length;
                if(Object.keys(sector[this.sid]).length == 0) {
                    delete sector[this.sid];
                    delete sectorGf[this.sid];
                }
            }
            if(!Object.keys(sector).includes(sid)) {
                sector[sid] = {}
            }
            sector[sid][this.id] = this;

            sectorGf[sid] = Object.keys(sector[sid]).length;
            DrawGf();

            this.sid = sid;
        }
        // console.log(`─────────────────────────────`);
    }
    identify(){
        // console.log(`id:${this.id} → ${this.d}deg.`);
        console.log(`─────────────────────────────`);
        console.log(`id:${this.id} \n\t→ a: ${this.d}deg. \n\t→ sp: ${this.speed}. \n\t→ x: ${this.x}, y: ${this.y}`);
        // console.log(`\t→ x: ${this.x}, y: ${this.y}`);
        // if(this.forceQueue.length > 0){
        //     console.log(`\t→ forceQueue: ${this.forceQueue.length}`);
        // }
        console.log(`─────────────────────────────`);
    }
    identifyXY(){
        console.log(`\tid:${this.id} move → (x:${this.x}, y:${this.y})`);
    }
    updateColors(){
        // this.hue = 210 - (this.speed%10 * 30);
        if(!s.huesp){
            this.huesp = 210 - (this.speed%10 * 30);
            this.hue = this.huesp;
        } else {
            // this.huei += parseFloat((Math.random() * 3 - 1.5).toFixed(2));
            this.huei += parseFloat((Math.random() * 3 - 1.5).toFixed(2));
            this.hue = this.huei%360;

            let sat = parseFloat((Math.random() * 2 - 1).toFixed(2));
            this.sat += sat;
            if(this.sat > 100 || this.sat < 50) { this.sat -= sat*2; }
            
            // let lum = parseFloat((Math.random() * 2 - 1).toFixed(2));
            // this.lum += lum;
            // if(this.lum > 70 || this.lum < 20) { this.lum -= lum*2; }
            
            this.lum = 20 + (this.z/this.depth * 40);
        }
        // safeLog([`this.hue: %c${this.hue.toFixed(1)}`, `background-color: hsla(210, 100%, 100%, .2); color: #fff; padding: .125rem .25rem; border-radius: .25rem;`]);
        this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        this.pstyle = `background-color: ${this.clr}; color: hsl(${this.hue}, 100%, 5%); padding: .125rem .25rem; border-radius: .25rem;`;
        this.idStyle = `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`;
    }
    addForces(){
        let this_x_force = this.speed * this.dx;
        let this_y_force = this.speed * this.dy;

        let adding_x_force = this_x_force;
        let adding_y_force = this_y_force;

        this.forceQueue.forEach(force => {
            // console.log(`%cforce.speed: %c${force.speed.toFixed(8)}%c, force.d: %c${force.d.toFixed(1)}°`, "color: white", this.pstyle, "color: white", this.pstyle);
            let xy = this.AngleToXY(force.d);
            // console.log(`%cxy.x: %c${xy.x}%c, xy.y: %c${xy.y}`, "color: white", this.pstyle, "color: white", this.pstyle);
            let fsp = parseFloat(force.speed);
            // console.log(`fsp: %c${fsp}`, this.pstyle);
            let new_x_force = fsp * xy.x;
            let new_y_force = fsp * xy.y;
            // console.log(`%cnew_x_force: %c${new_x_force}%c, new_y_force: %c${new_y_force}`, "color: white", this.pstyle, "color: white", this.pstyle);

            adding_x_force += new_x_force;
            adding_y_force += new_y_force;
            // console.log(`%cadding_x_force: %c${adding_x_force}%c, adding_y_force: %c${adding_y_force}`, "color: white", this.pstyle, "color: white", this.pstyle);
        });
        this.d = this.XYtoAngle(adding_x_force,adding_y_force);
        this.speed = Math.sqrt(adding_x_force**2 + adding_y_force**2);

        // let nd = this.XYtoAngle(adding_x_force,adding_y_force);
        // console.log(`📐 nd: %c${nd.toFixed(1)}°`, this.pstyle);
        // this.d = nd;
        // let nsp = Math.sqrt(adding_x_force**2 + adding_y_force**2);
        // console.log(`⏱ nsp: %c${nsp.toFixed(8)}`, this.pstyle);
        // this.speed = nsp;

        // safeLog([`%c${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, `background-color: white; color: black; padding: .125rem .25rem; border-radius: .25rem;`, "color: white", this.pstyle, "color: white", this.pstyle]);
        // safeLog([`%cid:${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`, "color: white", this.pstyle, "color: white", this.pstyle]);
        // safeLog([`%cid:${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, this.idStyle, "color: white", this.pstyle, "color: white", this.pstyle]);

        // if(this.speed > 5) {this.speed = 5;}
        if(this.speed > 10) {this.speed = 10;}
        
        this.forceQueue = [];
        this.updateColors();
        this.directionUpdate();
        this.move();
    }
    AngleToXY(angle){
        angle = angle%360;
        let rad = angle * Math.PI / 180;
        let xy = {"x":0,"y":0};
        if(angle == 180) {xy.y = 0;} else {xy.y = Math.sin(rad);}
        if(angle == 90 || angle == 270) {xy.x = 0;} else {xy.x = Math.cos(rad);}
        return xy;
    }
    XYtoAngle(x,y){
        x = Math.round(x*1000);
        y = Math.round(y*1000);
        let angle = 0;
        if(x == 0) {
            if(y > 0) {return 90;}
            if(y < 0) {return 270;}
        }
        if(x < 0) { angle += 180; }
        if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
        return angle;
    }
    updateTrace(){
        this.trace.push([this.x,this.y,this.hue,this.getTime()]);
        if(this.trace.length > 6) {
            this.trace.shift();
        }
    }
    updatePath(){
        this.path.push([this.x,this.y,this.hue]);
        if(this.path.length > 3) {
            this.path.shift();
        }
        // ctx['canvas_trace'].fillStyle = '#00000022';
        // ctx['canvas_trace'].fillRect(0, 0, canvas['canvas_trace'].width, canvas['canvas_trace'].height);
    }
    directionUpdate(){
        // this.d = (this.d+360)%360;
        this.rad = this.d * Math.PI / 180;
        if(this.d == 180) {this.dy = 0;} else {this.dy = Math.sin(this.rad);}
        if(this.d == 90 || this.d == 270) {this.dx = 0;} else {this.dx = Math.cos(this.rad);}

        // this.size = 5 + (this.z/this.depth * 10);
        // this.vx = this.speed * this.dx;
        // this.vy = this.speed * this.dy;
        this.updatePath();

        // this.hue = this.direction - 90;
        // this.hue = this.hueStart + (this.direction%90) - 45;
        // this.size -= this.size/8;
        // if(this.size < 3) this.size = 3;

        // this.collisionCheck();
    }
    wallBounce(wall_angle){
        let aper1 = (wall_angle + 90) % 360;
        let aper2 = (wall_angle + 270) % 360;
        let new_angle = 0;
        let dif = Math.abs(wall_angle - this.d)%180;
        if(dif != 0) {
            let a1 = Math.max(aper1,aper2);
            let a2 = Math.min(aper1,aper2);
            new_angle = a1 + (a2 - this.d);
        }
        this.d = (new_angle + 360) % 360;
    }
    followCursor(){
        let xAway = s.x - this.x;
        let yAway = s.y - this.y;
        let dAway = XYtoAngle(xAway,yAway);

        let h2 = Math.sqrt(xAway**2 + yAway**2) - 20;
        let hd = h2/s.hh;

        // let f0 = hd * 5 + 1;
        // if(hd > 0.5){
        //     this.d = dAway;
        //     this.speed = hd * 5 + 1;
        //     this.updateColors();
        //     this.directionUpdate();
        // } else {
        //     f0 = hd * 1 - 0.1;
        //     this.forceQueue.push({'speed':f0, 'd':dAway});
        // }

        let f0 = hd * .5;
        // let f0 = hd * 1 + s.fLost;
        this.forceQueue.push({'speed':f0, 'd':dAway});

        statusReport({'x':xAway,'y':yAway,'d':dAway,'h':h2,'f':this.speed});
    }
    mousePull(){
        let xAway = s.x - this.x;
        let yAway = s.y - this.y;
        // let xAway = this.x - s.x;
        // let yAway = s.x - this.x;
        // safeLog([`%cxAway: %c${xAway}%c | yAway: %c${yAway}`, 'color: #ccc;', this.pstyle, 'color: #ccc;', this.pstyle]);
        // let hAway = Math.sqrt(xAway**2 + yAway**2);
        let h1 = Math.abs(xAway) + Math.abs(yAway);
        // safeLog([`distance: %c${h1}`, this.pstyle]);
        let f1 = 0;
        let dAway = 0;
        if(h1 > this.size){
            f1 = 1 / (h1 + 10);
            // safeLog([`force: %c${f1}`, this.pstyle]);
            dAway = XYtoAngle(xAway,yAway);
            // safeLog([`mouse direction: %c${dAway}`, this.pstyle]);

            this.forceQueue.push({'speed':f1, 'd':dAway});
        }
        // let xyAway = AngleToXY(dAway);
        // this.x += this.speed * this.xyAway.x;
        // this.y += this.speed * this.xyAway.y;
        statusReport({'x':xAway,'y':yAway,'d':dAway,'h':h1,'f':f1});
    }
    move(){
        this.x += this.speed * this.dx;
        this.y += this.speed * this.dy;

        if(this.x > this.canvas.width-this.size || this.x < this.size){
            this.wallBounce(90);
            this.directionUpdate();
        }
        if(this.y > this.canvas.height-this.size || this.y < this.size){
            this.wallBounce(0);
            this.directionUpdate();
        }

        this.stepCount += 1;
        if(this.stepCount > this.size){
            this.updateTrace();
            this.sectorCheck();
            this.stepCount = 0;
        }

        // if(this.stepCount > this.size){
        //     this.updateTrace();
        // }
        // this.updateTrace();
    }
    update(){
        if(this.forceQueue.length > 0){
            // console.log(`─────`);
            this.addForces();
            // console.log(`─────`);
        }
        if(this.momentumQueue.length > 0){this.addMomentum();}

        this.move();
        // this.calcSpeed();
        // this.mousePull();
        this.followCursor();
    }
    drawArrow(){
        let arrow_len = 10;
        let arrow_thickness = 10;
        let nx = this.x + (this.dx * (this.speed + 1) * arrow_len);
        let ny = this.y + (this.dy * (this.speed + 1) * arrow_len);
        let nx2 = nx + (this.dx * arrow_thickness);
        let ny2 = ny + (this.dy * arrow_thickness);
        let nd = this.rad + (.8 * Math.PI);
        let nd2 = this.rad - (.8 * Math.PI);

        let ctx_over = ctx['canvas_over'];

        ctx_over.beginPath();
        ctx_over.lineWidth = arrow_thickness*.5;
        // // ctx_trace.lineWidth = sz*.5;
        ctx_over.strokeStyle = '#fffc';
        ctx_over.moveTo(this.x, this.y);
        ctx_over.lineTo(nx, ny);
        ctx_over.stroke();

        ctx_over.beginPath();
        ctx_over.fillStyle = '#fffc';
        // ctx_over.arc(nx, ny, 2, nd, Math.PI * .5);
        // ctx_over.arc(nx, ny, arrow_thickness*2, nd, nd2);
        ctx_over.arc(nx2, ny2, arrow_thickness, nd, nd2);
        ctx_over.lineTo(nx2, ny2);
        ctx_over.fill();
    }
    draw(){
        // this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // this.ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // this.drawPath();
        if(s.trace){this.drawTrace();}

        this.ctx.beginPath();
        this.ctx.fillStyle = this.clr;
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();

        // this.drawArrow();
        if(s.arrow){this.drawArrow();}
    }
    drawPath(){
        // this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // let alp2 = 1;
        if(this.path.length > 1){
            this.ctx.beginPath();
            let ox = this.x;
            let oy =  this.y;
            for (let i = this.path.length - 1; i > 0; i--) {
                let nx = this.path[i][0];
                let ny = this.path[i][1];
                this.ctx.lineWidth = i + 2;
                let alp2 = (i / this.path.length * .7) + .2;
                this.ctx.strokeStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${alp2})`;
                this.ctx.moveTo(ox, oy);
                this.ctx.lineTo(nx, ny);
                this.ctx.stroke();
                ox = nx;
                oy = ny;
            }
        }
    }
    drawTrace(){

        // this.ctx.fillStyle = this.clr;
        // this.ctx.beginPath();
        // this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // this.ctx.fill();

        // this.hue = 210 - (this.speed * 36);
        // let hue = 210 - (this.trace[i][2] * 30);

        if(this.trace.length > 1){
            let ctx_trace = ctx['canvas_trace'];
            // ctx_trace.beginPath();
            let ox = this.x;
            let oy = this.y;
            for (let i = this.trace.length - 1; i > -1; i--) {
                let nx = this.trace[i][0];
                let ny = this.trace[i][1];

                let sz = (i / this.trace.length * 4) + 2;
                // let sz = i+1;
                // let hue = 210 - (this.trace[i][2] * 30);
                // let hue = this.trace[i][2];
                // let alp2 = (i / this.trace.length * .7) + .2;
                // let alp2 = (i / this.trace.length * .75) + .05;
                // let alp2 = 1;
                // let clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${alp2})`;
                // let clr = `hsla(${hue}, ${this.sat}%, ${this.lum}%, ${alp2})`;

                // ctx_trace.beginPath();
                // ctx_trace.lineWidth = 1;
                // // ctx_trace.lineWidth = sz*.5;
                // ctx_trace.strokeStyle = clr;
                // ctx_trace.moveTo(ox, oy);
                // ctx_trace.lineTo(nx, ny);
                // ctx_trace.stroke();

                ctx_trace.beginPath();
                // ctx_trace.fillStyle = clr;
                ctx_trace.fillStyle = this.clr;
                // let sz = i%2+1;
                // let sz = (i / this.trace.length * 3) + 2;
                ctx_trace.arc(nx, ny, sz, 0, Math.PI * 2);
                ctx_trace.fill();

                ox = nx;
                oy = ny;
            }
        }
    }
}

class MouseParticle {
    constructor(ctxid, id = 89){
        this.ctx = ctx[ctxid];
        this.canvas = canvas[ctxid];
        this.id = id;
        /* location = ('x', 'y'), and direction = ('d') */

        this.size = 10;


        this.x = s.vw/2;
        this.y = s.vh/2;
        // this.x = s.x;
        // this.y = s.y;
        // this.d = 0;
        this.d = Math.floor(Math.random() * 360);
        this.speed = 0;
        
        // if(xyd.length > 0) {
        //     this.x = xyd[0];
        //     this.y = xyd[1];
        //     this.d = xyd[2];
        // } else {
        //     this.x = Math.random() * (this.canvas.width - this.size*2) + this.size;
        //     this.y = Math.random() * (this.canvas.height - this.size*2) + this.size;
        //     this.d = Math.floor(Math.random() * 360);
        // }


        // this.hue = this.id * 60;
        this.huesp = 210 - (this.speed * 30);
        this.huei = Math.floor(Math.random() * 360);
        this.hue = 210;
        this.sat = 100;
        this.lum = 60;
        this.alp = 1;
        this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;

        this.path = [[this.x,this.y,this.hue]];

        // this.size = 10;
        this.rad = 0;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.directionUpdate();

        this.forceQueue = [];
        this.momentumQueue = [];

        this.sid = '';
        this.stepCount = 0;
        this.sectorCheck();

        this.mass = 1;
        this.vel = 1;
        this.ke = this.mass * this.vel;

        this.tpsp = 0;

        this.trace = [];

        this.idStyle = `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`;
        this.pstyle = `background-color: ${this.clr}; color: hsl(${this.hue}, 100%, 5%); padding: .125rem .25rem; border-radius: .25rem;`;
        safeLog([`🌌%cid:${this.id}%c💫 at (%c${this.x.toFixed(1)}%c,%c${this.y.toFixed(1)}%c)`, this.idStyle, 'color: #999;', this.pstyle, 'color: #999;', this.pstyle, 'color: #999;']);

        this.initialTime = new Date();
        this.time = new Date();
        this.intervalID = 0;
    }
    getTime(){
        return Date.now() - this.time.getTime();
    }
    // startStep(){
    //     this.intervalID = setInterval(this.setStep(), 1000);
    // }
    // setStep(){
    //     if(!s.q && !s.pause){
    //         this.updateTrace();
    //     }
    // }
    // endStep(){
    //     clearInterval(this.intervalID);
    // }
    sectorCheck(){
        /* change it so it takes more than 100, about 20 more on each side. */
        /* also, so it doesn't delete it unless it is outside of this extra area. */
        let xid = Math.floor(this.x/100);
        let yid = Math.floor(this.y/100);
        let sid = `${xid},${yid}`;
        // console.log(sid);
        if(sid != this.sid){
            // console.log(`Particle (#${this.id}) → new sid: (${sid})`);
            if(this.sid != ''){
                delete sector[this.sid][this.id];
                sectorGf[this.sid] = Object.keys(sector[this.sid]).length;
                if(Object.keys(sector[this.sid]).length == 0) {
                    delete sector[this.sid];
                    delete sectorGf[this.sid];
                }
            }
            if(!Object.keys(sector).includes(sid)) {
                sector[sid] = {}
            }
            sector[sid][this.id] = this;

            sectorGf[sid] = Object.keys(sector[sid]).length;
            DrawGf();

            this.sid = sid;
        }
        // console.log(`─────────────────────────────`);
    }
    identify(){
        // console.log(`id:${this.id} → ${this.d}deg.`);
        console.log(`─────────────────────────────`);
        console.log(`id:${this.id} \n\t→ a: ${this.d}deg. \n\t→ sp: ${this.speed}. \n\t→ x: ${this.x}, y: ${this.y}`);
        // console.log(`\t→ x: ${this.x}, y: ${this.y}`);
        // if(this.forceQueue.length > 0){
        //     console.log(`\t→ forceQueue: ${this.forceQueue.length}`);
        // }
        console.log(`─────────────────────────────`);
    }
    identifyXY(){
        console.log(`\tid:${this.id} move → (x:${this.x}, y:${this.y})`);
    }
    updateColors(){
        // this.hue = 210 - (this.speed%10 * 30);
        if(!s.huesp){
            this.huesp = 210 - (this.speed%10 * 30);
            this.hue = this.huesp;
        } else {
            this.huei += parseFloat((Math.random() * 3 - 1.5).toFixed(2));
            this.hue = this.huei;
        }
        // safeLog([`this.hue: %c${this.hue.toFixed(1)}`, `background-color: hsla(210, 100%, 100%, .2); color: #fff; padding: .125rem .25rem; border-radius: .25rem;`]);
        this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        this.pstyle = `background-color: ${this.clr}; color: hsl(${this.hue}, 100%, 5%); padding: .125rem .25rem; border-radius: .25rem;`;
        this.idStyle = `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`;
    }
    addForces(){
        let this_x_force = this.speed * this.dx;
        let this_y_force = this.speed * this.dy;

        let adding_x_force = this_x_force;
        let adding_y_force = this_y_force;

        this.forceQueue.forEach(force => {
            // console.log(`%cforce.speed: %c${force.speed.toFixed(8)}%c, force.d: %c${force.d.toFixed(1)}°`, "color: white", this.pstyle, "color: white", this.pstyle);
            let xy = this.AngleToXY(force.d);
            // console.log(`%cxy.x: %c${xy.x}%c, xy.y: %c${xy.y}`, "color: white", this.pstyle, "color: white", this.pstyle);
            let fsp = parseFloat(force.speed);
            // console.log(`fsp: %c${fsp}`, this.pstyle);
            let new_x_force = fsp * xy.x;
            let new_y_force = fsp * xy.y;
            // console.log(`%cnew_x_force: %c${new_x_force}%c, new_y_force: %c${new_y_force}`, "color: white", this.pstyle, "color: white", this.pstyle);

            adding_x_force += new_x_force;
            adding_y_force += new_y_force;
            // console.log(`%cadding_x_force: %c${adding_x_force}%c, adding_y_force: %c${adding_y_force}`, "color: white", this.pstyle, "color: white", this.pstyle);
        });
        this.d = this.XYtoAngle(adding_x_force,adding_y_force);
        this.speed = Math.sqrt(adding_x_force**2 + adding_y_force**2);

        // let nd = this.XYtoAngle(adding_x_force,adding_y_force);
        // console.log(`📐 nd: %c${nd.toFixed(1)}°`, this.pstyle);
        // this.d = nd;
        // let nsp = Math.sqrt(adding_x_force**2 + adding_y_force**2);
        // console.log(`⏱ nsp: %c${nsp.toFixed(8)}`, this.pstyle);
        // this.speed = nsp;

        // safeLog([`%c${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, `background-color: white; color: black; padding: .125rem .25rem; border-radius: .25rem;`, "color: white", this.pstyle, "color: white", this.pstyle]);
        // safeLog([`%cid:${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`, "color: white", this.pstyle, "color: white", this.pstyle]);
        // safeLog([`%cid:${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, this.idStyle, "color: white", this.pstyle, "color: white", this.pstyle]);

        // if(this.speed > 5) {this.speed = 5;}
        if(this.speed > 10) {this.speed = 10;}
        
        this.updateColors();
        this.forceQueue = [];
        this.directionUpdate();
        this.move();
    }
    AngleToXY(angle){
        angle = angle%360;
        let rad = angle * Math.PI / 180;
        let xy = {"x":0,"y":0};
        if(angle == 180) {xy.y = 0;} else {xy.y = Math.sin(rad);}
        if(angle == 90 || angle == 270) {xy.x = 0;} else {xy.x = Math.cos(rad);}
        return xy;
    }
    XYtoAngle(x,y){
        x = Math.round(x*1000);
        y = Math.round(y*1000);
        let angle = 0;
        if(x == 0) {
            if(y > 0) {return 90;}
            if(y < 0) {return 270;}
        }
        if(x < 0) { angle += 180; }
        if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
        return angle;
    }
    updateTrace(){
        this.trace.push([this.x,this.y,this.hue,this.getTime()]);
        if(this.trace.length > 6) {
            this.trace.shift();
        }
    }
    updatePath(){
        this.path.push([this.x,this.y,this.hue]);
        if(this.path.length > 3) {
            this.path.shift();
        }
        // ctx['canvas_trace'].fillStyle = '#00000022';
        // ctx['canvas_trace'].fillRect(0, 0, canvas['canvas_trace'].width, canvas['canvas_trace'].height);
    }
    directionUpdate(){
        // this.d = (this.d+360)%360;
        this.rad = this.d * Math.PI / 180;
        if(this.d == 180) {this.dy = 0;} else {this.dy = Math.sin(this.rad);}
        if(this.d == 90 || this.d == 270) {this.dx = 0;} else {this.dx = Math.cos(this.rad);}

        // this.vx = this.speed * this.dx;
        // this.vy = this.speed * this.dy;
        this.updatePath();

        // this.hue = this.direction - 90;
        // this.hue = this.hueStart + (this.direction%90) - 45;
        // this.size -= this.size/8;
        // if(this.size < 3) this.size = 3;

        // this.collisionCheck();
    }
    wallBounce(wall_angle){
        let aper1 = (wall_angle + 90) % 360;
        let aper2 = (wall_angle + 270) % 360;
        let new_angle = 0;
        let dif = Math.abs(wall_angle - this.d)%180;
        if(dif != 0) {
            let a1 = Math.max(aper1,aper2);
            let a2 = Math.min(aper1,aper2);
            new_angle = a1 + (a2 - this.d);
        }
        this.d = (new_angle + 360) % 360;
    }
    calcSpeed(){
        // let total_distance = 0;
        // let total_time = 0;
        // let total_speed = 0;
        // if(this.trace.length > 1){

        //     // this.trace.forEach(point => {
        //     //     total_distance += Math.sqrt(this.x**2 + this.y**2);
        //     // });

        //     let ox = this.trace[0][0];
        //     let oy = this.trace[0][1];
        //     let ohue = this.trace[0][2];
        //     let otime = this.trace[0][3];
        //     for (let i = 1; i < this.trace.length; i++) {
        //         let nx = ox - this.trace[i][0];
        //         let ny = oy - this.trace[i][1];
        //         // let nhue = this.trace[i][2];
        //         // let ntime = this.trace[i][3];

        //         total_distance += Math.sqrt(nx**2 + ny**2);
                
        //         ox = this.trace[i][0];
        //         oy = this.trace[i][1];

        //         // ox = nx;
        //         // oy = ny;
        //         // ohue = nhue;
        //         // otime = ntime;
        //     }
        //     total_time = this.trace[this.trace.length-1][3] - this.trace[0][3];
        //     // safeLog([`total_distance: %c${total_distance}`, this.idStyle]);
        //     // safeLog([`total_time: %c${total_time}`, this.idStyle]);

        //     total_speed = total_distance/total_time*10;
        //     // safeLog([`total_speed: %c${total_speed}`, this.pstyle]);
        //     // safeLog([`total_speed: %c${total_speed}`, `background-color: hsla(210, 100%, 100%, .2); color: #fff; padding: .125rem .25rem; border-radius: .25rem;`]);
        // }
        // // console.log(`gf: %c${gf}`, "color: #06f");
        // this.speed = total_speed;
        // this.updateColors();
    }
    mousePull(){
        let xAway = s.x - this.x;
        let yAway = s.y - this.y;
        // let xAway = this.x - s.x;
        // let yAway = s.x - this.x;
        // safeLog([`%cxAway: %c${xAway}%c | yAway: %c${yAway}`, 'color: #ccc;', this.pstyle, 'color: #ccc;', this.pstyle]);
        // let hAway = Math.sqrt(xAway**2 + yAway**2);
        let h1 = Math.abs(xAway) + Math.abs(yAway);
        // safeLog([`distance: %c${h1}`, this.pstyle]);
        let f1 = 0;
        let dAway = 0;
        if(h1 > this.size){
            f1 = 1 / (h1 + 10);
            // safeLog([`force: %c${f1}`, this.pstyle]);
            dAway = XYtoAngle(xAway,yAway);
            // safeLog([`mouse direction: %c${dAway}`, this.pstyle]);

            this.forceQueue.push({'speed':f1, 'd':dAway});
        }
        // let xyAway = AngleToXY(dAway);
        // this.x += this.speed * this.xyAway.x;
        // this.y += this.speed * this.xyAway.y;
        statusReport({'x':xAway,'y':yAway,'d':dAway,'h':h1,'f':f1});
    }
    move(){
        this.x += this.speed * this.dx;
        this.y += this.speed * this.dy;

        if(this.x > this.canvas.width-this.size || this.x < this.size){
            this.wallBounce(90);
            this.directionUpdate();
        }
        if(this.y > this.canvas.height-this.size || this.y < this.size){
            this.wallBounce(0);
            this.directionUpdate();
        }

        this.stepCount += 1;
        if(this.stepCount > this.size){
            this.updateTrace();
            this.sectorCheck();
            this.stepCount = 0;
        }

        // if(this.stepCount > this.size){
        //     this.updateTrace();
        // }
        // this.updateTrace();
    }
    update(){
        if(this.forceQueue.length > 0){
            // console.log(`─────`);
            this.addForces();
            // console.log(`─────`);
        }
        if(this.momentumQueue.length > 0){this.addMomentum();}

        this.move();
        // this.calcSpeed();
        this.mousePull();
    }
    drawArrow(){
        let arrow_len = 10;
        let arrow_thickness = 10;
        let nx = this.x + (this.dx * (this.speed + 1) * arrow_len);
        let ny = this.y + (this.dy * (this.speed + 1) * arrow_len);
        let nx2 = nx + (this.dx * arrow_thickness);
        let ny2 = ny + (this.dy * arrow_thickness);
        let nd = this.rad + (.8 * Math.PI);
        let nd2 = this.rad - (.8 * Math.PI);

        let ctx_over = ctx['canvas_over'];

        ctx_over.beginPath();
        ctx_over.lineWidth = arrow_thickness*.5;
        // // ctx_trace.lineWidth = sz*.5;
        ctx_over.strokeStyle = '#fffc';
        ctx_over.moveTo(this.x, this.y);
        ctx_over.lineTo(nx, ny);
        ctx_over.stroke();

        ctx_over.beginPath();
        ctx_over.fillStyle = '#fffc';
        // ctx_over.arc(nx, ny, 2, nd, Math.PI * .5);
        // ctx_over.arc(nx, ny, arrow_thickness*2, nd, nd2);
        ctx_over.arc(nx2, ny2, arrow_thickness, nd, nd2);
        ctx_over.lineTo(nx2, ny2);
        ctx_over.fill();
    }
    draw(){
        // this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // this.ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // this.drawPath();
        if(s.trace){this.drawTrace();}

        this.ctx.beginPath();
        this.ctx.fillStyle = this.clr;
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();

        // this.drawArrow();
        if(s.arrow){this.drawArrow();}
    }
    drawPath(){
        // this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // let alp2 = 1;
        if(this.path.length > 1){
            this.ctx.beginPath();
            let ox = this.x;
            let oy =  this.y;
            for (let i = this.path.length - 1; i > 0; i--) {
                let nx = this.path[i][0];
                let ny = this.path[i][1];
                this.ctx.lineWidth = i + 2;
                let alp2 = (i / this.path.length * .7) + .2;
                this.ctx.strokeStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${alp2})`;
                this.ctx.moveTo(ox, oy);
                this.ctx.lineTo(nx, ny);
                this.ctx.stroke();
                ox = nx;
                oy = ny;
            }
        }
    }
    drawTrace(){

        // this.ctx.fillStyle = this.clr;
        // this.ctx.beginPath();
        // this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // this.ctx.fill();

        // this.hue = 210 - (this.speed * 36);
        // let hue = 210 - (this.trace[i][2] * 30);

        if(this.trace.length > 1){
            let ctx_trace = ctx['canvas_trace'];
            // ctx_trace.beginPath();
            let ox = this.x;
            let oy = this.y;
            for (let i = this.trace.length - 1; i > -1; i--) {
                let nx = this.trace[i][0];
                let ny = this.trace[i][1];

                let sz = (i / this.trace.length * 4) + 2;
                // let sz = i+1;
                // let hue = 210 - (this.trace[i][2] * 30);
                // let hue = this.trace[i][2];
                // let alp2 = (i / this.trace.length * .7) + .2;
                // let alp2 = (i / this.trace.length * .75) + .05;
                // let alp2 = 1;
                // let clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${alp2})`;
                // let clr = `hsla(${hue}, ${this.sat}%, ${this.lum}%, ${alp2})`;

                // ctx_trace.beginPath();
                // ctx_trace.lineWidth = 1;
                // // ctx_trace.lineWidth = sz*.5;
                // ctx_trace.strokeStyle = clr;
                // ctx_trace.moveTo(ox, oy);
                // ctx_trace.lineTo(nx, ny);
                // ctx_trace.stroke();

                ctx_trace.beginPath();
                // ctx_trace.fillStyle = clr;
                ctx_trace.fillStyle = this.clr;
                // let sz = i%2+1;
                // let sz = (i / this.trace.length * 3) + 2;
                ctx_trace.arc(nx, ny, sz, 0, Math.PI * 2);
                ctx_trace.fill();

                ox = nx;
                oy = ny;
            }
        }
    }
}

class Particle3 {
    constructor(ctxid, id = -1, speed = 1, xyd = []){
        this.ctx = ctx[ctxid];
        this.canvas = canvas[ctxid];
        this.id = id;
        /* location = ('x', 'y'), and direction = ('d') */

        this.size = 10;
        this.defaultSize = 10;
        this.quidBaseSize = 10;
        this.minSize = 5;

        this.speed = speed;
        // /* ♦ Size Change. ♦ */
        // this.size = 5 + (this.speed);
        
        if(xyd.length > 0) {
            this.x = xyd[0];
            this.y = xyd[1];
            this.d = xyd[2];
        } else {
            this.x = Math.random() * (this.canvas.width - this.size*2) + this.size;
            this.y = Math.random() * (this.canvas.height - this.size*2) + this.size;
            this.d = Math.floor(Math.random() * 360);
        }
        // this.speed = speed;

        this.path = [[this.x,this.y,this.d]];
        // console.log(`particle id:${this.id} at (${this.x.toFixed(2)},${this.y.toFixed(2)})`);

        // this.hue = this.id * 60;
        this.huesp = 210 - (this.speed * 30);
        this.huei = Math.floor(Math.random() * 360);
        this.hue = 210;
        this.sat = 100;
        this.lum = 60;
        this.alp = 1;
        this.alp = .75;
        this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;

        // this.size = 10;
        this.rad = 0;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.directionUpdate();

        this.forceQueue = [];
        this.momentumQueue = [];

        this.sid = '';
        this.stepCount = 0;
        this.sectorCheck();

        this.mass = 1;
        this.vel = 1;
        this.ke = this.mass * this.vel;

        this.tpsp = 0;

        this.trace = [];

        this.idStyle = `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`;
        this.pstyle = `background-color: ${this.clr}; color: hsl(${this.hue}, 100%, 5%); padding: .125rem .25rem; border-radius: .25rem;`;
        safeLog([`🌌%cid:${this.id}%c💫 at (%c${this.x.toFixed(1)}%c,%c${this.y.toFixed(1)}%c)`, this.idStyle, 'color: #999;', this.pstyle, 'color: #999;', this.pstyle, 'color: #999;']);
    }
    sectorCheck(){
        /* change it so it takes more than 100, about 20 more on each side. */
        /* also, so it doesn't delete it unless it is outside of this extra area. */
        let xid = Math.floor(this.x/100);
        let yid = Math.floor(this.y/100);
        let sid = `${xid},${yid}`;
        // console.log(sid);
        if(sid != this.sid){
            // console.log(`Particle (#${this.id}) → new sid: (${sid})`);
            if(this.sid != ''){
                delete sector[this.sid][this.id];
                sectorGf[this.sid] = Object.keys(sector[this.sid]).length;
                if(Object.keys(sector[this.sid]).length == 0) {
                    delete sector[this.sid];
                    delete sectorGf[this.sid];
                }
            }
            if(!Object.keys(sector).includes(sid)) {
                sector[sid] = {}
            }
            sector[sid][this.id] = this;

            sectorGf[sid] = Object.keys(sector[sid]).length;
            // DrawGf();

            this.sid = sid;
        }
        // console.log(`─────────────────────────────`);
    }
    identify(){
        // console.log(`id:${this.id} → ${this.d}deg.`);
        console.log(`─────────────────────────────`);
        console.log(`id:${this.id} \n\t→ a: ${this.d}deg. \n\t→ sp: ${this.speed}. \n\t→ x: ${this.x}, y: ${this.y}`);
        // console.log(`\t→ x: ${this.x}, y: ${this.y}`);
        // if(this.forceQueue.length > 0){
        //     console.log(`\t→ forceQueue: ${this.forceQueue.length}`);
        // }
        console.log(`─────────────────────────────`);
    }
    identifyXY(){
        console.log(`\tid:${this.id} move → (x:${this.x}, y:${this.y})`);
    }
    addMomentum(){
        PrintObj(this.momentumQueue, `momentumQueue:${this.id}`);
        // let this_x_force = this.speed * this.dx;
        // let this_y_force = this.speed * this.dy;

        // this.vx = this.speed * this.dx;
        // this.vy = this.speed * this.dy;

        let adding_x_force = this.vx;
        let adding_y_force = this.vy;

        this.momentumQueue.forEach(dm => {
            adding_x_force += dm.dxq;
            adding_y_force += dm.dyq;
        });
        this.d = this.XYtoAngle(adding_x_force,adding_y_force);
        this.speed = Math.sqrt(adding_x_force**2 + adding_y_force**2);
        if(this.speed > 15) {this.speed = 15;}

        this.momentumQueue = [];
        this.directionUpdate();
        this.move();
    }
    updateColors(){
        // this.hue = 210 - (this.speed%10 * 30);
        // this.hue = Math.floor(Math.random() * 360);
        if(!s.huesp){
            this.huesp = 210 - (this.speed%10 * 30);
            this.hue = this.huesp;
        } else {
            this.huei += parseFloat((Math.random() * 3 - 1.5).toFixed(2));
            this.hue = this.huei;
        }
        this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        this.pstyle = `background-color: ${this.clr}; color: hsl(${this.hue}, 100%, 5%); padding: .125rem .25rem; border-radius: .25rem;`;
        this.idStyle = `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`;
    }
    addForces(){
        let this_x_force = this.speed * this.dx;
        let this_y_force = this.speed * this.dy;

        let adding_x_force = this_x_force;
        let adding_y_force = this_y_force;

        this.forceQueue.forEach(force => {
            // console.log(`%cforce.speed: %c${force.speed.toFixed(8)}%c, force.d: %c${force.d.toFixed(1)}°`, "color: white", this.pstyle, "color: white", this.pstyle);
            let xy = this.AngleToXY(force.d);
            // console.log(`%cxy.x: %c${xy.x}%c, xy.y: %c${xy.y}`, "color: white", this.pstyle, "color: white", this.pstyle);
            let fsp = parseFloat(force.speed);
            // console.log(`fsp: %c${fsp}`, this.pstyle);
            let new_x_force = fsp * xy.x;
            let new_y_force = fsp * xy.y;
            // console.log(`%cnew_x_force: %c${new_x_force}%c, new_y_force: %c${new_y_force}`, "color: white", this.pstyle, "color: white", this.pstyle);

            adding_x_force += new_x_force;
            adding_y_force += new_y_force;
            // console.log(`%cadding_x_force: %c${adding_x_force}%c, adding_y_force: %c${adding_y_force}`, "color: white", this.pstyle, "color: white", this.pstyle);
        });
        this.d = this.XYtoAngle(adding_x_force,adding_y_force);
        this.speed = Math.sqrt(adding_x_force**2 + adding_y_force**2);

        // let nd = this.XYtoAngle(adding_x_force,adding_y_force);
        // console.log(`📐 nd: %c${nd.toFixed(1)}°`, this.pstyle);
        // this.d = nd;
        // let nsp = Math.sqrt(adding_x_force**2 + adding_y_force**2);
        // console.log(`⏱ nsp: %c${nsp.toFixed(8)}`, this.pstyle);
        // this.speed = nsp;

        // safeLog([`%c${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, `background-color: white; color: black; padding: .125rem .25rem; border-radius: .25rem;`, "color: white", this.pstyle, "color: white", this.pstyle]);
        // safeLog([`%cid:${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`, "color: white", this.pstyle, "color: white", this.pstyle]);
        // safeLog([`%cid:${this.id}%c 📐 this.d: %c${this.d.toFixed(1)}°%c, ⏱ this.speed: %c${this.speed.toFixed(4)}`, this.idStyle, "color: white", this.pstyle, "color: white", this.pstyle]);

        // if(this.speed > 5) {this.speed = 5;}
        if(this.speed > 10) {this.speed = 10;}
        
        // /* ♦ Size Change. ♦ */
        // this.size = 5 + (this.speed);
        // if(this.size != (5 + this.speed)){
        //     this.size += (5 + this.speed - this.size)/10;
        // }


        // this.hue = 210 - (this.speed * 30);
        // this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // this.pstyle = `background-color: ${this.clr}; color: hsl(${this.hue}, 100%, 5%); padding: .125rem .25rem; border-radius: .25rem;`;
        // this.idStyle = `background-color: hsla(${this.hue}, 100%, 50%, .2); color: ${this.clr}; padding: .125rem .25rem; border-radius: .25rem;`;

        this.updateColors();

        this.forceQueue = [];
        this.directionUpdate();
        this.move();
    }
    AngleToXY(angle){
        angle = angle%360;
        let rad = angle * Math.PI / 180;
        let xy = {"x":0,"y":0};
        if(angle == 180) {xy.y = 0;} else {xy.y = Math.sin(rad);}
        if(angle == 90 || angle == 270) {xy.x = 0;} else {xy.x = Math.cos(rad);}
        return xy;
    }
    XYtoAngle(x,y){
        x = Math.round(x*1000);
        y = Math.round(y*1000);
        let angle = 0;
        if(x == 0) {
            if(y > 0) {return 90;}
            if(y < 0) {return 270;}
        }
        if(x < 0) { angle += 180; }
        if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
        return angle;
    }
    updateTrace(){
        /* 'pathLen' is normally 6. */
        let pathLen = 6;
        this.trace.push([this.x,this.y,this.hue]);
        if(this.trace.length > pathLen) {
            this.trace.shift();
        }
    }
    updatePath(){
        this.path.push([this.x,this.y,this.d]);
        if(this.path.length > 3) {
            this.path.shift();
        }
        // ctx['canvas_trace'].fillStyle = '#00000022';
        // ctx['canvas_trace'].fillRect(0, 0, canvas['canvas_trace'].width, canvas['canvas_trace'].height);
    }
    directionUpdate(){
        // this.d = (this.d+360)%360;
        this.rad = this.d * Math.PI / 180;
        if(this.d == 180) {this.dy = 0;} else {this.dy = Math.sin(this.rad);}
        if(this.d == 90 || this.d == 270) {this.dx = 0;} else {this.dx = Math.cos(this.rad);}

        this.vx = this.speed * this.dx;
        this.vy = this.speed * this.dy;
        this.updatePath();

        // this.hue = this.direction - 90;
        // this.hue = this.hueStart + (this.direction%90) - 45;
        // this.size -= this.size/8;
        // if(this.size < 3) this.size = 3;

        // this.collisionCheck();
    }
    wallBounce(wall_angle){
        let aper1 = (wall_angle + 90) % 360;
        let aper2 = (wall_angle + 270) % 360;
        let new_angle = 0;
        let dif = Math.abs(wall_angle - this.d)%180;
        if(dif != 0) {
            let a1 = Math.max(aper1,aper2);
            let a2 = Math.min(aper1,aper2);
            new_angle = a1 + (a2 - this.d);
        }
        this.d = (new_angle + 360) % 360;
    }
    move(){
        this.x += this.speed * this.dx;
        this.y += this.speed * this.dy;

        if(this.x > this.canvas.width-this.size || this.x < this.size){
            this.wallBounce(90);
            this.directionUpdate();
        }
        if(this.y > this.canvas.height-this.size || this.y < this.size){
            this.wallBounce(0);
            this.directionUpdate();
        }

        this.stepCount += 1;
        if(this.stepCount > this.size){
            this.updateTrace();
            this.sectorCheck();
            this.stepCount = 0;
        }

        // if(this.stepCount > this.size){
        //     this.updateTrace();
        // }
        // this.updateTrace();
    }
    reSize(){
        if(s.quid){
            this.minSize = this.quidBaseSize;
        } else {
            this.minSize = 5;
        }

        if(s.speedsize){
            /* ♦ Size Change. ♦ */
            if(this.size != (this.minSize + this.speed)){
                this.size += (this.minSize + this.speed - this.size)/10;
            }
        } else {
            if(this.size != this.defaultSize){
                let sizeDif = this.defaultSize - this.size;
                if(sizeDif > .1){
                    this.size += (this.defaultSize - this.size)/10;
                } else {
                    this.size = this.defaultSize;
                }
            }
        }

        let xDif = 0;
        if(this.x > this.canvas.width-this.size){
            xDif = this.canvas.width-this.size - this.x;
        }
        if(this.x < this.size){
            xDif = this.size - this.x;
        }
        this.x += xDif;

        let yDif = 0;
        if(this.y > this.canvas.height-this.size){
            yDif = this.canvas.height-this.size - this.y;
        }
        if(this.y < this.size){
            yDif = this.size - this.y;
        }
        this.y += yDif;
    }
    update(){
        if(this.forceQueue.length > 0){
            // console.log(`─────`);
            this.addForces();
            // console.log(`─────`);
        }
        // if(this.momentumQueue.length > 0){this.addMomentum();}
        
        // this.reSize();
        this.move();
    }
    draw(){
        // this.drawPath();
        if(s.trace){this.drawTrace();}

        // this.ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // this.ctx.fillStyle = this.clr;
        
        // this.ctx.beginPath();
        // this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // this.ctx.fill();

        // this.ctx.beginPath();
        // this.alp = .75;
        // this.alp = .3;
        // this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // this.ctx.fillStyle = this.clr;
        // if(s.quid){
        //     // this.ctx.filter = `blur(6px) url(#quid)`;
        //     // this.ctx.filter = `drop-shadow(0px 0px 8px ${this.clr}) blur(6px) url(#quid)`;
        //     // this.ctx.filter = `drop-shadow(0px 0px 8px #39f) blur(4px) url(#quid)`;
        //     this.ctx.filter = `drop-shadow(0px 0px 5px #f39) blur(6px) url(#quid)`;
        // } else {
        //     // this.ctx.filter = `blur(6px)`;
        //     // this.ctx.filter = `drop-shadow(0px 0px 8px ${this.clr}) blur(6px)`;
        //     // this.ctx.filter = `drop-shadow(0px 0px 8px #39f) blur(4px)`;
        //     this.ctx.filter = `drop-shadow(0px 0px 5px #f39) blur(6px)`;
        // }
        // if(s.quid){
        //     this.ctx.filter = `blur(6px)`;
        //     this.ctx.arc(this.x, this.y, this.size*2, 0, Math.PI * 2);
        // } else {
        //     this.ctx.filter = `blur(0px)`;
        //     this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // }
        // this.ctx.filter = `blur(6px)`;
        // // this.ctx.filter = `blur(12px)`;

        this.ctx.beginPath();
        this.ctx.fillStyle = this.clr;
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
    drawPath(){
        // this.clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${this.alp})`;
        // let alp2 = 1;
        if(this.path.length > 1){
            this.ctx.beginPath();
            let ox = this.x;
            let oy =  this.y;
            for (let i = this.path.length - 1; i > 0; i--) {
                let nx = this.path[i][0];
                let ny = this.path[i][1];
                this.ctx.lineWidth = i + 2;
                let alp2 = (i / this.path.length * .7) + .2;
                this.ctx.strokeStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${alp2})`;
                this.ctx.moveTo(ox, oy);
                this.ctx.lineTo(nx, ny);
                this.ctx.stroke();
                ox = nx;
                oy = ny;
            }
        }
    }
    drawTrace(){
        // this.ctx.fillStyle = this.clr;
        // this.ctx.beginPath();
        // this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // this.ctx.fill();

        // this.hue = 210 - (this.speed * 36);
        // let hue = 210 - (this.trace[i][2] * 30);

        if(this.trace.length > 1){
            let ctx_trace = ctx['canvas_trace'];
            // ctx_trace.beginPath();
            let ox = this.x;
            let oy =  this.y;
            for (let i = this.trace.length - 1; i > -1; i--) {
                let nx = this.trace[i][0];
                let ny = this.trace[i][1];

                let sz = (i / this.trace.length * 4) + 2;
                // // let sz = i+1;
                // // let hue = 210 - (this.trace[i][2] * 30);
                // let hue = this.trace[i][2];
                // // let alp2 = (i / this.trace.length * .7) + .2;
                // let alp2 = (i / this.trace.length * .75) + .05;
                // // let alp2 = 1;
                // // let clr = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${alp2})`;
                // let clr = `hsla(${hue}, ${this.sat}%, ${this.lum}%, ${alp2})`;

                // ctx_trace.beginPath();
                // ctx_trace.lineWidth = 1;
                // // ctx_trace.lineWidth = sz*.5;
                // ctx_trace.strokeStyle = clr;
                // ctx_trace.moveTo(ox, oy);
                // ctx_trace.lineTo(nx, ny);
                // ctx_trace.stroke();
                
                ctx_trace.beginPath();
                // ctx_trace.fillStyle = clr;
                ctx_trace.fillStyle = this.clr;
                ctx_trace.arc(nx, ny, sz, 0, Math.PI * 2);
                ctx_trace.fill();

                ox = nx;
                oy = ny;
            }
        }
    }
}

function AngleToXY(angle){
        let rad = angle * Math.PI / 180;
        let xy = {"x":0,"y":0};
        if(angle == 180) {xy.y = 0;} else {xy.y = Math.sin(rad);}
        if(angle == 90 || angle == 270) {xy.x = 0;} else {xy.x = Math.cos(rad);}
        return xy;
}
function XYtoAngle(x,y){
    x = Math.round(x*1000);
    y = Math.round(y*1000);
    let angle = 0;
    if(x == 0) {
        if(y > 0) {return 90;}
        if(y < 0) {return 270;}
    }
    if(x < 0) { angle += 180; }
    if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
    return angle;
}

function CollisionUpdate(a,b){
    if(a.speed > 0){
        let x2 = b.x - a.x;
        let y2 = b.y - a.y;
        let a2 = XYtoAngle(x2,y2);
        let a1 = Math.abs(a2 - a.d);
        if(a1 > 180) {a1 = 360 - a1;}
        if(a1 < 90) {
            let force_ratio_x = Math.cos(a1 * Math.PI / 180);
            let force_to = (force_ratio_x) * a.speed;
            let force_lost = force_to * .5;

            let force_forward = force_to - force_lost;
            let force_back = force_to + force_lost;

            let a1 = (a2 + 180)%360;
            a.forceQueue.push({'speed':force_back, 'd':a1});
            b.forceQueue.push({'speed':force_forward, 'd':a2});
        }
    }
}
function CollisionCheck(a,b){
    let x2 = b.x - a.x;
    let y2 = b.y - a.y;
    let h2 = Math.sqrt(x2**2 + y2**2);
    let d2 = (a.size+b.size);
    if(h2-d2 < 1){
        CollisionUpdate(a,b);
        CollisionUpdate(b,a);
        speedCount();
    }
}


function SectorCheck(){
    // safeLog([`%c ───────────────────────────── `, `color: #555;`]);
    // console.log(`SectorCheck3()`);
    let sectorList = Object.keys(sector);
    let filteredSectors = [];
    if(sectorList.length > 0) {
        for(let i = 0; i < sectorList.length; i++){
            let keys = Object.keys(sector[sectorList[i]]);
            if(keys.length > 0){
                filteredSectors.push(sectorList[i]);
                SectorCheck3_EachSector(sector[sectorList[i]]);
                SectorGfCheck(sectorList[i]);
            }
        }
    }
    SectorCheck3_Adjacent(filteredSectors);
    // console.log(` ───────────────────────────── `);
}
function SectorCheck_EachSector(sectorList){
    for(let i = 0; i < Object.keys(sectorList).length - 1; i++){
        let e1 = sectorList[Object.keys(sectorList)[i]];
        for(let j = i+1; j < Object.keys(sectorList).length; j++){
            let e2 = sectorList[Object.keys(sectorList)[j]];
            CollisionCheck(e1,e2);
        }
    }
}
function SectorCheck_Adjacent(filteredSectors){
    // console.log(`SectorCheck3_Adjacent()`);
    let sectorParings = [];
    if(filteredSectors.length > 1){
        filteredSectors.forEach(sectorKey => {
            let y = parseInt(sectorKey.split(',')[1]);
            let x = parseInt(sectorKey.split(',')[0]);
            // -- Make a list of sectors in the adjacent positions: [[0,1],[1,-1],[1,0],[1,1]]
            adjecentSectors3.forEach(adj => {
                let adj_y = y + adj[0];
                let adj_x = x + adj[1];
                let adj_k = `${adj_x},${adj_y}`;
                // -- Check if the adjacent sectors are in our list of filteredSectors.
                if(filteredSectors.includes(adj_k)){
                    // -- If they are, we found a sector paring for comparison. We add them (the current sector, and the adjacent sector that is in the filteredSectors list) to a list of `sectorParings`
                    sectorParings.push([sectorKey, adj_k]);
                }
            });
        });
    }
    // We iterate the list of sectorPairings
    // -- (We check each pairing on sectorPairings for the particle parings.)
    if(sectorParings.length > 0){
        sectorParings.forEach(pair => {
            let s1 = sector[pair[0]];
            let s2 = sector[pair[1]];
            // -- Each particle on a sector is compared to the particles on the other sector. Calling the `CompareParticles(a,b)`.
            Object.keys(s1).forEach(k1 =>{
                Object.keys(s2).forEach(k2 =>{
                    CollisionCheck(s1[k1],s2[k2]);
                });
            });
        });
    }
    // console.log(` ───────────────────────────── `);
}

function speedCount(){
    let timeStyle = 'background-color: #00AAAA; color: white; border: 1px solid #fff; font-size: 1em; border-radius: .25rem; font-weight: bold; padding: .25rem .5rem;';
    let total_speed = 0;
    particles.forEach(p => {
        total_speed += p.speed ** 2;
    });
    if(total_speed > 50) {
        console.warn('💢Too Fast❗');
        slowDown();
    }
    if(total_speed > 200) {
        safeLog([`%c⏱ total_speed: ${total_speed.toFixed(4)}`, timeStyle]);
        console.warn('💢Too Fast❗');
        safeLog([' \x1B[33m└─>\x1B[m Slowing down.']);
        slowDown();
        speedCount();
        s.fLost = .5;
        setTimeout(() => {
            s.fLost = Math.floor(Math.random() * 20 + 10)/100;
            console.log(s.fLost);
        }, "10000");
    }
    if(total_speed < 0.1 && s.gf_active) {
        safeLog([`%c⏱ total_speed: ${total_speed.toFixed(4)}`, timeStyle]);
        console.warn('🌀 Too Slow 🐌');
        safeLog([' \x1B[33m└─>\x1B[m Turning Off Gravity for a moment.']);
        toggleGravity();
        addForce();
        s.fLost = -.1;
        // slowDown();
        // speedCount();
        setTimeout(() => {
            toggleGravity();
            // s.fLost = .2;
            s.fLost = Math.floor(Math.random() * 50 - 1)/100;
            console.log(s.fLost);
        }, "5000");
    }
}
function printSpeeds(){
    let highest_speeds = 0;
    let speeds = [];
    particles.forEach(p => {
        let psp = p.speed * 10;
        if(psp > highest_speeds) {highest_speeds = psp;}
        speeds.push([p.id, psp, p.idStyle, p.pstyle]);
    });
    speeds.forEach(sp => {
        let pspt = Math.round(sp[1]/highest_speeds * 10);
        safeLog([`%cid:${sp[0]}%c⏱→ p.speed: %c${sp[1].toFixed(2)}${' .'.repeat(pspt)}`, sp[2], 'color: #ccc;', sp[3]]);
    });
}

function SectorGfCheck(sectorid){
    let gx = parseInt(sectorid.split(',')[0])*100 + 50;
    let gy = parseInt(sectorid.split(',')[1])*100 + 50;
    let gf = sectorGf[sectorid];
    // get the distance and direction of each particle to the center of the sector.
    particles.forEach(p => {
        let x = gx - p.x;
        let y = gy - p.y;
        let ga = XYtoAngle(x,y);
        
        // give a force in direction to the center of the sector based on the sectorGf count.
        // let h2 = x**2 + y**2 + 10;

        // let f2 = gf/500;
        let f2 = gf/s.gf_reduction;

        if(f2 > .5){
            safeLog([`f2: %c${f2}`, p.pstyle]);
        }
        
        p.forceQueue.push({'speed':f2, 'd':ga});
        // console.log(` ───────── `);
    });
}   

/**
 * Compares particles and adds a force based on distance.
 * @param {Particle} a particle to be compared.
 * @param {Particle} b particle to be compared.
 */
function GfCheck(a,b){
    let x = a.x - b.x;
    let y = a.y - b.y;
    let h1 = Math.abs(x) + Math.abs(y);
    let ga = XYtoAngle(x,y);
    // let f2 = a.mass/h1;
    let f2 = a.speed/h1;
    if(f2 > 0.05){
        safeLog([`%c${a.id}%c to %c${b.id}%c f2: %c${f2}`, a.idStyle, "color: #999", b.idStyle, "color: #999", a.pstyle]);
    }
    b.forceQueue.push({'speed':f2, 'd':ga});
}
/**
 * Checks for all particles against eachother.
 */
function ParticleGfCheck(){
    if(s.gf_active) {
        for(let i = 0; i < particles.length - 1; i++){
            let e1 = particles[i];
            for(let j = i+1; j < particles.length; j++){
                let e2 = particles[j];
                GfCheck(e1,e2);
                GfCheck(e2,e1);
            }
        }
    }
}

function start(){
    let count = 1;
    for (let index = 0; index < count; index++) {
        let sp = 1;
        // particles.push(new Particle3('canvas_orbit', id = index, speed = sp));
        particles.push(new MouseParticle3('canvas_orbit', id = index, speed = sp));
        // particles.push(new MouseParticle3('canvas_orbit', id = index, speed = sp, xyzd = [100, 100, s.zh2, 0]));
    }
    speedCount();
}
function startExp(){
    // particles.push(new MouseParticle('canvas_orbit'));
    // particles.push(new MouseParticle2('canvas_orbit'));

    let count = 3;
    for (let index = 0; index < count; index++) {
        // particles.push(new Particle(id = index, speed = 1));
        // particles.push(new Particle(id = index, speed = 3));
        // particles.push(new Particle(id = index, speed = index));
        // particles.push(new Particle(id = index, speed = 10));
        let sp = .5;
        // let sp = .1;
        // let sp = 0;
        // let sp = index;
        // let sp = index/6;
        // let sp = (index+1)/6;
        // let sp = index/2;
        // let sp = ((index)%6)/2;
        // particles.push(new Particle3(ctx['canvas_orbit'], id = index, speed = sp));
        // particles.push(new Particle3('canvas_orbit', id = index, speed = sp));
        // particles.push(new MouseParticle2('canvas_orbit', id = index, speed = sp));
        // particles.push(new MouseParticle2('canvas_orbit', id = index, speed = sp, xyzd = [150,250, 0, 0]));
        particles.push(new MouseParticle2('canvas_orbit', id = index, speed = sp));
    }

    // /* particle moving horizontally */
    // particles.push(new Particle3('canvas_orbit', id = 0, speed = 1, xyd = [150,250,0]));
    // particles.push(new Particle3('canvas_orbit', id = 1, speed = 0, xyd = [250,250,0]));

    // /* particle moving horizontally, to a 45 collision angle. */
    // particles.push(new Particle3(id = 0, speed = 1, xyd = [380,264.142,0]));
    // particles.push(new Particle3(id = 1, speed = 0, xyd = [450,250,0]));
    
    // /* particle moving horizontally, slightly off */
    // particles.push(new Particle3(id = 0, speed = 1, xyd = [150,260,0]));
    // particles.push(new Particle3(id = 1, speed = 0, xyd = [250,250,0]));

    // /* particle moving horizontally, barely touching */
    // particles.push(new Particle3(id = 0, speed = 1, xyd = [150,269,0]));
    // particles.push(new Particle3(id = 1, speed = 0, xyd = [250,250,0]));

    // /* particle moving horizontally, slightly off center */
    // particles.push(new Particle3(id = 0, speed = 1, xyd = [150,245,0]));
    // particles.push(new Particle3(id = 1, speed = 0, xyd = [250,250,0]));

    // // /* particle moving horizontally, pushing one another */
    // particles.push(new Particle3(id = 0, speed = 1, xyd = [150,245,0]));
    // particles.push(new Particle3(id = 1, speed = .25, xyd = [250,250,0]));

    // // /* particle moving horizontally, in direction to eachother */
    // particles.push(new Particle3(id = 0, speed = 1, xyd = [150,245,0]));
    // particles.push(new Particle3(id = 1, speed = .25, xyd = [250,250,180]));

    // // /* particle moving horizontally, directly to eachother */
    // particles.push(new Particle3(id = 0, speed = 1, xyd = [150,250,0]));
    // particles.push(new Particle3(id = 1, speed = .25, xyd = [250,250,180]));

    // /* particle moving diagonally, to a 0deg collision angle. */
    // particles.push(new Particle3(id = 0, speed = .5, xyd = [230,260,315]));
    // particles.push(new Particle3(id = 1, speed = .5, xyd = [270,240,135]));
    
    // a.x:230, a.y:260
    // b.x:270, b.y:240

    speedCount();
}
// ♦
function handleParticles(){
    safeLog(`───`, 'color: #555;');
    // // pairing(particles);
    // // sectorCheck();
    // // ParticleGfCheck();
    // SectorCheck3();

    
    if(s.arrow){
        ctx['canvas_over'].beginPath();
        ctx['canvas_over'].fillStyle = '#0003';
        ctx['canvas_over'].strokeStyle = '#fff6';
        ctx['canvas_over'].arc(s.x, s.y, 20, 0, Math.PI * 2);
        ctx['canvas_over'].fill();
        ctx['canvas_over'].stroke();
    }

    for (let index = 0; index < particles.length; index++) {
        const element = particles[index];
        element.update();
        element.draw();
    }
    // if(!s.pause){
    //     pairing(particles);
    // // }
    // // if(!s.pause){
    //     for (let index = 0; index < particles.length; index++) {
    //         const element = particles[index];
    //         element.update();
    //         element.draw();
    //     }
    // }
    // for (let index = 0; index < particles.length; index++) {
    //     const element = particles[index];
    //     if(!s.pause){
    //         element.update();
    //     }
    //     element.draw();
    // }
    if(s.tags){
        DrawTags();
    }
    // ParticleGfCheck();
}
function animate (){
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    // ctx.fillStyle = '#0002';
    // ctx.fillStyle = '#00000008';
    // ctx.fillStyle = '#00000004';
    // ctx.fillStyle = '#000000ff';
    // ctx.fillStyle = '#00000022';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    if(!s.q && !s.pause){
        // // ctx.fillStyle = '#00000022';
        // // ctx.fillRect(0, 0, canvas.width, canvas.height);
        // for (let i = 0; i < layers.length; i++) {
        //     const lid = layers[i];
        //     if(layers_clear[i] == -1) {
        //         ctx[lid].fillStyle = '#00000022';
        //         ctx[lid].fillRect(0, 0, canvas[lid].width, canvas[lid].height);
        //     }
        //     if(layers_clear[i] == 1) {
        //         ctx[lid].clearRect(0, 0, canvas[lid].width, canvas[lid].height);
        //     }
        // }

        if(s.trace){
            // // ctx['canvas_trace'].fillStyle = '#00000005';
            // // ctx['canvas_trace'].fillStyle = '#00000022';
            // ctx['canvas_trace'].fillStyle = '#00000002';
            // ctx['canvas_trace'].fillRect(0, 0, canvas['canvas_trace'].width, canvas['canvas_trace'].height);
            // // ctx['canvas_trace'].clearRect(0,0,canvas['canvas_trace'].width, canvas['canvas_trace'].height);
        }

        ctx['canvas_orbit'].clearRect(0,0,canvas['canvas_orbit'].width, canvas['canvas_orbit'].height);

        if(s.tags || s.arrow){
            ctx['canvas_over'].clearRect(0,0,canvas['canvas_over'].width, canvas['canvas_over'].height);
        }

        handleParticles();
    }
    // handleParticles();
    requestAnimationFrame(animate);
}

function updateFilters(){
    let canvas_orbit_element = document.getElementById('canvas_orbit');
    canvas_orbit_element.dataset.quid = s.quid;
}
function updateLayout(){
    let switches = document.querySelectorAll('[data-switch]');
    switches.forEach(sw => {
        let sid = sw.id;
        if(s[sid]){
            sw.dataset.switch = 'on';
        } else {
            sw.dataset.switch = 'off';
        }
    });
    let displays = document.querySelectorAll('[data-display]');
    displays.forEach(displayElem => {
        let skey= displayElem.dataset.keybind;
        displayElem.dataset.display = s[skey];
    });
    let layerBtns = document.querySelectorAll('[data-layer]');
    layerBtns.forEach(layerBtn => {
        let layerKey= layerBtn.dataset.canvas;
        layerBtn.dataset.toggleLayer = toggle_layers[layerKey];
    });
}
/* only for 'canvas_trace' and 'canvas_grid' so far. */
function toggleCanvas(canvas_id = ''){
    if(!s.q){
        if(layers.includes(canvas_id)) {
            toggle_layers[canvas_id] ? toggle_layers[canvas_id] = false : toggle_layers[canvas_id] = true;
            
            // let canvasElement = document.getElementById(canvas_id);
            // canvasElement.dataset.display = toggle_layers[canvas_id];

            let toggle_canvas = document.getElementById('toggle_canvas');
            toggle_canvas.dataset[canvas_id] = toggle_layers[canvas_id];
            

            let toggleBtn = document.querySelector(`[data-canvas="${canvas_id}"]`);
            if(toggle_layers[canvas_id]){
                toggleBtn.dataset.toggleLayer = toggle_layers[canvas_id];
            } else {
                toggleBtn.dataset.toggleLayer = toggle_layers[canvas_id];
            }


            if(canvas_id == 'canvas_trace'){
                s.trace = toggle_layers[canvas_id];
            }
        }
    }
}
function q(){
    s.q ? s.q = false : s.q = true;
    settingsLog([`%cs%c.q:%c${s.q}`, sStyle.s, sStyle.n, sStyle.bool]);
    let infoModal = document.getElementById('info');
    infoModal.dataset.display = s.q;

    ctx['canvas_trace'].clearRect(0,0,canvas['canvas_trace'].width, canvas['canvas_trace'].height);
}
function openS(){
    if(!s.q){
        s.s ? s.s = false : s.s = true;
        settingsLog([`%cs%c.s:%c${s.s}`, sStyle.s, sStyle.n, sStyle.bool]);
        let settingsBtn = document.getElementById('settings');
        settingsBtn.dataset.display = s.s;
    }
}
function openW(){
    if(!s.q){
        s.w ? s.w = false : s.w = true;
        settingsLog([`%cs%c.w:%c${s.w}`, sStyle.s, sStyle.n, sStyle.bool]);
        let myConsoleElem = document.getElementById('myconsole');
        myConsoleElem.dataset.display = s.w;
    }
}
function pause(){
    if(!s.q){
        s.pause ? s.pause = false : s.pause = true;
        // console.log(`s.pause = ${s.pause}.`);
        settingsLog([`%cs%c.pause:%c${s.pause}`, sStyle.s, sStyle.n, sStyle.bool]);
        let pauseBtn = document.getElementById('pause');
        if(s.pause){
            pauseBtn.dataset.switch = 'on';
        } else {
            pauseBtn.dataset.switch = 'off';
        }
    }
}
function switchTags(){
    if(!s.q){
        s.tags ? s.tags = false : s.tags = true;
        settingsLog([`%cs%c.tags:%c${s.tags}`, sStyle.s, sStyle.n, sStyle.bool]);
        let tagsBtn = document.getElementById('tags');
        if(s.tags){
            DrawTags();
            tagsBtn.dataset.switch = 'on';
        } else {
            ctx['canvas_over'].clearRect(0,0,canvas['canvas_over'].width, canvas['canvas_over'].height);
            tagsBtn.dataset.switch = 'off';
        }
    }
}
function toggleGravity(){
    if(!s.q){
        s.gf_active ? s.gf_active = false : s.gf_active = true;
        settingsLog([`%cs%c.gf_active:%c${s.gf_active}`, sStyle.s, sStyle.n, sStyle.bool]);
        let gfBtn = document.getElementById('gf_active');
        if(s.gf_active){
            // DrawTags();
            gfBtn.dataset.switch = 'on';
        } else {
            // ctx['canvas_over'].clearRect(0,0,canvas['canvas_over'].width, canvas['canvas_over'].height);
            gfBtn.dataset.switch = 'off';
        }
    }
}
function speedSize(){
    // if(!s.q){
    //     s.speedsize ? s.speedsize = false : s.speedsize = true;
    //     settingsLog([`%cs%c.speedsize:%c${s.speedsize}`, sStyle.s, sStyle.n, sStyle.bool]);
    //     let spszBtn = document.getElementById('speedsize');
    //     if(s.speedsize){
    //         spszBtn.dataset.switch = 'on';
    //     } else {
    //         spszBtn.dataset.switch = 'off';
    //     }
    // }
}
function liQuid(){
    // if(!s.q){
    //     s.quid ? s.quid = false : s.quid = true;
    //     settingsLog([`%cs%c.quid:%c${s.quid}`, sStyle.s, sStyle.n, sStyle.bool]);
    //     let canvas_orbit_element = document.getElementById('canvas_orbit');
    //     canvas_orbit_element.dataset.quid = s.quid;
    //     let quidBtn = document.getElementById('quid');
    //     if(s.quid){
    //         quidBtn.dataset.switch = 'on';
    //     } else {
    //         quidBtn.dataset.switch = 'off';
    //     }
    // }
}        
function hueSp(){
    if(!s.q){
        s.huesp ? s.huesp = false : s.huesp = true;
        settingsLog([`%cs%c.huesp:%c${s.huesp}`, sStyle.s, sStyle.n, sStyle.bool]);
        // let canvas_orbit_element = document.getElementById('canvas_orbit');
        // canvas_orbit_element.dataset.quid = s.quid;
        let hueBtn = document.getElementById('huesp');
        if(s.huesp){
            hueBtn.dataset.switch = 'on';
        } else {
            hueBtn.dataset.switch = 'off';
        }
    }
}
function arrowForward(){
    if(!s.q){
        s.arrow ? s.arrow = false : s.arrow = true;
        settingsLog([`%cs%c.arrow:%c${s.arrow}`, sStyle.s, sStyle.n, sStyle.bool]);
        let arrowBtn = document.getElementById('arrow');
        if(s.arrow){
            arrowBtn.dataset.switch = 'on';
        } else {
            arrowBtn.dataset.switch = 'off';
        }
        ctx['canvas_over'].clearRect(0,0,canvas['canvas_over'].width, canvas['canvas_over'].height);
    }
}
function toggleLog(){
    if(!s.q){
        s.log ? s.log = false : s.log = true;
        settingsLog([`%cs%c.log:%c${s.log}`, sStyle.s, sStyle.n, sStyle.bool]);
    }
}

window.addEventListener("keydown", function (event) {
    // console.log(`key: '${event.key}', keyCode: '${event.keyCode}'.`);
    if(event.key == 'Escape') {
        q();
    }
    if(s.q){
        console.log(`key: '${event.key}', keyCode: '${event.keyCode}'.`);
        // if(event.key == 'Escape' || event.key == 'q' || event.key == 'Q') {q();}
        // if(event.key == '.' || event.key == 'CapsLock' || event.key == '`') {}
    }
    if(!s.q){
        if(event.key == ' ' || event.key == 'Enter') {
            pause();
        }
        if(event.key == 's' || event.key == 'S') {
            openS();
        }
        if(event.key == 'w' || event.key == 'W') {
            openW();
        }
        if(event.key == 'l' || event.key == 'L') {
            toggleLog();
        }
        if(event.key == 'i' || event.key == 'I') {
            switchTags();
        }
        if(event.key == 'o' || event.key == 'O') {
            speedSize();
        }
        if(event.key == 't' || event.key == 'T') {
            toggleCanvas('canvas_trace');
        }
        if(event.key == 'g' || event.key == 'G') {
            toggleCanvas('canvas_grid');
        }
        if(event.key == 'f' || event.key == 'F') {
            // s.gf_active ? s.gf_active = false : s.gf_active = true;
            toggleGravity();
        }
        if(event.key == 'q' || event.key == 'Q') {
            // s.quid ? s.quid = false : s.quid = true;
            liQuid();
        }
        if(event.key == 'h' || event.key == 'H') {
            // s.huesp ? s.huesp = false : s.huesp = true;
            hueSp();
        }
        if(event.key == 'a' || event.key == 'A') {
            arrowForward();
        }
    }

    // if(event.key == 'Tab' || event.key == '`') {openS();}
});

window.addEventListener('mousemove', (ev) =>{
    if(!s.q && !s.pause){
        s.x = ev.clientX;
        s.y = ev.clientY;
    }
});

function CheckSpeed(){
    let sum = 0;
    particles.forEach(p => {
        sum += p.speed ** 2;
    });
    return sum;
}
window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
    /* 🌌🌀🌠🌈🌟💫 */
    StartLayers();
    DrawGrid(ctx['canvas_grid']);
    updateLayout();
    // updateFilters();
    
    start();
    initialSpeed = CheckSpeed();
    particles.forEach(p => {
        p.tpsp = initialSpeed;
    });
    console.log(`Initial Total Speed: ${initialSpeed}.`);

    animate();
});

// {'x':xAway,'y':yAway,'d':dAway,'h':h1,'f':f1}
var statusFormat = ['x','y','d','h','f'];
var statusForm = {'x':0,'y':0,'d':0,'h':0,'f':0};
var statusFix = {'x':2,'y':2,'d':1,'h':0,'f':4};
function statusReport(report = {'x':0,'y':0,'d':0,'h':0,'f':0}){
    statusFormat.forEach(k => {
        let output = document.getElementById(`s.${k}`);
        output.innerText = report[k].toFixed(statusFix[k]);
    });
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

function slowDown(){
    particles.forEach(p => {
        // p.speed = 1;
        // p.speed /= 10;
        p.speed /= 2;
    });
}
function locateAll(){
    particles.forEach(p => {
        let x = p.x;
        let y = p.y;
        safeLog([`🌌%cid:${p.id}%c💫 at (%c${p.x.toFixed(1)}%c,%c${p.y.toFixed(1)}%c)`, p.idStyle, 'color: #999;', p.pstyle, 'color: #999;', p.pstyle, 'color: #999;']);
    });
}
function addForce(){
    particles.forEach(p => {
        // p.speed = 1;
        p.speed += 0.2;
    });
}