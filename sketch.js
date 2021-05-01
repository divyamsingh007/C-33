const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow = [];

function preload() {
  bgImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1200, 650);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  snowFall();
  drawSprites();
}

function snowFall(){
  if (frameCount % 40 === 0) {
    snow.push(new Snowfall(random(0, width), 0));
  }
  for (var k = 0; k < snow.length; k++) {
    snow[k].display();
  }
  if (frameCount % 40 === 0) {
    snow.push(new Snowfall(random(0, width), 0));
  }
  for (var k = 0; k < snow.length; k++) {
    snow[k].display();
  }
  if (frameCount % 40 === 0) {
    snow.push(new Snowfall(random(0, width), 0));
  }
  for (var k = 0; k < snow.length; k++) {
    snow[k].display();
  }
  if (frameCount % 40 === 0) {
    snow.push(new Snowfall(random(0, width), 0));
  }
  for (var k = 0; k < snow.length; k++) {
    snow[k].display();
  }
}
