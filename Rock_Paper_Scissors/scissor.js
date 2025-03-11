let userScore = 0;
let compScore = 0;

const us=document.querySelector("#userScore");
const co=document.querySelector("#compScore");

const choices = document.querySelectorAll(".choice");

const m=document.querySelector("#msg");

const drawGame=()=>
{
    m.innerText="draw, play again!"
    m.style.backgroundColor="blue";
}

const gencompChoice=()=>
{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner=(userWin, userchoice, compChoice)=>
{
    if(userWin)
    {
        m.innerText=`win!!! ${userchoice} beats ${compChoice}`;
        m.style.backgroundColor="green";
        userScore++;
        us.innerText=userScore;
    }
    else
    {

        m.innerText=`lost!!! ${userchoice} beats ${compChoice}`
        m.style.backgroundColor="red";
        compScore++;
        co.innerText=compScore;
        
    }
}

const playGame=(userchoice)=>
{
    console.log("user choice = ", userchoice);
    const compChoice= gencompChoice();
    console.log("comp choice = ", compChoice);

    if(userchoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=false;
        if(userchoice === "rock")
        {
            userWin = compChoice === "scissors";
        }
        else if(userchoice==="paper")
        {
            userWin = compChoice==="rock";
        }
        else if(userchoice==="scissors")
        {
            userScore = compChoice==="paper";
        }
        showWinner(userWin,userchoice, compChoice);
    }
}

choices.forEach((c) =>
{
    c.addEventListener("click",() => 
        {
            let userchoice= c.getAttribute("id");
            playGame(userchoice);
        });
});