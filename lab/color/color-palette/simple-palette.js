'use-strict'

var clr = {};
clr.hue = 210;
let hue = 210;
let sat = 100;
let lum = 50;
let alp = 1;

let hue_1 = hue;
let hue_contrast_step = Math.floor(Math.random() * 3 + 1);
let hue_2 = (hue+hue_contrast_step)%360;

/*
if sat = 100, contrast 50;
*/
let sat_1 = sat;
let sat_2 = 100;

function ColorSequence(){

}


function MakeColorCard(color, type='none'){
    let card = document.createElement('div');
    card.classList.add('color-card');
    card.style = `--clr: ${color}`;
    if(type != 'none'){
        // card.classList.add(`color-type`);
        /* type: hex, rgb, hsl, word */
        card.dataset.colorType = type;
    }

    let color_display = document.createElement('div');
    color_display.classList.add('color-display');

    let color_description = document.createElement('div');
    color_description.classList.add('color-description');
    // color_description.innerHTML = `color: ${color}`;
    color_description.innerHTML = `${color}`;
    
    card.appendChild(color_display);
    card.appendChild(color_description);

    return card;
}
function DisplayColorList(list){
    let colorList = document.createElement('div');
    colorList.id = "ColorList"
    colorList.classList.add('color-list');
    list.forEach(clr => {
        colorList.appendChild(MakeColorCard(clr));
    });
    return colorList;
}


window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
});