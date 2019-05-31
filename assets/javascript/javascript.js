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
    for (let i = 0; i < chosenWord.length; i++) {
        theWord.push('_');
    }
    wordBox.textContent = showTheWord(theWord);
    guessedLettersBox.textContent = guessed;
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
            }
            if (theWord.indexOf('_') === -1) {
                alert('YOU WIN');
                wins++;
                winsBox.textContent = wins;
                cleanUp();
            }
            if (wrong === 9) {
                alert('YOU LOSE');
                losses++;
                lossesBox.textContent = losses;
                cleanUp();
            }
        }
    }
}

cleanUp();