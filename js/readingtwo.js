const readbox = document.getElementsByClassName('readpic-card');
const textbox = document.getElementsByClassName('readtext-card');

for(i = 0; i < readbox.length; i++) {
    readbox[i].addEventListener('click', boxFunction);
}

function boxFunction(e){
    for(i=0; i<readbox.length; i++) {
        if(e.target.classList === 'readpic-card'){
            e.target.className.add('pairone');
        // } else if (boxes[i].className === 'boxes pink round-edges'){
        //     boxes[i].classList.remove('round-edges');
        }
    }
    // if (e.target.className === 'boxes pink') {
    //     e.target.classList.add('round-edges');
    // } else if (e.target.className === 'boxes pink round-edges'){
    //     e.target.classList.remove('round-edges');
    //     e.target.classList.remove('pink');
    // } else
    // e.target.classList.add('pink');
}


// USE CLASSLIST