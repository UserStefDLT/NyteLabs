/*

.grid[data-tile="0"] .tile {--hue: calc(var(--x) + var(--y));}
.grid[data-tile="1"] .tile {--hue: calc(var(--xx) + var(--yy));}
.grid[data-tile="2"] .tile {--hue: calc((var(--xx) + var(--yy)) * 2);}
.grid[data-tile="3"] .tile {--hue: calc((var(--xx) + var(--yy)) * 3);}
.grid[data-tile="4"] .tile {--hue: calc((var(--xx) + var(--yy)) * 4);}
.grid[data-tile="5"] .tile {--hue: calc((var(--xx) + var(--yy)) * 6);}
.grid[data-tile="6"] .tile {--hue: calc(var(--q) + var(--h2));}
.grid[data-tile="7"] .tile {--hue: calc(var(--q) + var(--xy) * 4);}
.grid[data-tile="8"] .tile {--hue: calc(var(--x) * var(--y));}
.grid[data-tile="9"] .tile {--hue: calc(var(--x) * var(--y) * 2);}
.grid[data-tile="10"] .tile {--hue: calc(var(--x) * var(--y) * 4);}
.grid[data-tile="11"] .tile {--hue: calc((var(--x) - 5) * (var(--y) + 5));}
.grid[data-tile="12"] .tile {--hue: calc(var(--h2) + var(--x) * -50 + var(--y) * -50);}
.grid[data-tile="13"] .tile {--hue: calc(var(--xx) * var(--yy));}
.grid[data-tile="14"] .tile {--hue: calc(var(--xx2) * var(--yy2));}
.grid[data-tile="15"] .tile {--hue: calc(var(--x2)var(--x2) * var(--y2)var(--y2));}
.grid[data-tile="16"] .tile {--hue: calc(var(--q) * var(--h2));}
.grid[data-tile="17"] .tile {--hue: calc(var(--xx) + var(--yy) * var(--y2) * var(--x2));}
.grid[data-tile="18"] .tile {--hue: calc(var(--xx) * 15 / var(--yy));}
.grid[data-tile="19"] .tile {--hue: calc(var(--xx) * var(--h) / var(--yy));}
.grid[data-tile="20"] .tile {--hue: calc(( (var(--x) * 15) + (var(--y) * 5) ) * (var(--h) / 1));}
.grid[data-tile="21"] .tile {--hue: calc(var(--x) * 15);}
.grid[data-tile="22"] .tile {--hue: calc(var(--x2) * 5);}
.grid[data-tile="23"] .tile {--hue: calc(var(--xx) * 5);}
.grid[data-tile="24"] .tile {--hue: calc((var(--x) * 15) + (var(--y) * 5) );}
.grid[data-tile="25"] .tile {--hue: calc(100 * var(--h) / ( var(--q) / 4 + 1 ));}
.grid[data-tile="26"] .tile {--hue: calc(var(--q) + var(--hq4));}
.grid[data-tile="27"] .tile {--hue: calc(var(--h) * var(--hq4));}
.grid[data-tile="28"] .tile {--hue: calc(var(--q) * var(--hq4));}
.grid[data-tile="29"] .tile {--hue: calc((var(--x) * 15) + var(--hq4));}
.grid[data-tile="30"] .tile {--hue: calc((var(--xx) * 10) + var(--hq4));}
.grid[data-tile="31"] .tile {--hue: calc((var(--x) * .5) * var(--hq4));}
.grid[data-tile="32"] .tile {--hue: calc((var(--y) * .5) * (var(--x) * .5) * var(--hq4));}
.grid[data-tile="33"] .tile {--hue: calc((var(--xx) * .5) * var(--hq4));}
.grid[data-tile="34"] .tile {--hue: calc((var(--x) * var(--q)) * var(--hq4));}
.grid[data-tile="35"] .tile {--hue: calc((var(--x) + var(--q)) * var(--hq4));}
.grid[data-tile="36"] .tile {--hue: calc((var(--x) / var(--q)) * var(--hq4));}
.grid[data-tile="37"] .tile {--hue: calc((var(--x) * var(--q)) / var(--hq4));}
.grid[data-tile="38"] .tile {--hue: calc((var(--x) * var(--q)) + var(--hq4));}
.grid[data-tile="39"] .tile {--hue: calc((var(--x) * var(--q)) - var(--hq4));}
.grid[data-tile="40"] .tile {--hue: calc((var(--x) * var(--h)) + var(--hq4));}
.grid[data-tile="41"] .tile {--hue: calc((var(--x) * var(--h) * 3) + var(--hq4));}
.grid[data-tile="42"] .tile {--hue: calc((var(--x) * var(--h) * .4) * var(--hq4));}
.grid[data-tile="43"] .tile {--hue: calc((var(--x) * var(--h) * 150) / var(--hq4));}
.grid[data-tile="44"] .tile {--hue: calc((var(--x) * var(--h) * var(--h)) + var(--hq4));}
.grid[data-tile="45"] .tile {--hue: calc((var(--x) * var(--h) * var(--y)) + var(--hq4));}
.grid[data-tile="46"] .tile {--hue: calc((var(--y) * var(--h) * var(--xx)) / var(--hq4));}
.grid[data-tile="47"] .tile {--hue: calc(100 * var(--h1) * var(--h1));}
.grid[data-tile="48"] .tile {--hue: calc(var(--q) + var(--hq2));}
.grid[data-tile="49"] .tile {--hue: calc(var(--h) * var(--hq2));}


0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49

    // [○]
    0: 'x + y',
    1: 'xx + yy',
    2: '(xx + yy) * 2',
    3: '(xx + yy) * 3',
    4: '(xx + yy) * 4',
    5: '(xx + yy) * 6', 
    // [+]
    6: 'q + h2',
    7: 'q + xy * 4',
    8: 'x * y',
    9: 'x * y * 2',
    10: 'x * y * 4',
    11: '(x - 5) * (y + 5)',
    12: 'h2 + x * -50 + y * -50', 
    // [?]
    13: 'xx * yy',
    14: 'xx2 * yy2',
    15: 'x2x2 * y2y2',
    16: 'q * h2',
    17: 'xx + yy * y2 * x2', 
    // [><]
    18: 'xx * 15 / yy',
    19: 'xx * h / yy', 
    // [~/~]
    20: '( (x * 15) + (y * 5) ) * (h / 1)', 
    // [|]
    21: 'x * 15',
    22: 'x2 * 5',
    23: 'xx * 5',
    24: '(x * 15) + (y * 5) ', 
    // [••]
    25: '100 * h / ( q / 4 + 1)',
    26: 'q + hq4',
    27: 'h * hq4',
    28: 'q * hq4',
    29: '(x * 15 ) + hq4',
    30: '(xx * 10 ) + hq4',
    31: '(x * .5) * hq4',
    32: '(y * .5) * (x * .5) * hq4',
    33: '(xx * .5) * hq4',
    34: '(x * q) * hq4',
    35: '(x + q) * hq4',
    36: '(x / q) * hq4',
    37: '(x * q) / hq4',
    38: '(x * q) + hq4',
    39: '(x * q) - hq4',
    40: '(x * h) + hq4',
    41: '(x * h * 3) + hq4',
    42: '(x * h * .4) * hq4',
    43: '(x * h * 150) / hq4',
    44: '(x * h * h) + hq4',
    45: '(x * h * y) + hq4',
    46: '(y * h * xx) / hq4',
    47: '100 * hq * hq',
    48: 'q + hq2',
    49: 'h * hq2',


*/