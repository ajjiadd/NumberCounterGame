(function(){
    //select for Display---
const p1ScoreDisplay = document.getElementById('p1');
const p2ScoreDisplay = document.getElementById('p2');
const plyinToDisplay = document.querySelector('p span');
const p1btn = document.getElementById('btnI');
const p2btn = document.getElementById('btnii');
const resetBtn = document.getElementById('btnReset');
const inputScore = document.getElementById('inpt');


//select for data
let p1 = 0;
let p2 = 0;
let winningScore = 5;
let gameOver = false;

//input-value
inputScore.addEventListener('change', () =>{
    // console.log(typeof inputScore.value);
    winningScore = Number(inputScore.value);
    plyinToDisplay.textContent = winningScore;
    inputScore.value = '';
    //reset function call
    reset();
});

//Player-1 button
p1btn.addEventListener('click', () => {
   
    if(!gameOver){
        p1++;

        //function-call
        winning(p1, winningScore);
    }

    //display data
    p1ScoreDisplay.textContent = p1;

});

//Player-2 button
p2btn.addEventListener('click', () => {

    if(!gameOver){
        p2++;

        //function-call
        winning(p2, winningScore);
    }
    //display data
    p2ScoreDisplay.textContent = p2;
});

//function for winning condition---
function winning(oldScore, winningScore){
    if(oldScore == winningScore){
        gameOver = true;

        //disable button
        // p1btn.setAttribute('disabled', 'disabled');
        // p2btn.setAttribute('disabled', 'disabled');

        //add color effect
        if(p1 == winningScore){
            p1ScoreDisplay.classList.add('winnig-color');
            p2btn.classList.add('btn-clr');
        }else{
            p2ScoreDisplay.classList.add('winnig-color');
            p1btn.classList.add('btn-clr');
        }
        
    }

}

//reset function
function reset(){
    p1 = 0;
    p2 = 0;
    gameOver = false;
    p1ScoreDisplay.textContent = p1;
    p2ScoreDisplay.textContent = p2;
    //remove-btn-Attribute
    p1btn.removeAttribute('disabled');
    p2btn.removeAttribute('disabled');
    //remove-winnig color
    p1ScoreDisplay.classList.remove('winnig-color');
    p2ScoreDisplay.classList.remove('winnig-color');
    //remove-btn color
    p1btn.classList.remove('btn-clr');
    p2btn.classList.remove('btn-clr');
}

//reset Button
resetBtn.addEventListener('click', reset); 
})();

