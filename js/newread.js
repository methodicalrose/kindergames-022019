const readbox = document.getElementsByClassName('readpic-card');
for(i = 0; i < readbox.length; i++) {
    readbox[i].addEventListener('click', boxFunction);
}

function boxFunction(e){
    for(i=0; i< readbox.length; i++) {
        if (e.target.className === 'readpic-card'){
            e.classList.toggle('pairone');
        }
    }
}


// var boxes = document.getElementsByClassName("boxes");

// for(i = 0; i < boxes.length; i++) {
//   boxes[i].addEventListener("click",boxFunction);
// }
// function boxFunction(e){
// 	for(i=0; i<boxes.length; i++) {
// 		if(boxes[i].className === 'pink'){
// 		boxes[i].classList.remove('pink');
// 		} else if (boxes[i].className === 'boxes pink round-edges'){
// 		boxes[i].classList.remove('round-edges');
// 		}
// 	}
//     if (e.target.className === 'boxes pink') {
//       e.target.classList.add('round-edges');
//   } else if (e.target.className === 'boxes pink round-edges'){
// 		 e.target.classList.remove('round-edges');
// 		 e.target.classList.remove('pink');
// 	} else 
// 			e.target.classList.add('pink');
// }


// document.getElementsByClassName('.readpic-card').addEventListener('click', function(e) {
//     [].map.call(document.querySelectorAll('.readpic-card'), function(el) {
//       el.classList.toggle('pairone');
//     });
//   });