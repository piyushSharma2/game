var bird,birdImg;
var bg,bgImg
var cImg,owl1Img,owlImg;
var over;
var gameState=1;
var PLAY=1;
var END=0;
var START=3;
var score=0;
var gameState=START;


function preload(){
  
birdImg=loadImage("bird.png")
groundImg=loadImage("g.jpg")
owlImg=loadImage("3.png")
bgImg=loadImage("g.jpg")
owl1Img=loadImage("4-1.png")
cImg=loadImage("4.png")
oImg=loadImage("over.jpg")
sound=loadSound("dd.wav")
noteImg=loadImage("tt.png")
  
  
}


function setup() {
  createCanvas(600,300)
 
  bg=createSprite(300,10,20,20)
  bg.addImage("bg",bgImg)
  bg.velocityX=-2;
  bg.scale=1.2
  
  bird=createSprite(100,150,20,20)
  bird.addImage("bird",birdImg)
  bird.scale=1
  
  over=createSprite(300,150,20,20)
  over.addImage("over",oImg)
  over.scale=1.3
  over.visible=false;
  
  note=createSprite(300,150,20,20)
  note.addImage("note",noteImg);
  note.visible=false;

  
  owlGroup=new Group();
  owl2=new Group();
  cloudsGroup=new Group();
  
}

function draw() {
  
   if(gameState===START){
    
     note.visible=true
    
       owlGroup.setVelocityEach(0)
    owl2.setVelocityEach(0)
    cloudsGroup.setVelocityEach(0)
       
    if(keyDown("space")){
     gameState=PLAY;
      
   }
    
   }
  
  
  if(gameState===1){
    
  bird.velocityX=0;
  bird.velocityY=0;
    
    if (bg.x<0) {
        bg.x = bg.width/2
  }
  
    
    bg.velocityX=-2
  
 
  note.visible=false
    
   
score = score + Math.round(frameCount/60);




  if(keyDown('up')){
    bird.velocityY=-4;
  }
  
   if(keyDown('down')){
    bird.velocityY=4;
    
  }
  
  if(bird.isTouching(owlGroup)||bird.isTouching(owl2)||
     bird.isTouching(cloudsGroup)){
    gameState=END;
  }
  
  spawn();
  spawn2();
  spawn3();
    
  }else if (gameState===0){
    
    over.visible=true;
    owlGroup.destroyEach();
        owl2.destroyEach();
        cloudsGroup.destroyEach();
    
owlGroup.setLifetimeEach(0)
    owl2.setLifetimeEach(0)
    cloudsGroup.setLifetimeEach(0)
    
    owlGroup.setVelocityEach(0)
    owl2.setVelocityEach(0)
    cloudsGroup.setVelocityEach(0)
    


    
  }
 
  
  drawSprites();
  
    stroke("black");
     fill("black");
    textSize(15);
    text("SCORE:"+score,500,50);
 
}

function spawn(){
  
  
  
  if(frameCount % 100===0){
  
 var  owl=createSprite(610,35,20,20)
  owl.addImage("owl",owlImg);
  owl.velocityX=-2
  owl.lifetime=310;
  owl.scale=0.1;
    
    owlGroup.add(owl);
    
  }

}

function spawn2(){
  
  
  
  if(frameCount % 120===0){
  
 var  owl1=createSprite(600,240,20,20)
 
  owl1.y = Math.round(random(250,150));
  owl1.addImage("owl",owl1Img);
  owl1.velocityX=-2
  owl1.lifetime=310;
  owl1.scale=0.1;
    
    owl2.add(owl1)
    
  }

}


function spawn3() {
  //write code here to spawn the clouds
 if (frameCount % 150 === 0) {
    var cloud = createSprite(620,250,40,10);
    cloud.y = Math.round(random(100,250));
    cloud.addImage("v",cImg);
    cloud.scale = 0.5
    cloud.velocityX = -2;
    
     //assign lifetime to the variable
    cloud.lifetime = 310;
    
    //adjust the depth
    
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
}




