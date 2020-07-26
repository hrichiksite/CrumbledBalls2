
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

function preload(){
	ballImg= loadImage("sprites/paper.png");
	binImg= loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	paperObject.image = loadImage("sprites/paper.png");
	//Create a Ground
	groundObject=new ground(width/2,670,width,20);



	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("white");

  dustbinObj.display();
  paperObject.display();
    image(binImg, 1100, 500, 200, 170);
  
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:35,y:-35});
    
  	}
}





