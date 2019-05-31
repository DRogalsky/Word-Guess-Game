var possibleWords = ['grip','breathe','blue','tiger','follow','shrill', 'clever', 'structure', 'rainstorm', 'egg', 'sow', 'resolve', 'smite', 'defiant', 'scientific', 'machine', 'play', 'persuade', 'push'];
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

document.onkeyup = function(event) {
    let pressed = event.key;

    //TODO: function to check the letter
    if (guessed.includes(pressed)) {
        alert("You've already guessed this!");
    } else {
        guessed.push(pressed);
        //call the function i haven't made yet
    }
}
//TODO: check against word
//TODO: make letters show up on screen
//TODO: if word is complete win if hangman complete lose
//TODO: keep track of chosen letters?