var possibleWords = ['grip','breathe','blue','tiger','follow','shrill', 'clever', 'structure', 'rainstorm', 'egg', 'sow', 'resolve', 'smite', 'defiant', 'scientific', 'machine', 'play', 'persuade', 'push'];
let guessed = [];
let theWord = [];
let keycodeContainer = [];
let chosenWord;
let wrong = 0;
let wins = 0;
let losses = 0;
let wordBox = document.getElementById('wordBox');
let guessedLettersBox = document.getElementById('guessedLettersBox');
let winsBox = document.getElementById('winsBox');
let lossesBox = document.getElementById('lossesBox');
let snowBody = document.getElementById('body');
let snowHead = document.getElementById('head');
let snowLeftEye = document.getElementById('left');
let snowRightEye = document.getElementById('right');
let snowMouth = document.getElementById('mouth');
let snowNose = document.getElementById('nose');
let snowScarf = document.getElementById('scarf');
let abominable = document.getElementById('abominable');
let snowArm = document.getElementById('arms');
let restart = document.getElementById('restart');

winsBox.textContent = wins;
lossesBox.textContent = losses;


function newWord() {
    let selector = Math.floor(Math.random()*possibleWords.length);
    return possibleWords[selector];
}

function showTheWord(wordArray) {
    let wordToShow = "";
    wordArray.forEach(function(letter) {
        wordToShow = wordToShow + letter;
        }
    )
    return wordToShow;
}

function cleanUp() {
    chosenWord = newWord();
    wrong = 0;
    theWord = [];
    guessed = [];
    keycodeContainer = [];
    for (let i = 0; i < chosenWord.length; i++) {
        theWord.push('_');
    }
    wordBox.textContent = showTheWord(theWord);
    guessedLettersBox.textContent = guessed;
    snowBody.style.visibility = 'hidden';
    snowHead.style.visibility = 'hidden';
    snowArm.style.visibility = 'hidden';
    snowLeftEye.style.visibility = 'hidden';
    snowRightEye.style.visibility = 'hidden';
    snowMouth.style.visibility = 'hidden';
    snowScarf.style.visibility = 'hidden';
    snowNose.style.visibility = 'hidden';
    abominable.style.visibility = 'hidden';
}

function letterCheck(letter) {
    let letterInWord = false;
    for (let i = 0; i < chosenWord.length; i++) {
        if (letter === chosenWord[i]) {
            letterInWord = true;
            theWord[i] = letter;
        };
    }
    return letterInWord;
}

document.onkeyup = function(event) {
    let pressed = event.key;
    let pressedCode = event.keyCode;
    if (pressedCode > 64 && pressedCode < 91) {
        if (keycodeContainer.includes(pressedCode)) {
            alert("You've already guessed this!");
        } else {
            guessed.push(pressed);
            keycodeContainer.push(pressedCode)
            guessedLettersBox.textContent = guessed;
            let checker = letterCheck(pressed);
            wordBox.textContent = showTheWord(theWord);
            if (checker === false) {
                wrong++;
                if (wrong === 1) {
                    snowBody.style.visibility = 'visible';
                } else if(wrong === 2) {
                    snowHead.style.visibility = 'visible';
                } else if(wrong === 3) {
                    snowArm.style.visibility = 'visible';
                } else if(wrong === 4) {
                    snowLeftEye.style.visibility = 'visible';
                } else if(wrong === 5) {
                    snowNose.style.visibility = 'visible';
                } else if(wrong === 6) {
                    snowRightEye.style.visibility = 'visible';
                } else if(wrong === 7) {
                    snowMouth.style.visibility = 'visible';
                } else if(wrong === 8) {
                    snowScarf.style.visibility = 'visible';
                } else if(wrong === 9) {
                    snowBody.style.visibility = 'hidden';
                    snowHead.style.visibility = 'hidden';
                    snowArm.style.visibility = 'hidden';
                    snowLeftEye.style.visibility = 'hidden';
                    snowRightEye.style.visibility = 'hidden';
                    snowMouth.style.visibility = 'hidden';
                    snowScarf.style.visibility = 'hidden';
                    snowNose.style.visibility = 'hidden';
                    abominable.style.visibility = 'visible';
                    losses++;
                    lossesBox.textContent = losses;
                }

            }
            if (theWord.indexOf('_') === -1) {
                alert('YOU WIN');
                wins++;
                winsBox.textContent = wins;
            }
        }
    }
}


window.onload = function() {
    restart.onclick = cleanUp;
}

cleanUp();