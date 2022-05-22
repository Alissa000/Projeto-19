var alien;
var edges;
var pessoa;
var END =0;
var cidade;
var PLAY =1;
var gameState = PLAY;
var distance=0;


function preload(){
  alienImg = loadImage("alien01.webp");
  pessoaImg = loadImage("pessoa.png");
  cidadeImg = loadImage("cidade01.jpg");
}

function setup() {
  createCanvas(400,400);
  background(51);

  cidade=createSprite(200,200);
  cidade.addImage(cidadeImg);
  cidade.velocityY = -5;
  cidade.scale=2;


  alien  = createSprite(70,150);
  alien.addImage(alienImg);
  alien.scale=0.10;
  alien.velocityX = -5;
  alien.velocityY = -5;

  //pessoa  = createSprite(random(50,350),random(50,350));
  pessoa  = createSprite(200,50);
  pessoa.addImage(pessoaImg);
  pessoa.scale=0.06;

  //cidade=createSprite(400,400);
  //cidade.addImage(cidadeImg);
  //cidade.velocityY = -5;

}

function draw() 
{
  background("black");
  edges = createEdgeSprites();
  drawSprites();

  //cidade=createSprite(200,200);
  //cidade.addImage(cidadeImg);
  //cidade.velocityY = -5;

  alien.y = World.mouseY;
  alien.x = World.mouseX;
  alien .collide(edges);

  if(gameState===PLAY){
    
    distance = distance + Math.round(getFrameRate()/50);
    cidade.velocityY = (3 + 2*distance/150);

    pessoa.velocityY = (3 + 2*distance/150);
   
    alien.y = World.mouseY;
    alien.x = World.mouseX;
   
    edges= createEdgeSprites();
    alien .collide(edges);
   
   if(cidade.y > 400 ){
     cidade.y = length/2;
   }
   if(pessoa.y > 400){
    gameState = END;
   
   //cidade.velocityY = 0
   
   }

  }else if (gameState === END) {
  
    //gameOver.visible = true;
  
    textSize(40);
    fill("yellow");
    text("GAME OVER!", 50,100);
    


  
    cidade.velocityY = 0;
    alien.destroy();
  }

  //alien.bounceOff(edges);

  if(alien.isTouching(pessoa)){
    //gameState = END;
    alien.velocityY = 0;
    //alien.velocityX = 0;
    pessoa.destroy();
    resetPessoa();
    //pessoa.visible = false;
   // pessoa  = createSprite(random(50,350),random(50,350));
    //pessoa.addImage(pessoaImg);
    //pessoa.scale=0.09;
  }
}

function resetPessoa() {
    pessoa  = createSprite(random(50,350),random(50,350));
    pessoa.addImage(pessoaImg);
    pessoa.scale=0.06;
  //gameState = END;
  //pessoa.destroyEach();
} 
