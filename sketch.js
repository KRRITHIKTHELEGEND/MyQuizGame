var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  daQuiz = new Quiz();
  daQuiz.getState();
  daQuiz.start();
}


function draw(){
  background("orange");
  if(contestantCount === 4){
    daQuiz.update(1);
  }
  if(gameState === 1){
    clear();
    daQuiz.play();
  }
}
