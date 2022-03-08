const buttonStart = document.getElementById("button-start");
const sectionQuestions = document.getElementById("section-questions");
const sectionLanding = document.getElementById("section-landing");
const sectionTimer = document.getElementById("section-timer");

const spanTime = document.getElementById("span-time");

let timerId = null
let timeRemaining = 5;
spanTime.textContent = timeRemaining;

// When user click on start button
buttonStart.addEventListener('click',function(event){
    
// show questions section
sectionQuestions.classList.remove('hide')

// hide landing page 
sectionLanding.classList.add('hide')
// Start timer
startTimer();
})


// TIMER
// update the span time for everysecond
function startTimer() {
    // show section- timer
    sectionTimer.classList.remove('hide');
    // run update
    timerId = setInterval(function() {
        timeRemaining = timeRemaining - 1
        spanTime.textContent = timeRemaining

        // if time remaining is less than 0 seconds end the game
        if(timeRemaining <= 0){
        // End the game
        endGame();
        }
    
        

    }, 1000);

}


// Questions

// When Click on choice

// Should move onto next question

// What if user clicks on correct choice
// gives feed back its correct choice


// What if user clicks on Wrong choice
// gives feed back its wrong choice
// redcue the time ny 10 seconds

// When the user clicks on the  questions the end Game screen comes up

// What if user timer expires
// End the game 

function endGame(){
// 1. Timer should stop
clearInterval(timerId)
}

// End Game Screen
// 1. Timer should stop
// 2. Show end game screen
// 3.Show high Scores in teh end game screen
// High score  - highest time remaining 




// END GAME SCREEN
// 1. User can type in the input box

// 2. User can click the enter button on input box

// 3. User can click on submit
// Submit
// Submitting ----- Adds the User initials and high Csore to local storage

// After Submitting, redirect the user tot eh high score page


// HIGH SCORE SCREEN

// 1. Click PLay again button
// redirect the user tot eh landing page 

// 2. Click on Clear Button
// Clears the local storage
// clears the dom

