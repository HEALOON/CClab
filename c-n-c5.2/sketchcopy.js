//没成功
let cow1; // global cow instance
let cowIMG;
let chicIMG;

let animals = [];
let numAnimals = 4;

function preload(){
    cowIMG = loadImage("assets/cow-poster.png");
    chicIMG = loadImage("assets/chicken_480.png");
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvas-parent");

    // cow1 = new Animal(300, 200, cowIMG); // instantiate cow object
    // console.log(cow1)

    // MAKE INITIAL COWS and put the into the animals array
    for(let i = 0; i < numAnimals; i++){
        let ranX = random(150,width-150);
        let ranY = random(150, height/2-150);

        if(random()<0.5){   
            let oneCow = new Animal(ranX, ranY, cowIMG,"cow"); //1
            animals.push(oneCow);
        }else{
            let oneChicken = new Animal(ranX, ranY, chicIMG,"chic"); //1
            animals.push(oneChicken);
        }
                        
    }
    console.log(animals)
}

function draw() {
    background(220, 50, 120);

    // DO STUFF FOR EACH COW --> loop over the animals array
    for(let i = 0; i < animals.length; i++){
        animals[i].display();
        animals[i].update();
    }

    line(0, height/2, width, height/2);     line(width/2, height/2, width/2, height);   
}

class Animal{
    constructor(startX, startY, cowimg,myType){
        this.x = startX;    this.y = startY;
        this.photo = cowimg;
        // this.photoChic
        this.scaleFactor = random(0.4, 0.5);

        this.xSpeed = 1;
        this.ySpeed = 1;

        this.type = myType;
        this.isDragged=false;
    }
    update(){
        if(this.isDragged==true){//3
            this.x = mouseX;
            this.y = mouseY;
        }
        if(this.x <width/2 && this.y>height/2 && this.type=="chic"){
            this.x += random(-2,2);
        }
        if(this.x >width/2 && this.y>height/2 && this.type=="cow"){
            this.x += random(-2,2);
        }
    }
    display(){
        push();      translate(this.x, this.y); scale(this.scaleFactor);

        if (this.isDragged == true){//2
            fill("red");
        }else{fill(255);}
        rect(-150, -280, 300, 300);

        // we reposition the img to 
        // better fit this object's origin point (this.x, this.y)
        let imgW = this.photo.width;     let imgH = this.photo.height;

        //       the img      x        y 
        image(this.photo, -imgW/2, -imgH+90);

        fill("blue");
        circle(0,0,5);

        pop();
    }
    checkIsPressed(){//2
        if(mouseX>this.x-150*this.scaleFactor && 
            mouseX<this.x+150*this.scaleFactor&&
            mouseY>this.y-280*this.scaleFactor&&
            mouseY<this.y+20*this.scaleFactor){
            this.isDragged = true;
        }
    }
}

function mousePressed(){//mouse down function
    for(let i = animals.length-1; i >= 0; i--){
        animals[i].checkIsPressed();
        
    }
}

function mouseReleased(){//3
    for(let i = 0; i < animals.length; i++){
        animals[i].isDragged = false;
    }
}