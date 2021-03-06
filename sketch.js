
var ground,groundImage;
var gameState="serve"
var openImage;
var ground1;
var tittle;
var runner,runnerImage;
var ground2;
var ob,obImage;
var obGroup;
var score=0
function preload(){
groundImage=loadImage("ground.png");
openImage=loadImage("open.png")
runnerImage=loadImage("runner2.png")
obImage=loadImage("ob1.png")
}


function setup() {
  createCanvas(600, 500);
  background(0)
// ground=createSprite(300,200,900,10);
// ground.addImage(groundImage);
// ground.scale=1.1;
obGroup=new   Group()
//   ground.x=ground.width/2
 ground=createSprite(300,200,200,200)
ground.addImage(openImage)
ground.scale=0.6
 ground2=createSprite(300,200,200,200)

ground2.addImage(groundImage)
 ground2.velocityX=-20
ground2.scale=1.2
runner=createSprite(100,450,50,50)
runner.addImage(runnerImage)
runner.scale=0.5

ground1=createSprite(10,490,600,10)

}

function draw() {
  background(0);

if(gameState==="serve"){
// // tittle=createElement("h1")
// // tittle.position(600,20)
// // tittle.html("PRESS SPACE TO START")
// text("PRESS SPACE TO SERVE",300,350)
ground.visible=true
ground2.visible=false
// ob.visible=false
ground1.visible=false

runner.visible=false
if(keyDown("space")){
gameState="play"

}
}
if(gameState==="play"){

ground1.visible=false

ground2.visible=true

ground.visible=false
  score=score+Math.round(getFrameRate()/62.5)

if(ground2.x<0){
  ground2.x=ground2.width/2

}

runner.visible=true
 
if (keyIsDown(UP_ARROW)&&runner.y>438) {
  runner.velocityY=-20
}
runner.velocityY=runner.velocityY+0.8
sp()
if (obGroup.isTouching(runner)) {
gameState="end"  
}
if (gameState==="end") {
ground2.velocityX=0
ob.velocityX=0
  runner.velocityY=0

runner.visible=false





}

}

console.log(runner.y)

runner.collide(ground1)

drawSprites()
if(gameState==="serve"){
// tittle=createElement("h1")
// tittle.position(600,20)
// tittle.html("PRESS SPACE TO START")
fill("yellow")
textSize(30)
text("PRESS SPACE TO CONTINUE",150,50)

text("AFTER PRESS UP ARROW KEY TO JUMP",0,100)

}

if (gameState==="end") {
  fill("red")
textSize(30)
text(" GAME OVER",300,300)
textSize(25)
text("  Your score:"+score,300,200)

text("press space to restart",200,250)

if(keyDown("space")){
  gameState="play"
  obGroup.destroyEach()
   ground2.velocityX=-20
score=0

}

}
if (gameState==="play") {
  fill("red")
textSize(20)
text(" score:"+score,500,100)

}
}

function sp(){
if (frameCount%60===0) {
  ob=createSprite(600,450,200,200)
ob.addImage(obImage)
ob.scale=0.2;
ob.velocityX=-20;
 obGroup.add(ob)
}




}



