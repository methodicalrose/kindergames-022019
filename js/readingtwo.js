const readbox = document.querySelector('readpic-card');
const textbox = document.querySelectorAll('readtext-card');
if(readbox){
    readbox.addEventListener('click', swapper, false);
  }
    
readbox.addEventListener('click', () => {
    readbox.classList.toggle('pairone');
    });