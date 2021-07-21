const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder,thunder1,thunder2,thunder3,thunder4,engine,world,sprite1;
var drops = [];
var maxDrops = 100;
var thunderCreatedFrame = 0;
var state = 1;

function preload(){
    thunder1 = loadImage("images/thunder_1.png");
    thunder2 = loadImage("images/thunder_2.png");
    thunder3 = loadImage("images/thunder_3.png");
    thunder4 = loadImage("images/thunder_4.png");
    cloudImage = loadImage("images/cloud.png");
}

function setup(){
    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;    

    sprite1 = createSprite(0,200,10,10);
    sprite1.velocityX = 1;
    sprite1.visible = false;
    sprite2 = createSprite(0,250,10,10);
    sprite2.velocityX = 0.5;
    sprite2.visible = false;

    umbrella = new Umbrella(200,500);
    
    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }
    
}

function draw(){
    background("black");
    Engine.update(engine);

    var rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),180,10,10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }
    
    spawnClouds();
    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()   
    }

    drawSprites();
} 

function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 35 === 0) {
      var cloud = createSprite(600,20,40,10);
      cloud.y = Math.round(random(20,100));
      cloud.addImage(cloudImage);
      cloud.scale = 3.5;
      cloud.velocityX = random(-4,-2);;
      
       //assign lifetime to the variable
      cloud.lifetime = 350;
    }
    
  }