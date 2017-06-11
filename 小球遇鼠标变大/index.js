canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;


var j = 0;
var circleArray = [];
var colorArray = [ 
	"rgb(173, 137,118)", 
	"rgb(255,150,128)",
	"rgb(0, 34, 40)",
	"rgb(255,94,72)",
	"rgb(151,173,172)"]

for (var i=0; i<800; i++){
	var radius = Math.random()*10+2;
	var rememberRadius = radius;
	var x = Math.random() * (canvas.width-2*radius)+radius;
	var y = Math.random() * (canvas.height-2*radius)+radius;
	var vx = Math.random()+1;
	var vy = Math.random()+1;
	var color = colorArray.pop();
	colorArray.unshift(color);

	circleArray.push(new Circle(radius,rememberRadius,x,y,vx,vy,color));
}


var maxRadius = 60;
var minRadiu = 2;

var mouse = {
	x:undefined,
	y:undefined
};

document.addEventListener('mousemove',function(event){
	mouse.x = event.x;
	mouse.y = event.y;
	console.log(mouse);
})


function Circle(radius,rememberRadius,x,y,vx,vy,color) {
	
	this.radius = radius;
	this.rememberRadius= rememberRadius
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.color = color;
	
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	this.move = function(){
		if(this.x+this.radius>canvas.width || this.x-this.radius<0){
			this.vx = -this.vx;
		}
		if(this.y+this.radius>canvas.height || this.y-this.radius<0){
			this.vy = -this.vy;
		}
		if(Math.abs(mouse.x-this.x)<50 && Math.abs(mouse.y-this.y)<50){
			if (this.radius<maxRadius){
				this.radius+=5;
			}
		}else if(this.radius>this.rememberRadius){

			this.radius-=2;
		}
		
		this.x+=this.vx;
		this.y+=this.vy;

		this.draw();
	}
}


function animation(){
	requestAnimationFrame(animation);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i=0; i<circleArray.length; i++){
		circleArray[i].move();
	}


}


animation();