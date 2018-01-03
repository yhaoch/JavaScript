function setup() {
	frameRate();
  createCanvas(800, 1000);
	//background(0,0,0);
	noStroke();
} 

function draw() { 
  //background(128);
	var ypos = random(height);
	var x1 = frameCount;
	//var x2 = floor(Math.sqrt(Math.abs(200 * 200- frameCount * frameCount)));
	//rect(x1,x2,100,100);
	//console.log(x1,x2)
	//line(0,300,x1,300 + x2);
	//line(0,300,x1,300 -x2);
	fill(ypos/2,ypos/2,30,200);
	
	ellipse(random(width),random(height),30,30);
	
	fill(0,ypos/2,random(1,90),30);
	ellipse(mouseX,mouseY,60,60);
}