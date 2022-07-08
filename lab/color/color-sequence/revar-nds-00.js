
function revar2(){
    let ts = [0,1,2,3];
    let tx = {};
    let ty = {};
    let tz = {};
    let tw = {};
    ts.forEach(i => {
        tx[i] = {};
        ty[i] = {};
        tz[i] = {};
        tw[i] = '•';
    });
    ts.forEach(i => {
        Object.keys(ts).forEach(j => {
            tz[i][j] = tw[j];
            ty[i][j] = tz[j];
            tx[i][j] = ty[j];
        });
    });

    console.log(tx);
    return tx;
}
window.addEventListener('load', (ev) => { 
    console.log(`Welcome to my Lab!`); 
    // var display = document.getElementById('display');
    let nlist = revar2();
    console.log(nlist);
});