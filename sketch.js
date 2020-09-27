function setup(){
    createCanvas(500,500);
}

function draw(){
    background("white");
   canvas.mousePressed(startPath);
   canvas.mouseReleased(endPath);
   
   var clearButton = select("#clearButton");
   clearButton.mousePressed(clearDrawing);

    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
