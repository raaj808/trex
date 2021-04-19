var trex, trexImg ,ground ,gimge , invg , cloud , cloud2, cactus12, oba1, oba2, oba3, oba4, oba5, oba6, cg, cag,td,die,jump,cp,go,restart,gimage,rimage,
score=0

var PLAY=1
var END= 0
var GS= 1

function preload(){
  trexImg = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  
  gimge = loadImage("ground2.png")
   cloud2 = loadImage("cloud.png")
    oba1 = loadImage("obstacle1.png")
     oba2 = loadImage("obstacle2.png")
      oba3 = loadImage("obstacle3.png")
       oba4 = loadImage("obstacle4.png")
        oba5 = loadImage("obstacle5.png")
         oba6 = loadImage("obstacle6.png")
         td = loadImage("trex_collided.png")
          die = loadSound("die.mp3")
           jump = loadSound("jump.mp3")
            cp = loadSound("checkPoint.mp3")
             gimage = loadImage ("gameOver.png")
              rimage = loadImage ("restart.png")
             
         
  
  
}

function setup(){
  
  createCanvas(600,200)
  
  go = createSprite(300,100,20,20)
  restart = createSprite(300,150,20,20)
  go.addImage("asd",gimage)
  restart.addImage("wasd",rimage)
  go.visible = false 
  restart.visible = false 
  
  trex = createSprite(50 ,180,5,5)
  trex.addAnimation("abc",trexImg)
  trex.addImage("die",td)
  ground=createSprite(300, 180,600,10)
  ground.addImage("g",gimge)
  trex.scale=0.70
  invg=createSprite(200, 190,600,10 ) 
  invg.visible=false 
  cg=new Group()
   cag=new Group()
}

function draw(){
  background(255)
  trex.collide(invg)
  
  text("score = " + score,520,20)
  
  //trex.debug=true
  
  trex.setCollider("circle",0,0,30) 
  
  if (score%100===0&&score>0) {
      cp.play()
      }
  
  if(GS===PLAY) { 
  ground.velocityX=-5 
    score=Math.round(score+getFrameRate()/20)
    
    if(keyDown("space")&& trex.isTouching(ground)){
     trex.velocityY=-24
     jump.play()
     }
     
     cloudc()  
  
  dryPlantc()
    
    console.log(getFrameRate())
    
    trex.velocityY=trex.velocityY+2
    
      if(ground.x<0){ground.x=1100
     
     }
     if (trex.isTouching(cag) ){
       GS=END
       die.play()
       
     }
} else{ground.velocityX=0
      cag.setVelocityXEach(0)
      cag.setLifetimeEach(-1)
      cg.setVelocityXEach(0)
       cg.setLifetimeEach(-1)
       trex.changeAnimation("die",td)
       trex.velocityY=0
       go.visible = true
       restart.visible = true
       if(mousePressedOver(restart)){ 
         GS=PLAY
          cag.destroyEach()
         cg.destroyEach()
         go.visible=false
         restart.visible=false
         trex.changeAnimation("abc",trexImg)
          score=0
          }
      }
  
  
  
  drawSprites();

}

function cloudc(){

  if (frameCount%120===0) {
      cloud=createSprite(600,random(50,120),25,10) 
  cloud.velocityX=-10 
    cloud.addImage("abc",cloud2)
      cloud.scale=0.7
    trex.depth=cloud.depth
   trex.depth=trex.depth+1   
    cloud.lifetime=70
    cg.add(cloud)
  
  }  

}
function dryPlantc(){
  if (frameCount%60===0){
  cactus=createSprite(600,165,40,12)
    cactus.scale=.5
  cactus.velocityX=-5 
    cactus.lifetime=120
  var r=Math.round(random(1,6))
  switch(r){
     case 1 :cactus.addImage("abc",oba1) ;break;
      case 2:cactus.addImage("abo", oba2) ;break;
       case 3 :cactus.addImage("abd",oba3) ;break;
        case 4 :cactus.addImage("abf",oba4) ;break;
         case 5 :cactus.addImage("abg",oba5) ;break;
          case 6 :cactus.addImage("abh",oba6) ;break;
         }
           cag.add(cactus)
  }}