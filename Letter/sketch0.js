let bianjieIMG;
let heIMG; //
let IMG88;
let IMG100;
let chinaIMG;
let dongfmzIMG;
let hqjr;
let peace;
let wuk;
let zhongx;
let oneBuild;

function preload(){
    bianjieIMG = loadImage("assets/bianjie.png");
    heIMG = loadImage("assets/he.png");//
    IMG88 = loadImage("assets/88.png");
    // IMG100 = loadImage("assets/100.png");
    chinaIMG = loadImage("assets/china.png");
    dongfmzIMG = loadImage("assets/dongfmz.png");
    hqjr = loadImage("assets/huanqjr.png");
    peace = loadImage("assets/peace.png");
    wuk = loadImage("assets/wuk.png");
    zhongx = loadImage("assets/zhongx.png");
}
function setup(){
    let cnv = createCanvas(1800,700);
    cnv.parent("canvas-parent");  
    oneBuild = new Build(2400, 1000, IMG88);  //
}

function draw(){
    background(100,150,255);

    fill (0);
    text(mouseX+","+mouseY,mouseX,mouseY);
    strokeWeight(5);
    line(1000,0,1000,700);
    scale(0.5);
    image(bianjieIMG, 20, -390);
    image(heIMG, -139, -46);
    oneBuild.display();//
    oneBuild.update();


}

class Build{
    constructor(startX, startY, img){
        this.x = startX;    this.y = startY;
        this.photo = img;

        this.scaleFactor = 0.15;

        this.xSpeed = 1;
        this.ySpeed = 1;

        // this.type = myType;
        this.isDragged=true;
    }

    display(){
        push();      translate(this.x,this.y); scale(this.scaleFactor);

        if (this.isDragged == true){//2
            fill("red");
        }else{fill(255);}
        rect(-150, -280, 300, 300);
   
        let imgW = this.photo.width;     let imgH = this.photo.height;
        //       the img      x        y 
        image(this.photo, -imgW/2, -imgH+90);

        fill("blue");
        circle(0,0,50);

        pop();
    }
    update(){
        if(this.isDragged==true){//3
            this.x = mouseX;
            this.y = mouseY;
        }
        
    }
    checkIsPressed(){//2
        if(mouseX>this.x-150 && 
            mouseX<this.x+150&&
            mouseY>this.y-280&&
            mouseY<this.y+20){
            this.isDragged = true;
        }
    }
}
function mousePressed(){//mouse down function
    console.log("pre");
    oneBuild.checkIsPressed();    
}

function mouseReleased(){//3
    console.log("rel");
    oneBuild.isDragged = false;    
}