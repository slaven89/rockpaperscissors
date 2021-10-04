
    console.log("the js is working");
    <script>
    let playerWinCount = 0;
    let computerWinCount = 0;
    let gameCount = 0;
    let playerMove = "rock";
    let computerMove = "rock";
    let play = ["rock", "paper", "scissors"]; //array for potential computer moves
[lbl] gameStart;
function computerPlay(play){
  let computerMove = play[Math.floor(Math.random() * play.length)];
  console.log(computerMove); //chooses at random between rock, paper and scissors and stores it in "computermove" before logging in the console
};
[lbl] playerStart;
function playerPlay(){
  let playerMove = window.prompt("Rock, paper or scissors?");
  console.log(prompt("Rock, Paper or Scissors?"));
  let playerMove = playerMove.toLowerCase; //set answer from prompt to lowercase
  if (playerMove !== "rock" || "paper" || "scissors"){
      console.log("you need to choose 'rock', 'paper' or 'scissors'.")
      goto playerStart;} //if player doesn't choose rock, paper or scissors, the code runs again at line 16 where the label is.
  else {
      console.log(playermove)
  }
  };
function game (playerMove, computerMove) {
  gameCount++;
  switch(playermove, computermove){
      case playermove === computermove:
          return "Draw"
          break;
      case playermove = "rock" && computermove = "scissors":
      case playermove = "scissors" && computermove = "paper":
      case playermove = "paper" && computermove = "rock":
          return "Player Wins"
          playerWinCount++
          break;
      default:
          return "Computer Wins"
          computerWinCount++
          break;
  } //scenarios where either it can be a draw, player can win, or the computer wins.
}
game (playerMove, computerMove);
if gameCount <= 5 {
  
}
else if playerWinCount = computerWinCount{
      console.log("Final Result: Draw.");
  }
else if playerWinCount > computerWinCount {
  console.log("Final Result: Player Wins.");
}
else {
  console.log("Final Result: Computer Wins.")
}
}
</script>