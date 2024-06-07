let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const msgContainer=document.querySelector(".msg-container");
const userScorePara=document.querySelector(".user-score");
const compScorePara=document.querySelector(".comp");
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Was Draw.Play Again.";
    //  msg.Style.backgroundColor="black";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        // msg.Style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`; 
        // msg.Style.backgroundColor="red";
    }
}

const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


const playGame=(userChoice)=>{
    console.log("user choice =", userChoice);
   const compChoice=genCompChoice();
   console.log("comp choice =", compChoice);
   if(compChoice==userChoice){
    drawGame();
   }
   else{
    let userWin=true;
    if(userChoice=="rock"){
        // scissor, paper
       userWin=compChoice=="paper"?false:true;
    }
    else if(userChoice=="scissor"){
          //rock, paper
          userWin=compChoice=="rock"?false:true;
     }
     else{
        //rock,scissor
        userWin=compChoice=="scissor"?false:true;
     }
     showWinner(userWin,userChoice,compChoice);
   }
}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        let userChoice=choice.getAttribute("id")
        console.log("choices was clicked",userChoice);
        playGame(userChoice);

        
    })
})