
var beast;
var color1;
var color2;
var color3;
var movingTowardsMouse = true;

function setup () {
  createCanvas(400, 200);

  var cStrength1 = random(100, 255);
  var cStrength2 = random(100, 255);
  var tStrength = 150;
  color1 = color(cStrength1, 50, cStrength2, tStrength);
  color2 = color(cStrength2, cStrength1, 50, tStrength);
  color3 = color(50, cStrength2, cStrength1, tStrength);

  beast = {
    x: 0,
    y: height/3,
    size: 50,
    speed: 4,
    color: color(255,255,255),
    message: "filler",
    
    
  }
  
}

function draw () {
  background(255);

  var oneThird = width/3;
  stroke(255, 255, 255, 50);
  fill(color3);
  rect(0, 0, width, height);
  fill(color2);
  rect(0,0, oneThird * 2,height);
  fill(color1);
  rect(0,0, oneThird,height);

  // #4 Update message if chasing or fleeing the mouse
  var goingRight = beast.speed >=1;
  var mouseRight = beast.x < mouseX;
    if( goingRight && mouseRight || !goingRight && !mouseRight ){
    movingTowardsMouse;
    beast.message = "chasing mouse"
    }else{movingTowardsMouse = false;
    beast.message = "fleeing mouse"
 }
  
 // #3 update the beast color to match the background
  
  if (beast.x > 2 * oneThird ){
  fill(color3); 
  }else if (beast.x < oneThird * 2 && beast.x > oneThird){
  fill(color2); 
  }else{
  fill(color1);
}
  ellipse(beast.x, beast.y, beast.size, beast.size);

  // #2 Finish the bouncing beast

  fill(255);
  text(beast.message, 10, 20);
  if(beast.x > width || beast.x < 0)  {
     beast.speed = beast.speed * -1;
  }
  
  beast.x = beast.x + beast.speed;
   
}