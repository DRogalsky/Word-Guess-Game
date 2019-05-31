var possibleWords = ['grip','breathe','blue','tiger','follow','shrill', 'clever', 'structure', 'rainstorm', 'egg', 'sow', 'resolve', 'smite', 'defiant', 'scientific', 'machine', 'play', 'persuade', 'push'];
let guessed = [];
let theWord = [];
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

    if (guessed.includes(pressed)) {
        alert("You've already guessed this!");
    } else {
        guessed.push(pressed);
        let checker = letterCheck(pressed);
        if (checker === false) {
            wrong++;
        }
        if (theWord.indexOf('_') === -1) {
            alert('YOU WIN');
            wins++;
            cleanUp();
        }
        if (wrong === 9) {
            alert('YOU LOSE');
            losses++;
            cleanUp();
        }
    }
}

cleanUp();
//TODO: make letters show up on screen
//TODO: if word is complete win if hangman complete lose
//TODO: keep track of chosen letters?