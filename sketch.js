const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;

function setup() {
  createCanvas(1200,800);
  engine =Engine.create();
  world = engine.world;
  //stand1 = new Ground (600,610,300,20);
  stand2 = new Ground (900,310,300,20);
  gerund = new Ground(600,780,1200,20);
  //first floor
  box1 = new Box (500,520,30,30);
  box2 = new Box (530,520,30,30);
  box3 = new Box (560,520,30,30);
  box4 = new Box (590,520,30,30);
var circular = Bodies.circle(100,300,40);
World.add(world,circular);
thrower = new SlingShot(circular.body,{x:100 ,y:200})

  
}

function draw() {
  background(0); 
  gerund.display(); 
  //stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  thrower.display();
  drawSprites();
}