var spellingWords = ["cat", "dog", "ant", "fish", "mom", "dad", "bed", "bat", "can", "pot", "red", "blue", "pink", "ball", "run", "cry", "hug", "jump", "yell", "cup"];
var pickedWord = spellingWords[Math.floor(Math.random() * spellingWords.length)];
var blankSpaces = [];

for (var i = 0; i < pickedWord.length; i++) {
 blankSpaces[i] = "_";
 document.getElementById("SpellBox").innerHTML = `${blankSpaces.join(" ")}`;
};
