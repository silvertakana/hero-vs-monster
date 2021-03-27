const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box = [];
var hero,monster,rope,ground,tw = 5,th=5;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
  for (let i = 0; i < tw; i++) {
    for (let index = 0; index < th; index++) {
      box[index+(i*5)] = new Box(600+(i*70), 100+(index*70), 70, 70);
    }
  }

  

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  for (let index = 0; index < th*tw; index++) {
    box[index].display();
  }
  if(mouseIsPressed){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
  }
 

  hero.display();
  //rope.display();
  monster.display();

}

