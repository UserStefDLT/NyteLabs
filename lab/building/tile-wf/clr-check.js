


function hc2h(hc){
    if(typeof hc == 'object') { return -1; }
    if(hc.length != 2) { return -1; }
    if (hc.at(0) == hc.at(1)){ return hc.at(0); }

    let h0 = hc.at(0);
    let dc = parseInt(hc, 16);

    /* hsp: the 3 closes hex numbers where the number is form of two identical characters. */
    let hsp = {"up": 0,"hh": 0,"dn": 0};
    hsp["up"] = (parseInt(h0, 16)+1).toString(16);
    hsp["hh"] = h0;
    hsp["dn"] = (parseInt(h0, 16)-1).toString(16);
    let dsp = {"up": 0,"hh": 0,"dn": 0};
    dsp["up"] = parseInt((parseInt(h0, 16)+1).toString(16).repeat(2), 16);
    dsp["hh"] = parseInt(h0.repeat(2), 16);
    dsp["dn"] = parseInt((parseInt(h0, 16)-1).toString(16).repeat(2), 16);

    let dclosest = 255;
    let dclosest_id = "";
    Object.keys(hsp).forEach(hk => {
        let dr = Math.abs(dsp[hk] - dc);
        if(dr < dclosest) {
            dclosest = dr;
            dclosest_id = hk;
        }
    });

    return hsp[dclosest_id];
}

function hex2hhh(hex) {
    let hex_rbg = [];
    hex_rbg.push(hex.substring(0,2));
    hex_rbg.push(hex.substring(2,4));
    hex_rbg.push(hex.substring(4));

    let hh_rbg = [];
    hex_rbg.forEach(hc =>{
        hh_rbg.push(hc2h(hc));
    });
    let hh = "#" + hh_rbg.join('');
    return hh;
}


let hclrs = ['a89e8a','93866c','756b57','ada085','998866','7a6d52','594826','473a1f','362b17','53462d','423824','322a1b','4d4433','3d3629','2e291f','a8998a','93806c','756657','ad9985','998066','7a6652','594026','47331f','362617','53402d','423324','32261b','4d4033','3d3329','2e261f']
let hhclrs = [];
hclrs.forEach(hclr => {
    let hhclr = hex2hhh(hclr);
    if(!hhclrs.includes(hhclr)){
        hhclrs.push(hhclr);
    }
});
console.log(hhclrs.join(`;\n--path: `));


`
--path: #a98;
--path: #986;
--path: #542;
--path: #331;
--path: #322;
--path: #765;
--path: #432;
--path: #543;
--path: #321;
`