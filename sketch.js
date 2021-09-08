var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
movingrect=createSprite(400,200,80,50);
fixedrect=createSprite(200,200,50,80);
movingrect.shapeColor="green"
fixedrect.shapeColor="green"
movingrect.velocityX=-5
fixedrect.velocityX=5
}

function draw() {
 background(0);  


 if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
 && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2

  ){
   movingrect.velocityX=movingrect.velocityX*(-1);
   fixedrect.velocityX=fixedrect.velocityX*(-1);
  }
  if ( movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2)
  {
    movingrect.velocityY=movingrect.velocityY*(-1);
   fixedrect.velocityY=fixedrect.velocityY*(-1);
  }
  drawSprites();

}