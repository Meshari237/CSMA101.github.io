


//varibales for ball
var ballX = 8;
var ballY = 9;
var diameter = 50; //for clollision 
var directionX = 6;
var directionY = 5;

//varibles for paddels
var rectX;
var rectY;
var rectW = 100;
var rectH = 25;

//set up paddle position
var started = false;

// score 
var score = 0;


function setup(){
    createCanvas(800, 800);
    
}

function draw(){
    background(0);
    
    // ball bounces off walls
    ballX = ballX + directionX;
    ballY = ballY + directionY;
    
    if(ballX < 0 || ballX > width){
        
        directionX=-directionX;
        
    }
    
    if(ballY < 0 || ballY > height){
        
        directionY =-directionY;    
        
    }
    
    
    //detect collision with paddle 
    if((ballX > rectX && ballX < rectX + rectW) && (ballY + (diameter/2) >=rectY)){
    directionX *= -1;
    directionY *= -1;
          score++;
    }
 
        
         //draw ball and paddle 
    
    ellipse(ballX, ballY, diameter);
    
        rect(rectX, rectY, rectW, rectH);
  

        
        
        //update paddle location on start 
        if(!started){
            
            rectX = width/2;
            rectY = height - 100;
            started = true;
        }
    
    
   fill(0, 255, 255);
  textSize(24);
	text("Score: " + score, 10, 25);


    
    
}   


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rectX -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    rectX += 50;
  }
}