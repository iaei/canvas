canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var up = document.getElementById("up");
var down = document.getElementById("down");
var swich = true;

var gravity = 1;
// var dy = 1;
var colorArray = [
	"#1a413c",
	"#ef4926",
	"#f37a5a",
	"#7cc699",
	"#f3e4c2"
];

var ballsArray = [];
for (var i=0; i<50; i++){
	var radius = Math.random()*20+10;
	var x = (Math.random()*canvas.width-2*radius)+radius;
	var y = -Math.random()*400-101;
	var color = colorArray.shift();
	colorArray.push(color);
	var elasticity = Math.random()*0.4+0.2;
	// switch (color)
	// {
	// 	case "#1a413c":
	// 		elasticity = 0.5;
	// 		break;
	// 	case "#ef4926":
	// 		elasticity = 0.6;
	// 		break
	// 	case "#f37a5a":
	// 		elasticity = 0.65;
	// 		break
	// 	case "#7cc699":
	// 		elasticity = 0.7;
	// 		break
	// 	case "#f3e4c2":
	// 		elasticity = 0.5;
	// 		break
	// }

	ballsArray.push(new balls(x, y, radius, color, elasticity))
	// console.log(ballsArray);
}





function balls(x, y, radius, color, elasticity) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
	this.elasticity = elasticity;
	var dy = 0;
	
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	this.drop = function(){
		if (this.y + this. radius > canvas.height){
			this.y = canvas.height - this.radius;
			dy = -dy*this.elasticity;
		}
		dy += gravity;
		this.y += dy;
		this.draw(); 
		// console.log(dy);
		
		
	}

	this.weightless = function(){
		if (this.y > -100){
			this.y -=5;
		}

		this.draw();
	}

}


function Down (){
	if (swich === true){
		requestAnimationFrame(Down);}
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (var i=0; i<ballsArray.length; i++){
		
		
		ballsArray[i].drop();

	}
}

function Up (){
	swich = false;
	requestAnimationFrame(Up);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (var i=0; i<ballsArray.length; i++){
		
		
		ballsArray[i].weightless();

	}

}




