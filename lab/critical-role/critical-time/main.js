

/*
30	3	37	26
31	3	52	42
32	4	34	30
33	3	56	22
34	3	40	31
35	4	35	31
36	4	16	08
37	4	10	18
38	4	20	44
*/

/*
ytd-grid-video-renderer

[time]
[class="style-scope ytd-thumbnail-overlay-time-status-renderer"]

*/


t0[0].innerText.split('\n');


/* ───
t0.len = 688
t1.lem = 670
─── */
let t0 = document.querySelectorAll('ytd-grid-video-renderer');
let t1 = [];

t0.forEach(item => {
    let txt = item.innerText.split('\n');
    if(txt[0] != 'NOW PLAYING'){
        t1.push([txt[0],txt[2]]);
    }
});

let t2 = [];
t2 = t1.map(tr => {return tr.join(' | ');})

t2.join('\t | ;\n• | \t');
console.log(t2.join('\t | •\n• | \t'));

/* ─── */

let t3 = [];
t0.forEach(item => {
    let txt = item.innerText.split('\n');
    if(txt[0] != 'NOW PLAYING'){
        let link = item.children[0].children[0].children[0].href;
        t3.push([txt[0],txt[2],link]);
    }
});

t4 = [];
t4 = t3.map(tr => {return tr.join(' | ');})

console.log(t4.join('\t | •\n• | \t'));

/* ─── */

/*
| Critical Role | Campaign 2, Episode 54
| Critical Role | Campaign \d, Episode \d{1,2}
*/

let t1 = t0.split('\t | •\n• | \t');
var re = /Campaign \d, Episode \d+/ig;

re = /Critical Role \| Campaign \d, Episode \d+/ig;


let t2 = [];
t1.forEach(tr => {
    if(tr.match(re) != null){
        t2.push(tr);
    }
});


let t3 = [];
t2.forEach(tr => {
    t3.push(tr.split(' | ')[0]);
});


t2.forEach(tr => {
    let tt = tr.split(' | ')[0];
    let tn = tt.split(":");
    let min = parseInt(tn[0])*60 + parseInt(tn[1]);
    let sh = tr.split(' | ')[3].split(', ');
    //t3.push(min + "m - " + tr.split(' | ')[0]);
    t3.push(`${sh[1]}: ${min}min, [${tr.split(' | ')[0]}]`);
});

console.log(t3.join('\n • '));






let t5 = [];
t2.forEach(tr => {
    let ts = tr.split(' | ')
    let tn = ts[0].split(":");
    let min = parseInt(tn[0])*60 + parseInt(tn[1]);
    let sh = ts[3].split(' ');
    t5.push(`${sh[0]} ${sh[1]} ${sh[2]} ${sh[3]}: ${min}min, [${tr.split(' | ')[0]}]`);
});
console.log(t5.join('\n • '));




/* ─── from wiki ─── */
/*<https://criticalrole.fandom.com/wiki/List_of_episodes>*/

let t0 = document.querySelectorAll('tr');
t0[0].children[0].innerText

if(isNaN(parseInt(t0[40].children[0].innerText)))

let no = t0[1].children[0].innerText;
let title = t0[1].children[1].innerText;
let date = t0[1].children[2].innerText;
let link = t0[1].children[3].children[0].href
let runtime = t0[1].children[4].innerText;



// from 1 to 309;
t0[309].children[0].innerText

let t0 = document.querySelectorAll('tr');
let t2 = [];
for(let i=0; i < 310; i++){
  if(!isNaN(parseInt(t0[i].children[0].innerText))){
    let no = t0[i].children[0].innerText;
    let tt = t0[i].children[1].innerText.split(' (');
    let title = tt[0];
    let se = `(${tt[1]}`;
    let date = t0[i].children[2].innerText;
    let link = t0[i].children[3].children[0].href;
    let runtime = t0[i].children[4].innerText;
    t2.push(`no: ${no}, title: ${title}, se: "${se}", date: "${date}", link: "${link}", runtime: "${runtime}"`);
  }
}
console.log(t2.join('},\n {'));





/* ─── from wiki (time) ─── */



let t3 = {h:0, m:0, s:0};
for(let i=0; i < 310; i++){
  if(!isNaN(parseInt(t0[i].children[0].innerText))){
    let runtime = t0[i].children[4].innerText;
    let hms = runtime.split(":");
    t3.h += parseInt(hms[0]);
    t3.m += parseInt(hms[1]);
    t3.s += parseInt(hms[2]);
  }
}
console.log(t3);

/*
// {h: 1027, m: 8652, s: 8513}
h+146
m+141
8652+141 = 8793
146

h:1173
m:33
s:53

(1173*60*60) + (33*60) + 53
(1027*60*60) + (8652*60) + 8513

*/



/* ─ */
let t4 = {h:0, m:0, s:0};
let t5 = [];
for(let i=0; i < t0.length; i++){
  if(!isNaN(parseInt(t0[i].children[0].innerText))){
    let runtime = t0[i].children[4].innerText;
    let hms = runtime.split(":");
    t5.push(`i: ${i}, h: ${parseInt(hms[0])}, m: ${parseInt(hms[1])}, s: ${parseInt(hms[2])}`);
  }
}

/* ─── */
let t4 = {h:0, m:0, s:0};
let t5 = [];
for(let i=0; i < t0.length; i++){
  if(!isNaN(parseInt(t0[i].children[0].innerText))){
    let j = t0[i].children.length - 1;
    let runtime = t0[i].children[j].innerText;
    let hms = runtime.split(":");
    let time = {"h":0,"m":0,"s":0};
    let vals = ["s","m","h"];
    for(let k = hms.length; k > 0; k--){
        let ki = hms.length - k;
        time[vals[ki]] = parseInt(hms[k-1]);
        t4[vals[ki]] += parseInt(hms[k-1]);
    }
    t5.push({i: i, h: time.h, m: time.m, s: time.s});
  }
}


/* Total (including other content) */
/*
{h: 1284, m: 13633, s: 14064}

{h: 1284, m: 13633, s: 14064}


(1284*60*60) + (13633*60) + 14064

5454444
4224833

*/
/* ─── */
var cTime = [
    {Campaign: 1, Episode: 1, StartsAt: "17:53", BreakStart: "1:32:21", BreakEnds: "1:43:50", Ends: "3:02:49", TotalTime: "3:03:34"},
    {Campaign: 1, Episode: 2, StartsAt: "13:28", BreakStart: "1:29:15", BreakEnds: "1:43:31", Ends: "2:58:20", TotalTime: "3:00:11"},
    {Campaign: 1, Episode: 3, StartsAt: "0:10", BreakStart: "1:15:24", BreakEnds: "1:27:21", Ends: "2:33:44", TotalTime: "2:36:16"},
    {Campaign: 1, Episode: 51, StartsAt: "4:47", BreakStart: "0:00:00", BreakEnds: "0:00:00", Ends: "2:54:25", TotalTime: "2:54:25"},
    {Campaign: 1, Episode: 52, StartsAt: "11:30", BreakStart: "0:00:00", BreakEnds: "0:00:00", Ends: "3:15:07", TotalTime: "3:19:27"},

    {Campaign: 2, Episode: 1, StartsAt: "16:37", BreakStart: "1:32:11", BreakEnds: "1:49:06", Ends: "3:17:25", TotalTime: "3:24:31"},
    {Campaign: 2, Episode: 2, StartsAt: "8:25", BreakStart: "2:06:13", BreakEnds: "2:20:40", Ends: "4:12:06", TotalTime: "4:22:08"},
    {Campaign: 2, Episode: 3, StartsAt: "7:01", BreakStart: "2:13:04", BreakEnds: "2:27:45", Ends: "3:49:08", TotalTime: "3:59:27"},
    {Campaign: 2, Episode: 93, StartsAt: "10:15", BreakStart: "2:10:00", BreakEnds: "2:34:40", Ends: "3:53:15", TotalTime: "3:53:30"},
    
    {Campaign: 3, Episode: 1, StartsAt: "13:08", BreakStart: "2:31:55", BreakEnds: "2:40:52", Ends: "3:58:08", TotalTime: "3:58:24"},
    {Campaign: 3, Episode: 2, StartsAt: "13:23", BreakStart: "2:06:32", BreakEnds: "2:16:33", Ends: "4:07:24", TotalTime: "4:07:39"},
    {Campaign: 3, Episode: 3, StartsAt: "4:27", BreakStart: "1:31:46", BreakEnds: "1:42:28", Ends: "4:08:26", TotalTime: "4:08:41"},
    {Campaign: 3, Episode: 29, StartsAt: "9:14", BreakStart: "2:00:38", BreakEnds: "2:10:45", Ends: "3:36:32", TotalTime: "3:36:48"},
];
function TimeC(t){
    let hms = t.split(":");
    let time = {"h": 0, "m": 0, "s": 0};
    let vals = ["s","m","h"];
    for(let k = hms.length; k > 0; k--){
        let ki = hms.length - k;
        time[vals[ki]] = parseInt(hms[k-1]);
    }
    return time;
}
function TimeToSeconds(rt){
    let t = TimeC(rt);
    let time = t.h*60*60 + t.m*60 + t.s;
    return time;
}

/*
11900/3600 = 3.305
11900/60 = 198.333
11900%3600 = 1100

"2:40:20" → 9620

Math.floor(9620/3600);
Math.floor(9620%3600/60);

9620%60;
9620%3600 → 2420
2420/60
*/

function SecondsToTime(ss){
    let h = Math.floor(ss/3600);
    let m = Math.floor(ss%3600/60);
    let s = Math.floor(ss%60);
    return `${h}:${m}:${s}`;
}
function s2m(s){ return (s/60).toFixed(2); }

cTime.forEach(r => {
// BreakTime = BreakEnds - BreakStart
// Ends - BreakTime - StartsAt

let e = TimeToSeconds(r.Ends);
let s = TimeToSeconds(r.StartsAt);

let b1 = TimeToSeconds(r.BreakStart);
let b2 = TimeToSeconds(r.BreakEnds);
let bt = b2 - b1;

let timeout = s + bt;
let runtime = e - timeout;

let toff = SecondsToTime(timeout);
let rtime = SecondsToTime(runtime);

let log = `(${r.Campaign}x${r.Episode}) → runtime: ${rtime}, toff: ${toff}`;
console.log(log);
});


/*
(1x1) → runtime: 9207, toff: 1762
(1x2) → runtime: 9036, toff: 1664
(1x3) → runtime: 8497, toff: 727
(1x51) → runtime: 10178, toff: 287
(1x52) → runtime: 11017, toff: 690
(2x1) → runtime: 9833, toff: 2012
(2x2) → runtime: 13754, toff: 1372
(2x3) → runtime: 12446, toff: 1302
(2x93) → runtime: 11900, toff: 2095
(3x1) → runtime: 12963, toff: 1325
(3x2) → runtime: 13440, toff: 1404
(3x3) → runtime: 13997, toff: 909
(3x29) → runtime: 11831, toff: 1161

(1x1) → runtime: 2:33:27, toff: 0:29:22
(1x2) → runtime: 2:30:36, toff: 0:27:44
(1x3) → runtime: 2:21:37, toff: 0:12:7
(1x51) → runtime: 2:49:38, toff: 0:4:47
(1x52) → runtime: 3:3:37, toff: 0:11:30
(2x1) → runtime: 2:43:53, toff: 0:33:32
(2x2) → runtime: 3:49:14, toff: 0:22:52
(2x3) → runtime: 3:27:26, toff: 0:21:42
(2x93) → runtime: 3:18:20, toff: 0:34:55
(3x1) → runtime: 3:36:3, toff: 0:22:5
(3x2) → runtime: 3:44:0, toff: 0:23:24
(3x3) → runtime: 3:53:17, toff: 0:15:9
(3x29) → runtime: 3:17:11, toff: 0:19:21
*/

/*
115+141+38 = 294;

var totalTile1 = {h: 1027, m: 8652, s: 8513};
var totalTile = {h: 1173, m: 33, s: 53};
4224833s

294*30=8820m
147h

var totalTile = {h: 1026, m: 33, s: 53};

h: 1026, m: 33, s: 53

61560 + 33


tlotr
1351m	= 22h	31m;


61593 vs 1351
61593/1351 = 45.5

*/
/*
{no: 1, title: "Arrival at Kraghammer", se: "(1x01)", date: "2015-03-12", link: "https://www.youtube.com/watch?v=i-p9lWIhcLQ", runtime: "3:03:07"}
[ListOfEpisodes]
loe[i].runtime

var totalTile = {h: 1173, m: 33, s: 53};
4224833s

SecondsToTime(4224833)

10722.926395939086
2:58:42

TimeToSeconds("2:58:42")
let t6 = 0;
loe.forEach(r => {
t6 += TimeToSeconds(r.runtime);
});
SecondsToTime(t6) → '1173:33:53'
t6 / loe.length → 14370.180272108844
SecondsToTime(t6 / loe.length)
'3:59:30'

4*294
*/
/*

So, I did the math to better compare the amount of time.

In CriticalRole, we have a total of 394 episodes.
Each episode has an average of 4 hours. To be precise 3 hours with 59 minutes.

Now, because of ads and breaks there is an average of 15,20 to 30,35 minutes that I should take off.
If I take 30 minutes of each episode.

We end up with 1026, 33 minutes and 53 seconds.
h: 1026, m: 33, s: 53

Compared to Lord of the Rings, that about 45 times the size of Lord of the Rings.

The Fellowship of the Ring			208	3	28
The Two Towers				226	3	46
The Return of the King			252	4	12
			
The Hobbit: An Unexpected Journey		182	3	2
The Hobbit: The Desolation of Smaug		186	3	6
The Hobbit: The Battle of the Five Armies	164	2	44
			
The Lord of the Rings (1978 film)		133	2	13
			
All of The Lord of the Rings			1351	22	31



*/


