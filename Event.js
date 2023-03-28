// #288

// #1

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	console.log(event); // увидим объект с событием
// });

// #289

// #1

// let elem = document.querySelector('.elem');

// document.addEventListener('mousemove', function(event){
//     elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });

// #290

// #1

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
//     if(event.type == 'click'){
//         elem.style.background = "green";
//     }else{
//         elem.style.background = "red";
//     }
// }

// #291

// #1

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	console.log(event.target); // выведет наш абзац
// 	console.log(this);         // выведет наш див
//     event.target.textContent += '!';
// });

// #292

// #1,5

// let inp = document.querySelector('input');
// let p = document.querySelector('p');

// inp.addEventListener('keypress', function(event){
//     if(event.code == 'Enter'){
//         p.textContent = inp.value;
//         inp.value = '';
//     }
// });

// #293

// #1

// let btn = document.querySelector('button');
// btn.addEventListener('click', function(event){
//     if(event.altKey){
//         btn.style.color = 'red';
//     }
// });

// #2

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event){
//     if(event.ctrlKey){
//         event.target.textContent += '1';
//     }
//     if(event.shiftKey){
//         event.target.textContent += '2';
//     }

// });

// #294

// #1

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	console.log('Вы не можете перейти по этой ссылке!');
//     elem.textContent += elem.href;
// });

// #2

let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let href = document.querySelector('a');
let p = document.querySelector('p');

href.addEventListener('click', function(event){
    event.preventDefault();
    p.textContent = +inp1.value + +inp2.value;
});