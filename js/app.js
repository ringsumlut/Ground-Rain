var yposition = 0;
var xposition = 50;


class RainDrop {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
        this.speed = 2 + Math.random() * 10;
    }

    update() {
        this.y = this.y + this.speed;
        fill(this.color);
        circle (this.x, this.y, this.radius);
    }
}

var groundx = 0;
var groundy = 400;
var groundWidth = 500;
var groundHeight = 50;
var c;

function setup() {
    createCanvas(500,400);
    frameRate(70);
    c = 90;
    d = 200;
    e = 250;
}

function draw() {
  
    background(34,32,79);
   
    rect(groundx, groundy, groundWidth, groundHeight);
    rainFall(c, d, e);
    if(frameCount % 450 == 0){
        if(groundy != 0){
            groundHeight = groundHeight + 50;
            groundy = groundy - 50;
            c-=4.5;
            d-=10;
            e-=12.5;
        }
       
        
    }
}

rainFall = (r, g, b) =>{
    yposition++;

    noStroke();
    fill(r, g, b);

    triangle(xposition-10,yposition,xposition+10,yposition,xposition,yposition-40)
    ellipse(xposition,yposition,20,20);
    
    yposition = yposition + 8;
    
    if (yposition > 450){
    yposition = 0;
    xposition = random(400);
    } 

}