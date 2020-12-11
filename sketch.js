var car, wall;
var deformation;
var speed, weight;


function preload(){

}

function setup(){

car = createSprite(100,200,50,50);
wall = createSprite(40000,200,60,height/2);

speed = random(55,90);
weight = random(400,1500);
}

function draw(){
 createCanvas(600,400);
 background(200);

car.velocityX = speed;

if(wall.x-car.x <(car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    car.y = World.mouseY;
    car.x = World.mouseX;

    if(deformation>180){
        car.shapeColor = color(255,0,0);
        car.y = World.mouseY;
        car.x = World.mouseX;
    }

    if(deformation<180 && deformation>100){
        car.shapeColor = color(230,230,0);
        car.y = World.mouseY;
        car.x = World.mouseX;
    }

    if(deformation<100){
        car.shapeColor = color(0,255,0);
        car.y = World.mouseY;
        car.x = World.mouseX; 
    }
    else{
        car.shapeColor = color(0,200,0);
    }
}
     
     drawSprites();
}