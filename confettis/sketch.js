let confettis = [];
let numConfetti = 25;
let backHue; //0

function setup() {    
    let cnv = createCanvas(400,400);
    cnv.parent("canvas-parent");  
//   for(let i = 0; i < numConfetti; i++){
//     confettis.push(new Confetti(width/2, height/2));
//   }
  colorMode(HSB);//0
  backHue = random(0,360);//0  
}

function draw() {
    //       HUE  SAT BRI
    //     0-360  100 100
  background(backHue, 15,105); //0

  if (mouseIsPressed==true){
    confettis.push(new Confetti(mouseX,mouseY));
  }
  
  for(let i = 0; i < confettis.length; i++){
    confettis[i].update();
    confettis[i].display();
    confettis[i].checkOutOfCanvas();
    text(confettis.length,20,20);
  }

//   if (confettis.length>300){//3
//     confettis.splice(0,confettis.length-300);
//   }
    for(let i = confettis.length-1;i>=0;i--){
        if(confettis[i].onCanvas==false){
            confettis.splice(i,1);
        }
    }
  
}

class Confetti{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);
    
    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);   

    this.cHUE = random(0,360);//0

    this.onCanvas = true; //4
  }
  checkOutOfCanvas(){//4
    if(this.y > height){
        this.onCanvas = false;
    }
  }
  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;

    //gravity to y speed
    this.speedY += 0.1; //1  向上减速 
    this.speedX *= 0.99;
  }
  display(){    
    push();
    translate(this.x, this.y);

      fill(this.cHUE, 100, 100);//0
      noStroke();
      circle(0, 0, this.size);
   
    pop();
  }

}

// function mousePressed(){
//     for(let i = 0; i < numConfetti; i++){
//         confettis.push(new Confetti(mouseX, mouseY));
//       }
// }