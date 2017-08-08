function setup() {
    createCanvas(800, 600);
    frameRate();
    // any additional setup code goes here
}

function draw() {
    background(98, 168, 240);

    strokeWeight(2);
    stroke(30);
    fill(0,0,0);
    line(500,500,400,550);

    strokeWeight(2);
    stroke(30);
    fill(0,0,0);
    line(300,400,400,700);

    strokeWeight(2);
    stroke(30);
    fill(0,0,0);
    line(700,200,400,500);

    // your "draw loop" code goes here
    //var temp = random(30);
    //fill(255,255,255)
    //var i = 50;
    // while(true){
    //   ellipse(400, 300, i, i);
    //   if(i == 200){
    //     i = 0;
    //   }else{
    //     i = i + 2
    //   }
    //   //i = i + 2
    // }
    //text(frameCount, 600, 600);
    strokeWeight(0);
    fill(56, 219, 67);
    var size = 200;
    var i = frameCount % size;
    var t = floor(frameCount / size);
    //console.log(t);
    //fill(0,0,0);
    //text(t,500,500);
    //var t = frameCount / 100;
    if(t % 2 == 0){
      ellipse(400, 300, i, i);
    }
    else{
      ellipse(400,300, size-i,size-i);
    }
    //text(frameCount, 600, 600);
      //background(98, 168, 240)

    //ellipse(800, 600, , 160);
}
