var thunder;
var maxDrops=100;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var drops = []

function preload(){
     thunder=loadImage("Images/1.png");
}

function setup(){
  createCanvas(400,650) 
  background(0,0,0) 
  engine = Engine.create();
  world = engine.world; 
 umbrella=new Umbrella(100,450)
  for(var i=0; i<maxDrops; i++){
 drops.push(new Drop(random(0,500),random(0,500)))
} 
}

function draw(){
  background("white")
  Engine.update(engine)
  umbrella.display();
  for(var i=0;i<drops.length;i=i+1){
    drops[i].showdrops();
  }
  drawSprites();
}   

