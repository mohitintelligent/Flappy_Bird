var pillar,pillar1,pillar1image,pillar2,pillarGroup;

var heart,heartImage,heartgroup;

var bomb,bombanimation;

var lazer,lazer1,lazerimage;

var bombgroup;

var bird,birdImage;

var score=10;

var gamestate;

var end=1;

var start=0; 

var highscore=0;

var bombso,deathso;

function preload(){
    pillar1image=loadImage("my pillar.png");
  
    pillar2image=loadImage("my pillar.png");
  
    lazerimage=loadImage("laser.png");
  
    heartImage=loadImage("heart.png");
  
    birdImage=loadImage("bird.png");
  
  bombanimation=loadAnimation("bombofficial.png","bombabouttoexpolde.png");
  
   // bombso=loadSound("Explosion+3.mp3");

    //deathso=loadSound("High-pitch-bell-tone-ding.mp3");
  
}

function setup() {
     
       bird=createSprite(200,300,10,10);
       bird.addImage(birdImage);

       createCanvas(600, 600);
  
       
       bombgroup=new Group();
       pillarGroup=new Group();
       heartgroup=new Group();

       gamestate=start;
   
}

function draw() {
  
 background("pink");

  console.log("This is the bird's X position! :-  "+bird.position.x);
 
  camera.position.x=bird.position.x+250;
  camera.position.y=width/2;

  bird.scale=0.3; 

  bombgroup.collide(pillarGroup);
  heartgroup.collide(pillarGroup);
  heartgroup.collide(bombgroup);

  


  if (gamestate===start){
  
      spawnpillar();
    
      spawnheart();
    
      bombspawn();
    
      bird.velocityY=bird.velocityY+0.5;

      bird.velocityX=7;
   
          
  if (keyDown("space")&&bird.y>=0){
    
      bird.velocityY=bird.velocityY-1;
    
  }
  if (pillarGroup.isTouching(bird)){
    
      score=score-2;
    
      pillarGroup.destroyEach();

      heartgroup.destroyEach();
    
      //deathso.play();
    
  }
  if (bombgroup.isTouching(bird)){
    
      score=score-5;
      
      pillarGroup.destroyEach();
    
      bombgroup.destroyEach();

      heartgroup.destroyEach();
    
     // bombso.play();
    
  }
  if (heartgroup.isTouching(bird)){
    
      score=score+10;
    
      heartgroup.destroyEach();

      pillarGroup.destroyEach();
    
      bombgroup.destroyEach();
    
  }
    if(bird.y>625||bird.y<=-25){
      
       score=0;
      
   }
 }
  if(score<=0){
    
      bird.destroy();
    
      heartgroup.destroyEach();
    
      pillarGroup.destroyEach();
     
      bombgroup.destroyEach();
    
      textSize(25);
     
      text("Game Over!",camera.position.x,camera.position.y);
      text("Press Space to restart!",camera.position.x,camera.position.y+50);

  }
        
      textSize(20);
      text("life:-"+score,camera.position.x+200,camera.position.y-200);

  if (keyDown("space")&&score<=0){
    
      gamestate=start;
    
      bird=createSprite(200,300,10,10);
      bird.addImage(birdImage);
      bird.scale=0.1; 

      frameCount=0;

        
      score=10;
            
  }
 
    
        drawSprites();
  
}

function spawnpillar(){
  
  var rand=Math.round(random(1,2));
  
  if(bird.position.x%100===0){
     if(rand===1){
        pillar = createSprite(bird.position.x+620,290,20,20);
      
        pillar.addImage("pilani",pillar1image);
  
        pillar.scale=6;
   
        pillar.velocityX=0;
      
        pillar.lifetime=200;
      
        pillarGroup.add(pillar); 
    
        pillar.setCollider("rectangle",2,- 12,32,65) ;
       
       
    }
    if(rand===2){
      
        pillar1 = createSprite(bird.position.x+620,500,20,20);
      
        pillar1.addImage("pil2ani",pillar2image);
      
        pillar1.scale=6
      
        pillar1.velocityX=0;
      
        pillar1.lifetime=200;
      
        pillarGroup.add(pillar1);
      
        pillar1.setCollider("rectangle",2,- 15,32,70) ;
       
         

      
  }
 } 
}
function bombspawn(){
  
     var rand=Math.round(random(1,2));
  
     if (bird.position.x%330===0){
         if(rand===1){
           
            bomb=createSprite(bird.position.x+620,0,20,20);
    
            bomb.addAnimation("bombani",bombanimation);
     
            bomb.y=Math.round(random(100,500));
     
            bomb.velocityX=0;
    
            bomb.scale=2;
           
            bomb.lifetime=200;
    
            bomb.setCollider("circle",-7,10,17);
            

            bombgroup.add(bomb);
           
    }
     if (rand===2){
       
         lazer=createSprite(bird.position.x+620,0,20,20);
       
         lazer.addImage("lazerani",lazerimage);
      
         lazer.y=Math.round(random(100,500));      
      
         lazer1=createSprite(bird.position.x+600,0,20,20);   
         
         lazer1.addImage("lazerani1",lazerimage);
        
         lazer1.y=lazer.y-60;
        
         lazer1.x=lazer.x+30;
         
         lazer.velocityX=0;
        
         lazer1.velocityX=0;
        
         lazer.lifetime=200;
        
         lazer1.lifetime=200;
        
         lazer.setCollider("rectangle",0,-4,85,10);
        
         lazer1.setCollider("rectangle",0,-4,85,10);
         lazer.scale=1

       

        bombgroup.add(lazer);
        bombgroup.add(lazer1);
      
  }
 }
}

function spawnheart(){
  
    if (bird.position.x%750===0){
        heart=createSprite(bird.position.x+620,600,20,20);
       
        heart.addImage("heartani",heartImage);
        
        heart.y=Math.round(random(500,100));
        
        heart.velocityX=0;
    
        heart.scale=0.5;
    
        heart.lifetime=200;
    
        heart.setCollider("circle",0,0,40)
    
        heartgroup.add(heart);
    
  }
}

//306 line of code!! my best game till date(6/6/2021)....