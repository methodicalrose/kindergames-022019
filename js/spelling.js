var spellingWords = ["cat", "dog", "ant", "fish", "mom", "dad", "bed", "bat", "can", "pot", "red", "blue", "pink", "ball", "run", "cry", "hug", "jump", "yell", "cup"];
var spaceDiv = document.getElementById("SpaceDiv");
var spellPic = document.getElementById("SpellPic");
var score = document.getElementById("Score");
var spellGuess = document.getElementById("SpellGuess");
var guessButton = document.getElementById("GuessButton");
var goHome = document.getElementById("HomeButton");
var pointCounter = 0;
var qNumber = 0;
var pickedWord;
function getWord() {
  // Generate random index, remove that word from the word array
  const index = Math.floor(Math.random() * spellingWords.length);
  return spellingWords.splice(index, 1)[0];
}
function prepGame() {
  pickedWord = getWord();
  const url = `url(images/${pickedWord}.jpg)`;
  const blankSpaces = [];
  // Generate word image and blank spaces
  for (var i = 0; i < pickedWord.length; i++) {
    blankSpaces[i] = "_";
    spaceDiv.innerText = blankSpaces.join(" ");
    spellPic.style.backgroundImage = url;
  };
}
// Connect to Submit button
function submitGuess(e) {
  e.preventDefault();
  if (spellGuess.value.toLowerCase() === pickedWord) {
    pointCounter++;
    score.innerText = `Score: ${pointCounter}/10`;
  };
  spellGuess.value = '';
  qNumber++;
  if (qNumber < 10) {
    prepGame();
  } else {
    score.style.fontSize = "40pt";
    spellPic.style.display = "none";
    spaceDiv.style.display = "none";
    spellGuess.style.display = "none";
    guessButton.style.display = "none";
    goHome.style.display = "block";
  };
};
prepGame();
