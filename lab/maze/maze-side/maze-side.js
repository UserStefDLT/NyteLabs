


const sides = [2, 4, 6, 8];
const sides_around = [1, 2, 3, 4, 6, 7, 8, 9];

const xySide = {
    1: { x: -1, y: 1 },
    2: { x: 0, y: 1 },
    3: { x: 1, y: 1 },

    4: { x: -1, y: 0 },
    5: { x: 0, y: 0 },
    6: { x: 1, y: 0 },

    7: { x: -1, y: -1 },
    8: { x: 0, y: -1 },
    9: { x: 1, y: -1 },
};


class MazeSide {
    constructor(w, h, fill = -1) {
        this.h = h;
        this.w = w;
        this.fill = fill;
        this.start = {x: 0, y: 0};
        this.end = {x: 0, y: 0, d: 0};
        this.maze = [];
        this.stepMap = [];
        this.step = 0;

        this.FillMap();
        this.SelectStart();
    }
    FillMap(fill = this.fill) {
        this.maze = [];
        this.stepMap = [];
        for (let y = 0; y < this.h; y++) {
            this.maze.push([]);
            this.stepMap.push([]);
            for (let x = 0; x < this.w; x++) {
                this.maze[y].push(fill);
                this.stepMap[y].push(0);
            }
        }
    }
    SelectStart() {
        this.start.x = Math.floor(Math.random() * this.w);
        this.start.y = Math.floor(Math.random() * this.h);
        this.MoveTo(this.start.x, this.start.y, 1);
    }
    SelectEnd() {
        // this.MoveTo(this.end.x, this.end.y, 9);
        this.maze[this.end.y][this.end.x] = 9;
        this.MoveTo(this.end.x, this.end.y, 9, this.end.d);
    }
    IsInMap(x, y) {
        if (x < 0 || y < 0 || x >= this.w || y >= this.h) {
            return false;
        }
        return true;
    }
    IsTile(x, y, tile) {
        if (this.IsInMap(x, y)) {
            return (this.maze[y][x] == tile);
        }
    }
    IsClear(x, y) {
        return this.IsTile(x, y, -1);
    }

    ValidSides(x, y) {
        let valid = [];
        for (let i = 0; i < sides.length; i++) {
            let d = sides[i];
            let nx = x + xySide[d].x;
            let ny = y + xySide[d].y;
            if (this.IsClear(nx, ny)) {
                valid.push(d);
            }
        }
        return valid;
    }
    CheckAround(x, y, nx, ny, d) {
        for (let i = 0; i < sides_around.length; i++) {
            let ad = sides_around[i];
            let ax = nx + xySide[ad].x;
            let ay = ny + xySide[ad].y;

            if(!((xySide[d].x && x == ax) || (xySide[d].y && y == ay)) && !this.IsClear(ax, ay)){
                return false;
            }
        }
        return true;
    }

    MakePath_Helper(x, y, steps = this.step) {
        let validSides = this.ValidSides(x, y);
        if(validSides.length > 0) {
            let sidesLeft = [...validSides];
            
            for (let i = 0; i < validSides.length; i++) {
                let d = sidesLeft.splice(Math.floor(Math.random() * sidesLeft.length), 1);

                let nx = x + xySide[d].x;
                let ny = y + xySide[d].y;

                if (this.CheckAround(x, y, nx, ny, d)) {
                    this.MoveTo(nx, ny, 0, steps);
                    this.MakePath_Helper(nx, ny, steps + 1);
                }
            }
        }
    }
    MakePath() {
        let x = this.start.x;
        let y = this.start.y;

        let validSides = this.ValidSides(x, y);

        let d = validSides[Math.floor(Math.random() * validSides.length)];

        let nx = x + xySide[d].x;
        let ny = y + xySide[d].y;

        this.MoveTo(nx, ny);

        this.MakePath_Helper(nx, ny);
        this.SelectEnd();
    }

    MoveTo(x, y, tile = 0, step = this.step) {
        safeLog([`%c → At step #%c${this.step}%c, MoveTo(%c${x}%c, %c${y}%c, %c${tile}%c, %c${step}%c)`, logSty.c, logSty.s, logSty.c, logSty.b, logSty.c, logSty.b, logSty.c, logSty.b, logSty.c, logSty.b, logSty.c]);
        this.maze[y][x] = tile;
        this.stepMap[y][x] = step;
        if (step >= this.end.d) {
            this.end.x = x;
            this.end.y = y;
            this.end.d = step;
        }
        this.step++;
        this.UpdateTileInDOM(x, y, tile, step);
    }

    UpdateTileInDOM(x, y, tile = -1, step = 0) {
        let tile_id = `xy,${x},${y}`;
        let tile_elem = document.getElementById(tile_id);
        if (tile_elem) {
            // tile_elem.dataset.tile = tile;
            // tile_elem.dataset.step = step;
            // tile_elem.style = `--step: ${step};`;
            tile_elem.dataset.type = tile;
            tile_elem.dataset.steps = step;
            tile_elem.style = `--steps: ${step};`;
        }
    }
}


/* Previous Versions */

/* MazeSize_01 */
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
class MazeSide_01 {
    constructor(w, h, fill = -1) {
        this.w = w;
        this.h = h;
        this.fill = fill;
        this.start = new xy();
        this.end = new xy();
        this.maze = [];
        this.stepMap = [];
        this.steps = 0;

        this.fillMap();
        this.selectStart();
    }
    fillMap(fill = this.fill) {
        for (let y = 0; y < this.h; y++) {
            this.maze.push([]);
            this.stepMap.push([]);
            for (let x = 0; x < this.w; x++) {
                this.maze[y].push(fill);
                this.stepMap[y].push(0);
            }
        }
    }
    selectStart() {
        this.start.x = Math.floor(Math.random() * this.w);
        this.start.y = Math.floor(Math.random() * this.h);
        safeLog([`%cStep #%c${this.steps}%c, maze starts at: (%c${this.start.x}%c,%c${this.start.y}%c)`, logSty.c, logSty.s, logSty.c, logSty.b, logSty.c, logSty.b, logSty.c]);
        this.xyPathTo(this.start.x, this.start.y, this.steps, 1);
    }
    selectEnd() {
        this.maze[this.end.y][this.end.x] = 9;
        console.log(`%cSteps to the End: %c${this.end.d}`, 'color:#ccc;', 'color:#f93;');
        // console.log(`🐜 #%c${this.end.id}%c Steps: %c${this.end.d}`, logSty.s, 'color:#ccc;', 'color:#f93;');
        // console.log(`🐜 #%c${this.endingAnt[0].id}%c Personal steps: %c${this.endingAnt[0].steps}`, this.endingAnt[0].idStyle, 'color:#ccc;', 'color:#f93;');
        // s.maze['end'] = new xy();
        // s.maze.end.x = this.end.x;
        // s.maze.end.y = this.end.y;
        this.updateView(this.end.x, this.end.y, this.end.d, 9);
    }
    isInMap(x, y) {
        if (x < 0 || x >= this.w || y < 0 || y >= this.h) { return false; }
        else { return true; }
    }
    isClear(x, y) {
        if (this.maze[y][x] == -1) {
            return true;
        } else {
            return false;
        }
    }
    checkAround3(ex, ey, nx, ny) {
        for (let i = 0; i < sides_around.length; i++) {
            let ax = nx + yxSide[sides_around[i]].x;
            let ay = ny + yxSide[sides_around[i]].y;
            if (this.isInMap(ax, ay) && !((ex - nx != 0 && ex == ax) || (ey - ny != 0 && ey == ay)) && !this.isClear(ax, ay)) {
                return false;
            }
        }
        return true;
    }
    checkAround2(ex, ey, nx, ny) {
        for (let i = 0; i < sides_around.length; i++) {
            let ax = nx + yxSide[sides_around[i]].x;
            let ay = ny + yxSide[sides_around[i]].y;
            if (this.isInMap(ax, ay) && !(ex == ax && ey == ay) && !this.isClear(ax, ay)) {
                return false;
            }
        }
        return true;
    }
    checkAround(ex, ey, nx, ny) {
        for (let i = 0; i < sides.length; i++) {
            let ax = nx + yxSide[sides[i]].x;
            let ay = ny + yxSide[sides[i]].y;
            if (this.isInMap(ax, ay) && !(ex == ax && ey == ay) && !this.isClear(ax, ay)) {
                return false;
            }
        }
        return true;
    }
    possibleSides(x, y) {
        let possibleDirections = [];
        for (let i = 0; i < sides.length; i++) {
            let d = sides[i];
            let nx = x + yxSide[d].x;
            let ny = y + yxSide[d].y;
            // if(this.isInMap(nx,ny) && this.isClear(nx,ny) && this.checkAround(x,y,nx,ny)) {
            //     // this.checkAround2(x,y,nx,ny);
            //     possibleDirections.push(d);
            // }
            if (this.isInMap(nx, ny) && this.isClear(nx, ny)) {
                // if(this.checkAround(x,y,nx,ny)){
                //     possibleDirections.push(d);
                // }
                possibleDirections.push(d);
            }
        }
        return possibleDirections;
    }
    makePathHelper(x, y, step = 0) {
        let possibleDirections = this.possibleSides(x, y);
        // safeLogList2(`Step #%c${step}%c → Possible Directions`, possibleDirections, [logSty.s, logSty.c]);
        // if(possibleDirections.length > 0 && step < 20){
        if (possibleDirections.length > 0) {
            let pathSides = [...possibleDirections];
            for (let i = 0; i < possibleDirections.length; i++) {
                let d = pathSides.splice(Math.floor(Math.random() * pathSides.length), 1);
                // safeLog([`%c → At step #%c${this.steps}%c, at index: (%c${i}%c), direction from pathSides: (%c${d}%c)`, logSty.c, logSty.s, logSty.c, logSty.b, logSty.c, logSty.b, logSty.c]);
                let nx = x + yxSide[d].x;
                let ny = y + yxSide[d].y;
                if (this.checkAround3(x, y, nx, ny)) {
                    this.xyPathTo(nx, ny, step);
                    // this.xyPathTo(nx,ny,this.steps);
                    // this.xyPathTo(nx,ny);
                    this.makePathHelper(nx, ny, step + 1);
                }
            }
        }
    }
    makePath() {
        let possibleDirections = this.possibleSides(this.start.x, this.start.y);
        // safeLogList2(`Step #%c${this.steps}%c → Possible Directions`, possibleDirections, [logSty.s, logSty.c]);

        // let random_direction_id = Math.floor(Math.random()*possibleDirections.length);
        // let d = possibleDirections[random_direction_id];
        // safeLog([`%c → At step #%c${this.steps}%c, random direction id: (%c${random_direction_id}%c), direction: (%c${d}%c)`, logSty.c, logSty.s, logSty.c, logSty.b, logSty.c, logSty.b, logSty.c]);
        let d = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];

        let nx = this.start.x + yxSide[d].x;
        let ny = this.start.y + yxSide[d].y;

        // this.xyPathTo(nx,ny,this.steps);
        this.xyPathTo(nx, ny, this.steps, 0);
        this.makePathHelper(nx, ny, this.steps);

        this.selectEnd();
    }

    xyPathTo(x, y, steps = this.steps, tile = 0) {
        // safeLog([`%c → At step #%c${steps}%c, making tile (%c${tile}%c) path to : (%c${x}%c,%c${y}%c)`, logSty.c, logSty.s, logSty.c, logSty.b, logSty.c, logSty.b, logSty.c, logSty.b, logSty.c]);
        this.maze[y][x] = tile;
        this.stepMap[y][x] = steps;
        if (steps >= this.end.d) {
            this.end.x = x;
            this.end.y = y;
            this.end.d = steps;
        }
        this.steps++;
        this.updateView(x, y, steps, tile);
    }
    updateView(x, y, steps = 0, tile) {
        let tile_id = `xy,${x},${y}`;
        let tile_element = document.getElementById(tile_id);
        if(tile_element){
            tile_element.dataset.type = tile;
            tile_element.dataset.steps = steps;
            tile_element.style = `--steps: ${steps};`;
        }
    }
}

// MazeSize_02a *not tested yet.*
class MazeSide_02a {
    constructor(h, w, fill = -1) {
        this.h = h;
        this.w = w;
        this.fill = fill;
        this.start = {x: 0, y: 0};
        this.end = {x: 0, y: 0, d: 0};
        this.maze = [];
        this.stepMap = [];

        this.FillMap();
        this.SelectStart();
    }
    
    FillMap(fill = this.fill) {
        this.maze = [];
        this.stepMap = [];
        for (let y = 0; y < this.h; y++) {
            this.maze.push([]);
            this.stepMap.push([]);
            for (let x = 0; x < this.w; x++) {
                this.maze[y].push(fill);
                this.stepMap[y].push(fill);
            }
        }
    }

    SelectStart() {
        this.start.x = Math.floor(Math.random() * this.w);
        this.start.y = Math.floor(Math.random() * this.h);
        this.MoveTo(this.start.x, this.start.y, 1);
    }

    SelectEnd() {
        this.MoveTo(this.end.x, this.end.y, 9);
    }

    IsInMap(x, y) {
        if (x < 0 || y < 0 || x >= this.w || y >= this.h) {
            return false;
        }
        return true;
    }

    IsTile(x, y, tile) {
        if (this.IsInMap(x, y)) {
            return (this.maze[y][x] == tile);
        }
    }

    IsClear(x, y) {
        return this.IsTile(x, y, -1);
    }

    ValidSides(x, y) {
        let valid = [];
        for (let i = 0; i < sides.length; i++) {
            let d = sides[i];
            let nx = x + xySide[d].x;
            let ny = y + xySide[d].y;
            if (IsClear(nx, ny)) {
                valid.push(d);
            }
        }
        return valid;
    }

    CheckAround(x, y, nx, ny, d) {
        for (let i = 0; i < sides_around.length; i++) {
            let ad = sides_around[i];
            let ax = nx + xySide[ad].x;
            let ay = ny + xySide[ad].y;

            /*
            missing to check if it is previous. 
    
            it should ignore sides in the opposite of 'd' 
    
            */

            /* 
            // Option 1:
            let back = false;
            if(xySide[d].x && x == ax){
            back = true;
            }
            if(xySide[d].y && y == ay){
            back = true;
            }
            if(!back&&!IsClear(nx,ny)){
            return false;
            }
    
            //Option 2:
            if(!((xySide[d].x && x == ax) || (xySide[d].y && y == ay)) && !IsClear(nx,ny)){
            return false;
            }            

            //Previously:
            if (!IsClear(nx, ny)) {
                return false;
            }
            */

            if(!((xySide[d].x && x == ax) || (xySide[d].y && y == ay)) && !IsClear(ax,ay)){
                return false;
            }
        }
        return true;
    }

    MakePath_Helper(x, y, steps = this.step) {
        let validSides = this.ValidSides(x, y);
        let sidesLeft = [...validSides];

        for (let i = 0; i < validSides.length; i++) {
            let d = sidesLeft.splice(Math.floor(Math.random() * sidesLeft.length), 1);

            let nx = x + xySide[d].x;
            let ny = y + xySide[d].y;

            if (CheckAround(x, y, nx, ny, d)) {
                this.MoveTo(nx, ny, 0, steps);
                this.MakePath_Helper(nx, ny, steps + 1);

            }
        }

        /*
        let d = Math.floor(Math.random() * validSides.length);
    
        let nx = x + xySide[d].x;
        let ny = y + xySide[d].y;
    
        this.MoveTo(nx,ny,0,steps);
        this.MakePath_Helper(nx, ny, steps+1);
        */

    }
    MakePath() {
        let x = this.start.x;
        let y = this.start.y;

        let validSides = this.ValidSides(x, y);

        let d = Math.floor(Math.random() * validSides.length);

        let nx = x + xySide[d].x;
        let ny = y + xySide[d].y;

        this.MoveTo(nx, ny);

        this.MakePath_Helper(nx, ny);
        this.SelectEnd();
    }

    MoveTo(x, y, tile = 0, step = this.step) {
        this.maze[y][x] = tile;
        this.stepMap[y][x] = step;
        if (this.end.d >= step) {
            this.end.x = x;
            this.end.y = y;
            this.end.d = step;
        }
        this.step++;
        this.UpdateTileInDOM(x, y, tile, step);
    }

    UpdateTileInDOM(x, y, tile, step) {
        let tile_id = `xy,${x},${y}`;
        let tile_elem = document.getElementById(tile_id);
        if (tile_elem) {
            tile_elem.dataset.tile = tile;
            tile_elem.dataset.step = step;
            tile_elem.style = `--step: ${step};`;
        }
    }
}

// MazeSize_02b *needs update on the UI control*
class MazeSide_02b {
    constructor(h, w, fill = -1) {
        this.h = h;
        this.w = w;
        this.fill = fill;
        this.start = {x: 0, y: 0};
        this.end = {x: 0, y: 0, d: 0};
        this.maze = [];
        this.stepMap = [];
        this.steps = 0;

        this.FillMap();
        this.SelectStart();
    }
    FillMap(fill = this.fill) {
        this.maze = [];
        this.stepMap = [];
        for (let y = 0; y < this.h; y++) {
            this.maze.push([]);
            this.stepMap.push([]);
            for (let x = 0; x < this.w; x++) {
                this.maze[y].push(fill);
                this.stepMap[y].push(0);
            }
        }
    }
    SelectStart() {
        this.start.x = Math.floor(Math.random() * this.w);
        this.start.y = Math.floor(Math.random() * this.h);
        this.MoveTo(this.start.x, this.start.y, 1);
    }
    SelectEnd() {
        // this.MoveTo(this.end.x, this.end.y, 9);
        this.maze[this.end.y][this.end.x] = 9;
        this.MoveTo(this.end.x, this.end.y, 9, this.end.d);
    }
    IsInMap(x, y) {
        if (x < 0 || y < 0 || x >= this.w || y >= this.h) {
            return false;
        }
        return true;
    }
    IsTile(x, y, tile) {
        if (this.IsInMap(x, y)) {
            return (this.maze[y][x] == tile);
        }
    }
    IsClear(x, y) {
        return this.IsTile(x, y, -1);
    }

    ValidSides(x, y) {
        let valid = [];
        for (let i = 0; i < sides.length; i++) {
            let d = sides[i];
            let nx = x + xySide[d].x;
            let ny = y + xySide[d].y;
            if (this.IsClear(nx, ny)) {
                valid.push(d);
            }
        }
        return valid;
    }
    CheckAround(x, y, nx, ny, d) {
        for (let i = 0; i < sides_around.length; i++) {
            let ad = sides_around[i];
            let ax = nx + xySide[ad].x;
            let ay = ny + xySide[ad].y;

            if(!((xySide[d].x && x == ax) || (xySide[d].y && y == ay)) && !this.IsClear(ax, ay)){
                return false;
            }
        }
        return true;
    }

    MakePath_Helper(x, y, steps = this.step) {
        let validSides = this.ValidSides(x, y);
        if(validSides.length > 0) {
            let sidesLeft = [...validSides];
            
            for (let i = 0; i < validSides.length; i++) {
                let d = sidesLeft.splice(Math.floor(Math.random() * sidesLeft.length), 1);

                let nx = x + xySide[d].x;
                let ny = y + xySide[d].y;

                if (this.CheckAround(x, y, nx, ny, d)) {
                    this.MoveTo(nx, ny, 0, steps);
                    this.MakePath_Helper(nx, ny, steps + 1);
                }
            }
        }
    }
    MakePath() {
        let x = this.start.x;
        let y = this.start.y;

        let validSides = this.ValidSides(x, y);

        let d = validSides[Math.floor(Math.random() * validSides.length)];

        let nx = x + xySide[d].x;
        let ny = y + xySide[d].y;

        this.MoveTo(nx, ny);

        this.MakePath_Helper(nx, ny);
        this.SelectEnd();
    }

    MoveTo(x, y, tile = 0, step = this.step) {
        this.maze[y][x] = tile;
        this.stepMap[y][x] = step;
        if (step >= this.end.d) {
            this.end.x = x;
            this.end.y = y;
            this.end.d = step;
        }
        this.step++;
        this.UpdateTileInDOM(x, y, tile, step);
    }

    UpdateTileInDOM(x, y, tile = -1, step = 0) {
        let tile_id = `xy,${x},${y}`;
        let tile_elem = document.getElementById(tile_id);
        if (tile_elem) {
            tile_elem.dataset.tile = tile;
            tile_elem.dataset.step = step;
            tile_elem.style = `--step: ${step};`;
        }
    }
}

// MazeSize_02c *works*
class MazeSide_02c {
    constructor(w, h, fill = -1) {
        this.h = h;
        this.w = w;
        this.fill = fill;
        this.start = {x: 0, y: 0};
        this.end = {x: 0, y: 0, d: 0};
        this.maze = [];
        this.stepMap = [];
        this.step = 0;

        this.FillMap();
        this.SelectStart();
    }
    FillMap(fill = this.fill) {
        this.maze = [];
        this.stepMap = [];
        for (let y = 0; y < this.h; y++) {
            this.maze.push([]);
            this.stepMap.push([]);
            for (let x = 0; x < this.w; x++) {
                this.maze[y].push(fill);
                this.stepMap[y].push(0);
            }
        }
    }
    SelectStart() {
        this.start.x = Math.floor(Math.random() * this.w);
        this.start.y = Math.floor(Math.random() * this.h);
        this.MoveTo(this.start.x, this.start.y, 1);
    }
    SelectEnd() {
        // this.MoveTo(this.end.x, this.end.y, 9);
        this.maze[this.end.y][this.end.x] = 9;
        this.MoveTo(this.end.x, this.end.y, 9, this.end.d);
    }
    IsInMap(x, y) {
        if (x < 0 || y < 0 || x >= this.w || y >= this.h) {
            return false;
        }
        return true;
    }
    IsTile(x, y, tile) {
        if (this.IsInMap(x, y)) {
            return (this.maze[y][x] == tile);
        }
    }
    IsClear(x, y) {
        return this.IsTile(x, y, -1);
    }

    ValidSides(x, y) {
        let valid = [];
        for (let i = 0; i < sides.length; i++) {
            let d = sides[i];
            let nx = x + xySide[d].x;
            let ny = y + xySide[d].y;
            if (this.IsClear(nx, ny)) {
                valid.push(d);
            }
        }
        return valid;
    }
    CheckAround(x, y, nx, ny, d) {
        for (let i = 0; i < sides_around.length; i++) {
            let ad = sides_around[i];
            let ax = nx + xySide[ad].x;
            let ay = ny + xySide[ad].y;

            if(!((xySide[d].x && x == ax) || (xySide[d].y && y == ay)) && !this.IsClear(ax, ay)){
                return false;
            }
        }
        return true;
    }

    MakePath_Helper(x, y, steps = this.step) {
        let validSides = this.ValidSides(x, y);
        if(validSides.length > 0) {
            let sidesLeft = [...validSides];
            
            for (let i = 0; i < validSides.length; i++) {
                let d = sidesLeft.splice(Math.floor(Math.random() * sidesLeft.length), 1);

                let nx = x + xySide[d].x;
                let ny = y + xySide[d].y;

                if (this.CheckAround(x, y, nx, ny, d)) {
                    this.MoveTo(nx, ny, 0, steps);
                    this.MakePath_Helper(nx, ny, steps + 1);
                }
            }
        }
    }
    MakePath() {
        let x = this.start.x;
        let y = this.start.y;

        let validSides = this.ValidSides(x, y);

        let d = validSides[Math.floor(Math.random() * validSides.length)];

        let nx = x + xySide[d].x;
        let ny = y + xySide[d].y;

        this.MoveTo(nx, ny);

        this.MakePath_Helper(nx, ny);
        this.SelectEnd();
    }

    MoveTo(x, y, tile = 0, step = this.step) {
        safeLog([`%c → At step #%c${this.step}%c, MoveTo(%c${x}%c, %c${y}%c, %c${tile}%c, %c${step}%c)`, logSty.c, logSty.s, logSty.c, logSty.b, logSty.c, logSty.b, logSty.c, logSty.b, logSty.c, logSty.b, logSty.c]);
        this.maze[y][x] = tile;
        this.stepMap[y][x] = step;
        if (step >= this.end.d) {
            this.end.x = x;
            this.end.y = y;
            this.end.d = step;
        }
        this.step++;
        this.UpdateTileInDOM(x, y, tile, step);
    }

    UpdateTileInDOM(x, y, tile = -1, step = 0) {
        let tile_id = `xy,${x},${y}`;
        let tile_elem = document.getElementById(tile_id);
        if (tile_elem) {
            // tile_elem.dataset.tile = tile;
            // tile_elem.dataset.step = step;
            // tile_elem.style = `--step: ${step};`;
            tile_elem.dataset.type = tile;
            tile_elem.dataset.steps = step;
            tile_elem.style = `--steps: ${step};`;
        }
    }
}




