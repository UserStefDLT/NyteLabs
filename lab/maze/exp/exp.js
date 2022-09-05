
const s = {
    h: window.innerHeight,
    w: window.innerWidth,

    tile: {
        real_h: 16,
        real_w: 16,
        h: 20,
        w: 20,
        fill: 0
    },
    grid: {
        h: window.innerHeight,
        w: window.innerWidth,
        cols: 15,
        rows: 15,
        margin: 16
    },
    maze: {},

    player: false,

    s: false,
    steps: false,
    tags: false,
    log: true,
    pause: false,
    q: false,
    z: false
}

const maze_settings = {
    wall: -1,
    path: 0,
    start: 1,
    end: 9
}
var direction_char = ['○', '↙', '↓', '↘', '←', '•', '→', '↖', '↑', '↗'];
var sides = [1,2,3,4,6,7,8,9];
const yxSide = {
    0:{y:0,x:0},
    1:{y:1,x:-1},
    2:{y:1,x:0},
    3:{y:1,x:1},
    4:{y:0,x:-1},
    5:{y:0,x:0},
    6:{y:0,x:1},
    7:{y:-1,x:-1},
    8:{y:-1,x:0},
    9:{y:-1,x:1}
};


class xy {
    constructor(x = 0, y = 0, d = 0){
        this.x = x;
        this.y = y;
        this.d = d;
    }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = s.grid.w;
canvas.height = s.grid.h;
class Ant {
    constructor(x = 0, y = 0, d = 0){
        this.x = x;
        this.y = y;
        /* 'd' will be a tile direction (1-4,6-9) */
        this.d = d;
        
        this.nd = new xy(yxSide[d].x,yxSide[d].y);
        this.nxy = new xy();

        this.size = 5;
        this.hue = Math.floor(Math.random() * 360);
        this.xleft = (x * s.tile.real_w) + (s.tile.real_w - this.size) / 2;
        this.ytop = (y * s.tile.real_h) + (s.tile.real_h - this.size) / 2;
    }
    next(){
        // this.nxy.x = this.x + yxSide[d].x;
        // this.nxy.y = this.y + yxSide[d].y;
        this.nxy.x = this.x + this.nd.x;
        this.nxy.y = this.y + this.nd.y;
        return this.nxy;
    }
    directionUpdate(){
        let xory = Math.floor(Math.random() * 2);
        if(xory == 0){
            this.nd.x = Math.floor(Math.random() * 3 - 1);
        } else {
            this.nd.y = Math.floor(Math.random() * 3 - 1);
        }
    }
    update(){
        // let xory = Math.floor(Math.random() * 2);
        // if(xory == 0){
        //     this.nd.x = Math.floor(Math.random() * 3 - 1);
        // } else {
        //     this.nd.y = Math.floor(Math.random() * 3 - 1);
        // }
        // this.x += yxSide[d].x;
        // this.y += yxSide[d].y;

        this.x += this.nd.x;
        this.y += this.nd.y;
    }
    draw(){
        // ctx.fillStyle = `hsl(60, 100%, 40%)`;
        // ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.lum}%,${this.alp})`;
        ctx.fillStyle = `hsla(${this.hue}, 100%, 40%, .75)`;
        ctx.beginPath();
        ctx.arc(this.xleft, this.ytop, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Maze {
    constructor(w, h, fill = -1){
        this.w = w;
        this.h = h;
        this.fill = fill;
        this.start = new xy();
        this.end = new xy();
        this.maze = [];
        this.stepMap = [];

        this.fillMap();
        this.selectStart();

        this.ants = [];
    }
    fillMap(fill = this.fill){
        for(let y=0; y<this.h; y++){
            this.maze.push([]);
            this.stepMap.push([]);
            for(let x=0; x<this.w; x++){
                this.maze[y].push(fill);
                this.stepMap[y].push(0);
            }
        }
    }
    selectStart() {
        this.start.x = Math.floor(Math.random()*this.w);
        this.start.y = Math.floor(Math.random()*this.h);

        this.xyPath = new xy(this.start.x, this.start.y);
        this.maze[this.start.y][this.start.x] = 1;

        // s.maze['start'] = new xy();
        // s.maze.start.x = this.start.x;
        // s.maze.start.y = this.start.y;
    }
    selectEnd() {
        this.maze[this.end.y][this.end.x] = 9;
        console.log(`%cSteps: %c${this.end.d}`, 'color:#ccc;', 'color:#f93;');
        // s.maze['end'] = new xy();
        // s.maze.end.x = this.end.x;
        // s.maze.end.y = this.end.y;
    }
    isInMap(x,y){
        if(x < 0 || x >= this.w || y < 0 || y >= this.h) {return false;}
        else {return true;}
    }
    
    possibleSides(x,y){
        let possibleDirections = [];
        for (let i = 0; i < sides.length; i++) {
            let d = sides[i];
            const yxd = yxSide[d];
            if(this.isInMap(x + yxd.x, y + yxd.y)) {
                possibleDirections.push(d);
            }
        }
        return possibleDirections;
    }
    makePath2(){
        let possibleDirections = possibleSides(x,y);
        let pathSides = [...possibleDirections];

        // pic a random side, make an ant.
        // this.ants.push(new Ant(this.start.x,this.start.y,dNext));

        // for each side,
        for (let i = 0; i < possibleDirections.length; i++) {
            let dNext = pathSides.splice(Math.floor(Math.random()*pathSides.length),1);
            let next = new xy(this.xyPath.x + yxSide[dNext].x, this.xyPath.y + yxSide[dNext].y);

            let validPath = true;
            // check around the path chosen.
            for (let i = 0; i < sides.length; i++) {
                let d = sides[i];
                let yxA = new xy(next.x + yxSide[d].x, next.y + yxSide[d].y);

                // if this side is on the map, and not where we came from.
                if(this.isInMap(yxA.x,yxA.y) && !(yxA.x == this.xyPath.x && yxA.y == this.xyPath.y)) {
                    if(this.maze[yxA.y][yxA.x] != -1){
                        validPath = false;
                    }
                }
                
            }
            if(validPath){
                this.maze[next.y][next.x] = 0;
                this.ants.push(new Ant(next.x,next.y,dNext));
                // this.pathHelper(next);
            }
        }
    }

    pathHelper(step, count = 0){
        let possibleDirections = [];
        for (let i = 0; i < sides.length; i++) {
            let d = sides[i];
            const yxd = yxSide[d];
            // if(this.isInMap(step.x + yxd.x, step.y + yxd.y) && this.maze[step.y][step.x] == -1) {possibleDirections.push(d);}
            if(this.isInMap(step.x + yxd.x, step.y + yxd.y) && this.maze[step.y + yxd.y][step.x + yxd.x] == -1) {
                possibleDirections.push(d);
            }
        }
        let pathSides = [...possibleDirections];
        for (let i = 0; i < possibleDirections.length; i++) {
            // choose a direction → 'dNext' and 'next';
            let dNext = pathSides.splice(Math.floor(Math.random()*pathSides.length),1);
            let next = new xy(step.x + yxSide[dNext].x, step.y + yxSide[dNext].y);
            
            let validPath = true;

            // check around the path chosen.
            for (let i = 0; i < sides.length; i++) {
                let d = sides[i];
                /* yxA = yxAround */
                let yxA = new xy(next.x + yxSide[d].x, next.y + yxSide[d].y);

                // if this side is on the map, and not where we came from.
                if(this.isInMap(yxA.x,yxA.y) && !(yxA.x == step.x && yxA.y == step.y)) {
                    // if it is a defined tile. (anything besides '-1')
                    if(this.maze[yxA.y][yxA.x] != -1){
                        validPath = false;
                    }
                }
                
            }
            // if the path has something around that is not a '-1'
            // we just ignore that side.
            if(validPath){
                this.maze[next.y][next.x] = 0;
                this.stepMap[next.y][next.x] = count+1;
                this.pathHelper(next, count+1);

                if(count >= this.end.d){
                    this.end.x = next.x;
                    this.end.y = next.y;
                    this.end.d = count;
                }
            }
        }
    }
    makePath(){
        // from the start..
        
        // solve possible directions.
        let possibleDirections = [];
        for (let i = 0; i < sides.length; i++) {
            let d = sides[i];
            const yxd = yxSide[d];
            if(this.isInMap(this.xyPath.x + yxd.x, this.xyPath.y + yxd.y)) {
                possibleDirections.push(d);
            }
        }
        let pathSides = [...possibleDirections];
        for (let i = 0; i < possibleDirections.length; i++) {
            let dNext = pathSides.splice(Math.floor(Math.random()*pathSides.length),1);
            let next = new xy(this.xyPath.x + yxSide[dNext].x, this.xyPath.y + yxSide[dNext].y);

            let validPath = true;
            // check around the path chosen.
            for (let i = 0; i < sides.length; i++) {
                let d = sides[i];
                let yxA = new xy(next.x + yxSide[d].x, next.y + yxSide[d].y);

                // if this side is on the map, and not where we came from.
                if(this.isInMap(yxA.x,yxA.y) && !(yxA.x == this.xyPath.x && yxA.y == this.xyPath.y)) {
                    if(this.maze[yxA.y][yxA.x] != -1){
                        validPath = false;
                    }
                }
                
            }
            if(validPath){
                this.maze[next.y][next.x] = 0;
                this.pathHelper(next);
            }
        }
        this.selectEnd();
    }
    
    levelCleared() {
        this.fillMap();
    }
}



var level;


function updateSettings(){
    s.h = window.innerHeight;
    s.w = window.innerWidth;

    let h = s.h * .94 - 108;
    let w = s.w * .95;
    
    s.grid.cols = Math.floor((w - s.grid.margin) / s.tile.w);
    s.grid.rows = Math.floor((h - s.grid.margin) / s.tile.h);

    if(s.grid.cols > 32) { s.grid.cols = 32; }
    if(s.grid.rows > 32) { s.grid.rows = 32; }
    s.grid.w = Math.floor(w - s.grid.margin);
    s.grid.h = Math.floor(h - s.grid.margin);
    canvas.width = s.grid.w;
    canvas.height = s.grid.h;

    console.log(`%cw: %c${s.w}%c, h: %c${s.h}`, 'color:#ccc;', 'color:#39f;', 'color:#ccc;', 'color:#39f;');
    console.log(`%cw: %c${w}%c, h: %c${h}`, 'color:#ccc;', 'color:#39f;', 'color:#ccc;', 'color:#39f;');
    console.log(`%ccols: %c${s.grid.cols}%c, rows: %c${s.grid.rows}`, 'color:#ccc;', 'color:#39f;', 'color:#ccc;', 'color:#39f;');
}