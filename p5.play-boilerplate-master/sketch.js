var backgroundImg;
var spaceship,spaceshipImg;
var asteriod,asteriodImg;

function preload(){
  backgroundImg=loadImage("background.jpg")
  spaceshipImg=loadImage("spaceship.png");
  asteriodImg=loadImage("asteriod.png");
}


function setup() {
  createCanvas(windowWidth-100,windowHeight-100);
  spaceship=createSprite(400, 450, 50, 50);
  spaceship.addImage(spaceshipImg);
  spaceship.scale=0.3;

 
      
      
      
    
}

function draw() {
  background(backgroundImg);  
  
if(keyDown("RIGHT_ARROW")){
  spaceship.x+=5
}
if(keyDown("LEFT_ARROW")){
  spaceship.x-=5
}

if(spaceship.x<0){
  spaceship.x=10;
}
if(spaceship.x>windowWidth-100){
  spaceship.x=windowWidth-150;
}

  //spawnAsteriod();
  drawSprites();
}
function spawnAsteriod(){
  if(frameCount%250===0){
    astriod=createSprite(random(1,windowWidth-100),10,50,100);
    asteriod.addImage(asteriodImg);
    asteriod.velocityX=2;
  }
}
