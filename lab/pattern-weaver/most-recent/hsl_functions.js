/*

this.hue = Math.random() * 360;
this.hueSp = Math.random() * .25 + 1;
this.sat = 100;
this.lum = 70;
this.alp = 1;
──

♦Pattern 01:
this.hue = (this.x+this.y)%360 + Math.random() * 10;
if(this.hue > 360) this.hue -= 360;
this.sat = (this.x+this.y)%20 + 80;
this.lum = (this.x+this.y)%20 + 40;
──
♦Pattern 02:
this.sat = (this.x)%20 + 80;
this.lum = (this.y)%20 + 40;
──
♦Pattern 03:
this.lum = (this.y)%40 + 20;
──
♦Pattern 04:
this.hue = (this.x+this.y)%360 + Math.random() * 30;
──
♦Pattern 05:
this.lum = (this.y)%35 + 20 + Math.random() * 5;
──
♦Pattern 06:
let xark = Math.cos((this.x%30)/10 - 1.5) * 10;
this.lum = (this.y)%30 + 20 + xark;
──
♦Pattern 07:
let xark = Math.cos((this.x%60)/20 - 1.5) * 20;
this.sat = xark + 70;
this.lum = (this.y)%30 + 10 + xark;
──
♦Pattern 08:
let x_arc = Math.sin((this.x%60)/20 - 1.5) * 20;
this.sat = x_arc + 70;
this.lum = (this.y)%30 + 10 + x_arc;
──
♦Pattern 09:
let x_arc = Math.sin((this.x%30)/10 - 1.5) * 10;
──
♦Pattern 10:
let x_arc = Math.cos((this.x%90)/30 - 1.5) * 20;
let y_arc = Math.cos((this.y%30)/10 - 1.5) * 10;
this.lum = (this.y)%30 + 20 + x_arc;
this.hue = (this.x+this.y)%360 + (x_arc*y_arc*.5);
──
♦Pattern 11:
let y_arc = Math.cos((this.y%60)/20 - 1.5) * 15;
this.lum = (this.y%60)/2 + 20 + ((x_arc+y_arc)*.3);
──
♦Pattern 12:
this.lum = 20 + (x_arc+y_arc);
──
♦Pattern 13:
let x_arc = Math.cos((Math.abs(this.x)%90)/30 - 1.5) * 20;
let y_arc = Math.cos((Math.abs(this.y)%60)/20 - 1.5) * 15;
this.size = (x_arc+y_arc)%3 + .5;
this.lum = ((x_arc*y_arc*.5)%50)+10;
──
♦Pattern 14:
let x_arc = Math.cos((Math.abs(this.x)%120)/40 - 1.5) * 20;
let y_arc = Math.cos((Math.abs(this.y)%120)/40 - 1.5) * 20;
this.size = (x_arc*y_arc*.5)%3 + .5;
this.lum = ((x_arc*y_arc*.5)%60)+5;
this.alp = ((x_arc*y_arc*.5)%9)/10+.1;
──
♦Pattern 15:
this.hue = (x_arc*y_arc)%360 + ((this.x+this.y)%24)*15;
──
♦Pattern 16:
this.hue = ((x_arc*y_arc)%60) + ((this.x+this.y)%360);
this.alp = ((x_arc*y_arc*.5)%5)/10+.2;
──
♦Pattern 17:
let x_arc = Math.cos((Math.abs(this.x)%300)/100 - 1.5) * 30;
let y_arc = Math.cos((Math.abs(this.y)%300)/100 - 1.5) * 30;
──
♦Pattern 18:
──
♦Pattern 19:
this.size -= ((x_arc*y_arc*.5)%10)/500;
──
♦Pattern 20:
let xy_arc = (x_arc*y_arc);
this.hue = 15 + ((Math.floor((xy_arc%80)/40)) * 180) + ((xy_arc)%30);
this.size -= ((xy_arc)%10)/500;
this.lum = ((xy_arc)%60)+5;
this.alp = ((xy_arc)%5)/10+.2;
──
♦Pattern 21:
let x_arc = Math.cos((Math.abs(this.x)%150)/50 - 1.5) * 30;
let y_arc = Math.cos((Math.abs(this.y)%150)/50 - 1.5) * 30;
this.hue = 85 + ((Math.floor((xy_arc%120)/20)) * 60) + ((xy_arc)%10);
this.size -= ((xy_arc)%10)/250;
──
♦Pattern 22:
let ratio = 300;
let x_arc = Math.cos((Math.abs(this.x)%ratio)/(ratio/3) - 1.5) * 30;
let y_arc = Math.cos((Math.abs(this.y)%ratio)/(ratio/3) - 1.5) * 30;
this.lum = ((xy_arc*.25)%60)+5;
──
♦Pattern 23:
this.hue = ((x_arc*y_arc)%60) + ((this.x*this.y*.1)%360);
──
♦Pattern 24:
this.hue = ((x_arc*y_arc)%360) + ((this.x*this.y*.01)%360);
──
♦Pattern 25:
this.hue = ((x_arc*y_arc)%180) + ((this.x*this.y*.005)%360);
──
♦Pattern 26:
this.hue = 85 + ((Math.floor((xy_arc%120)/20)) * 60) + ((xy_arc)%10) + ((this.x*this.y*.005)%30);
──
♦Pattern 27:
this.hue = ((x_arc*y_arc)%180) + ((this.x*this.y*.001)%360);
──
♦Pattern 28:
this.hue = ((Math.cos(this.x*this.y)*15)%360) + 200;
──
♦Pattern 29:
let ratio = (Math.floor((this.x+this.y)*500)%2 + 1) * 300;
this.hue = ((Math.cos(this.x*this.y)*15)%360) + 180 + ((x_arc*y_arc)%40);
──
♦Pattern 30:
──
♦Pattern 31:
──
♦Pattern 32:
──
♦Pattern 33:
──
♦Pattern 34:
──
♦Pattern 35:
──
♦Pattern 36:
──
*/
