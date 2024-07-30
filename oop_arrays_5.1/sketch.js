let niu0; //0
let cowIMG;//1
let nius = [];
let numNius = 20;

function preload(){//1
    cowIMG = loadImage("assets/cow.png");//1
}
function setup(){
    let cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("p5-canvas-container");

    niu0 = new Niu(300, 200,cowIMG);//0 //1

    for(let i = 0; i < numNius;i++){
        let oneNiu = new Niu(random(width),random(height),cowIMG);
        nius.push(oneNiu);
    }
}

function draw(){
    background(59,222,255);

    niu0.display();
    niu0.update();//2

    for (let i = 0; i<nius.length; i++){
        nius[i].display();
        nius[i].update();
    }
    
}

class Niu{
    constructor(startX,startY,cowimg){
        this.x = startX;
        this.y = startY;
        this.photo = cowimg; //1
        this.scaleFactor = random(0.4,0.5);
        this.xSpeed = 1; //2
        this.ySpeed = 1;
    }

    display(){
        push();
        translate(this.x,this.y);
        scale(this.scaleFactor);
            
            let imgW = this.photo.width; //1.1 reposition the image
            let imgH = this.photo.height;

            image(this.photo,-imgW/2,-imgH+90);//1
        pop();        
    }

    update(){
        this.x += this.xSpeed;//2
        this.y += this.ySpeed;

        if(this.x>width){//2
            this.x = 0;
            
        }
    }
}