
/*
Useful characters:
✓, ✗, 
─│
┌ ┐
└ ┘
├ ┤
┬ ┴ ┼

⋮, ⋯, ⋰, ⋱, 
⩗, ⩘
⊾, ⦜, ⦝, 

⋮, ⋯, ⋰, ⋱, 
⩗, ⩘
⊾, ⦜, ⦝, 

⋮⋱
⋮  ⋱
⋮    ⋱
⦜─────⦥

⋮⋱
⋮  ⋱
⋮    ⋱
⋮      ⋱
⋮        ⋱
⋮          ⋱
⋮____________⋱

⊿    &lrtri; &#8895; \22BF

*/


function MakeGridZero(h,w){
    let grid = [];
    for(let y = 0; y < h; y++) {
        grid.push([]);
        for(let x = 0; x < w; x++) {
            grid[y].push([]);
            // grid[y][x] = "_";
            // grid[y][x] = `${y},${x}`;
            grid[y][x] = 0;
        }
    }
    return grid;
}
function MakeGridYX(h,w){
    let grid = [];
    for(let y = 0; y < h; y++) {
        grid.push([]);
        for(let x = 0; x < w; x++) {
            grid[y].push([]);
            // grid[y][x] = "_";
            grid[y][x] = `${y},${x}`;
        }
    }
    return grid;
}
function MakeGridWith(h,w,z = []){
    let grid = [];
    for(let y = 0; y < h; y++) {
        grid.push([]);
        for(let x = 0; x < w; x++) {
            grid[y].push([]);
            // grid[y][x] = "_";
            // grid[y][x] = `${y},${x}`;
            grid[y][x] = [...z];
        }
    }
    return grid;
}
function MakeGridDirection(h,w){
    let grid = [];
    for(let y = 0; y < h; y++) {
        grid.push([]);
        for(let x = 0; x < w; x++) {
            grid[y].push([]);
            grid[y][x] = {0:true,2:true,4:true,5:true,6:true,8:true};
        }
    }
    return grid;
}
function MakeGridV(h,w){
    let grid = [];
    for(let y = 0; y < h; y++) {
        grid.push([]);
        for(let x = 0; x < w; x++) {
            grid[y].push([]);
            // grid[y][x] = "_";
            // grid[y][x] = `${y},${x}`;
            // grid[y][x] = {0:true,2:true,4:true,5:true,6:true,8:true};
            grid[y][x] = '';
        }
    }
    return grid;
}
function MakeGrid(h,w){
    let grid = [];
    for(let y = 0; y < h; y++) {
        grid.push([]);
        for(let x = 0; x < w; x++) {
            grid[y].push([]);
            grid[y][x] = '';
        }
    }
    return grid;
}


function getH(sideA, sideB){
    // let h = Math.sqrt(sideA**2 + sideB**2);
    // return h;
    return Math.sqrt(sideA**2 + sideB**2);
}

// gets the hypotenuse.
function getH(sideA, sideB, amount){
    let x = sideA * amount;
    let y = sideB * amount;
    let h = Math.sqrt(x**2 + y**2);
    return h;
}
getH(3,4,1)
// → returns 5 for a triangle of 3, 4, 5.



// ♠──♠
function AngleToXY(angle){
    let rad = angle * Math.PI / 180;
    let xy = {"x":"0","y":"0"};
    angle %= 360;
    switch(angle){
        case 0:
            xy.x = 1; xy.y = 0;
            break;
        case 90:
            xy.x = 0; xy.y = 1;
            break;
        case 180:
            xy.x = -1; xy.y = 0;
            break;
        case 270:
            xy.x = 0; xy.y = -1;
            break;
        default:
            xy.x = Math.cos(rad);
            xy.y = Math.sin(rad);
    }
    return xy;
}


/*
Triangle(3,4,5)
→Angles: 36.87, 53.13, 90.

|\
| \
4  5
|   \
|_3__\

    A
    ⋮⋱
    ⋮  ⋱
    ⋮    ⋱
    4     5
    ⋮        ⋱
    ⋮          ⋱
    ⋮_____3______⋱
    C             B


⊾A = Math.atan(3/4); //→ 0.6435011087932844
⊾B = Math.atan(4/3); //→ 0.9272952180016122

⊾A = Math.atan(3/4) * 180 / Math.PI; //→ 36.86989764584402
⊾B = Math.atan(4/3) * 180 / Math.PI; //→ 53.13010235415598
*/

/*
    ⋮, ⋯, ⋰, ⋱, 

                 B
                ⋰⋮
              ⋰  ⋮
            ⋰    ⋮
          5      4
        ⋰        ⋮
      ⋰          ⋮
    ⋰_____3______⋮
   A             C

x: 3
y: 4
h: 5

⊾A = Math.atan(4/3) * 180 / Math.PI; 
    //→ 53.13010235415598
⊾B = Math.atan(3/4) * 180 / Math.PI; 
    //→ 36.86989764584402

let angle = Math.atan(y/x) * 180 / Math.PI;
*/
function XYtoAngle(x,y){
    let angle = Math.atan(y/x) * 180 / Math.PI;
    return angle;
}
function XYtoAngles(x,y){
    let x_angle = Math.atan(y/x) * 180 / Math.PI;
    let y_angle = Math.atan(x/y) * 180 / Math.PI;
    
    let angle = Math.atan(y/x) * 180 / Math.PI;
    return angle;
}

function XYtoAngleInCircle(x,y){
    let angle = 0;
    if(x > 0) {
        angle = Math.atan(y/x) * 180 / Math.PI;
        if(y < 0){
            angle = (Math.atan(y/x) * 180 / Math.PI) + 360;
        }
    } else {
        angle = (Math.atan(y/x) * 180 / Math.PI) + 180;
    }
    return angle;
}


function XYtoAngleInCircle(x,y){
    let angle = 0;
    if(x > 0) {
        angle = Math.atan(y/x) * 180 / Math.PI;
        if(y < 0){
            angle = (Math.atan(y/x) * 180 / Math.PI) + 360;
        }
    } else {
        angle = (Math.atan(y/x) * 180 / Math.PI) + 180;
    }

    /*
    if(y == 0 && x == 0) { return 0; }
    if(y == 0 && x > 0) { return 0; }
    if(y == 0 && x < 0) { return 180; }
    if(x == 0 && y > 0) { return 90; }
    if(x == 0 && y < 0) { return 270; }

    if x = 0, then the angle can be either 90 or 270.
    if y = 0, then the angle can be 0 or 180.

    x: +, 0, -;
    y: +, 0, -;

    y\x:    [+],    [0],    [-]
    [+]     +0      90    +180
    [0]      0       0     180
    [-]   +360     270    +180 

    if(x == 0 || y == 0) { angle = 0; }
    if(x < 0) { angle += 180; }
    
    if(x == 0) { angle += 90; }

    if(y < 0) { angle += 180; }
    if(y == 0) { angle -= 90; }
    
    if(y < 0) { angle += 360; }
    


    y\x:    [-],    [0],    [+]
    [+]   +180      90      +0
    [0]    180       0       0
    [-]   +180     270    +360 


    y\x:    [-],    [0],    [+]
    [+]   +180      90      +0
    [0]    180       0       0
    [-]   +180     270      +0 


    let angle = 0;
    if(x != 0 || y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
    if(x < 0) { angle += 180; }
    if(x == 0 && y > 0) { return 90; }
    if(x == 0 && y < 0) { return 270; }


    if(x == 0) {
        if(y > 0) {return 90;}
        if(y < 0) {return 270;}
    }
    if(x < 0) { angle += 180; }
    if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }


    deg = -90;

    To CSS Angles
    y\x:    [-],    [0],    [+]
    [-]   +180     270      +0 
    [0]    180       0       0
    [+]   +180      90      +0

    To CSS Angles
    y\x:    [-],    [0],    [+]
    [-]     +0       0      +0 
    [0]    270       0      90
    [+]   +180     180    +180
    
        90
    180    0
       270

        0
    270   90
       180

    if(y == 0){
        if(x > 0) {return 90;}
        if(x < 0) {return 270;}
    }
    if(y > 0) { angle += 180; }
    if(x != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }


        ⋮, ⋯, ⋰, ⋱, 

   C______3______ B
    ⋮            ⋰
    ⋮          ⋰
    ⋮        ⋰
    4      5
    ⋮    ⋰
    ⋮  ⋰
    ⋰
   A


   C______3______ B
    ⋮            ⋰
    ⋮          ⋰
    ⋮        ⋰
    4      5
    ⋮    ⋰
    ⋮  ⋰
    ⋰
   A

    x: 3
    y: 4
    h: 5

    ⊾A = Math.atan(3/4) * 180 / Math.PI; 
        //→ 36.86989764584402
    ⊾B = Math.atan(4/3) * 180 / Math.PI; 
        //→ 53.13010235415598

    let angle = Math.atan(x/y) * 180 / Math.PI;


    */

    
    return angle;
}

function XYtoAngleInCircle(x,y){
    let angle = 0;
    if(x == 0) {
        if(y > 0) {return 90;}
        if(y < 0) {return 270;}
    }
    if(x < 0) { angle += 180; }
    if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
    return angle;
}

function XYtoCSSAngle(x,y){
    let angle = 0;
    if(y == 0){
        if(x > 0) {return 90;}
        if(x < 0) {return 270;}
    }
    if(y > 0) { angle += 180; }
    if(x != 0) { angle += Math.atan(x/y) * 180 / Math.PI; }
    return angle;
}
function XYtoCSSAngle2(x,y){
    let angle = 90;
    if(x == 0){
        if(y > 0) {return 180;}
        if(y < 0) {return 0;}
    }
    if(x > 0) { angle += 180; }
    if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
    return angle;
}

function YXtoAngle(y,x){
    let angle = -90;
    if(x == 0){
        if(y > 0) {return 180;}
        if(y < 0) {return 0;}
    }
    if(x > 0) { angle += 180; }
    if(y != 0) { angle += Math.atan(y/x) * 180 / Math.PI; }
    return angle;
}


/* ─────────────── */
// Other functions.

function calcHex(w,h,deg) {
    let x = w + (h/2);
    let y = h * .866;
    let c = Math.sqrt(x**2 + y**2);
    let res = c*deg;
    console.log(res);
}

calcHex(2,1,15)
