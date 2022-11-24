

const selectedFonts = {
    "Current": [
        "Alegreya",
        "Ubuntu",
        "Satisfy",
    ],
    "Main": [
        "Coda",
        "Lalezar",
        "Mirza",
        "Raleway_Dots",
        "Stardos_Stencil",
    ],
    "Design": [
        "Lobster",
        "Lobster_Two",
        "Playball",
        "Yatra_One",
        "Cinzel_Decorative",
        "Poiret_One",
        "Monoton",
        "Flow_Circular",
        "Flow_Rounded",
        "Flow_Block",
        "Megrim",
    ],
    "Education": [
        "Yeseva_One",
        "Fredoka_One",
    ],
    "Fantasy": [
        "Press_Start_2P",
        "Bungee",
        "Carter_One",
        "Fugaz_One",
        "Arima_Madurai",
        "Creepster",
        "Audiowide",
        "Pompiere",
        "Expletus_Sans",
        "Love_Ya_Like_A_Sister",
        "UnifrakturMaguntia",
        "Forum",
        "Fredericka_the_Great",
        "Pirata_One",
        "Grenze_Gotisch",
        "Ceviche_One",
    ],
}

/*
───[✓, ✗, ⋯]───
[Current]: [
[✓] → [Alegreya]
[✓] → [Ubuntu]
[✓] → [Satisfy]
],
[Main]: [
[_] → [Coda]
[✓] → [Lalezar]
[✓] → [Mirza]
[_] → [Raleway_Dots]
[_] → [Stardos_Stencil]
],
[Design]: [
[✓] → [Lobster]
[✓] → [Lobster_Two]
[✓] → [Playball]
[✓] → [Yatra_One]
[✓] → [Cinzel_Decorative]
[⋯] → [Poiret_One]
[_] → [Monoton]
[_] → [Megrim]
],
[Education]: [
[_] → [Yeseva_One]
[_] → [Fredoka_One]
],
[Fantasy]: [
[⋯] → [Press_Start_2P]
[✓] → [Bungee]
[✓] → [Carter_One]
[_] → [Fugaz_One]
[_] → [Arima_Madurai]
[_] → [Creepster]
[_] → [Audiowide]
[_] → [Pompiere]
[✓] → [Expletus_Sans]
[⋯] → [Love_Ya_Like_A_Sister]
[_] → [UnifrakturMaguntia]
[✓] → [Forum]
[✓] → [Fredericka_the_Great]
[✓] → [Pirata_One]
[_] → [Grenze_Gotisch]
[✗] → [Ceviche_One]
],
*/


window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
    updateSettings();
    // start();
    // update();
    // let display = document.getElementById('display');
    // display.appendChild(Build_FontOptions());
    // let inputTxt = document.getElementById('input');
    // inputTxt.addEventListener('input', (ev) => {
    //     console.log(ev.target.value);
    //     UpdateText(ev.target.value);
    // });
});

