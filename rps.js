let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore"); //dom variable
const compScore_span = document.getElementById("compScore"); //dom variable
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

//cashing dom = storing something for future use - get elements before making functions

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    return "scissor";
}

function win(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoiceDiv = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats   ${convertToWord(compChoice)}${smallCompWord}. You win!`;
    userChoiceDiv.classList.add('greenGlow');
    setTimeout(() =>  userChoiceDiv.classList.remove('greenGlow'), 300);
}

function lose(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoiceDiv = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to   ${convertToWord(compChoice)}${smallCompWord}. You lose!`;
    userChoiceDiv.classList.add('redGlow');
    setTimeout(() => userChoiceDiv.classList.remove('redGlow'), 300);
}

function draw (userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoiceDiv = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals   ${convertToWord(compChoice)}${smallCompWord}. It's a draw`;
    userChoiceDiv.classList.add('greyGlow');
    setTimeout(() => userChoiceDiv.classList.remove('greyGlow'), 300);
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"))
    paper_div.addEventListener('click', () => game("p"))
    scissor_div.addEventListener('click', () => game("s"))
}
main();