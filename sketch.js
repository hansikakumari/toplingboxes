const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(940,300,70,70);

    pig1 = new pig(820,310); 

    log1 = new log(600,280,375,PI/2);


    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    ground.display();
}