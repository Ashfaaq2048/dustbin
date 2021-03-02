
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperob,paperobimg;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	//paperob = new Paper(800,350,50,50);
    paperob = createSprite(800,350,50,50);
	paperob.addImage(paperobimg);
	paperob.scale = 0.5;
	

	Engine.run(engine);
  
}


function preload(){
   paperobimg = loadImage('paper.png');

}

function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  paperob.x= mouseX;
  paperob.y= mouseY;

  groundObject.display();
  dustbinObj.display();
  paperob.display();

}

