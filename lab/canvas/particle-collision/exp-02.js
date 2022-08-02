


function AngleToXY(angle){
    angle = angle%360;
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

function directionUpdate(){
    this.rad = this.d * Math.PI / 180;
    if(this.d == 180) {this.dy = 0;} else {this.dy = Math.sin(this.rad);}
    if(this.d == 90 || this.d == 270) {this.dx = 0;} else {this.dx = Math.cos(this.rad);}

    // this.updatePath();
}
function addForces(){
    // this.identifyForces(1);
    let this_x_force = this.speed * this.dx;
    let this_y_force = this.speed * this.dy;

    let adding_x_force = this_x_force;
    let adding_y_force = this_y_force;

    this.forceQueue.forEach(force => {
        let xy = AngleToXY(force.d);
        let new_x_force = force.speed * xy.x;
        let new_y_force = force.speed * xy.y;
        
        adding_x_force += new_x_force;
        adding_y_force += new_y_force;
    });
    this.d = XYtoAngle(adding_x_force,adding_y_force);
    this.speed = Math.sqrt(adding_x_force**2 + adding_y_force**2);
    // if(this.speed > 5) {this.speed = 5;}
    if(this.speed > 15) {this.speed = 15;}
    
    // this.forceQueue = [];
    // this.directionUpdate();
    // this.move();
}





function collisionUpdate(a,b){
    if(a.speed > 0){
        let x2 = b.x - a.x;
        let y2 = b.y - a.y;

        let collision_angle = XYtoAngle(x2,y2);

        let apperture = Math.abs(collision_angle - a.d);

        if(apperture > 180) {apperture = 360 - apperture;}

        if(apperture < 90) {
            let force_ratio_x = Math.cos(apperture * Math.PI / 180);
            //let force_ratio_y = Math.sin(apperture * Math.PI / 180);
            //let force_ratio = force_ratio_x + force_ratio_y;
            
            //let force_to_send = (force_ratio_x/force_ratio) * a.speed;
            // let force_to_keep = a.speed - force_to_send;

            let force_to_send = (force_ratio_x) * a.speed;

            let collision_update = (collision_angle + 180)%360;

            // a.forceQueue.push({'speed':force_to_send, 'd':collision_update});
            // a.forceQueue.push({'speed':force_to_keep, 'd':collision_update});
            // a.forceQueue.push({'speed':a.speed, 'd':collision_update});
            a.forceQueue.push({'speed':force_to_send, 'd':collision_update});
            b.forceQueue.push({'speed':force_to_send, 'd':collision_angle});
        }
    }
}



/*
// Check for `addForces()`:

let o = {'x': canvas.width/2, 'y': canvas.height/2}


function DrawLine(angle = 0, distance = 1, clr = '#fff'){
    let xy = AngleToXY(angle)
    let dx = xy.x;
    let dy = xy.y;

    let dxv = dx * distance;
    let dyv = dy * distance;

    let x = dxv + o.x;
    let y = dyv + o.y;

    ctx.beginPath();
    ctx.lineWidth = 1;

    ctx.strokeStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%, ${alp2})`;
    ctx.strokeStyle = clr;
    ctx.moveTo(o.x, o.y);
    ctx.lineTo(x, y);
    ctx.stroke();


    ctx.fillStyle = clr;    
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
}

DrawLine(45, 50, '#393');
DrawLine(315, 50, '#93f');
DrawLine(90, 50, '#39f');
*/

/*

// check if there is a collision.
    collisionCheck()

// then evaluate the collision.
    collisionUpdate()

// find the collision angle.
    let x2 = b.x - a.x;
    let y2 = b.y - a.y;
    let collision_angle = XYtoAngle(x2,y2);

// find the difference between the direction and the collision angle.
    let o1 = a.d - collision_angle;
    let o2 = b.d - collision_angle;

// 


// 


// 


// 


// 


// 





*/







