//TODO: chooes words?
var possibleWords = ['grip','breathe','blue','tiger','follow','shrill', 'clever', 'structure', 'rainstorm', 'egg', 'sow', 'resolve', 'smite', 'defiant', 'scientific', 'machine', 'play', 'persuade', 'push'];
function newWord() {
    let selector = Math.floor(Math.random()*possibleWords.length);
    return possibleWords[selector];
}
console.log(newWord());

document.onkeyup = function(event) {
    let key = event.key;
    let guessed = [];
    //TODO: function to check the letter
    if (guessed.includes(key)) {
        // youve guessed this! probbably alert?
    } else {
        guessed.push(key);
        //call the function i haven't made yet
    }
}
//TODO: check against word
//TODO: make letters show up on screen
//TODO: if word is complete win if hangman complete lose
//TODO: keep track of chosen letters?