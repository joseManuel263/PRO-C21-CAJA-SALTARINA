var canvas;
var block1,block2,block3,block4,block5;
var ball, edges;
var music;

function preload(){
    // carga aquí el sonido
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,100,30);
    block1.shapeColor = "blue";
    block1.debug = true;

    block2 = createSprite(250,580,100,30);
    block2.shapeColor = "yellow";
    block2.debug = true;

    //crea dos bloques más aquí, tales como block3 y block4

    block3 = createSprite(400,580,100,30);
    block3.shapeColor = "red";
    block3.debug = true;

    block4 = createSprite(550,580,100,30);
    block4.shapeColor = "green";
    block4.debug = true;

    block5 = createSprite(700,580,100,30);
    block5.shapeColor = "orange";
    block5.debug = true;

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(185,63,204);
    ball.setCollider("rectangle",0,0,35.5,35.5);
    ball.debug = true;
    //escribe el código para agregar velocidadX y velocidadY
    ball.velocityX = 2.5;
    ball.velocityY = 5.5;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //escribe el código para rebotar la pelota del block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "yellow";
        //escribe el código para establecer la velocidadX y velocidadY de la pelota como 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //escribe el código para detener la música
        music.stop();
    }

    //escribe el código para rebotar la pelota del block3
    if (areTounchinge(block3,ball)) {
        ball.shapeColor = "red";
        block3.shapeColor = "black";
        ball.velocityX = -2.5;
        ball.velocityY = -7.5;
        music.play();
    }
    
    //escribe el código para rebotar la pelota del block4
    if (areTounchinge(block4,ball) && bounceOffenese(block4, ball)) {
        block4.velocityY = 0;
        music.stop();
      }
    if (areTounchinge(block5,ball) && bounceOffenese(block5, ball)) {
        block5.velocityY = 0;
      }
    drawSprites();
}