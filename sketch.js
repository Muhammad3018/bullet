var wall;

var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed = random(55,90)
  weight = random(400,1500)

  thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255)

  wall = createSprite(1500,200,thickness, height/2)
  wall.shapeColor = color(80,80,80)
}

function hasCollied(bullet, wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true

  }
  
}return false



function draw() {
  background(0)
if(hasCollied(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);

  }

  if(damage>10)
  {
    wall.shapeColor = color(0,255,0);
  }
}

drawSprites();
}

