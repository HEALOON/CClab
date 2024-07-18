let spiralSize = 300;
let zhengfu = 8;
let angle = 0;
let hx = 0;
let hy = 0;
let bbx=200;
let bby=200;

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.parent("p5-canvas-container");
  
  angle = random(0.002,0.1);
  console.log(angle);
  frameRate(40);
  
}

function draw() {
  background(220,22,120);
  drawsin(200,200);
  hx += 1; hy+=1;
  
  bbx = mouseX;
  bby = mouseY;
  drawbody(bbx,bby);
  }

function drawsin(hx,hy){
  push();
  translate(hx,hy);
  if (!mouseIsPressed && frameCount<500){
  noStroke();
  let sinValue = sin(frameCount*angle);
  let X = map(sinValue, -1, 1, 250-spiralSize/2, 250+spiralSize/2);
  let cosValue = cos(frameCount*angle);
  let Y = map(cosValue, -1, 1, 250-spiralSize/2, 250+spiralSize/2);
  
    
  let Rran = random(100,255);
  let Gran = random(100,255);
  let Bran = random(100,255);
  fill(0,Gran,Bran);
  circle(X, Y, 10);
  
  spiralSize = spiralSize-zhengfu;
  
  if(frameCount%80 == 0){
    zhengfu = -zhengfu
  }
  pop();

  
  // inputAngle++; // increases variable by 1
}
}

function drawbody(bx,by){
  push();
  translate(bx,by);
  circle(bx,by,30);
  
  pop();
}