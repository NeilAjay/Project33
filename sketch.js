const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowImage, snowFlake1, snowFlake2;

function preload(){
  snowImage = loadImage("snow3.jpg");

  snowFlake1 = loadAnimation("snow4.webp");
  snowFlake2 = loadAnimation("snow5.webp");
}
function setup() {
  createCanvas(800,400);

snowFlake1 = createSprite(300, 200, 40, 40);
snowFlake1.addAnimation(snowFlake1);

}

function draw() {
  background(snowImage); 
  Engine.update(engine)
  
  snowFlake1.display();
  snowFlake2.display();

  drawSprites();
}