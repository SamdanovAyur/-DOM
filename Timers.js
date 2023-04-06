// #308

// #1

// setInterval(function(){
//     console.log('adasdas');
// }, 3000);

// #309

// #1

// let i = 100;

// let timerId = setInterval(() => console.log(--i), 1000);

// #310

// #1

// let i = 10;

// let timerId = setInterval(function() {
// 	console.log(--i);
	
// 	if (i <= 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);

// #311

// #1

// let start = document.querySelector('#start');

// start.addEventListener('click', function func() {
// 	let i = 100;
	
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);

//     this.removeEventListener('click', func);
// });

// #312

// #1

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId; // сделаем переменную глобальной
// let i = 10;

// start.addEventListener('click', function() {
	
// 	timerId = setInterval(function() {
// 		console.log(--i)
//         if(i <= 0){
//             clearInterval(timerId);
//         }
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// #2

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// #3

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// #4

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// #5

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;
// let func = function func() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
    
//     this.removeEventListener('click', func);
// }

// start.addEventListener('click', func);

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
//     start.addEventListener('click', func);
// });

// №313

// №2

// let inp = document.querySelector('input');

// let timerId = setInterval(function(){
//     inp.value = +inp.value - 1;

//     if(inp.value <= 0){
//         clearInterval(timerId);
//     }
// }, 1000);

// #314

// #1

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(() => this.value = Number(elem.value) + 1, 1000)});

// #315

// #1

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(function(self) {
		self.value--;
	}, 1000, this);
});