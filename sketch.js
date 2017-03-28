var img;
var counter = 0;

function preload(){
    img = loadImage("triangle.png");
}

function setup(){
    createCanvas(600,400);
    background(66, 134, 244);
}

function draw(){
    flower(100,300);
    flower(200,300);
    flower(300,300);
    flower(400,300);
    flower(500,300);
    
    if(mouseIsPressed){
        flower(mouseX,mouseY);
        counter += 1;
    }
    
    //sun
    fill(255, 250, 0);
    ellipse(0,0, 200,200);
    
    //grass
    rect(0,590,10,100);
    
    if(counter > 6){
        image(img, mouseX -25, mouseY - 25, 50, 50);
    }
}

function flower(x , y){
    //stem
    
    
    
    fill(25,150,50);
    rect(x-5,y,10,100);
    
    //petals 
    noStroke();
    fill(255,150,200)
    ellipse(x+10, y-10,35,35);
    ellipse(x+10, y+10,35,35);
    ellipse(x-10, y-10,35,35);
    ellipse(x-10, y+10,35,35);
    
    //bulb
    fill(255,200,0);
    ellipse(x,y,25,25);
}
    