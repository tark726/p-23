var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	var r1s = createSprite(width/2, 650, 200, 20 );
	r1s.shapeColor = "red";
	var r2s = createSprite(300, 610, 20, 100 );
	r2s.shapeColor = "red";
	var r2s = createSprite(500, 610, 20, 100 );
	r2s.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;
	var options = {
		
		isStatic: true,
		'restitution':0
		

	}
	packageBody = Bodies.circle(width/2 , 200 , 5 ,options);
	
	World.add(world, packageBody);
	

	
	
r1 = Bodies.rectangle(width/2, 630, 200, 20 , {isStatic:true} );
World.add(world,r1)
r2 = Bodies.rectangle(300, 610, 20, 100 , {isStatic:true} );
World.add(world,r2)
r3 = Bodies.rectangle(300, 610, 20, 100,  {isStatic:true} );
World.add(world,r3)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
Matter.Body.setStatic(packageBody,false)
    
  }
}



