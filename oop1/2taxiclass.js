//五、
let instanceOfTaxi;
let taxi2;//十一、1

function setup(){    
    let cnv = createCanvas(400,400);
    cnv.parent("canvas-parent") 
    
    //六、new
    // instanceOfTaxi = new Taxi();
    instanceOfTaxi = new Taxi(100,100,1);//十二、3
    console.log(instanceOfTaxi);

    // taxi2 = new Taxi();//十一、2  
    taxi2 = new Taxi(300,100,1);//十二、3 
}

function draw(){
    background(180,150,240);
    
    instanceOfTaxi.spinWheel();  // 九.4 call spinWheel method
    instanceOfTaxi.move();//十三、3
    //七、
    instanceOfTaxi.display();

    taxi2.spinWheel();//十一、3
    taxi2.display();//十一、3

    

    
}


class Taxi{ //一、define class name
    constructor(startX,startY,scaleFactor)//十二、1
    {//二、class的自动运行function
        //三、listing properties(var) 
        //that instances of this class should have
        //四、this.
        // this.x = 100;
        // this.y = 100;
        // this.s = 1;

        this.x = startX;//十二、2
        this.y = startY;//十二、2
        this.s = scaleFactor;

        this.speed = 1;//十三、2
        
        //九、旋转轮子
        this.wheelAngle = 45;
        this.wheelSpeed = 1; //十、

    }//end init

    display(){  //八、method应该在class的{}里面
        push();
        translate(this.x, this.y);
        scale(this.s);

            noStroke();
            fill(240, 220, 60);

            // base:
            rect(-50, -50, 100, 30);
            // top"
            rect(-25, -70, 50, 20);
            // wheel 1:
            this.drawWheel(-30, -15);
            // wheel 2:
            this.drawWheel( 30, -15);


            // just to see origin 
            // of translation matrix:
            fill("red");
            circle(0, 0, 5); 
        pop();
    }
    spinWheel(){ // 九.3
        this.wheelAngle += this.wheelSpeed; //十
    }

    move(){
        this.x+=this.speed;//十三、1
    }
    drawWheel(wheelx, wheely){
        push();
        translate(wheelx, wheely);
        // rotate(radians(wheelAngle));            
            rotate(radians(this.wheelAngle)); // 九.2
            noStroke();
            fill(0);
            // circle(0,0,30);
            ellipse(0,0,30, 27);

        pop();
    }
}