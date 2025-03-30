const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,bg1,pl1,bg2;
var rick,rt;


function preload(){
  bg1=loadImage("assets/google.jpg");
  pl1=loadImage("assets/play.webp");
  bg2=loadImage("assets/bg2.jpg");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
 
  engine = Engine.create();
  world = engine.world;

  

  var play = createButton("Give me my GIFT");
  play.size(250,50);
  play.style('background-color', 'cyan');
  play.style('border', '2px solid black'); 
  play.style('border-radius', '10px');
  play.style('font-size', '20px');
  play.style('color', 'black');
  play.style('font-family', 'Comic Sans MS');
  play.style('font-weight', 'bold');
  play.style('cursor', 'pointer');
  play.style('text-align', 'center');
  play.style('padding', '10px');
  play.style('box-shadow', '2px 2px 5px rgba(0, 0, 0, 0.5)');
  play.style('text-decoration', 'none');  
  play.style('transition', 'background-color 0.3s ease');
  play.mouseOver(function() {
    play.style('background-color', 'darkcyan');
  });
  play.mouseOut(function() {
    play.style('background-color', 'cyan');
  });
  
  play.position(windowWidth/2-150,windowHeight/2);
   
  play.mousePressed(rickrolled);
  
  
}

function draw() {
  background(bg1);

 
  fill("White");
  textAlign("center");
  textFont("Comic Sans MS");
  textSize(40);
  text("I wanted to give you a gift....", windowWidth/2,windowHeight/5);
  text("hope you like it :)", windowWidth/2,windowHeight/5 +50);

  textSize(20);
  text("It will sound better on high volume (i promise it's nothing scary)", windowWidth/2 ,windowHeight-150);
  
  text("@harnamansingh/@MrRealHecker",windowWidth-180,windowHeight-50);
  text("Click the button above to get your gift!", windowWidth/2,windowHeight/2 + 100);
  textSize(15);
  Engine.update(engine);

 
 drawSprites();
  preload();
  
}


function rickrolled() {

  background(bg2);

 rick=createVideo("assets/Rickroll.mp4");
  rick.size(500,500);
  rick.position(windowWidth/3,windowHeight/5);
  rick.loop();
  
  fill("White");
  textAlign("center");
  textFont("Comic Sans MS");
  textSize(60);
  text("get rickrolled!!! hahahaahaha!!!", windowWidth/2,windowHeight/5);
  
 
  
  play.visible=false;
}
