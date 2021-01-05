const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var boxSide1, boxSide2, boxSide3;
var ground;
var paper;
var dustbin;
var world;

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,40);
	ground = new Ground(width/2, 670, width, 20);
	dustbin = new Dustbin(1200, 650);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		width: 1200,
		height: 700,
		wireframes: false
	}
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:-85})
}	
}