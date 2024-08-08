let isDragged = false;
let offsetX, offsetY;
let x = 100, y = 100; // 目标物体的初始位置
let scaleFactor = 1.5; // 缩放比例

function mousePressed() {
    // 将鼠标坐标转换为缩放前的坐标
    let scaledMouseX = mouseX / scaleFactor;
    let scaledMouseY = mouseY / scaleFactor;

    // 判断鼠标是否在目标物体上
    if (scaledMouseX > x && 
        scaledMouseX < x + objectWidth && 
        scaledMouseY > y && 
        scaledMouseY < y + objectHeight) {
        isDragged = true;
        // 记录鼠标与物体的偏移量
        offsetX = scaledMouseX - x;
        offsetY = scaledMouseY - y;
    }
}

function mouseReleased() {
    isDragged = false;
}

function update() {
    if (isDragged) {
        // 将鼠标坐标转换为缩放前的坐标，并更新物体位置
        x = (mouseX / scaleFactor) - offsetX;
        y = (mouseY / scaleFactor) - offsetY;
    }
}

function draw() {
    // 这里是绘制目标物体的代码
    // 注意在绘制前应用缩放
    scale(scaleFactor);
    rect(x, y, objectWidth, objectHeight);
}
