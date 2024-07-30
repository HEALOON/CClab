function setup(){
    // 子画布连接,在index页添加:<div id="canvas-parent"></div>
    let cnv = createCanvas(400,400);
    cnv.parent("canvas-parent")
    
}

function draw(){
    background(90,120,250);

    noStroke();
    fill (0);
    rect (100,100,100,100);
    fill (255);
    circle (200,200,30);
}//

function drawTaxi(x,y,scaleFactor){
    push ();
    
}