var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var speed = 1/16/1000;

var x = 0;
var y = 0;

var input = {
	up: false,
	down: false,
	left: false,
	right: false,
}

window.onkeydown = function(event){
	event.preventDefault();
	console.log(event.keyCode);
	switch(event.keyCode){
		//up
		case 38:
		case 87:
			input.up = true;
			break;
		//down
		case 83:
			input.down = true;
			break;
		//left
		case 65:
			input.left = true;
			break;
		//right
		case 68:
			input.right = true;
			break;
	}
}

window.onkeyup = function(event){
	event.preventDefault();
	console.log(event.keyCode);
	switch(event.keyCode){
		//up
		case 87:
			input.up = false;
			break;
		//down
		case 83:
			input.down = false;
			break;
		//left
		case 65:
			input.left = false;
			break;
		//right
		case 68:
			input.right = false;
			break;
	}
}

function loop(){
	ctx.fillRect(x, y, 5, 5);
	ctx.fillStyle = "red";
	if(input.up){
		y-=1;
	}
	if(input.down){
		y+=1;
	}
	if(input.left){
		x-=1;
	}
	if(input.right){
		x+=1;
	}
	setTimeout(loop, speed);
}
loop();
