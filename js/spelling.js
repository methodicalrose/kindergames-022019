var spellingWords = ["cat", "dog", "ant", "fish", "mom", "dad", "bed", "bat", "can", "pot", "red", "blue", "pink", "ball", "run", "cry", "hug", "jump", "yell", "cup"];
var pickedWord = spellingWords[Math.floor(Math.random() * spellingWords.length)];
var blankSpaces = [];
var keyValue;

// Generates blank spaces based on word length
for (var i = 0; i < pickedWord.length; i++) {
 blankSpaces[i] = "_";
 document.getElementById("SpellBox").innerHTML = `${blankSpaces.join(" ")}`;
 // Replaces the blank spaces with entered letters --- WIP
 document.addEventListener('keydown', function(event) {
   keyValue = event.key;
   blankSpaces.splice(i, 1, keyValue);
 });
};

// Displays the image that goes with the chosen word
switch (pickedWord) {
  case "cat" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/cat.jpg)";
    break;
  case "dog" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/dog.jpg)";
    break;
  case "ant" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/ant.jpg)";
    break;
  case "fish" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/fish.jpg)";
    break;
  case "mom" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/mom.jpg)";
    break;
  case "dad" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/dad.jpg)";
    break;
  case "bed" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/bed.jpg)";
    break;
  case "bat" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/bat.jpg)";
    break;
  case "can" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/can.jpg)";
    break;
  case "pot" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/pot.jpg)";
    break;
  case "red" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/red.jpg)";
    break;
  case "blue" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/blue.jpg)";
    break;
  case "pink" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/pink.jpg)";
    break;
  case "ball" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/ball.jpg)";
    break;
  case "run" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/run.jpg)";
    break;
  case "cry" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/cry.jpg)";
    break;
  case "hug" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/hug.jpg)";
    break;
  case "jump" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/jump.jpg)";
    break;
  case "yell" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/yell.jpg)";
    break;
  case "cup" :
    document.getElementById("SpellPic").style.backgroundImage = "url(images/cup.jpg)";
    break;
  default :
    break;
}
