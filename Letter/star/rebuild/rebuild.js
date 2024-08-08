let bianjieIMG;
let heIMG; //
let haiIMG;
let IMG88,IMG100,chinaIMG,dongfmzIMG,hqjr,peace,wuk,zhongx,shanIMG;
let animals = [];
let numAnimals = 8;

let buildinglist = []; //初始图片加载列表


function preload() {
    shanIMG = loadImage("shanpic.jpeg");
    bianjieIMG = loadImage("assets/bianjie.png");
    heIMG = loadImage("assets/he.png");//
    buildinglist.push(IMG100 = loadImage("assets/100.jpeg"));
    buildinglist.push(IMG88 = loadImage("assets/88.png")); 
    
    buildinglist.push(chinaIMG = loadImage("assets/china.png"));
    buildinglist.push( dongfmzIMG = loadImage("assets/dongfmz.png"));

    buildinglist.push( hqjr = loadImage("assets/huanqjr.png"));
    buildinglist.push( peace = loadImage("assets/peace.png"));
    buildinglist.push(wuk = loadImage("assets/wuk.png"));
    buildinglist.push( zhongx = loadImage("assets/zhongx.png"));
    buildinglist.push([0.2,0.1,     0.1,0.1,     0.1,0.1,   0.06,0.1,]);
    haiIMG = loadImage("assets/hai.jpg");
}

function setup() {
    let cnv = createCanvas(2000, 1100);
    cnv.parent("canvas-parent");
    imageMode(CENTER);
    // noCursor();

    // MAKE INITIAL COWS and put the into the animals array
    let ranY = 50;
    for (let i = 0; i < numAnimals; i++) {
        let ranX = random(1450, width - 100);    
        

        let oneCow = new Animal(ranX, ranY, buildinglist[i], buildinglist[8][i]); //1
        animals.push(oneCow);
        ranY += 100;
    }
    console.log(animals);
}

function draw() {
    background(100, 150, 255);
    image(haiIMG,width/2,height/2,2000,1100);
    fill(255);
    noStroke();
    rect(0,0,620,height);
    fill(0);
    // stroke();
    strokeWeight(5);
    line(1400, 0, 1400, height); //xy xy
    groun();

    // DO STUFF FOR EACH COW --> loop over the animals array
    for (let i = 0; i < animals.length; i++) {
        animals[i].display();
        animals[i].update();
        if (animals[i].isDragged == true){
            fill(220,244,220);
            rect(1000, 0, 400 ,150);
            fill(0);
            showInfo(i);
        }
    }
    if (animals[0].x<1400&&
        // animals[1].x<1400&&
        // animals[2].x<1400&&
        // animals[3].x<1400&&
        // animals[4].x<1400&&
        // animals[5].x<1400&&
        // animals[6].x<1400&&
        animals[7].x<1400){
            fill(0);
            rect(0,0,width*2,height*2);
            fill("red");

            textSize(400);
            text("👁️",width/2,300 );
            textSize(60);
            text("On behalf of all humanity\nAre you sure you want to destroy Earth again?",
                width/2-800,height/2 );
        }
    // text(mouseX + "," + mouseY, mouseX, mouseY);

    // infom(){
        
    // }
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
    }
    update() {
        if (this.isDragged == true) {//3
            this.x = mouseX;
            this.y = mouseY;
        }
        

    }
    display() {
        push(); 
        translate(this.x, this.y); 
        scale(this.scaleFactor);

        // we reposition the img to 
        // better fit this object's origin point (this.x, this.y)
        let imgW = this.photo.width; let imgH = this.photo.height;

        if (this.isDragged == true) {//2
            fill(255);
            
            fill("red");
        } else { fill(255); }
        // rect(-100, -100, 200, 200);
        // text(this.photo.width,this.x,this.y);        

        //       the img      x        y 
        //-imgW / 2,-imgH + 90
        image(this.photo, 0, 0);

        fill("blue");
        circle(0, 0, 5);

        pop();
    }
    
    checkIsPressed() {//2
        fill("green");
        rect(this.x-20,this.y-20,20,90);
        if (mouseX > this.x - 20  &&
            mouseX < this.x + 20  &&
            mouseY > this.y - 20  &&
            mouseY < this.y + 20) {
            this.isDragged = true;
        }
    }
}

function mousePressed() {//mouse down function
    
    console.log("pre");
    for (let i = 0; i < animals.length; i++) {
        animals[i].checkIsPressed();
    }
}

function mouseReleased() {//3
    console.log("rel");
    for (let i = 0; i < animals.length; i++) {
        animals[i].isDragged = false;
    }
}

function groun() {//画陆地 + 河
    push(); scale(0.815);
    image(bianjieIMG, 920, 568-18);
    image(heIMG, 970, 700-18);
    pop();
}

function showInfo(i){

    if(i==1){
        text("‌Jinmao Tower, located at 88 Century Avenue, Pudong New Area \nShanghai, was the first skyscraper in China. It is also a shining pearl in \n‌ Lujiazui Financial and Trade Zone. With its unique design and function,\n the building has become one of the landmarks of Shanghai.\nHeight: 420.5 meters\nAppearance: The appearance of Jinmao Tower resembles a Chinese \npagoda, and the design inspiration comes from the shape of ancient \nChinese pagodas, reflecting the concept of traditional Chinese\nBuddhist culture.\nConstruction time: began in 1994 officially opened in 1999",1000,10);
    }else if(i==0){
        text("Paramount is a comprehensive entertainment venue in Shanghai.\nIt is located at No.218 Yuyuan Road, ‌ Jing 'an District. It is also known \nas 'the First Yufu in the East'. Paramount Hall was built in 1932 by a \ngroup of wealthy businessmen from Nanxun who bought land.",1000,20);
    }else if(i==2){
        text("China Art Palace, located at No. 205, Shangnan Road, Pudong New \nArea, Shanghai ‌, is an art museum specializing in the collection of \nmodern and contemporary Chinese art works. The predecessor of the \nChina Art Palace was the Shanghai Art Museum, which was founded in \n1956. The design concept includes 'the crown of the East, the prosperity \nof China, the granary of the world, and the rich people', aiming to \ndemonstrate the spirit and values of Chinese culture. The exterior of \nthe building is mainly red, symbolizing the festive and national image \nof China. ",1000,20);
    }else if(i==3){
        text("‌ Shanghai Oriental Pearl Radio and Television Tower, located at No. 1 \nCentury Avenue, Lujiazui, Pudong New Area, Shanghai ‌, the design is \ninspired by the ancient Chinese ‌ Yu cong. The tower is 468 meters \nhigh and consists of three large columns and multiple spheres. The \ndesign combines modern technology and Eastern culture to show a \nunique architectural aesthetic. It undertakes the wireless TV \ntransmission business in Shanghai area.",1000,20);
    }else if(i==4){
        text("The Shanghai World Financial Center, located at 100 Century Avenue in \nShanghai's Pudong New Area, is inspired by the traditional Chinese \npagoda shape, with a glass and metal exterior that allows it to reflect \ndazzling light in the sun. \nIt is the financial and commercial center of Shanghai",1000,20);
    }else if(i==5){
        text("The Shanghai Peace Hotel is located at 20 Nanjing East Road,Huangpu \nDistrict, Shanghai. It was originally built by British Jew Victor Sassoon \nand was once known as the 'first building in the Far East'. The \narchitectural style has the characteristics of ART DECO style, and the \ninterior decoration combines classical and geometric symmetry beauty.",1000,20);
    }else if(i==6){
        text("WuKang Building, Formerly known as Normandy Apartments, located at \n1850 Huaihai Middle Road, Xuhui District, Shanghai, it is the first \noutdoor corridor style apartment building in Shanghai. The Wukang \nBuilding was first built in 1924, resembling a giant ship \nin appearance.",1000,20);
    }else if(i==7){
        text("Located in Lujiazui Finance and Trade Zone, Pudong New Area, \nShanghai center Building was started on November 29, 2008 and \ncompleted on March 12, 2016. It is known as a 'vertical city'. \nIts exterior design is inspired by the 'dragon shape', \nsymbolizing the rise of China's global financial power. \nThe building adopts a steel frame concrete core tube and an outer \nframe structure. As the height increases, each floor \nis twisted by nearly 1 degree. This asymmetric conical rounded shape \nreduces wind load by 24% and can withstand common typhoons.",1000,20);
    }
    
}