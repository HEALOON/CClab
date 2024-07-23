let y = 500;
let h = 0;
let x = 0;
let d = [];
let state = 0;
let yl = 0;
function setup() {
  let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container");
  
}

function draw() {
  backgroun();        
  fill(0);  
  
  if (keyIsPressed && key == "s"){state=1;}
  
  if (state==1){
  jing();}
  if (keyIsPressed && key == "n"){state=0;}
  
  
  if (keyIsPressed && key == "r"){
    ak(100,100);
    yl=0;
  }    
  
  if (keyIsPressed && key == "t" && mouseX<600 && mouseX > 200 && mouseY>50 && mouseY < 450){
    zz();
    
  }
   
  // if (keyIsPressed && key == )
  fill('green');
  textSize(20);
  text("[T]: Look in reflection\n[R]: Change mode\n[S]:Open mirror\n[N]:Close mirror",60,410);
  // triangle(mouseX,100,200,200,300,300
  // zt();
  
}

function backgroun(){
  background('#99DFFF');
  fill('#B5FF60');
  noStroke();
  beginShape();
  curveVertex(0,400);
  curveVertex(200,420);
  curveVertex(400,250);
  curveVertex(800,300);
  curveVertex(800,500);
  curveVertex(0,500);
  curveVertex(0,400);
  endShape();
  
  ellipse(150,460,380,200);
}

function ak(akx,aky){
  push();
  frameRate(3);
  fill("rgba(255,0,0,0.15)");
  rect(0,0,800,500);
  fill('rgba(255,0,0,0.59)');
  let akn1 = 0;
  let akn2 = 0;
  let akn3 = 0;
  let akn4 = 0;
  
  if (frameCount%2==0){
    akx = random(100,700);
    aky = random(100,400);
    akn1 = random(-100,100);
    akn2 = random(-100,50);
    akn3 = random(-100,100);
    akn4 = random(-100,50);
  }
  triangle(akx,aky, akx+akn1,aky+akn2, akx+akn3,aky+akn4);
  pop();
}

function zz(){
  push();
  frameRate(50);
  let spd = 2;
  fill(255,0+yl,0);
  triangle(mouseX,mouseY, mouseX-30,mouseY-100, mouseX+30,mouseY-100);
  triangle(mouseX,mouseY, mouseX-30,mouseY+100, mouseX+30,mouseY+100);
  noFill(); stroke("yellow"); strokeWeight(5);
  ellipse(mouseX,mouseY,h*2,h);
  ellipse(mouseX,mouseY,h*4,h*2);
  ellipse(mouseX,mouseY,h*8,h*4);
  ellipse(mouseX,mouseY,h*10,h*5);
  
  if (h>100){h=0;}
  h+=spd;
  pop();
  yl+=2;
}

function zt(){
  push();
  translate(mouseX,mouseY);
  fill(0);
  triangle(100,100,200,200,300,300);
  pop();
}

function jing(){
  fill('rgb(211,175,255)')
  rect(390,y,20,500); //xy 
  if (y>1){y-=5;}
  
  fill('rgba(175,210,255,0.81)');
  arc(400,250,400,400,1.5*PI,1.5*PI+x);
  fill('rgb(194,175,255)');
  arc(400,250,400,400,0.5*PI,0.5*PI+x);
  if (x<3.15){x+=0.02;}
  
  
}
