const d = {
    0: {x:0, y:0},
}

class p {
    constructor(x=0, y=0, z=0, a=-1){
        this.x = x;
        this.y = y;
        this.z = z;
        this.a = a;
    }
}

class ant {
    constructor(id=-1,x=0,y=0,energy=10){
        this.id = id;
        this.x = x;
        this.y = y;
        this.xy = new p(x,y);
        this.d = new p();
        this.e = energy;
    }
    static map = [];
    move(){
        this.x += this.d.x;
        this.y += this.d.y;
        this.xy.x += this.d.x;
        this.xy.y += this.d.y;
    }
}


Colony = class Colony {
    constructor(x=0,y=0,count=0) {
        this.x = x;
        this.y = y;
        this.count = count;
        this.ants = {};
    }
    hatch(n){
        for(let i = 0; i<n; i++){
            this.ants[i] = new ant(i,this.x, this.y);
        }
    }
};


Maze = class Maze {
    constructor(dim={h:0,w:0}) {
        this.h = dim.h;
        this.w = dim.w;
        this.colony = new Colony();
    }
};