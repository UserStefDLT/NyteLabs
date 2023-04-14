Unknown Drive


•> Make a little world.


Structure:
* Unit
    * -type
    * +appearance
        * size
        * shape
        * color
        * movement
    * -behavior
        * path: observe, identify, decide, act.
        * observe: sight, hearing, smell, taste, touch.
* Terrain
* Event




Sample ideas:
> There could be a good use of the appearance by having a creature that has appearance of a rock by a percentage. Meaning that it camuflajes. So, 89% rock alike, would trick a predator, but if the percentage is too high, they would also trick potential mates, and their species would stop.

> Imagine a terrain of 25 by 25, we can have wolves and bunnies like the game of life. Maybe grass for the bunny, or carrots.
If we allow for variants there could be good specimens with good sight and hearing that would be good hunters, but if too many are good, they will starve because they will hunt to fast.

> For the plants, maybe I should start with trees, for example an apple tree, let’s make one female with flowers and seeds, and female with the apple fruit. Once the wind is good, the seeds from the flower will travel around looking for a female tree. If they get to one, chances will determine if they germinate and apples grow. If an apple grows, then it will fall and roll based on a rolling percentage, it will choose a random side, and based on terrain will go.
I think that the seeds will have a percentage for reproduction based on time. For example, the moment the wind comes, the tree will release them because it can’t hold to the seeds, and that wind will push them, but it has 10 time periods before it is over. The first two are low fertility, then it grows as the separation from the tree make the seed open properly. Then that percentage lowers, as it moves until it is not good enough. Like time (1,2) = 1-10%, 
then time (3,4) = 20-40%, 
then time (5,6) = 10-20%, 
then time (7,8) = 1-10%, 
then time (9) = 1%, 
then time (10) = 0%
In that way reproduction is not always happening.
I would need to reduce the growth possibility from apple to sapling based on how many trees are around, if there are too many, then it is lower and the apple only makes the ground more fertile for nourishing the roots.
It should start with at least one male and one female tree, then add randomly based on reproduction.
Each apple has multiple seeds, those are what turn into a tree, but all together could turn into a single tree. That is because they can grow together. Allowing for the same space and ratios, just that it could be like having male branches and female branches. Because reproduction is low at initial state, the possibility to fertilize on the spot is low, but still doesn’t change the way it works.




For the code and order:
World contains terrain which is an array with each grid spot having an altitude.
The world contains also items, creatures, and elements. Rocks in random places, and trees.
When a tree produces an apple, it will be part of the tree until it falls and then it is attached directly to world. Until then it is part of the inventory of the tree.
Once falling, it is an item until degradation. Items degrade over time, and are consumed by something.
I will need soil to have different fertility rates. So that it varies and it is not all cover in trees. I will also need to control weather, so some trees or forest biomes will be reduced to avoid overpopulation. Fertility or nourishing soil will lower over time while there are plants feeding on. It is slow, but if it reduces too much, the tree can’t grow, less growth could cause drying, and that means that it won’t be able to hold to the ground or to reach to more soil for nutrients. Eventually if the tree dies, then it turns into wood and nourishes the land making it fertile again.

———

<!-- <world> -->
└─> dimensions
└─> inventory
└─> elevation

World.bio.tree:
Stages:
* Seed
* Germination
* Sapling
* Mature tree
* Decaying / Harvest

/* Different tree species stay in this mature stage of the life cycle for longer than others. For example, an oak tree may produce acorns after 40 years and continue to do so for around 300 years. */

```
│─└┴┘├┼┤┌┬┐

```
const s = {
"world": {"h": 25, "w": 25},
}
const world = {
"dim": {"h": 25, "w": 25},
"map": [],
"elements: [],
};
const map = [];

const bio = {
 "Age":
}
class tree {
 constructor(id, x, y, type){
  this.id = id;
  this.x = x;
  this.y = y;
  this.type = type;
  this.age = 0;
 }
 grow(){
  
 }
 reproduce(){
  if(age > 
 }

}


function start() {

 for(let y = 0; y < s.h; y++){
  map.push([]);
  for(let x = 0; x < s.w; x++){
   map[y].push([]);
  }
 }

}


```

