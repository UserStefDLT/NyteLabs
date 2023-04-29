
# Unknown Light

•> Make a light engine, there are a couple of ideas:
* Light source as particles going around a center and fluctuating like <https://userstefdlt.github.io/NyteLabs/lab/canvas/rules-heat/index-nds-06.html>
* Light is an amount of particles within a cell block, and they spread to the next based on their angle and shadow distribution.
* Light can also be with a source and if it interacts with something it is destroyed and new particles are made from the resulting interaction, both for refraction and for reflection.


```

function QuickBuildGrid(w,h,f=`0`) {
  // return `0`.repeat(w).split(``);
  return `0`.repeat(h).split(``).map(e => {e.repeat(w).split(``);});
}

var space = QuickBuildGrid(100,100)

function AddRadiance(x,y,amp=100) {
  space[y][x] = amp;
}

class luz {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

function update() {

  // update

  // draw

}


```
