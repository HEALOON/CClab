let stars = [];
let shipIMG, earthIMG;
let myspaceship, myearth;
let ambience;


function preload(){
    ambience = loadSound("yinx.mp3");
    shipIMG = loadImage('spacecraft.png');
    earthIMG = loadImage('earth.png');
}
function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvas-parent")    ;
    
    imageMode(CENTER);
    rectMode(CENTER);
    for (let i = 0; i < 100; i++) {
        stars.push(new Star());
    }
    myspaceship = new Spaceship(shipIMG);
    myearth = new Earth(earthIMG);
    noCursor();
}

function draw() {
    background(0,0,0,99);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].display();
    }
    myearth.display();
    myspaceship.display();
    myspaceship.update();
    myspaceship.checkAlive();
    
    

    if(myspaceship.alive == false && 
        myearth.scalefactor<1.5 ){
        myearth.scalefactor += 0.01;
        myearth.x -=7;
        myearth.y -=7;        
    }
    if(myearth.scalefactor>=1.49){       
        drawButton();
    }
    

   
}

class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.xspeed = random(0.5,3);
        this.yspeed = this.xspeed-0.5;
        this.size = random(1, 3);
    }

    update() {
        this.x += this.xspeed
        this.y += this.yspeed
        if (this.x >= width ){
            this.x = 0;
        }else if (this.y >= height ){
            this.y = 0;
        }
    }

    display() {
        fill(255);
        noStroke();
        circle(this.x,this.y,this.size)
    }
}
class Spaceship{
    constructor(img) {
        this.image = img;
        this.x = width-200;
        this.y = height-200;    
        this.speed = 8;    
        this.alive = true;
        this.scale = 1;
    }
    update() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.speed;
        }        
    
    }
    display(){
        push(); 
        translate(this.x,this.y);
        if (this.alive == true){
        image(this.image,0,0,100,100);}
        pop();
    }
    checkAlive(){
        if (this.x>50 && this.x<240 &&
            this.y>30 && this.y<255){
                this.alive = false;
            }        
    }
}

class Earth {
    constructor(img) {
        this.image = img;
        this.y = 1500;        
        this.x = 1500;
        this.scalefactor = 0.1;
        this.speed = 2; // 设置飞船的移动速度
    }

    update() {
        this.scalefactor = 1;
    }

    display() {
        push();
        scale(this.scalefactor)
        translate(this.x, this.y);
        image(this.image, 0, 0);
        pop();
    }
}

function drawButton() {
    fill("cyan");
    rect(width/2, height/2, width/8, height/12);
    fill(255);
    textSize(30); textAlign(CENTER);
    text('Enter the Earth', width/2, height/2);

    if (mouseX >= width/2 -width/16 && mouseX <= width/2 + width/16 && 
        mouseY >= height/2 -height/24 && mouseY <= height/2 +height/24) {
        fill("red");
        circle(mouseX,mouseY,20);                
    }else{
        textSize(40);
        text("🔍", mouseX, mouseY);
    }
}

function mousePressed() {
    if (mouseX >= width/2 -width/16 && mouseX <= width/2 + width/16 && 
        mouseY >= height/2 -height/24 && mouseY <= height/2 +height/24) {
        window.location.href = 'rebuild/index.html';
    }
    ambience.loop();
}