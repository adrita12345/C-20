var a,b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 150);
  a.shapeColor = "green";

  b = createSprite(200, 200, 100, 200);
  b.shapeColor = "green";
}

function draw() {
  background("pink"); 
  a.x = mouseX;
  a.y = mouseY;
console.log(b.y-a.y);
console.log(a.y-b.y);
  if(b.x - a.x < a.width/2 + b.width/2 && a.x - b.x < a.width/2 + b.width/2 &&
    b.y - a.y < a.height/2 + b.height/2 && a.y - b.y < a.height/2 + b.height/2 ){
    a.shapeColor = "red";
    b.shapeColor = "red";

  }else{
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  
  
  drawSprites();
}