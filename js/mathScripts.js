const modal = document.querySelector(".modal-body")
const image = document.querySelector('.img-display img');
const option = document.querySelector('.options .option');
const options = document.querySelectorAll('.option');
const progress = document.getElementById('questionNumber');
const input = document.querySelector('.input-mode input');
const inputMode = document.querySelector('.input-mode')
const submitButton = document.querySelector('.input-mode button');
const mainQuestion = document.querySelector('.titleQuestion')
let mode = 0;
let score = 0;
let index = 0;


let question =[
    {photo:"img/9.jpg",
    choices: ["2","9","3","6"],
    answer: 1},
    {photo:"img/6.jpg",
    choices: ["5","6","1","9"],
    answer: 1},
    {photo:"img/4.jpg",
    choices: ["6","2","8","4"],
    answer: 3},
    {photo:"img/7.jpg",
    choices: ["1","7","3","6"],
    answer: 1},
    {photo:"img/3.jpg",
    choices: ["9","2","3","6"],
    answer: 2},
    {photo:'img/1.jpg',
    choices: ["9","2","5","1"],
    answer: 3},
    {photo:'img/8.jpg',
    choices: ["1","8","3","6"],
    answer: 1},
    {photo:'img/2.jpg',
    choices: ["9","2","4","6"],
    answer: 1},
    {photo:'img/5.jpg',
    choices: ["5","6","3","1"],
    answer: 0},
    {photo:'img/10.jpg',
    choices: ["5","6","3","10"],
    answer: 0}];



options.forEach((element) => {element.addEventListener('click', checkAnswers);});
const randQuestion = shuffle(question.slice());

function checkAnswers(){
    let userInput;
     if (mode==0){
         userInput=this.textContent;
     }else {
         userInput=input.value.trim();
         input.value = "";
     }
     userInput===randQuestion[index].choices[randQuestion[index].answer]?
     score++ : "";
     console.log(userInput);
     console.log(randQuestion[index].choices[randQuestion[index].answer]);
    if (index<question.length - 1){
        index++;
        init();
       }else{
           displayScore();
       }
    }
function displayScore(){
    if(window.confirm("you scored " + score+ " out of 10"))
    window.open("index.html");

}
function init(){
    progress.innerText = `question ${index + 1} of ${question.length}`;
    randOption = randQuestion[index].choices;
    image.src=randQuestion[index].photo;
    let randOptions = shuffle(randQuestion[index].choices.slice());
    for(i = 0; i < options.length; i++){
        options[i].innerText=randOptions[i];}}


function shuffle(array){
    for(let i=0; i<array.length; i++){
        let rand = Math.ceil(Math.random()*array.length-1);
        let temp = array[i];
        array[i]=array[rand];
        array[rand]=temp;

    } return array;

}

init();





