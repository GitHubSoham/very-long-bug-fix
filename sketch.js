var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "pink";

    block4 = createSprite(715,580,200,30);
    block4.shapeColor = "red";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = random(4,8);
    ball.velocityX = random(4,8);
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) &&ball.bounceOff(block1)){
        ball.shapeColor = "blue";
       //music.play();
       //bounceOff(block1,ball);
    }



    if(isTouching(ball,block2)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }
    if(isTouching(ball,block3)){
        //bounceOff(ball,block3);
        ball.shapeColor = "pink";
        
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }
    if(block4.isTouching(ball)){
        ball.shapeColor = "red";
        bounceOff(block4,ball);
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }
    

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
function isTouching(obj1,obj2){
if(obj1.x - obj2.x < obj1.width/2 +obj2.width/2
    &&obj1.y - obj2.y <obj1.height/2 +obj2.height/2
    &&obj2.x - obj2.x <obj2.width/2 +obj1.width/2
    &&obj2.y - obj1.y < obj2.height/2 +obj1.height/2
    
){
return true;

}else{
    return false;
}
}
function bounceOff(obj1,obj2){
    if(obj1.x - obj2.x <= obj1.width/2 +obj2.width/2
        &&obj2.x - obj2.x <=obj2.width/2 +obj1.width/2

    ){
        obj1.velocityX = obj1.velocityX*-1;
        obj2.velocityX = obj2.velocityX*-1;
    }
    if(obj1.y - obj2.y <= obj1.height/2 +obj2.height/2
        &&obj2.y - obj1.y <= obj2.height/2 +obj1.height/2
    ){
        obj1.velocityY = obj1.velocityY*-1;
        obj2.velocityY = obj2.velocityY*-1;
    }
}
