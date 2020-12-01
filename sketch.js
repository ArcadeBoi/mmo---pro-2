
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var detective, detective_running, detective_shooting;

var bg, life

var score;

var bullet

var gameOver,restart;
var ground, invisibleGround, groundImage;
var bulletGroup;
var thugGroup;

var PLAY = 1;
var END = 0;
var gameState = PLAY;



function preload()
{
	/*detective_running = loadAnimation("00_det.gif",
	"01_det.gif",
	"02_det.gif",
	"03_det.gif",
	"04_det.gif",
	"05_det.gif",
	"06_det.gif",
	"07_det.gif",
	"08_det.gif",
	"09_det.gif",
	"10_det.gif",
	"11_det.gif",
	"12_det.gif",
	"13_det.gif",
	"14_det.gif",
	"15_det.gif",
	"16_det.gif",
	"17_det.gif",
	"18_det.gif",
	"19_det.gif");*/

}

function setup() {
	createCanvas(displayWidth,200);//
	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.

	detective = createSprite(50,180,20,50);
//	detective.addAnimation("collided",trex_collided);
//	detective.addAnimation("running", detective_running);
	detective.scale = 0.5;
	detective.setCollider("circle",0,0,30);

	ground = createSprite(0,180,displayWidth,20);
    ground.x = ground.width /2;
    ground.velocityX = -8;
  
    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;
	
	bulletGroup = new Group();
	thugGroup = new Group ();

	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);

  camera .position.x = detective.x

  if (ground.x < 0){
	ground.x = ground.width/4;
  }

   //jump when the space key is pressed
 if(keyDown("space") && detective.y > 160 ){
	detective.velocityY = -12 ;
  }
	
	detective.velocityY = detective.velocityY + 0.6

	if(keyDown("s")){
		bulletshoot();
	  }

  background(255);

  detective.collide(invisibleGround);
  spawnThugs();
  drawSprites();
 
}
function bulletshoot(){
	 bullet = createSprite(380,200,10,10);
	 bullet.visible=false;
	if(keyDown( "s")){
	  bullet.velocityX=5 ;
	  bullet.visible=true;
  }
	  bullet.y=detective.y; 
	  bullet.x=detective.x; 
	  bullet .lifetime=170;
	  bulletGroup.add(bullet);
  
  }
  function spawnThugs() {
	if(frameCount % camera.position.x  === 0) {
	  var thug = createSprite(displayWidth,150,40,40);
	  thug.velocityX = -5;
	  
	  /*generate random obstacles
	  var rand = Math.round(random(1,6));
	  switch(rand) {
		case 1: obstacle.addImage(obstacle1);
				break;
		case 2: obstacle.addImage(obstacle2);
				break;
		case 3: obstacle.addImage(obstacle3);
				break;
		case 4: obstacle.addImage(obstacle4);
				break;
		case 5: obstacle.addImage(obstacle5);
				break;
		case 6: obstacle.addImage(obstacle6);
				break;
		default: break;
	  }*/
	  
	  //assign scale and lifetime to the obstacle           
	  thug.scale = 0.5;
	  thug.lifetime = 800;
	  //add each obstacle to the group
	  thugGroup.add(thug);
	}
  }



