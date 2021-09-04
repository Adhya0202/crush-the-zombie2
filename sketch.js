const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite; 
stones = [];


function preload(){
  rock = loadImage("./assets/stone.png")
  zombieImg = loadImage("./assets/zombie.png")
  backgroundImg = loadImage("./assets/background.png")
  wood = loadImage("./assets/wood.png")
  axe = loadImage("./assets/axe.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world; 
  
  
  frameRate(80);
  base = new Base (689,windowHeight,windowWidth+10,20);
  leftW = new Base (15,windowHeight-400,150,100);
  joinPoint = new Base (windowWidth-30,windowHeight-400,150,100);
  zombie = createSprite(width-1000,height-50);
  zombie.addImage(zombieImg)
  zombie.scale = 0.1
bridge = new Bridge(29,{x:15,y:windowHeight-400});

 Matter.Composite.add(bridge.body,joinPoint); 
  jointLink= new Link(bridge,joinPoint);

  for(var i = 0; i <= 8; i++){
    var x = random(width/2 - 300 , width/2 + 300 );
    var y  = 10;
    var stone = new Stone(x,y,80,80);
    
    stones.push(stone);
   
  
    }
    breakButton = createButton("hi")
    breakButton.position(width-200,height/2-50)
    breakButton.class("breakButton")
   breakButton.size(50,50)
    breakButton.mousePressed(handleButtonPress)
   
}

function draw() {
  
  background(backgroundImg);
  
  //image(backgroundImg,0,0,windowWidth, windowHeight);
  Engine.update(engine);
 
  for(var stone of stones)
  stone.display();
 base.show();
  leftW.show();
  joinPoint.show();
 
  bridge.show();
  
  drawSprites();
}
function handleButtonPress(){
  jointLink.detach();
  setTimeout(() => {
    bridge.break();
  }, 1500)
console.log("hello")
  }
  
  