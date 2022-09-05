var az = {
    h: [31,4,31,0],
    e: [31,21,21,0],
    l: [31,1,1,0],
    o: [31,17,31,0],
    s: [29,21,23,0],
    t: [16,31,16,0],
    f: [31,20,20,0],
}
function Write(word){
    let display = document.getElementById('display');
    let azs = Object.keys(az);
    let res = ['<div class="cal">'];
    for (let i = 0; i < word.length; i++) {
        const e = word[i];
        if(azs.includes(e)){
            for (let j = 0; j < az[e].length; j++) {
                let nbin = (az[e][j] + 32).toString(2);
                res.push('<div class="col">');
                let row = ['<div class="day" data-count="0"></div>'];
                for (let k = 1; k < nbin.length; k++) {
                    const b = nbin[k];
                    row.push(`<div class="day" data-count="${b}"></div>`);
                    // res.push(`<div class="day" data-count="${b}"></div>`);
                }
                // res.push(az[e][j]);
                row.push('<div class="day" data-count="0"></div>');
                res.push(row.join(''));
                res.push('</div>');
            }
        }
    }
    res.push('</div>');
    display.innerHTML = res.join('');
    // return res.join('');
}

/*
building grids:
    - by CreteElement.
    - by string literal.
*/
/*
function BuildGrid(w,h){
    let tile = `<div class="tile day"></div>`;
    let tiles = tile.repeat(w);
    let row = `<div class="row">${tiles}</div>`;
    let rows = row.repeat(h);
    let grid = `<div class="grid">${rows}</div>`;
    return grid;
}
*/
/*
cal build
// for the GitCal of commits, each row is a day.
function BuildGrid(weeks = 1, days = 7, classes = {"grid": "grid", "row": "row", "tile": "tile"}){
    // grid cal
    for(let y = 0; y < h; y++){
        // row
        for(let x = 0; x < w; x++){
            // tile
        }
    }
}

// grid for github cal of commits.
// in this grid, each row will be in flex-direction column.
// each row will be a column of 7 tiles.
function BuildElement_GitCal(weeks = 1, days = 7, classes = {"grid": "grid", "row": "row", "tile": "tile"}){
// grid cal
let grid = document.createElement('div');
grid.classList.add('grid');
grid.classList.add('cal');
for(let y = 0; y < weeks; y++){
// row
let row = document.createElement('div');
row.classList.add('row');
row.classList.add('week');
for(let x = 0; x < days; x++){
    // tile
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.classList.add('day');
    tile.id = `xy,${x},${y}`;

}
}
}

function BuildString_GitCal(weeks = 1, days = 7, classes = {"grid": "grid", "row": "row", "tile": "tile"}){
// grid cal
let grid = [];
let grid = ['<div class="grid cal"><div class="row week">'];
for(let y = 0; y < weeks; y++){
// row
let row = [];
for(let x = 0; x < days; x++){
    // tile
    let tile = `<div id="xy,${x},${y}" class="tile day"></div>`;
    row.push(tile);
}
}
row.join('</div><div class="row week">');
grid.push('</div>');
}

*/

/* Default function as a reference. */
function BuildGrid_Display(w, h){
    let display = document.getElementById('display');
    let grid = document.createElement('div');
    grid.classList.add('grid');
    for(let y = 0; y < h; y++){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let x = 0; x < w; x++){
            let tile = document.createElement('div');
            tile.classList.add('tile');
            tile.id = `xy,${x},${y}`;
            row.appendChild(tile);
        }
        grid.appendChild(row);
    }
    display.appendChild(grid);
}


window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
});

/* Version Log:
[index-nds-01]: Simple view of how it should look like.
[index-nds-02]: Adding a function to add some letters in a second view.
[index-nds-03]: Clean and add other letters.
[index-nds-04]: 
[index-nds-05]: 
[index-nds-06]: 
[index-nds-07]: 
[index-nds-08]: 
[index-nds-09]: 
[index-nds-10]: 

*/