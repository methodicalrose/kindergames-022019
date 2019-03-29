/* //METHOD 1: My idea based on Udemy Class
// DEFINE VARIABLES
const flash = document.querySelector('.readpic-card');

// ADD EVENT LISTENER
flash.addEventListener('click', flashing);

//CREATE FUNCTION
function flashing() {
    if(flash == 'click'){
        alert('hello');
    }
} */

/* METHOD 2: Found on FreeCodeCamp

var button = document.querySelector("button");

function red(){
	document.body.style.backgroundColor = "red";
  console.log(document.body.style.backgroundColor); // red
};
*/

/* CODE THAT WORKED NOW NEED TO EDIT TO ME: found on w3 schools
document.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
  }); 
  */

/* create a new class for the color in css when pic or text is picked. use if statements */

//NOTES FOR JS
/* my thinking is that when one containers is clicked, whether it's the pic or the text, the container will make the border color change and will "blink" while it is waiting for one of the pic/text ones to be clicked. Then when it is picked, the new blinking color will become permanent. Three different picked for the three choices. once every choice has been made, it will then let them know if they got them correct or if they need to try again.
initially, i wanted a line to connect the pic/text to the matching pic/text but i googled that it would require svg which might be easy but i want to stick to JS */