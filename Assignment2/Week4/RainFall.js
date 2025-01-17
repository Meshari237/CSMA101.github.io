


let snowflakes = [];

function setup() {
  createCanvas(600, 600);
  fill(240);
  noStroke();
}

function draw() {
  background(100);
  let t = frameCount / 120; 

  
  for (let i = 0; i < random(50); i++) {
    snowflakes.push(new snowflake()); 
  }

 
  for (let flake of snowflakes) {
    flake.update(t);
    flake.display(); 
  }
}


function snowflake() {
  
  this.posX = 20;
  this.posY = random(-200, 100);
  this.initialangle = random(0, 2 * PI);
  this.size = random(10, 5);

 
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    
    let w = 0.6; 
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    
    this.posY += pow(this.size, 0.5);

   
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1)
    }
  }

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  }
}
