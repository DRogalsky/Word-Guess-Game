# Word-Guess-Game
## Getting Started
A deployed version of the site can be found here https://drogalsky.github.io/Word-Guess-Game/

## Usage
To guess a letter press the corresponding key. Wrong guesses will build the snowman while right guesses fill in the word. After 9 wrong guesses you loose and must press the restart button at the bottom. Wins and losses are tracked until you refresh the page.

## Challenges

Trying to make it so that capital and lowercase letters were only counted once while also only letting letters through is something I made more complicated for myself for the sake of learning something new. Instead of an array of all the letters and .toLowerCase() I decided to go with key codes. The feature keyCode is considered deprecated but still supported on most browsers. I then checked if the key code pressed was between the numbers that make up the letter keys and only counted them if they did.

Another challenge was making the snowman. I hadn't really done anything like that before and was challenged to try something like that. I'm really proud how it turned out even though the arms go wonky on different monitor sizes. I used javascript to change the visibility on the peices as more wrong answers were given eventually switching to a nostalgic peice of my childhood with the yeti from Skifreak as the gameover picture.

Also I'm proud of the letter checker on this one. it's simple but effective. I'm honestly probably more proud of it than I have any right to be.

### Authors
Daniel Rogalsky