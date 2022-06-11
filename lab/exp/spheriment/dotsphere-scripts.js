/* BuildSphere()
         * parameters:
         *   ─> numberOfElements: int
         *   ─> classForElements: string
         *   ─> classForParent: string
         * returns an element with a specified number of elements with a class name.
         */
function BuildSphere(numberOfElements = 12, classForElements = 'xi', classForParent = 'xc'){
    let parentElement = document.createElement('div');
    parentElement.classList.add(classForParent);
    for (let i = 0; i < numberOfElements; i++) {
        let childElement = document.createElement('div');
        childElement.classList.add(classForElements);
        parentElement.appendChild(childElement);
    }
    return parentElement;
}
/* BuildShelves()
 * parameters:
 *   ─> numberOfShelves: int
 *   ─> shelfTitles: string[]
 *   ─> styleForAllShelves: string
 *   ─> styleForEachShelves: string[]
 *   ─> classForShelves: string
 * returns an element with a specified number of elements with a class name.
 */
function BuildShelves(numberOfShelves = 1, shelfTitles = [], styleForAllShelves = '', styleForEachShelves = [], classForShelves = 'shelf'){
    let shelfBundle = [];
    // let shelfBundle = document.createElement('div');
    for (let i = 0; i < numberOfShelves; i++) {
        let shelf = document.createElement('div');
        console.log(`classForShelves: ${classForShelves}`);
        console.dir(shelf.classList);
        shelf.classList.add(classForShelves);
        console.dir(shelf.classList);
        if(shelfTitles.length != 0 && shelfTitles.length > i){
            let shelfTitle = document.createElement('div');
            shelfTitle.classList.add('shelf-title');
            shelfTitle.innerText = shelfTitles[i];
            shelf.appendChild(shelfTitle);
        } else {
            let shelfTitle = document.createElement('div');
            shelfTitle.classList.add('shelf-title');
            shelfTitle.innerText = `Shelf-${i+1}`;
            shelf.appendChild(shelfTitle);
        }
        if(styleForAllShelves.length != 0){
            shelf.style = styleForAllShelves;
        }
        if(styleForEachShelves.length != 0 && styleForEachShelves.length > i){
            shelf.style = styleForEachShelves[i];
        }
        // shelfBundle.appendChild(shelf);
        shelfBundle.push(shelf);
    }
    return shelfBundle;
}


var defaultSettings = {
    "deg-x": 10,
    "deg-y": 20,
    "move-z": 100,
    "twirl-scale": 10,
    "twirl-start": 20,
    "z-end": 0
};
var settings = {
    "deg-x": 10,
    "deg-y": 20,
    "move-z": 100,

    // "twirl-option": 0,
    "twirl-scale": -2,
    "twirl-start": -10,

    "z-end": 0
};
var shelfSphere = document.getElementById('ShelfSphere');

function updateSphere(){
    let shelfStyle = ``;
    varInputs.forEach(varInput => {
        let dataVar = varInput.id;
        let val = settings[dataVar];
        varInput.value = val;
        shelfStyle += `--${dataVar}: ${val}; `;
    });
    shelfSphere.style = shelfStyle;
}
function input_UpdateValue(e) {
    varInputs.forEach(varInput => {
        let dataVar = varInput.id;
        let val = varInput.value;
        settings[dataVar] = val;

        if(val == '') settings[dataVar] = 0;
        if(!Number.isInteger(parseInt(val))){
            settings[dataVar] = defaultSettings[dataVar];
            console.log(`(${dataVar}) ${val} is not a number.`);
            console.log(`${dataVar}.value: '${val}' | typeof '${typeof val}' | parse: '${parseInt(val)}'`);
        }
    });
    updateSphere();
}
function btn_UpdateBy(e) {
    let dataVar = e.target.dataset.var;
    let val = e.target.dataset.by;
    settings[dataVar] = parseInt(settings[dataVar]) + parseInt(val);
    updateSphere();
}
function btn_UpdateBtns(e) {
    let newVal = e.target.dataset.newVal;
    console.log(newVal);
    let stepBtns = document.querySelectorAll('[data-step="1"]');
    stepBtns.forEach(btn => {
        if(btn.classList.contains("data-add")) {
            btn.dataset.by = newVal;
        } else {
            btn.dataset.by = -1 * newVal;
        }
    });
}

var varBtns;
var varInputs;
var updateBtns;
// var varChecks;
window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
    
    varBtns = document.querySelectorAll('.var-btn');
    varBtns.forEach(btn => {btn.addEventListener('click', btn_UpdateBy);})

    varInputs = document.querySelectorAll('.var-input');
    varInputs.forEach(varInput => {varInput.addEventListener('input', input_UpdateValue);})

    updateBtns = document.querySelectorAll('.update-btn');
    updateBtns.forEach(btn => {btn.addEventListener('click', btn_UpdateBtns);})
});