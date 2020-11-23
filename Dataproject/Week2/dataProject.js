var img;
var table;
var sound;
var states = [];
var ready;
function preload(){
    
    img = loadImage("Data/map7.png");
    table = loadTable("Assets/Cases.csv");
    
    sound = loadSound("Sound/Test.mp3");
 
    
}

function setup(){
    createCanvas(img.width, img.height);
    colorMode(HSB, 200, 100, 150);
    
    var cases = [];
    var mappedSize = [];
    
    for(var i = 0; i < table.getRowCount(); i++){
        states[i] = new States(table, i);
        cases[i] = states[i].cases;
    }
    
    for(var i = 0; i < table.getRowCount(); i++){
        mappedSize[i] = map(states[i].cases, min(cases), max(cases), 7, 70);
        states[i].sz = mappedSize[i];
    }
}

function draw(){
    background(img);
    
    for(var i = 0; i < table.getRowCount(); i++){
        states[i].displayState();
        states[i].mouseHovered();
    }
}

function States(table, index){
    this.table = table;
    this.name = table.getString(index, 0);
    this.x = table.getNum(index, 1);
    this.y = table.getNum(index, 2);
    this.cases = table.getNum(index, 3);
    this.hu = (250);
    this.sz = 50;
    
    //show number of cases via ellipses
    this.displayState = function(){
        noStroke();
        fill(250, 70, 70);
        ellipse(this.x, this.y, this.sz, this.sz);
        
        //display state name at lat + lon
        noStroke();
        fill(100, 10, 10);
        textSize(20);
        textStyle();
        text(this.name, this.x + this.sz/2, this.y+10);
    }
    //rollover effect
    this.mouseHovered = function(){
     if(dist(mouseX, mouseY, this.x, this.y)<=this.sz/2){
         this.showInfo();
     }   
    }
    
    this.showInfo = function(){
        fill(this.hu, 70, 70, 20);
        ellipse(this.x, this.y, 200);
        fill(0);
        textSize(20);
        text(this.name + "\n" + "number of cases: " + "\n" + this.cases, this.x - 50, this.y - 25);
    }
    
}

function mousePressed(){
    sound.play();
    ready= true;
}

function keyPressed(){
    if(key == 'p'){
        sound.pause;
    }
}