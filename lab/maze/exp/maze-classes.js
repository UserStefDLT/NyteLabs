
class xy {
    constructor(x = 0, y = 0, d = 0){
        this.x = x;
        this.y = y;
        this.d = d;
    }
}

class Maze01 {
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

        s.maze['start'] = new xy();
        s.maze.start.x = this.start.x;
        s.maze.start.y = this.start.y;
    }
    selectEnd() {
        this.maze[this.end.y][this.end.x] = 9;
        console.log(`%cSteps: %c${this.end.d}`, 'color:#ccc;', 'color:#f93;');
        s.maze['end'] = new xy();
        s.maze.end.x = this.end.x;
        s.maze.end.y = this.end.y;
    }
    isInMap(x,y){
        if(x < 0 || x >= this.w || y < 0 || y >= this.h) {return false;}
        else {return true;}
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

class Player01 {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
        this.active = true;

        this.playerElement = document.createElement('div');
        // this.displayPlayer();
    }
    displayPlayer(){
        let display = document.getElementById('display');
        this.playerElement.id = 'playerOne';
        this.playerElement.classList.add('player');
        this.playerElement.classList.add('tile');
        this.playerElement.dataset.type = '5';
        this.playerElement.style = `--x: 0; --y: 0;`;
        display.appendChild(this.playerElement);
        this.moveDisplay();
    }
    moveDisplay(){
        this.playerElement.style = `--x: ${this.x}; --y: ${this.y};`;
    }
    move(d){
        let next = new xy(yxSide[d].x + this.x, yxSide[d].y + this.y);
        // safeLog([`%c next.x: %c${next.x}%c, next.y: %c${next.y}`, 'color: #999;', 'color: #06c;', 'color: #999;', 'color: #06c;']);
        if(level.isInMap(next.x, next.y)){
            // safeLog([`%ctile: (%c${next.x}%c, next.y: %c${next.y}%c) is in Map.`, 'color: #999;', 'color: #06c;', 'color: #999;', 'color: #06c;', 'color: #999;']);
            let tile = level.maze[next.y][next.x];
            // safeLog([`%ctile: %c${tile}`, 'color: #999;', 'color: #06c;']);
            if(tile == 9) {
                level.levelCleared();
            } else if(tile == 0){
                this.x = next.x;
                this.y = next.y;
                this.moveDisplay();
            }
        }
    }
    playerCleared(){
        this.x = -1;
        this.y = -1;
        this.active = false;
        this.playerElement.style = `display: none;`;
    }
}
