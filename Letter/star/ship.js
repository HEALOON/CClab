let shipIMG;
let myspaceship;

function preload(){
    shipIMG = loadImage('spacecraft.png');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvas-parent");
    myspaceship = new Spaceship(shipIMG);
}

function draw() {
    background(0,0,0,99);
    myspaceship.update();
    myspaceship.display();
}

class Spaceship {
    constructor(img) {
        this.image = img;
        this.x = width - 200;
        this.y = height - 200;        
        this.scalefactor = 1;
        this.speed = 2; // 设置飞船的移动速度
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

    display() {
        push();
        translate(this.x, this.y);
        image(this.image, 0, 0, 100, 100);
        pop();
    }
}
