var astronaut, bg, bath, brush, drink, eat, gym, move, sleep;

function preload(){
bg = loadImage("iss.png");
bath = loadAnimation("bath1.png","bath2.png");
brush = loadImage("brush.png");
drink = loadAnimation("drink1.png","drink2.png");
eat = loadAnimation("eat1.png","eat2.png");
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
move = loadAnimation("move.png","move1.png");
sleep = loadImage("sleep.png");
}


function setup() {
  createCanvas(400, 400);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

  bg.addImage()
}

function draw() {
  background(220);

if(keyDown("up_arrow")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;

  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}


  drawSprites();
}