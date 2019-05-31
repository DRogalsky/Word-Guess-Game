// var possibleWords = ['grip','breathe','blue','tiger','follow','shrill', 'clever', 'structure', 'rainstorm', 'egg', 'sow', 'resolve', 'smite', 'defiant', 'scientific', 'machine', 'play', 'persuade', 'push'];
var possibleWords =['hello']
let guessed = [];
let theWord = [];
let chosenWord;

function newWord() {
    let selector = Math.floor(Math.random()*possibleWords.length);
    return possibleWords[selector];
}

function cleanUp() {
    chosenWord = newWord();
    theWord = [];
    guessed = [];
    for (let i = 0; i < chosenWord.length; i++) {
        theWord.push('_');
    }
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

    //TODO: function to check the letter
    if (guessed.includes(pressed)) {
        alert("You've already guessed this!");
    } else {
        guessed.push(pressed);
        console.log(letterCheck(pressed));
    }
}

cleanUp();
//TODO: check against word
//TODO: make letters show up on screen
//TODO: if word is complete win if hangman complete lose
//TODO: keep track of chosen letters?