let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
const randidx =  Math.floor(Math.random() *3);
return options[randidx];

};
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Was Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText = `You Win ! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText = ` You Lose  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userchoice) => {
    const compchoice = gencompchoice();
    if(userchoice === compchoice) {
        drawGame();

    } else  {
        let userwin = true;
        if(userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
           userwin = compchoice === "scissors"? false : true;
        } else {
         userwin = compchoice === "rock"? false : true
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});