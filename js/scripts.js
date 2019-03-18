const image = document.querySelector('.img-display img');
const options = document.querySelector('.options .option');
const option = document.querySelectorAll('option');
const progress = document.getElementById('questionNumber');
const resetBtn = document.getElementById('reset');


var index = 0;
var score = 0;

var question =[
    {photo:"img/9.png",
    choices: ["2","9","3","6"],
    answer: 1},
    {photo:"img/6.png",
    choices: ["5","6","1","9"],
    answer: 1},
    {photo:"img/4.png",
    choices: ["6","2","8","4"],
    answer: 3},
    {photo:"img/7.png",
    choices: ["1","7","3","6"],
    answer: 1},
    {photo:"img/3.png",
    choices: ["9","2","3","6"],
    answer: 2},
    {photo:'img/1.png',
    choices: ["9","2","5","1"],
    answer: 3},
    {photo:'img/8.png',
    choices: ["1","8","3","6"],
    answer: 1},
    {photo:'img/2.png',
    choices: ["9","2","4","6"],
    answer: 1},
    {photo:'img/5.png',
    choices: ["5","6","3","1"],
    answer: 0}  
];

option.forEach((element) => {element.addEventListener('click', check);});
resetBtn.addEventListener('click', replay);

var randoQuestion = shuffle(question.slice());

function check(){
    const userInput = this.textContent;
    userInput === randoQuestion[index].choices[randoQuestion[index].answer]? score++ : "";
    console.log(userInput);
    console.log(randoQuestion[index].choices[randoQuestion[index].answer]);
    if (index<question.length - 1){
        index++;
        init();
    } else {
        displayScore();
    }
}

function replay() {
    score = 0;
    index = 0;
    init();
}

function displayScore(){
    scoreDisplay.innerText = `you scored ${score} out of ${question.length}`
}

function init(){
    progress.innerText = `question ${index + 1} of ${question.length}`;
    console.table(randoQuestion);
    console.log(index);
    let randOption = shuffle(randoQuestion[index].choices.slice());
    image.src=randoQuestion[index].photo;
    for(let  i = 0; i < options.length; i++){
        options[i].innerText=randomOptions[i];
    }
}

function shuffle(array){
    for(let i=0; i<array.length; i++){
        let rando = Math.ceil(Math.random()*array.length-1);
        let temp = array[i];
        array[i]=array[rando];
        array[rando]=temp;
    }
    return array;
}
init();