const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var ground, ground1, ground2, platform;
var ball, chain;
var stick1, stick2;
var bg;

function preload (){
bg = loadImage ("bg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;       

    ground = new Ground(600,380,1200,20);
    ground1 = new Ground(564,189,200,20);
    ground2 = new Ground(1006,250,200,20);
    platform = new Ground(150, 355, 300, 70);

    box1 = new Box(521,140,70,70);
    box2 = new Box(614,138,70,70);
    box3 = new Box(565,60,70,70);

    box4 = new Box(954,198,70,70);
    box5 = new Box(1044,198,70,70);
    box6 = new Box(996,127,70,70);

    box7 = new Box(724,335,70,70);
    box8 = new Box(724,335,70,70);
    box9 = new Box(810,320,70,70);
    box10 = new Box(810,320,70,70);

    ball = new Bird(100,200);

    chain = new SlingShot(ball.body,{x: 200, y:147});         
}

function draw(){

    background(bg);
    fill ("white");
    text("Shoot the box at the boxes to make them fall!!", 550, 20);
 
    Engine.update(engine);

    ground.display();
    ground1.display();
    ground2.display();
    platform.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ball.display();
   
    chain.display();    

}

function mouseDragged() {

 Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
    
}             

function mouseReleased() {
chain.fly();

} 

function keyPressed(){
    if (keyCode === 32){
        chain.attach(ball.body);
    }
    }