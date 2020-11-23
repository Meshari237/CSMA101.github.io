

function setup() {
  createCanvas(600, 600);
 
  

}

function draw() {
  background(250);
  flower(40);
  ground(25);

}

function ground() {
  
  fill(20, 45, 70, 125);
  rect(20, 50, 100, 80);
}


function flower() {

  
  
  for (var i = 0; i < 200; i++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(400, 550, 400, 400 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(400, 550, 400, 460);
    }
    noStroke();
  }

  push();
  fill(230, 190, 230, 240);
  translate(400, 400);
  noStroke();
  
  for (var ii = 0; ii < 10; ii++) {
    if (frameCount <= 500) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 500) {
      ellipse(0, 50, 30, 100);
    }
    rotate(PI / 5);
  }
  pop();


  
  for (var r21 = 0; r21 < 10; r21++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(300, 580, 300, 430 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(300, 580, 300, 490);
    }
    noStroke();
  }
  
  push();
  fill(235, 194, 204, 240);
  translate(300, 430);
  noStroke();

  for (var r2 = 0; r2 < 10; r2++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();
  
  
  
   
  
  push();
  fill(245, 204, 174, 240);
  translate(180, 385);
  noStroke();
  for (var r3 = 0; r3 < 10; r3++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();

  
  

  pop();

  
  push();
  fill(245, 174, 184, 240);
  translate(70, 450);
  noStroke();
  for (var r5 = 0; r5 < 10; r5++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();
}

