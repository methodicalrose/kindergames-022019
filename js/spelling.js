var spellingWords = ["cat", "dog", "ant", "fish", "mom", "dad", "bed", "bat", "can", "pot", "red", "blue", "pink", "ball", "run", "cry", "hug", "jump", "yell", "cup"];
var pickedWord = spellingWords[Math.floor(Math.random() * spellingWords.length)];
var spellGuess = document.getElementById("SpellGuess").value;
var pointCounter = 0;
var blankSpaces = [];
const url = `url(images/${pickedWord}.jpg)`;

for (var i = 0; i < pickedWord.length; i++) {
 blankSpaces[i] = "_";
 document.getElementById("SpaceDiv").innerText = blankSpaces.join(" ");
 document.getElementById("SpellPic").style.backgroundImage = url;
};

// Connect to Submit button
if (spellGuess === pickedWord) {
  pointCounter ++;
  document.getElementById("Score").innerText = `${pointCounter}/10`;
};
