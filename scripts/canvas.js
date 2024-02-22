


function updateSettings(){
    s.h = window.innerHeight;
    s.w = window.innerWidth;
    s.canvas.top = (s.h - s.canvas.h)/2;
    s.canvas.left = (s.w - s.canvas.w)/2;
    canvas.width = s.w;
    canvas.height = s.h;
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

