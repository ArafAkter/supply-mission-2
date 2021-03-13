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
	
	var box_options ={
        isStatic: true
    }

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-17.5, width,40);
	groundSprite.shapeColor=color("green")


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, box_options});
	World.add(world, packageBody);

	Engine.run(engine);
   fill("red")

   redzone1 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
   World.add(world, redzone1);
  
}


function draw() {
  rectMode(CENTER);
  background("darkblue");
  
 packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
 




 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, true);	

    
  }
 
}



