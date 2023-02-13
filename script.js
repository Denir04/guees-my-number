// 1) Determine secret number;
// 2) Let user try guess;
// 2.1) Decrease the score if the user miss;
// 2.2) Show if its the guess was too hight or too low;
// 2.3) Show if the user guess right;
// 3) Register higher score if happens;
// 4) Let user resestar the game by pressing 'Again!';

const limitNumber = 20;
let secretNumber = Math.round(Math.random()*limitNumber);
let score = limitNumber;
let highscore = 0;

const btn_check = document.querySelector('#btn-check');
const btn_again = document.querySelector("#btn-again");
const input_user = document.querySelector("#input-user");
const msg_advice = document.querySelector("#advice");
const hiddenNumber = document.querySelector(".secret-number");
const spanScore = document.querySelector("#score");
const spanHighScore = document.querySelector("#highscore");
const body = document.querySelector('body');


const handleCheckBtn = () => {
    const guess = Number(input_user.value);
    if(guess === secretNumber){
        msg_advice.textContent = "You made it!";
        btn_check.disabled = true;
        body.classList.add("victory-style");
        hiddenNumber.textContent = secretNumber;
        if(score > highscore) {
            highscore = score;
            spanHighScore.textContent = highscore;
        }
    }else{
        if(score > 0) spanScore.textContent = --score;
        guess > secretNumber ? 
            msg_advice.textContent = "Too higher" : 
            msg_advice.textContent = "Too low";
    }
}

const handleAgainBtn = () => {
    secretNumber = Math.round(Math.random()*limitNumber);
    score = limitNumber;
    msg_advice.textContent = "Starting guessing...";
    btn_check.disabled = false;
    body.classList.remove("victory-style");
    hiddenNumber.textContent = "?";
    input_user.value = "";
    spanScore.textContent = score;
}

btn_check.addEventListener('click', handleCheckBtn);

btn_again.addEventListener('click', handleAgainBtn);

input_user.addEventListener('keypress', (e) => {
    if(e.key === "Enter") handleCheckBtn();
    else if(e.key === "r") handleAgainBtn();
})




