var ball, binline1,binine2,binline3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
//const Body = Matter.Body;

//function preload()
//{
	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
   // ball=createSprite(100,610,10,10);

	
    dust = new dustbin(560,600);
	ball = new Ball(70,500,10);
	//slingshot = new SlingShot(ball.body,{x:200, y:550});

	//Create a Ground
	//ground=createSprite(400,655,800,10);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);

 
  background("pink");
  Engine.update(engine);
  /*ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);*/
 

  dust.display();
  ball.display();
 
 // slingshot.display();

  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:9.1,y:-25});
	}
  
  }

/*function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}*/
  
