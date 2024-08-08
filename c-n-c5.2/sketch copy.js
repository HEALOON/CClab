function setup() {
    
    // cow1 = new Animal(300, 200, cowIMG); // instantiate cow object
    // console.log(cow1)

    // MAKE INITIAL COWS and put the into the animals array

//     for(let i = 0; i < numAnimals; i++){
//         let ranX = random(150,width-150);
//         let ranY = random(150, height/2-150);

//         if(random()<0.5){   //让图片不重叠
//             let oneCow = new Animal(ranX, ranY, cowIMG,"cow"); //1
//             animals.push(oneCow);
//         }else{
//             let oneChicken = new Animal(ranX, ranY, chicIMG,"chic"); //1
//             animals.push(oneChicken);
//         }                   
//     }
// }

function draw() {
    background(220, 50, 120);

    // DO STUFF FOR EACH COW --> loop over the animals array
    for(let i = 0; i < animals.length; i++){
        animals[i].display();
        animals[i].update();
    }

    

class Animal{
    constructor(startX, startY, buildimg,myType){
        this.x = startX;    this.y = startY;
        this.photo = buildimg;

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
        
    }
    display(){
        push();      translate(this.x, this.y); scale(this.scaleFactor);

        if (this.isDragged == true){//2
            fill("red");
        }else{fill(255);}
        rect(-150, -280, 300, 300);

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
    console.log("pre");
    for(let i = 0; i < animals.length; i++){
        animals[i].checkIsPressed();
    }
}

function mouseReleased(){//3
    console.log("rel");
    for(let i = 0; i < animals.length; i++){
        animals[i].isDragged = false;
    }
}
