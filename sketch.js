
var canvas;
var music;

var box1,box2,box3,box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1200,800);

    topI = createSprite(600,0,1200,10);
    left = createSprite(1200,400,10,800);
    right = createSprite(0,400,10,800);


    ball = createSprite(500,500,50,50);
    ball.shapeColor = "white";
    ball.velocityX = 2;
    ball.velocityY = 3;
    
    box1 = createSprite(100,700,300,20);
    box1.shapeColor = "red";
    box2 = createSprite(400,700,300,20);
    box2.shapeColor = "yellow";
    box3 = createSprite(750,700,300,20);
    box3.shapeColor = "blue";
    box4 = createSprite(1000,700,300,20);
    box4.shapeColor = "green";
    

}

function draw() {
    background(0);
    // createEdgeSprites();

    ball.bounceOff(box1);
    ball.bounceOff(box2);
    ball.bounceOff(box3);
    ball.bounceOff(box4);
    ball.bounceOff(topI);
    ball.bounceOff(left);
    ball.bounceOff(right);
    // ball.bounceOff(edges);
    
    isTouchingbox1()
    isTouchingbox2()
    isTouchingbox3()
    isTouchingbox4()

 drawSprites();   
}
function isTouchingbox2(){
    if (ball.isTouching(box2)&& ball.bounceOff(box2)) {
      ball.shapeColor = "yellow";
    }
}
function isTouchingbox1(){
    if (ball.isTouching(box1)&& ball.bounceOff(box1)) {
      ball.changeColor = "red";
    }
}
function isTouchingbox3(){
    if (ball.isTouching(box3)&& ball.bounceOff(box3)) {
      ball.ChangeShapeColor = "blue";
    }
}
function isTouchingbox4(){
    if (ball.isTouching(box4)&& ball.bounceOff(box4)) {
      ball.shapeColor = "green";
    }
}
