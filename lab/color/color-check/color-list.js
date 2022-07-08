

`
let clr_steps = 15;


`

let h6_steps = ["0","3","6","9","c","f"];
let hex = 16;

function hex2dec(hex_numb){
    let dec_numb = parseInt(hex_numb, 16);
    return dec_numb;
}
function dec2hex(dec_numb){
    let hex_numb = (dec_numb).toString(16);
    return hex_numb;
}


let hex_ids = [];
for (let i = 0; i < hex; i++) {
    hex_ids.push(dec2hex(i));
}
// → (16) ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

let hhh = {};
hex_ids.forEach(h1=>{
    hhh[h1] = {};
    hex_ids.forEach(h2=>{
        hhh[h1][h2] = {};
        hex_ids.forEach(h3=>{
            hhh[h1][h2][h3] = "○";
        });
    });
});
/* ───────────────  ───────────────  ─────────────── */

function helper_ListOut2(branches, levels, path = "x", separator = ''){
    let aBranch = [];
    let branches_count = 0;
    if(typeof branches == 'object') {
        branches_count = branches.length;
    } else {
        branches_count = branches;
    }

    for (let i = 0; i < branches_count; i++) {
        let n_path = ``;
        if(typeof branches == 'object') {
            n_path = `${path}${separator}${branches[i]}`;
        } else {
            n_path = `${path}${separator}${i}`;
        }
        if(levels < 2) {
            aBranch.push(n_path);
        } else {
            let branch = helper_ListOut2(branches, levels-1, n_path, separator);
            aBranch.push(...branch);
        }
    }
    return aBranch;
}
function BuiltList2(branches, levels, path_initial = '', separator = ''){
    let list = [];
    if(typeof branches == 'object') {
        if(branches.length > 0 || levels > 0) {
            list = helper_ListOut2(branches, levels, path_initial, separator);
        }
    } else {
        if(branches < 1 || levels < 1) {return -1}
        list = helper_ListOut2(branches, levels, path_initial, separator);
    }
    return list;
}

BuiltList(6,3, '#','');
BuiltList2(["0","3","6","9","c","f"],3, '#','');
BuiltList2(["3","9","f"],3, '#','');


/* ───────────────  ───────────────  ─────────────── */

function helper_ListOut(branches_count, levels_count, path = "x", separator = ''){
    if(branches_count < 1 || levels_count < 1) {return -1}
    let aBranch = [];
    for (let i = 0; i < branches_count; i++) {
        let n_path = `${path}${separator}${i}`;
        let branch = helper_ListOut(branches_count, levels_count-1, n_path, separator);
        if(branch == -1) {
            aBranch.push(n_path);
        } else if (typeof branch == 'object') {
            branch.forEach(leaf => {
                aBranch.push(leaf);
            });
        }
    }
    return aBranch;
}
function BuiltList(branches_count, levels_count, path_initial = '', separator = ''){
    if(branches_count < 1 || levels_count < 1) {return -1}
    let list = helper_ListOut(branches_count, levels_count, path_initial, separator);
    return list;
}
BuiltList(6,3);
BuiltList(6,3, '#','');

function helper_branchOut(branches_count, levels_count, path = "x", separator = ''){
    if(branches_count < 1 || levels_count < 1) {return -1}
    let aBranch = {};
    for (let i = 0; i < branches_count; i++) {
        let n_path = `${path}${separator}${i}`;
        let branch = helper_branchOut(branches_count, levels_count-1, n_path, separator);
        if(branch == -1) {
            aBranch[i] = n_path;
        } else if (typeof branch == 'object') {
            aBranch[i] = branch;
        }
    }
    return aBranch;
}
function BuiltTree(branches_count, levels_count, path_initial = '', separator = ''){
    if(branches_count < 1 || levels_count < 1) {return -1}
    let aTree = {};
    for (let i0 = 0; i0 < branches_count; i0++) {
        let n_path = `${path_initial} ${i0}`;
        let branch = helper_branchOut(branches_count, levels_count-1, n_path, separator);
        if(branch == -1) {
            aTree[i0] = i0;
        } else if (typeof branch == 'object') {
            aTree[i0] = branch;
        }
    }
    console.log(aTree);
    return aTree;
}
BuiltTree(6,3);
BuiltTree(6,3,'→',', ');


/* ───────────────  ───────────────  ─────────────── */

function branchOut(t){
    if(typeof t != 'object') {
        return t;
    } else {
        return Object.keys(t).map(k1 => {
            return branchOut(t[k1]);
        });
    }
}
function printTree(t){
    if(typeof t != 'object') {
        return -1;
    } else {
        return Object.keys(t).map(k1 => {
            return branchOut(t[k1]);
        });
    }


    // Object.keys(t).forEach(k1 => {
    //     if(typeof t[k1] != 'object') return k1;
    //     // Object.keys(t[k1])
    // });

    // Object.keys(t).map(k1 => {
    //     if(typeof t[k1] != 'object') return k1;
    //     Object.keys(t[k1]).map(k2 => {
    //         if(typeof t[k1][k1] != 'object') return k2;
            
    //     });
    // });

    // Object.keys(t).map(k1 => {
    //     if(typeof t[k1] != 'object') {
    //         return k1;
    //     } else {
    //         return branchOut(t[k1]);
    //     }
    // });
}













/* ───────────────  ───────────────  ─────────────── */
/* ─── */
let t0 = [];
for (let i = 0; i < hex; i++) {
    t0.push(dec2hex(i));
}

t0.forEach(h=>{
    console.log(`h: ${h}`);
});

let t1 = {};
t0.forEach(h1=>{
    t1[h1] = {};
    t0.forEach(h2=>{
        t1[h1][h2] = {};
        t0.forEach(h3=>{
            t1[h1][h2][h3] = "○";
        });
    });
});

console.log(t1);
console.dir(t1);

Object.keys(t1);






/* ───────────────  ───────────────  ─────────────── */
function branchOut2(t){
    let paths = [];
    Object.keys(t).forEach(k1 => {

    });

    Object.keys(t).map(k1 => {
        if(typeof t[k1] != 'object') {
            return k1;
        } else {
            let path = '';
            let list = branchOut2(t);
            /* list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'] */

        }
        
        // let step = "";
        let t2 = branchOut(t[k1]);
        if(t2 == -1) {
            return k1;
        } else {
            return t2;
        }
    });

    if(typeof t != 'object') {
        return -1;
    } else {
        return Object.keys(t).map(k1 => {
            // let step = "";
            let t2 = branchOut(t[k1]);
            if(t2 == -1) {
                return k1;
            } else {
                return t2;
            }
        });
    }
}
function branchOut(t){
    if(typeof t != 'object') {
        return -1;
    } else {
        return Object.keys(t).map(k1 => {
            // let step = "";
            let t2 = branchOut(t[k1]);
            if(t2 == -1) {
                return k1;
            } else {
                return t2;
            }
        });
    }
}
function printTree(t){
    if(typeof t != 'object') {
        return -1;
    } else {
        return Object.keys(t).map(k1 => {
            return branchOut(t[k1]);
        });
    }
}

/*
if [t] is not 'object' return -1;

*/