
var runner, runnerImg, ground, backgroundImg, coin,coinImg;
var wall1,wall2;

function preload(){

  runnerImg = loadAnimation("runner-1.png","runner-2.png");

  backgroundImg = loadImage("path.png");

  coinImg = loadImage("coin.png");

}

function setup(){
  createCanvas(400,400);

  ground = createSprite(200,200,1,1);
  ground.addImage("ground",backgroundImg);
  ground.velocityY = 5;

  runner = createSprite(200,350,1,1);
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.05;

  coin = createSprite(230,0,1,1);
  coin.addAnimation("coin",coinImg);
  coin.scale = 0.5;
  coin.velocityY = 5;

  wall1 = createSprite(30,200,100,400);
  wall2 = createSprite(370,200,90,400);

  wall1.visible = false;
  wall2.visible = false;

}

function draw() {
  background(0);

  if(World.mouseX <= 335 && World.mouseX >= 80){
    runner.x = World.mouseX;
  }

  if (ground.y > 400) {
    ground.y = height / 2;
}

  if (coin.isTouching(runner)){
    coin. y = -30;
  }
  
  if (coin.y > 400){
    coin.y = -30;
    }

  runner.collide(wall1);
  runner.collide(wall2);

  drawSprites();
}
