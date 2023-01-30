
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var block1, block2, plane;
var rotator1, rotator2, rotator3;
var p1, p2, p3, p4, p6;
var angle1 = 60
var angle2 = 80
var angle3 = 90

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;
	
	var plane_options={
		isStatic: true
	}
	  var particle_options={
		restitution:0.4,
		friction:0.02
	  }
	  

	//Crie os Corpos aqui.
	block1 = Bodies.rectangle(30,300,70,30,plane_options);
	World.add(world,block1);
	fill("red");

	block2 = Bodies.rectangle(440,300,70,30,plane_options);
	World.add(world,block2);

	rotator1 = Bodies.rectangle(250,200,150,20,plane_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(250,200,150,20,plane_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(250,200,150,20,plane_options);
	World.add(world,rotator3);

	plane = Bodies.rectangle(0,480,2000,20,plane_options);
	World.add(world,plane);

	p1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,p1);
	p2 = Bodies.circle(220,10,10,particle_options);
	World.add(world,p2);
	p3 = Bodies.circle(220,10,10,particle_options);
	World.add(world,p3);
	p4 = Bodies.circle(220,10,10,particle_options);
	World.add(world,p4);
	p6 = Bodies.circle(220,10,10,particle_options);
	World.add(world,p6);


	Engine.run(engine);
	
	
	
}


function draw() {

  rectMode(CENTER);
  background("lightgreen");
  Engine.update(engine);


  ellipse(p1.position.x,p1.position.y,10);
  ellipse(p2.position.x,p2.position.y,10);
  ellipse(p3.position.x,p3.position.y,10);
  ellipse(p4.position.x,p4.position.y,10);
  ellipse(p6.position.x,p6.position.y,10);

  Matter.Body.rotate(rotator1,angle1)
	push();
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 +=0.2;

	Matter.Body.rotate(rotator2,angle2)
	push();
	translate(rotator2.position.x,rotator2.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle1 +=0.2;

	Matter.Body.rotate(rotator3,angle3)
	push();
	translate(rotator3.position.x,rotator3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle1 +=0.2;

}



