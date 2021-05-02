const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var bin1,bin2,bin3;
var bg;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball = new Paper();
	

	ground = Bodies.rectangle(width/2,600,800,20,{isStatic: true});
	World.add(world,ground);

	bin1 = new Dustbin(700,585,140,20);
	bin2 = new Dustbin(640,540,20,80);
	bin3 = new Dustbin(760,540,20,80);

	Engine.run(engine);
	
}


function draw() {
	rectMode(CENTER);
	background(0);

	
	ball.display();
	
	fill(255);
	rect(ground.position.x,ground.position.y,800,20);

	bin1.display();
	bin2.display();
	bin3.display();

	drawSprites();

	if(keyDown(UP_ARROW) && ball.body.position.y>570) {
		Body.applyForce(ball.body,ball.body.position,{x:60,y:-60})
	}

	Engine.update(engine);
}
