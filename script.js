console.log("Hello from Project...");

let userScore=0;
let compScore=0;

let choices =document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user");
let compScorePara=document.querySelector("#comp");


const genCompChoice=()=>
{
    let option= ["rock","paper","scissors"];
    let ind=Math.floor(Math.random()*3);
    return option[ind];
}

const gameDraw=()=>{
    console.log("Game is draw");
    msg.innerText="Game Draw Play Again!";
    msg.style.backgroundColor="#100034";
    msg.style.color="white";


}

const showWinner=(userwin,userId,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;

        console.log("User is win the match");
        msg.innerText=`Your ${userId} beats ${compChoice} You win!`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("comp winning the match");
        msg.innerText=`${compChoice} beats Your ${userId} You loose!`;
       msg.style.backgroundColor="red";
    }
}


const playgame=(userId)=>{
    console.log("user click ",userId);
    let compChoice=genCompChoice();
    console.log("compt choice is",compChoice);

    if(userId===compChoice)
    {
        //Game draw
        gameDraw();
    }
    else{
        let userwin=true;
        if(userId==="rock"){
            //comp -> scior,paper
            userwin = compChoice==="paper"?false:true;
        }
        else if(userId==="paper")
        {
            // comp -> rock,scior
            userwin = compChoice==="rock"?true:false;
        }
        else if(userId==="scissors"){
            // comp -> paper,rock
            
            userwin = compChoice==="paper"?true:false;
        }
        showWinner(userwin,userId,compChoice);
    }

}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click',(e)=>{

        let userId= choice.getAttribute("id");
     
        playgame(userId);
       
    })
})


