var player, playerImg
var burger, burgerImg
var background, backgroundImg
var gameover, gameoverImg

function preload(){
  playerImg = loadImage("PrisonInmate.png")
  burgerImg = loadImage("Burger.png")
  backgroundImg = loadImage("Stone.avif")
  backgroundMusic = loadSound("ScaryMusic.mp3")
}

function setup(){
  createCanvas(400,600);
  //backgroundMusic.loop();
  backgroundImg.velocityY = 1;

  //background = createSprite(400,600);
  //background.addImage("background", backgroundImg);
  //background.scale = 2.9;

  player = createSprite(190,560)
  player.addImage("PrisonInmate", playerImg);
  player.scale = 0.08;

  invisibleGround = createSprite(200,580,600,2)
}

function draw(){
  background(backgroundImg)
  spawnPaddle()
  spawnBurger()
  drawSprites()

  if(keyDown("right")){
    player.x = player.x + 2
  }

  if(keyDown("left")){
    player.x = player.x - 2
  }

  if(keyDown("space")){
    player.velocityY = - 1
  }
  player.velocityY += 0.08;

  player.collide(invisibleGround)
  //player.collide(paddle1)
}

function spawnPaddle(){
  if(frameCount%50==0){
    paddle1 = createSprite(random(50,350),0,100,5)
    paddle1.shapeColor = "white"
    paddle1.velocityY = 2;

    paddle1.lifetime = 300;
  }
}

function spawnBurger(){
  if(frameCount%50==0){
    burger = createSprite(random(50,350),0,100,5)
    burger.addImage(burgerImg)
    burger.velocityY = 1;
    burger.scale= 0.05

    burger.lifetime = 600;
  }
}

