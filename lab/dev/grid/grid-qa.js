

/* [3x3]
    re: 2.9609 ms | jo: 0.2958 ms | cr: 0.3969 ms
    re: 1.2399 ms | jo: 0.3610 ms | cr: 0.3950 ms
    re: 1.2871 ms | jo: 0.3312 ms | cr: 0.4650 ms
    re: 0.8120 ms | jo: 0.4221 ms | cr: 0.4189 ms
    re: 1.0659 ms | jo: 0.7612 ms | cr: 1.7480 ms
    re: 0.5981 ms | jo: 0.3061 ms | cr: 0.4038 ms
*/

/*
[8x12], [12x8], [12,12], [24x24]

[8x12]
re: 0.9770 ms | jo: 1.4238 ms | cr: 1.3110 ms

[12x8]
re: 0.8039 ms | jo: 1.2890 ms | cr: 0.7929 ms
re: 0.9211 ms | jo: 1.0439 ms | cr: 1.2121 ms
re: 0.9260 ms | jo: 0.9479 ms | cr: 3.9807 ms
re: 1.0122 ms | jo: 1.5039 ms | cr: 3.6379 ms

[12,12]
re: 1.3120 ms | jo: 1.8041 ms | cr: 1.9011 ms
re: 6.5090 ms | jo: 1.6879 ms | cr: 2.5539 ms
re: 1.8779 ms | jo: 1.9270 ms | cr: 1.9970 ms
re: 0.9411 ms | jo: 1.1250 ms | cr: 3.5080 ms
re: 0.9650 ms | jo: 0.6718 ms | cr: 4.6779 ms
re: 1.1301 ms | jo: 1.8730 ms | cr: 1.7189 ms

[24x24]
re: 5.4340 ms | jo: 5.4467 ms | cr: 14.955 ms
re: 3.3317 ms | jo: 2.7678 ms | cr: 9.1791 ms
re: 2.2058 ms | jo: 2.1247 ms | cr: 2.9489 ms
re: 2.4609 ms | jo: 6.8098 ms | cr: 12.629 ms
re: 7.4179 ms | jo: 8.5520 ms | cr: 14.586 ms
re: 2.6669 ms | jo: 3.4011 ms | cr: 5.4162 ms
re: 1.8950 ms | jo: 2.3911 ms | cr: 5.8442 ms
re: 3.7429 ms | jo: 4.8967 ms | cr: 10.151 ms
*/

/*[29x54]
re: 05.5529 ms | jo: 06.9809 ms | cr: 12.1230 ms
re: 05.7019 ms | jo: 13.3508 ms | cr: 10.0410 ms
re: 05.0402 ms | jo: 08.1198 ms | cr: 33.2607 ms
re: 05.1779 ms | jo: 10.3422 ms | cr: 12.4919 ms
re: 10.0969 ms | jo: 19.8088 ms | cr: 39.6972 ms
re: 07.1430 ms | jo: 06.7309 ms | cr: 23.1779 ms
re: 08.0949 ms | jo: 27.8840 ms | cr: 14.8020 ms
re: 11.5717 ms | jo: 19.3530 ms | cr: 22.0109 ms
re: 08.6042 ms | jo: 33.1420 ms | cr: 31.5009 ms
re: 17.8049 ms | jo: 24.2668 ms | cr: 16.2233 ms
re: 05.1320 ms | jo: 11.4887 ms | cr: 17.6779 ms
re: 16.6870 ms | jo: 32.3740 ms | cr: 17.7192 ms
re: 12.6718 ms | jo: 43.6437 ms | cr: 30.6960 ms
*/

/*
let t0 = `re: 05.5529 ms | jo: 06.9809 ms | cr: 12.1230 ms
re: 05.7019 ms | jo: 13.3508 ms | cr: 10.0410 ms
re: 05.0402 ms | jo: 08.1198 ms | cr: 33.2607 ms
re: 05.1779 ms | jo: 10.3422 ms | cr: 12.4919 ms
re: 10.0969 ms | jo: 19.8088 ms | cr: 39.6972 ms
re: 07.1430 ms | jo: 06.7309 ms | cr: 23.1779 ms
re: 08.0949 ms | jo: 27.8840 ms | cr: 14.8020 ms
re: 11.5717 ms | jo: 19.3530 ms | cr: 22.0109 ms
re: 08.6042 ms | jo: 33.1420 ms | cr: 31.5009 ms
re: 17.8049 ms | jo: 24.2668 ms | cr: 16.2233 ms
re: 05.1320 ms | jo: 11.4887 ms | cr: 17.6779 ms
re: 16.6870 ms | jo: 32.3740 ms | cr: 17.7192 ms
re: 12.6718 ms | jo: 43.6437 ms | cr: 30.6960 ms`;

let t1 = t0.split('\n');
let t2 = [];
t1.forEach(row => {
    let r1 = row.split(' ');
    t2.push(parseInt(r1[1]));
    t2.push(parseInt(r1[5]));
    t2.push(parseInt(r1[9]));
});
console.log(t2);

let t2 = {1:[],5:[],9:[]};
let t3 = [1,5,9];
let t4 = {1: 0, 5: 0, 9:0};

t2 = {1:[],5:[],9:[]};
t4 = {1: 0, 5: 0, 9:0};
t1.forEach(row => {
    let r1 = row.split(' ');
    t3.forEach(k => {
        t2[k].push(parseFloat(r1[k]));
        t4[k] += parseFloat(r1[k]);
    });
});
console.log(t2);
console.log(t4);
 */











/* 
[29x54 with classes]

Welcome to my Lab!
index.html:308 ---
index.html:311 repeat: 3.47216796875 ms
index.html:313 ---
index.html:316 join: 9.348876953125 ms
index.html:318 ---
index.html:321 createElement: 13.2021484375 ms

Welcome to my Lab!
index.html:308 ---
index.html:311 repeat: 11.05224609375 ms
index.html:313 ---
index.html:316 join: 15.908935546875 ms
index.html:318 ---
index.html:321 createElement: 32.976806640625 ms

Welcome to my Lab!
index.html:308 ---
index.html:311 repeat: 9.27392578125 ms
index.html:313 ---
index.html:316 join: 19.157958984375 ms
index.html:318 ---
index.html:321 createElement: 25.740234375 ms

Welcome to my Lab!
index.html:308 ---
index.html:311 repeat: 53.532958984375 ms
index.html:313 ---
index.html:316 join: 29.609130859375 ms
index.html:318 ---
index.html:321 createElement: 31.1630859375 ms

Welcome to my Lab!
index.html:308 ---
index.html:311 repeat: 6.448974609375 ms
index.html:313 ---
index.html:316 join: 38.842041015625 ms
index.html:318 ---
index.html:321 createElement: 16.14990234375 ms

Welcome to my Lab!
index.html:308 ---
index.html:311 repeat: 11.626953125 ms
index.html:313 ---
index.html:316 join: 27.259033203125 ms
index.html:318 ---
index.html:321 createElement: 40.65576171875 ms

Welcome to my Lab!
index.html:308 ---
index.html:311 repeat: 5.442138671875 ms
index.html:313 ---
index.html:316 join: 10.780029296875 ms
index.html:318 ---
index.html:321 createElement: 14.227783203125 ms



*/

/*

[29x54]

re: 05.5529 ms | jo: 06.9809 ms | cr: 12.1230 ms
re: 05.7019 ms | jo: 13.3508 ms | cr: 10.0410 ms
re: 05.0402 ms | jo: 08.1198 ms | cr: 33.2607 ms
re: 05.1779 ms | jo: 10.3422 ms | cr: 12.4919 ms
re: 10.0969 ms | jo: 19.8088 ms | cr: 39.6972 ms
re: 07.1430 ms | jo: 06.7309 ms | cr: 23.1779 ms
re: 08.0949 ms | jo: 27.8840 ms | cr: 14.8020 ms
re: 11.5717 ms | jo: 19.3530 ms | cr: 22.0109 ms
re: 08.6042 ms | jo: 33.1420 ms | cr: 31.5009 ms
re: 17.8049 ms | jo: 24.2668 ms | cr: 16.2233 ms
re: 05.1320 ms | jo: 11.4887 ms | cr: 17.6779 ms
re: 16.6870 ms | jo: 32.3740 ms | cr: 17.7192 ms
re: 12.6718 ms | jo: 43.6437 ms | cr: 30.6960 ms

*/



/* 
[29x54]

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 5.552978515625 ms
index.html:302 ---
index.html:305 join: 6.98095703125 ms
index.html:307 ---
index.html:310 createElement: 12.123046875 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 5.701904296875 ms
index.html:302 ---
index.html:305 join: 13.350830078125 ms
index.html:307 ---
index.html:310 createElement: 10.041015625 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 5.040283203125 ms
index.html:302 ---
index.html:305 join: 8.119873046875 ms
index.html:307 ---
index.html:310 createElement: 33.2607421875 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 5.177978515625 ms
index.html:302 ---
index.html:305 join: 10.34228515625 ms
index.html:307 ---
index.html:310 createElement: 12.491943359375 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 10.096923828125 ms
index.html:302 ---
index.html:305 join: 19.808837890625 ms
index.html:307 ---
index.html:310 createElement: 39.697265625 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 7.14306640625 ms
index.html:302 ---
index.html:305 join: 6.73095703125 ms
index.html:307 ---
index.html:310 createElement: 23.177978515625 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 8.094970703125 ms
index.html:302 ---
index.html:305 join: 27.884033203125 ms
index.html:307 ---
index.html:310 createElement: 14.802001953125 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 11.57177734375 ms
index.html:302 ---
index.html:305 join: 19.35302734375 ms
index.html:307 ---
index.html:310 createElement: 22.010986328125 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 8.604248046875 ms
index.html:302 ---
index.html:305 join: 33.14208984375 ms
index.html:307 ---
index.html:310 createElement: 31.5009765625 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 17.804931640625 ms
index.html:302 ---
index.html:305 join: 24.266845703125 ms
index.html:307 ---
index.html:310 createElement: 16.223388671875 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 5.132080078125 ms
index.html:302 ---
index.html:305 join: 11.48876953125 ms
index.html:307 ---
index.html:310 createElement: 17.677978515625 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 16.68701171875 ms
index.html:302 ---
index.html:305 join: 32.3740234375 ms
index.html:307 ---
index.html:310 createElement: 17.71923828125 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 12.671875 ms
index.html:302 ---
index.html:305 join: 43.643798828125 ms
index.html:307 ---
index.html:310 createElement: 30.696044921875 ms

*/

/*
[8x12]

re: 0.9770 ms | jo: 1.4238 ms | cr: 1.3110 ms

[12x8]

re: 0.8039 ms | jo: 1.2890 ms | cr: 0.7929 ms
re: 0.9211 ms | jo: 1.0439 ms | cr: 1.2121 ms
re: 0.9260 ms | jo: 0.9479 ms | cr: 3.9807 ms
re: 1.0122 ms | jo: 1.5039 ms | cr: 3.6379 ms

[12,12]

re: 1.3120 ms | jo: 1.8041 ms | cr: 1.9011 ms
re: 6.5090 ms | jo: 1.6879 ms | cr: 2.5539 ms
re: 1.8779 ms | jo: 1.9270 ms | cr: 1.9970 ms
re: 0.9411 ms | jo: 1.1250 ms | cr: 3.5080 ms
re: 0.9650 ms | jo: 0.6718 ms | cr: 4.6779 ms
re: 1.1301 ms | jo: 1.8730 ms | cr: 1.7189 ms

[24x24]

re: 5.4340 ms | jo: 5.4467 ms | cr: 14.955 ms
re: 3.3317 ms | jo: 2.7678 ms | cr: 9.1791 ms
re: 2.2058 ms | jo: 2.1247 ms | cr: 2.9489 ms
re: 2.4609 ms | jo: 6.8098 ms | cr: 12.629 ms
re: 7.4179 ms | jo: 8.5520 ms | cr: 14.586 ms
re: 2.6669 ms | jo: 3.4011 ms | cr: 5.4162 ms
re: 1.8950 ms | jo: 2.3911 ms | cr: 5.8442 ms
re: 3.7429 ms | jo: 4.8967 ms | cr: 10.151 ms

*/

/*
let w = 8;
let h = 12;

[8x12]

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 0.97705078125 ms
index.html:302 ---
index.html:305 join: 1.423828125 ms
index.html:307 ---
index.html:310 createElement: 1.31103515625 ms

[12x8]

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 0.803955078125 ms
index.html:302 ---
index.html:305 join: 1.2890625 ms
index.html:307 ---
index.html:310 createElement: 0.79296875 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 0.921142578125 ms
index.html:302 ---
index.html:305 join: 1.0439453125 ms
index.html:307 ---
index.html:310 createElement: 1.212158203125 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 0.926025390625 ms
index.html:302 ---
index.html:305 join: 0.947998046875 ms
index.html:307 ---
index.html:310 createElement: 3.980712890625 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 1.01220703125 ms
index.html:302 ---
index.html:305 join: 1.50390625 ms
index.html:307 ---
index.html:310 createElement: 3.637939453125 ms

[12,12]

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 1.31201171875 ms
index.html:302 ---
index.html:305 join: 1.80419921875 ms
index.html:307 ---
index.html:310 createElement: 1.901123046875 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 6.509033203125 ms
index.html:302 ---
index.html:305 join: 1.68798828125 ms
index.html:307 ---
index.html:310 createElement: 2.553955078125 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 1.8779296875 ms
index.html:302 ---
index.html:305 join: 1.927001953125 ms
index.html:307 ---
index.html:310 createElement: 1.9970703125 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 0.941162109375 ms
index.html:302 ---
index.html:305 join: 1.125 ms
index.html:307 ---
index.html:310 createElement: 3.508056640625 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 0.965087890625 ms
index.html:302 ---
index.html:305 join: 0.671875 ms
index.html:307 ---
index.html:310 createElement: 4.677978515625 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 1.130126953125 ms
index.html:302 ---
index.html:305 join: 1.873046875 ms
index.html:307 ---
index.html:310 createElement: 1.718994140625 ms

[24x24]

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 5.43408203125 ms
index.html:302 ---
index.html:305 join: 5.44677734375 ms
index.html:307 ---
index.html:310 createElement: 14.955078125 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 3.331787109375 ms
index.html:302 ---
index.html:305 join: 2.767822265625 ms
index.html:307 ---
index.html:310 createElement: 9.17919921875 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 2.205810546875 ms
index.html:302 ---
index.html:305 join: 2.124755859375 ms
index.html:307 ---
index.html:310 createElement: 2.948974609375 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 2.4609375 ms
index.html:302 ---
index.html:305 join: 6.809814453125 ms
index.html:307 ---
index.html:310 createElement: 12.6298828125 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 7.41796875 ms
index.html:302 ---
index.html:305 join: 8.552001953125 ms
index.html:307 ---
index.html:310 createElement: 14.586181640625 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 2.6669921875 ms
index.html:302 ---
index.html:305 join: 3.401123046875 ms
index.html:307 ---
index.html:310 createElement: 5.416259765625 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 1.89501953125 ms
index.html:302 ---
index.html:305 join: 2.39111328125 ms
index.html:307 ---
index.html:310 createElement: 5.84423828125 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 3.742919921875 ms
index.html:302 ---
index.html:305 join: 4.896728515625 ms
index.html:307 ---
index.html:310 createElement: 10.151123046875 ms

*/



/* [3x3]
    re: 2.9609 ms | jo: 0.2958 ms | cr: 0.3969 ms
    re: 1.2399 ms | jo: 0.3610 ms | cr: 0.3950 ms
    re: 1.2871 ms | jo: 0.3312 ms | cr: 0.4650 ms
    re: 0.8120 ms | jo: 0.4221 ms | cr: 0.4189 ms
    re: 1.0659 ms | jo: 0.7612 ms | cr: 1.7480 ms
    re: 0.5981 ms | jo: 0.3061 ms | cr: 0.4038 ms
*/

/* [3x3]
Welcome to my Lab!
    re: 2.9609375 ms
    jo: 0.2958984375 ms
    cr: 0.39697265625 ms

Welcome to my Lab!
    re: 1.239990234375 ms
    jo: 0.361083984375 ms
    cr: 0.39501953125 ms

Welcome to my Lab!
    re: 1.287109375 ms
    jo: 0.331298828125 ms
    cr: 0.465087890625 ms

Welcome to my Lab!
    re: 0.81201171875 ms
    jo: 0.422119140625 ms
    cr: 0.4189453125 ms

Welcome to my Lab!
    re: 1.06591796875 ms
    jo: 0.76123046875 ms
    cr: 1.748046875 ms

Welcome to my Lab!
    re: 0.59814453125 ms
    jo: 0.30615234375 ms
    cr: 0.40380859375 ms
*/

/*
Welcome to my Lab!
    ---
    repeat: 2.9609375 ms
    ---
    join: 0.2958984375 ms
    ---
    createElement: 0.39697265625 ms

Welcome to my Lab!
    ---
    repeat: 1.239990234375 ms
    ---
    join: 0.361083984375 ms
    ---
    createElement: 0.39501953125 ms

Welcome to my Lab!
    ---
    repeat: 1.287109375 ms
    ---
    join: 0.331298828125 ms
    ---
    createElement: 0.465087890625 ms

Welcome to my Lab!
    ---
    repeat: 0.81201171875 ms
    ---
    join: 0.422119140625 ms
    ---
    createElement: 0.4189453125 ms

Welcome to my Lab!
    ---
    repeat: 1.06591796875 ms
    ---
    join: 0.76123046875 ms
    ---
    createElement: 1.748046875 ms

Welcome to my Lab!
    ---
    repeat: 0.59814453125 ms
    ---
    join: 0.30615234375 ms
    ---
    createElement: 0.40380859375 ms
*/

/* 
[3x3]

Welcome to my Lab!
index.html:299 ---
index.html:302 repeat: 2.9609375 ms
index.html:304 ---
index.html:307 join: 0.2958984375 ms
index.html:309 ---
index.html:312 createElement: 0.39697265625 ms

Welcome to my Lab!
index.html:299 ---
index.html:302 repeat: 1.239990234375 ms
index.html:304 ---
index.html:307 join: 0.361083984375 ms
index.html:309 ---
index.html:312 createElement: 0.39501953125 ms

Welcome to my Lab!
index.html:299 ---
index.html:302 repeat: 1.287109375 ms
index.html:304 ---
index.html:307 join: 0.331298828125 ms
index.html:309 ---
index.html:312 createElement: 0.465087890625 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 0.81201171875 ms
index.html:302 ---
index.html:305 join: 0.422119140625 ms
index.html:307 ---
index.html:310 createElement: 0.4189453125 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 1.06591796875 ms
index.html:302 ---
index.html:305 join: 0.76123046875 ms
index.html:307 ---
index.html:310 createElement: 1.748046875 ms

Welcome to my Lab!
index.html:297 ---
index.html:300 repeat: 0.59814453125 ms
index.html:302 ---
index.html:305 join: 0.30615234375 ms
index.html:307 ---
index.html:310 createElement: 0.40380859375 ms
*/

