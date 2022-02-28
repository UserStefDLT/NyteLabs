const state = {
    h:0, w:0, d:0, 
    old_h:0,
    old_w:0,
    old_d:0,
    z:0
};
window.addEventListener('resize', () =>{
    let screenDiagonal = Math.sqrt(window.innerWidth*window.innerWidth + window.innerHeight*window.innerHeight);
    state.h = window.innerHeight;
    state.w = window.innerWidth;
    state.d = screenDiagonal;

    let ratio = screenDiagonal / state.old_d;

    let elems = document.querySelectorAll('.xi');
    elems.forEach(star => {
        let orbit_radius = star.dataset.orbit;
        let orbit_location = star.dataset.angle;
        let new_orbit_radius = orbit_radius * ratio;
        star.dataset.orbit = new_orbit_radius;
        let sz = star.dataset.sz;
        let delay = star.dataset.delay;
        star.style = `--o-r: ${new_orbit_radius}; --o-a: ${orbit_location}; --sz: ${sz}; --delay: ${delay};`;
    });
    state["old_h"] = state.h;
    state["old_w"] = state.w;
    state["old_d"] = state.d;
});

var greetings = [
    `"Hello World!"`,
    `"Greetings."`,
    `"ain't a lovely day?"`,
    `"Some stars are very shy. Others scare very easy. Be careful where you point that."`,
    `"Hi, I'm a star!"`,
    `"Hello stranger, bye stranger!" Socializing for the day, Done ✓.`,
    `"Hola!"`,
    `"Roll for perception."`,
    `"You see a crown, what do you do?" └┐╘╧╛┌┘`,
    `├┤│`,
    "Wiiiiii \\o/",
    `"Sorry, I'm late."`,
    `Hey look a star!`,
    `█▀█▄█•█▄█•█▄█▀█`
];
function braveStar(ev){
    if(ev.target.dataset.msg == '0'){
        let starMsg = document.createElement('div');
        starMsg.classList.add('star-tip');
        let greetingID = Math.floor(Math.random() * 12);
        starMsg.innerText = greetings[greetingID];
        console.log(`a star says: ${greetings[greetingID]}`);
        ev.target.appendChild(starMsg);
        ev.target.dataset.msg = "1"
        if(greetingID > 9){
            let star = ev.target;
            let orbit_radius = star.dataset.orbit;
            let orbit_location = (parseFloat(star.dataset.angle) + (Math.random() * 90) + 90).toFixed(2);
            star.dataset.angle = orbit_location;
            let sz = star.dataset.sz;
            let delay = star.dataset.delay;
            star.style = `--o-r: ${orbit_radius}; --o-a: ${orbit_location}; --sz: ${sz}; --delay: ${delay};`;
        }
        setTimeout(() => { starMsg.remove(); ev.target.dataset.msg = "0"}, 5000);
    }
}
function RunawayStar(ev){
    let star = ev.target;
    // console.log(ev.target);
    console.log("Ahhhh!!!");
    let orbit_radius = (parseFloat(star.dataset.orbit) + (Math.random() * 30) - 15).toFixed(2);
    // let orbit_location = (parseFloat(star.dataset.angle) + (Math.random() * 10) - 5).toFixed(2);
    let orbit_location = (parseFloat(star.dataset.angle) + (Math.random() * 90) + 90).toFixed(2);
    star.dataset.orbit = orbit_radius;
    star.dataset.angle = orbit_location;
    let sz = star.dataset.sz;
    let delay = star.dataset.delay;
    star.style = `--o-r: ${orbit_radius}; --o-a: ${orbit_location}; --sz: ${sz}; --delay: ${delay};`;
}
function starShy(ev){
    let star = ev.target;
    // console.log(ev.target);
    console.log("Don't touch me.");
    let orbit_radius = (parseFloat(star.dataset.orbit) + (Math.random() * 50) - 25).toFixed(2);
    // let orbit_location = (parseFloat(star.dataset.angle) + (Math.random() * 10) - 5).toFixed(2);
    let orbit_location = (parseFloat(star.dataset.angle) + (Math.random() * 15)).toFixed(2);
    star.dataset.orbit = orbit_radius;
    star.dataset.angle = orbit_location;
    let sz = star.dataset.sz;
    let delay = star.dataset.delay;
    star.style = `--o-r: ${orbit_radius}; --o-a: ${orbit_location}; --sz: ${sz}; --delay: ${delay};`;
}
function starNebula(starCount = 10){
    let starFielf = document.querySelector('.star-field');
    let screenDiagonal = Math.sqrt(window.innerWidth*window.innerWidth + window.innerHeight*window.innerHeight);
    for (let index = 0; index < starCount; index++) {
        let orbit_radius = ((Math.random() * (screenDiagonal-50)) + 50).toFixed(2);
        let orbit_location = (Math.random() * 360).toFixed(2);
        let sz = ((Math.random() * 3) + 1 + ((Math.random() * 89)/100)).toFixed(2);
        let delay = ((Math.random() * 100 * starCount) + 300).toFixed(2);

        let star = document.createElement('div');
        star.classList.add('star', 'xi');
        star.dataset.orbit = orbit_radius;
        star.dataset.angle = orbit_location;
        star.dataset.sz = sz;
        star.dataset.delay = delay;
        star.style = `--o-r: ${orbit_radius}; --o-a: ${orbit_location}; --sz: ${sz}; --delay: ${delay};`;
        console.log(`radius: ${orbit_radius}; hue: ${orbit_location}; sz: ${sz}; delay: ${delay};`);
        let starType = Math.floor(Math.random()*10)%3;
        if(starType == 0){
            star.addEventListener('click', RunawayStar);
            star.classList.add('runaway');
        } else if(starType == 1) {
            star.addEventListener('mousemove', starShy);
            star.classList.add('shy');
        } else {
            star.addEventListener('click', braveStar);
            star.classList.add('brave');
            star.dataset.msg = "0";
        }
        starFielf.appendChild(star);
    }

}

window.addEventListener('load', (ev) => {
    console.log(`Welcome Adventurer!`);
    let screenDiagonal = Math.sqrt(window.innerWidth*window.innerWidth + window.innerHeight*window.innerHeight);
    state.h = window.innerHeight;
    state.w = window.innerWidth;
    state.d = screenDiagonal;
    state["old_h"] = state.h;
    state["old_w"] = state.w;
    state["old_d"] = state.d;
    console.log(state);
    starNebula(50);
});