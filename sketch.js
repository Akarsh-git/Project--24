
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,box1,box2,box3,paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,20);
	box1 = new Box(600,680,200,20);
	box2 = new Box(600-100,680,15,160);
	box3 = new Box(600+100,680,15,160);
	paper = new Paper(100,100,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  
 
}

function keyPressed()
 {
	  if (keyCode === UP_ARROW) { 
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-45}); 
		}
	 }

