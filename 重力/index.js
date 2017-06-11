var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;


var y= 0;
var dy = 1;
var g = 0.2;





function gravity() {
	requestAnimationFrame(gravity);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	if (y + 50 > canvas.height){
		y = canvas.height-50;
		dy = -dy;
	}dy +=g;
	y +=dy;
	console.log(dy);
	console.log(y + 50 > canvas.height);

	ctx.beginPath();
	ctx.arc(300, y, 50, 0, 2*Math.PI,false);
	ctx.fill();
	


}

gravity();