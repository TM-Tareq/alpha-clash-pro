// function play() {
//     // step-1: hide the home screen. to hide the screen add the clas hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection);

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('payer pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape') {
        gameOver();
    }

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet =  currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet) {
        console.log('you got a point');
        // console.log('your have pressed correctly', expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // -------------------------
        // update score:
        // 1. get the current score
        // const currentScoreEelement = document.getElementById('current-socre');
        // const currentScoreText = currentScoreEelement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // // 2. increase the score by 1
        const newScore = currentScore + 1;

        // // 3. show the updated score
        // currentScoreEelement.innerText = newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('dhur mia');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0) {
            gameOver();
        }

        // step-1: get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step-2: reduce life count
        // const newLife = currentLife - 1;
        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
    // console.log(event.key);
}


// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);

    // step-2: set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // step-3: set backgroundcolor
    setBackgroundColorById(alphabet);

}

function play() {
    // hide everything show only the playground
    hideElemenetById('home-screen');
    hideElemenetById('final-score')
    showElementById('play-ground');

    // reset score & life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}


function gameOver() {
    hideElemenetById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected highlight
    const currentlAphabet = getElementTextById('current-alphabet');
    // console.log(currentlAphabet);
    removeBackgroundColorById(currentlAphabet);
}