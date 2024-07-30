let cowIMG;
let gunIMG;
let bbbs = [];      //array

function preload(){//1
    cowIMG = loadImage("assets/bubble.png");//1
    gunIMG = loadImage("assets/gunpink.png");//1
}
function setup(){
    let cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("p5-canvas-container");

    // for(let i = 0; i < numBubbles;i++){
    //     let oneBubble = new Bubble(0,height/2,cowIMG);
    //     bbbs.push(oneBubble);
    // }
}

function draw(){
    background(59,222,255);
    drawGun();
    //array
    if (keyIsPressed==true && frameCount%8==0){
      bbbs.push(new Bubble(110,mouseY,cowIMG));
    }
    
    for (let i = 0; i<bbbs.length; i++){
        bbbs[i].display();
        bbbs[i].update();
    }

    for(let i = bbbs.length -1; i >=0 ; i--){
      if(bbbs[i].alive == false){
          bbbs.splice(i, 1);
      }
  }

    
}

function drawGun(){
  push();
  translate(0,mouseY);
  scale(0.2);
  image(gunIMG,0,-270);
  pop();
}

class Bubble{
    constructor(startX,startY,bubbleimg){
        this.x = startX;
        this.y = startY;

        this.photo = bubbleimg; 
        this.scaleFactor = 0.005;//0.03
        this.scaleSpeed = random(0.000001,0.0001);

        this.xSpeed = random(1,2); 
        this.ySpeed = random(-1.3,0.9);

        this.alive = true;        
    }

    display(){
        push();
        translate(this.x,this.y);
        scale(this.scaleFactor);                    
            let imgW = this.photo.width; 
            let imgH = this.photo.height;
            image(this.photo,-imgW/2,-imgH+90);

            // if(this.alive = false){
            // circle(this.x,this.y,30);}//////
        pop();        
    }

    checkClick(){ 
      if(dist(mouseX, mouseY, this.x, this.y)<50){
        this.alive = false;
      }
    }
    
    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        this.scaleFactor += this.scaleSpeed;    
        if(this.scaleFactor>=0.027){
          this.alive = false;
        }           
    }
}
function mousePressed(){
  // each bubbles should check if it was clicked
  for(let i = 0; i < bbbs.length; i++){
      bbbs[i].checkClick();//
  }
}