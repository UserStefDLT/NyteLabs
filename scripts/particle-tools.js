

function AngleToXY(angle){
    angle = angle%360;
    let rad = angle * Math.PI / 180;
    let xy = {"x":0,"y":0};
    if(angle == 180) {xy.y = 0;} else {xy.y = Math.sin(rad);}
    if(angle == 90 || angle == 270) {xy.x = 0;} else {xy.x = Math.cos(rad);}
    return xy;
}
function XYtoAngle(x,y){
    let angle = 0;
    if(x == 0) {
        if(y > 0) {return 90;}
        if(y < 0) {return 270;}
    }
    if(x < 0) { angle += 180; }
    if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
    return angle;
}