function setup() { 
  createCanvas(400, 400);
	frameRate(10);
	textSize(50);
}

var r = 150;
var g = 150;
var b = 150;

function draw() { 
  //background(240);
	//text('W',180,200);
	
	if(mouseIsPressed){
		g = g + 10;
		b = b + 20;
	}else{
		g = g - 10;
		b = b - 20;
	}
	stroke(r,g,b);
	fill(r,g,b);
	
	var newy = 0;
	
	while(newy < height){
		strokeWeight(5 + 3 * sin*(frameCount/20));
		//line(0,newy,mouseX,mouseY);
		line(0,newy,random(400),random(400));
		//line(width,newy,mouseX,mouseY);
		line(width,newy,random(400),random(400));
		newy = newy + 157;
	}
	
	
	//ellipse(mouseX,mouseY,8,8);
	//ellipse(mouseX-10,mouseY-10,8,8);
	//ellipse(mouseX + 10,mouseY-10,8,8);
	// strokeWeight(2);
	// var x = frameCount % 400;
	// var y = 50 * sin(x);
	// var x1 = x + 2;
	// var y1 = 50 * sin(x1);
	// line(x,y+200,x1,y1+200);
	//point(x,2*y);
	//console.log(i * PI / 3);
  //fill(random(255),random(255),random(255));
	//ellipse(mouseX,mouseY,30,30);
	
}