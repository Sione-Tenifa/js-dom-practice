var p1Button = document.querySelector("#p1")
var p2Button = document.getElementById("p2")
var p1Score = 0;
var p2Score = 0;
var winningScore = document.getElementById("winningScore").value; 

function myFunction(){
  var finalScore = document.getElementById("winningScore").value; 
  winningScore = finalScore
  console.log(finalScore)

}
function winner(){
  if(p1Score == winningScore){
    document.getElementById("score1").style.color = "green";
    // alert("Player 1 wins")
    // newgame()
  }else if (p2Score == winningScore){
    document.getElementById("score2").style.color = "green";
    // alert("Player 2 wins")   
    // newgame()
  }
}



p1Button.addEventListener("click", function(){
  score1()
}) 

p2Button.addEventListener("click", function(){
  score2()
})
  
reset.addEventListener("click", function(){
  newgame()
})

function score1(){
    if( p1Score < winningScore && p2Score !== winningScore ){
      p1Score++
      document.getElementById("score1").innerHTML = p1Score
      console.log(p1Score) 
      winner()
    }
}
  

function score2(){
  if( p2Score < winningScore && p1Score !== winningScore ){
    p2Score++
    document.getElementById("score2").innerHTML = p2Score
    console.log(p2Score) 
    winner()
  }
}

function newgame(){
  p1Score = 0;
  p2Score = 0;
  document.getElementById("score1").innerHTML = p1Score
  document.getElementById("score2").innerHTML = p2Score
  document.getElementById("score1").style.color = "black"
  document.getElementById("score2").style.color = "black";
}
  






