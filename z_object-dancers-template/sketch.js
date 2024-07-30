// after push to github with github desktop
// this project should be at:
// https://healoon.github.io/CClab/z_object-dancers-template/


let dancer;
function setup() {  
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new SongDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  drawFloor(); 

  dancer.update();
  dancer.display();
}

class SongDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.color = 200;
    this.blue = 1;

    this.bi = -50;
    this.armpt = 100;
    this.armdir = 1;
    this.circen = -50;

    this.aangle = 0;
  }
  update() {

    // 蓝色
    this.color+= this.blue;
    if (this.color>255 || this.color<100){
      this.blue = -this.blue;
    }

    //尖
    this.armpt += this.armdir;
    if (this.armpt > 100 || this.armpt < -100){
      this.armdir = -this.armdir;
    }
    //圆
    this.circen -=(this.armdir/2);
    this.bi -=(this.armdir/2);

    this.aangle ++;
    

  }
  display() {
    push();
    noStroke();
    translate(this.x, this.y);
    rotate(radians(this.aangle));
    
    fill(250,50,250-this.color);
    triangle(0,0, this.armpt,100,  this.bi,50);
    triangle(0,0, this.armpt,-100, this.bi,-50);

    fill(100,200,this.color);
    circle(this.circen, 0, 100); //xyd 
    
    this.drawReferenceShapes();

    pop();
  }


  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}