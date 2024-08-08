let bianjieIMG;
let heIMG; //
let cow1; // global cow instance


let animals = [];
let numAnimals = 8;

let IMG88;
let IMG100;
let chinaIMG;
let dongfmzIMG;
let hqjr;
let peace;
let wuk;
let zhongx;

let buildinglist = [];


function preload() {
    bianjieIMG = loadImage("assets/bianjie.png");
    heIMG = loadImage("assets/he.png");//

    buildinglist.push(IMG88 = loadImage("assets/88.png")); 
    buildinglist.push(IMG100 = loadImage("assets/100.jpeg"));
    buildinglist.push(chinaIMG = loadImage("assets/china.png"));
    buildinglist.push( dongfmzIMG = loadImage("assets/dongfmz.png"));

    buildinglist.push( hqjr = loadImage("assets/huanqjr.png"));
    buildinglist.push( peace = loadImage("assets/peace.png"));
    buildinglist.push(wuk = loadImage("assets/wuk.png"));
    buildinglist.push( zhongx = loadImage("assets/zhongx.png"));
    buildinglist.push([0.1,0.2,     0.1,0.1,     0.1,0.1,   0.06,0.1,]);
}

function setup() {
    let cnv = createCanvas(1800, 700);
    cnv.parent("canvas-parent");
    imageMode(CENTER);
    // noCursor();

    // MAKE INITIAL COWS and put the into the animals array
    for (let i = 0; i < numAnimals; i++) {
        let ranX = random(1050, width - 50);    let ranY = random(250, 600);

        let oneCow = new Animal(ranX, ranY, buildinglist[i], buildinglist[8][i]); //1
        animals.push(oneCow);
    }
    console.log(animals);
}

function draw() {
    background(100, 150, 255);
    fill(0);
    
    strokeWeight(5);
    line(1000, 0, 1000, 700);
    groun();

    // DO STUFF FOR EACH COW --> loop over the animals array
    for (let i = 0; i < animals.length; i++) {
        animals[i].display();
        animals[i].update();
    }
    text(mouseX + "," + mouseY, mouseX, mouseY);
}

class Animal {
    constructor(startX, startY, buildimg, myScale) {
        this.x = startX; this.y = startY;
        this.photo = buildimg;
        // this.photoChic
        this.scaleFactor = myScale;

        this.xSpeed = 1;
        this.ySpeed = 1;

        // this.type = myType;
        this.isDragged = false;
        this.offsetX = 0;
        this.offsetY = 0;
    }
    update() {
        if (this.isDragged == true) {
            this.x = mouseX - this.offsetX;
            this.y = mouseY - this.offsetY;
        }
    }
    display() {
        push(); 
        translate(this.x, this.y); 
        scale(this.scaleFactor);

        // we reposition the img to 
        // better fit this object's origin point (this.x, this.y)
        let imgW = this.photo.width; let imgH = this.photo.height;

        if (this.isDragged == true) {
            fill("red");
        } else { fill(255); }
        rect(-100, -100, 200, 200);
        text(this.photo.width,this.x,this.y);
        

        //       the img      x        y 
        //-imgW / 2,-imgH + 90
        image(this.photo, 0, 0);

        fill("blue");
        circle(0, 0, 5);

        pop();
    }
    checkIsPressed() {
        let scaledMouseX = mouseX / this.scaleFactor;
        let scaledMouseY = mouseY / this.scaleFactor;

        let imgW = this.photo.width * this.scaleFactor;
        let imgH = this.photo.height * this.scaleFactor;

        if (scaledMouseX > this.x - imgW / 2 &&
            scaledMouseX < this.x + imgW / 2 &&
            scaledMouseY > this.y - imgH / 2 &&
            scaledMouseY < this.y + imgH / 2) {
            this.isDragged = true;
            this.offsetX = scaledMouseX - this.x;
            this.offsetY = scaledMouseY - this.y;
        }
    }
}

function mousePressed() {
    console.log("pre");
    for (let i = 0; i < animals.length; i++) {
        animals[i].checkIsPressed();
    }
}

function mouseReleased() {
    console.log("rel");
    for (let i = 0; i < animals.length; i++) {
        animals[i].isDragged = false;
    }
}

function groun() {
    push(); scale(0.5);
    image(bianjieIMG, 920, 570);
    image(heIMG, 964, 698);
    pop();
}
