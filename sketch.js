var wall,thickness;
var bullet,speed,weight;

speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1200,200,thickness,height/2);
 wall.velocityX = speed;

  bullet  = createSprite(100,50,10,10);

}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet,wall))
  {bullet.velocityX = 0;
    var damage = 0.5 *weight * speed * speed/(thickness * thickness * thickness);
  
    if(damage>10) 
    {
      wall.shapeColor = color(255,0,0);
    }
  
    if(damage<10)
    {
       wall.shapeColor = color(0,255,0);
    }  }

   hasCollided();

  drawSprites();
}

function hasCollided(lbullet, lwall)
{
   bulletRightEdge = lbullet.x +lbullet.width;
   wallLeftEdge = lwall.x;
   
  if(bulletRightEdge>=wallLeftEdge)
   { 
     return true
   }

   return false;

}