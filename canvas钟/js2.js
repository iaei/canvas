var clock = document.getElementById("clock");
var ctx = clock.getContext("2d");
var w = ctx.canvas.width;
var h = ctx.canvas.height;
var r = w/2;

function drawBackground() {
    ctx.save();
    ctx.translate(r,r);
    ctx.beginPath();
    ctx.arc(0, 0, r-w/40, 0, 2*Math.PI, false);
    ctx.lineWidth =w/20;
    ctx.fillStyle="#fff";
    ctx.fill();
    ctx.stroke();



    var numbers =[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    numbers.forEach(function (number, i) {
        var rad = 30*2*Math.PI/360*i;
        var x = Math.cos(rad)*(r-w*3/20);
        var y =Math.sin(rad)*(r-w*3/20);
        ctx.textAlign= 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle="#000";
        ctx.font="16px 微软雅黑";
        ctx.fillText(number, x, y);});
    for (var i=0; i<60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = Math.cos(rad) * (r - w*18/200);
        var y = Math.sin(rad) * (r - w*18/200);
        ctx.beginPath();
        if (i % 5 === 0) {
            ctx.fillStyle = '#000';
            ctx.arc(x, y, w*2/200, 0, 2 * Math.PI, false);
        } else {
            ctx.fillStyle = "#ccc";
            ctx.arc(x, y, w*2/200, 0, 2 * Math.PI, false);
        }

        ctx.fill();

    }
}

function drawHours(hour,minute) {
    rad = 2*Math.PI/12*(hour+ minute/60);
    ctx.save();
    ctx.beginPath();
    ctx.rotate(rad);
    ctx.moveTo(0,w*10/200);
    ctx.lineTo(0, -r/2);
    ctx.lineWidth=w*4/200;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.restore()
}
function drawMinutes(minute) {
    ctx.save();
    rad = 2*Math.PI/60*minute;
    ctx.beginPath();
    ctx.rotate(rad);
    ctx.moveTo(0,w*10/200);
    ctx.lineTo(0,-(r-w*30/200));
    ctx.lineWidth=w*3/200;
    ctx.lineCap="round";
    ctx.stroke();
    ctx.restore();

}

function drawSeconds(second) {
    ctx.save();
    rad = 2*Math.PI/60*second;
    ctx.beginPath();
    ctx.rotate(rad);
    ctx.moveTo(-w*2/200,w*20/200);
    ctx.lineTo(w*2/200,w*20/200);
    ctx.lineTo(1,-(r-w*20/200));
    ctx.lineTo(-1,-(r-w*20/200));
    ctx.closePath();
    ctx.fillStyle="#c14543";
    ctx.fill();
    ctx.restore();
}
function drawDot() {
    ctx.beginPath();
    ctx.arc(0,0,w*2/200,0,2*Math.PI );
    ctx.fillStyle="#fff";
    ctx.fill();
}





function draw(){
    var now = new Date();
    var hour= now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    ctx.restore();
    ctx.clearRect(0, 0, w, h);
    drawBackground();
    drawHours(hour,minute);
    drawMinutes(minute);
    drawSeconds(second);
    drawDot();
}
setInterval(draw,1000);