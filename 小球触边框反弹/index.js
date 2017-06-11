var canvas= document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;


// 将var balls放在循环外，发现ballsArray中的数据为同一个球的
// 可以猜测Array并不将数据复制，而是直接引用Object
// 外部Object的数据发生变化，Array[Object]中的数据也发生变化
var ballsArray=[];


for (var i=0; i<100; i++){
	var radius=Math.random() * 50;
	var x = Math.random() * (w-radius*2)+radius;
	var y=Math.random() * (h-radius*2)+radius;
	var vy=Math.random() * 2;
	var vx= Math.random() * 2;
	
	ballsArray.push(new Circle(x, y, vx, vy, radius));
}

function Circle(x, y, vx, vy, radius){
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.radius = radius;
	
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
		ctx.stroke();
		ctx.fill();
	}
	
	this.move = function(){
		if (this.x + this.radius > w || this.x - this.radius < 0){
			this.vx = -this.vx;
		}
		if (this.y + this.radius > h || this.y - this.radius <0) {
			this.vy = -this.vy;
		}
		this.x += this.vx;
		this.y += this.vy;
		
		this.draw();
	}
}

	
function ballsMove() {
	requestAnimationFrame(ballsMove); //循环调用
	ctx.clearRect(0, 0, w, h);
	for (var i=0; i<ballsArray.length; i++){
		ballsArray[i].move();
	}

}

ballsMove();





	