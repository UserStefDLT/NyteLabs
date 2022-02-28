function starNebula2(starCount = 10){
    let starField = document.querySelector('.star-field2');
    let screenDiagonal = Math.sqrt(window.innerWidth*window.innerWidth + window.innerHeight*window.innerHeight)/2;
    console.log(`screenDiagonal: ${screenDiagonal}`);
    starField.style = `--diag: ${screenDiagonal};`;

    let squareDiagonal = Math.min(window.innerWidth,window.innerHeight)*Math.sqrt(2)/2;
    console.log(`squareDiagonal: ${squareDiagonal}`);

    for (let index = 0; index < starCount; index++) {
        // let orbit_radius = ((Math.random() * (screenDiagonal-50)) + 50).toFixed(2);
        let orbit_radius = ((Math.random() * (squareDiagonal-50)) + 50).toFixed(2);
        let orbit_location = (Math.random() * 360).toFixed(2);
        let sz = ((Math.random() * 3) + 1 + ((Math.random() * 89)/100)).toFixed(2);
        let delay = ((Math.random() * 100 * starCount) + 300).toFixed(2);
        let orbit_3d_x = (Math.random() * 360).toFixed(2);
        let orbit_3d_y = (Math.random() * 360).toFixed(2);
        let orbit_3d_z = (Math.random() * 360).toFixed(2);

        let star = document.createElement('div');
        star.classList.add('star2', 'xi');
        star.style = `--o-r: ${orbit_radius}; --o-a: ${orbit_location}; --sz: ${sz}; --delay: ${delay}; --o3d-x: ${orbit_3d_x}; --o3d-y: ${orbit_3d_y}; --o3d-z: ${orbit_3d_z};`;

        starField.appendChild(star);
    }
}

window.addEventListener('load', (ev) => {
    console.log(`Welcome Adventurer!`);
    starNebula2(150);
});