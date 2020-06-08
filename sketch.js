
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plat,ball,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var plat_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

plat = Bodies.rectangle(200,100,250,10,plat_options);
World.add(world,plat);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,150,30,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : plat,
  stiffness: 0.005,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);


}


function draw() {
  background(0); 
  Engine.update(engine);

  fill("white");
  textSize(10);
  text("oscillate the pendulum with space,use mouse to set and press any key to release",5,350);
  text("Press Enter to stop it from oscillating",100,365);

  fill ("red");
rectMode(CENTER);
rect(plat.position.x,plat.position.y,250,10);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("yellow");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30);

strokeWeight(5);
stroke("orange");
line(ball.position.x,ball.position.y,plat.position.x,plat.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;

}

}








