

['#a89e8a']

let clrs = ['#a89e8a','#93866c','#756b57'];


let t0 = 'a89e8a'

let t1 = t0.substring(0,1);
let t2 = t0.substring(2,3);
let t3 = t0.substring(4,5);

/*
    a8 → 99, aa, bb
    parseInt(x, base)
    parseInt(0xaa, 10)
    9e
    8a

    console.log(parseInt(0xaa, 10));
*/
let t1b = `console.log(parseInt(0x${t1}, 10))`;
let t2b = `console.log(parseInt(0x${t2}, 10))`;
let t3b = `console.log(parseInt(0x${t3}, 10))`;
let thex = [];
let t1b = `thex.push(parseInt(0x${t1}, 10))`;
let t2b = `thex.push(parseInt(0x${t2}, 10))`;
let t3b = `thex.push(parseInt(0x${t3}, 10))`;
eval(t1b);
eval(t2b);
eval(t3b);

console.log(thex.join(''));


function hexToN(hex) {
    let hex_r = hex.substring(0,1);
    let hex_g = hex.substring(2,3);
    let hex_b = hex.substring(4,5);



    // ------ //

    let t1 = t0.substring(0,0);
    let t3 = t0.substring(2,3);
    let t5 = t0.substring(4,4);

    let t11 = t0.substring(0,0);
    let t33 = t0.substring(2,3);
    let t55 = t0.substring(4,4);
    let t12 = t0.substring(0,1);
    let t34 = t0.substring(2,3);
    let t56 = t0.substring(4,5);

    // ------ //
    let t1 = t0.substring(0,1);
    let t2 = t0.substring(2,3);
    let t3 = t0.substring(4,5);

    let thex = [];
    let t1b = `thex.push(parseInt(0x${t1}, 10))`;
    let t2b = `thex.push(parseInt(0x${t2}, 10))`;
    let t3b = `thex.push(parseInt(0x${t3}, 10))`;
    eval(t1b);
    eval(t2b);
    eval(t3b);
    console.log(thex);
    // console.log(thex.join(''));
}

hexToN('a89e8a');

'a8,9e,8a'.split(',');
'a8,9e,8a'.at(0);

hexToN2('a8,9e,8a');



function hc2hh(hc){
    if(typeof hc == 'object') { return -1; }
    if(hc.length != 2) { return -1; }
    if (hc.at(0) == hc.at(1)){ return hc; }

    let h0 = hc.at(0);
    let dc = parseInt(hc, 16);

    /* hsp: the 3 closes hex numbers where the number is form of two identical characters. */
    let hsp = {"up": 0,"hh": 0,"dn": 0};
    hsp["up"] = (parseInt(h0, 16)+1).toString(16).repeat(2);
    hsp["hh"] = h0.repeat(2);
    hsp["dn"] = (parseInt(h0, 16)-1).toString(16).repeat(2);
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
hc2hh('a8');
hc2hh('a0');
hc2hh('af');
hc2hh('6f'); /* Goes up */
hc2hh('90'); /* Goes dn */

function hexToN2(hex) {
    let hex_rbg = [];
    hex_rbg.push(hex.substring(0,2));
    hex_rbg.push(hex.substring(2,4));
    hex_rbg.push(hex.substring(4));

    console.log(hex_rbg);

    let hh_rbg = [];
    hex_rbg.forEach(hc =>{
        hh_rbg.push(hc2hh(hc));
    });
    let hh = "#" + hh_rbg.join('');
    return hh;
}

function hexToN2(hex) {
    let hex_r = hex.substring(0,1);
    let hex_g = hex.substring(2,3);
    let hex_b = hex.substring(4,5);

    let hex_rbg = hex.split(',');
    // → ['a8', '9e', '8a'];

    hex_rbg.forEach(hc =>{
        // let h0 = hc.at(0);
        // parseInt("a", 16)
        // parseInt(number, 10).toString(16)
        // parseInt("a", 16)+1.toString(16)
        // (parseInt("a", 16)+1).toString(16)
        // → b
        // (parseInt("a", 16)-1).toString(16)
        // → 9
        // (parseInt("a", 16)-1).toString(16).repeat(2)
        // → 99
        
        // parseInt((parseInt("a", 16)-1).toString(16).repeat(2), 16)
        // → 153
        // parseInt((parseInt("a", 16)+1).toString(16).repeat(2), 16)
        // → 187
        // parseInt(hc.at(0).repeat(2), 16)
        // parseInt("a".repeat(2), 16)
        // → 170
        // parseInt("a8", 16)
        // → 168

        // parseInt((parseInt(h0, 16)-1).toString(16).repeat(2), 16)
        // → 153
        // parseInt((parseInt(h0, 16)+1).toString(16).repeat(2), 16)
        // → 187
        // parseInt(hc.at(0).repeat(2), 16)
        // parseInt(h0.repeat(2), 16)
        // → 170
        // parseInt(hc, 16)
        // → 168

        let hc = 'a8';
        let h0 = hc.at(0);
        let hc_d = parseInt(hc, 16);
        let h0up = parseInt((parseInt(h0, 16)+1).toString(16).repeat(2), 16);
        let h0dn = parseInt((parseInt(h0, 16)-1).toString(16).repeat(2), 16);
        let hh = parseInt(h0.repeat(2), 16);

        console.log(`hc_d: ${hc_d}`);
        console.log(`h0up: ${h0up}`);
        console.log(`h0dn: ${h0dn}`);
        console.log(`hh: ${hh}`);

        // ───── //
        if (hc.at(0) == hc.at(1)){ return hc; }

        let h0 = hc.at(0);
        let hdec = parseInt(hc, 16);
        /* hsp: the 3 closes hex numbers where the number is form of two identical characters. */
        let hsp = {"up": 0,"hh": 0,"dn": 0};
        hsp["up"] = parseInt((parseInt(h0, 16)+1).toString(16).repeat(2), 16);
        hsp["hh"] = parseInt(h0.repeat(2), 16);
        hsp["dn"] = parseInt((parseInt(h0, 16)-1).toString(16).repeat(2), 16);

        // let hres = {"up": 0,"hh": 0,"dn": 0};
        let hclosest = 255;
        let hclosest_id = "";
        Object.keys(hsp).forEach(hk => {
            let hr = hsp[hk] - hdec;
            if(hr < hclosest) {
                hclosest = hr;
                hclosest_id = hk;
            }
            // hres[hk] = hsp[hk] - hdec;
        });

    });

    // ------ //

    let t1 = t0.substring(0,0);
    let t3 = t0.substring(2,3);
    let t5 = t0.substring(4,4);

    let t11 = t0.substring(0,0);
    let t33 = t0.substring(2,3);
    let t55 = t0.substring(4,4);
    let t12 = t0.substring(0,1);
    let t34 = t0.substring(2,3);
    let t56 = t0.substring(4,5);

    // ------ //
    let t1 = t0.substring(0,1);
    let t2 = t0.substring(2,3);
    let t3 = t0.substring(4,5);

    let thex = [];
    let t1b = `thex.push(parseInt(0x${t1}, 10))`;
    let t2b = `thex.push(parseInt(0x${t2}, 10))`;
    let t3b = `thex.push(parseInt(0x${t3}, 10))`;
    eval(t1b);
    eval(t2b);
    eval(t3b);
    console.log(thex);
    // console.log(thex.join(''));
}


/*

['a8,9e,8a', '93,86,6c', '75,6b,57']



data cleaning:
a89e8a

['a89e8a',
'93866c',
'756b57',
'ada085',
'998866',
'7a6d52',
'594826',
'473a1f',
'362b17',
'53462d',
'423824',
'322a1b',
'4d4433',
'3d3629',
'2e291f',
'a8998a',
'93806c',
'756657',
'ad9985',
'998066',
'7a6652',
'594026',
'47331f',
'362617',
'53402d',
'423324',
'32261b',
'4d4033',
'3d3329',
'2e261f']


*/


/* ───── */


function hc2hh(hc){
    if(typeof hc == 'object') { return -1; }
    if(hc.length != 2) { return -1; }
    if (hc.at(0) == hc.at(1)){ return hc; }

    let h0 = hc.at(0);
    let dc = parseInt(hc, 16);

    /* hsp: the 3 closes hex numbers where the number is form of two identical characters. */
    let hsp = {"up": 0,"hh": 0,"dn": 0};
    hsp["up"] = (parseInt(h0, 16)+1).toString(16).repeat(2);
    hsp["hh"] = h0.repeat(2);
    hsp["dn"] = (parseInt(h0, 16)-1).toString(16).repeat(2);
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
hc2hh('a8');
hc2hh('a0');
hc2hh('af');
hc2hh('6f'); /* Goes up */
hc2hh('90'); /* Goes dn */

function hexToN2(hex) {
    let hex_rbg = [];
    hex_rbg.push(hex.substring(0,2));
    hex_rbg.push(hex.substring(2,4));
    hex_rbg.push(hex.substring(4));

    console.log(hex_rbg);

    let hh_rbg = [];
    hex_rbg.forEach(hc =>{
        hh_rbg.push(hc2hh(hc));
    });
    let hh = "#" + hh_rbg.join('');
    return hh;
}

let hclrs = ['a89e8a','93866c','756b57','ada085','998866','7a6d52','594826','473a1f','362b17','53462d','423824','322a1b','4d4433','3d3629','2e291f','a8998a','93806c','756657','ad9985','998066','7a6652','594026','47331f','362617','53402d','423324','32261b','4d4033','3d3329','2e261f']
let hhclrs = [];
hclrs.forEach(hclr => {
    hhclrs.push(hexToN2(hclr));
});

hhclrs.join(`;\n--path: `);
console.log(hhclrs.join(`;\n--path: `));


`
--path: #aa9988;
--path: #998866;
--path: #776655;
--path: #aa9988;
--path: #998866;
--path: #776655;
--path: #554422;
--path: #443322;
--path: #333311;
--path: #554433;
--path: #443322;
--path: #332222;
--path: #554433;
--path: #443322;
--path: #332222;
--path: #aa9988;
--path: #998866;
--path: #776655;
--path: #aa9988;
--path: #998866;
--path: #776655;
--path: #554422;
--path: #443322;
--path: #332211;
--path: #554433;
--path: #443322;
--path: #332222;
--path: #554433;
--path: #443322;
--path: #332222;
`




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

    // console.log(hex_rbg);

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

// 
--path: #a98;
--path: #986;
--path: #765;
--path: #a98;
--path: #986;
--path: #765;
--path: #542;
--path: #432;
--path: #331;
--path: #543;
--path: #432;
--path: #322;
--path: #543;
--path: #432;
--path: #322;
--path: #a98;
--path: #986;
--path: #765;
--path: #a98;
--path: #986;
--path: #765;
--path: #542;
--path: #432;
--path: #321;
--path: #543;
--path: #432;
--path: #322;
--path: #543;
--path: #432;
--path: #322;
`