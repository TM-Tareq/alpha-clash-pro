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

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet =  currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet) {
        console.log('you got a point');
        // console.log('your have pressed correctly', expectedAlphabet);

        // update score:
        // 1. get the current score
        const currentScoreEelement = document.getElementById('current-socre');
        const currentScoreText = currentScoreEelement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        // 2. increase the score by 1
        const newScore = currentScore + 1;
        // 3. show the updated score
        currentScoreEelement.innerText = newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('dhur mia');
    }
    console.log(event.key);
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
    hideElemenetById('home-screen');
    showElementById('play-ground');
    continueGame();
}