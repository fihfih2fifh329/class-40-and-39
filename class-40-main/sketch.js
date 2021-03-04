var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;



function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();//creates teh object of the game class
  game.getState();//give us zero value when we start the game 
  // start function is called
  game.start();
}


function draw(){
  //if 4 players heve logged in 
  //change the game state to 1
  if(playerCount === 4){
    game.update(1);
  }
  //if gameSTATE REACHES TO 1 THEN PLAYERS WILL PLAY THE GAME 
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
