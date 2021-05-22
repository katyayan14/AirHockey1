var canvas, backgroundImage;

var gameState = 0;
var database;
var s;
var playerCount;
var form, player,p1, p2, str,game;
var info;
var p;
var table,p1img,p2img,strImg;
var position,posi;

function preload(){
  p1img=loadImage("../images/red.png")
  p2img=loadImage("../images/blue.png")
  table=loadImage("../images/backgroundImg.jpg")
  strImg = loadImage("../images/striker.png")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
   //start the game
   background(200, 200, 255);

if(playerCount ===2)
{
  game.update(1);

}
if(gameState===1)
{
  clear();
  game.play();
  var pos = database.ref('players/player');
  pos.on("value", game.readPosition);
  var pos1 = database.ref('players/player');
  pos1.on("value", game.readPos);
}

}
 
  
