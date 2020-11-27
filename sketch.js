var monkey = createSprite(50, 340,50,50);
monkey.setAnimation("monkey");
monkey.scale=0.2;

var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;
  if ( invisibleGround.x < 0){
      invisibleGround.x =  invisibleGround.width/2;
    }
var ground = createSprite(200,380,400,20)
ground.x = ground.width /2;
ground.visible = false;
var bananaGroup = createGroup();
var stoneGroup = createGroup();

monkey.velocityY = monkey.velocityY + 0.8; 



function draw() {
  
  background(255);
  createEdgeSprites();
if (keyDown("space")) {
    monkey.velocityX=10;
  }
if (keyDown("UP_ARROW")) {
      monkey.velocityY=10;
    }
        monkey.collide(ground);
 
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  ground.velocityX = 10;
  spawnBanana();
  spawnStones();
  if(monkey.isTouching("bananaGroup")){
var winner = createSprite(200, 200);
winner.setAnimation("f");

}
  
drawSprites();
    
    
  
}

function spawnBanana(){
  var banana = createSprite(400,365,10,40);
banana.setAnimation("Banana");
banana.scale=0.06;
banana.lifetime = 70;
bananaGroup.add(banana);
banana.x = randomNumber(206,350);
  banana.velocityX = - (600/100);
   
}

function spawnStones(){
  var stone = createSprite(200, 390);
stone.setAnimation("Stone");
  stone.scale=0.15;
}
