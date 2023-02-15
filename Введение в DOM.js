// c 239 до 262
// let elem1 = document.querySelectorAll('#elem');
// let input = document.querySelectorAll('#input1');
// let div = document.querySelector('#div');
// let href = document.querySelector('a');
// let img1 = document.querySelector('#img1');
// let img2 = document.querySelector('#img2');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let ul = document.querySelectorAll('#ul li');
// let arr = [];
// img1.width = 300;
// img2.width = 300;
// button1.value = 1;
// button1.addEventListener('click', func2);

// for(let li of ul){
// 	li.addEventListener('click', function func(){
// 		this.textContent = Number(li.textContent) + 1;
// 		if(this.textContent >= 10){
// 			this.removeEventListener('click', func);
// 		}
// 	});
// }

// function func2() {
// 	this.value = Number(this.value) + 1;
// 	if(this.value >= 10){
// 		this.removeEventListener('click', func2);
// 	}
// }
// console.log(input1.value);
// console.log(input1.getAttribute('value'));
// console.log(href.getAttribute('href'));

//264

//#1

// let div = document.querySelector('.div');

// let button = document.querySelector('button');
// button.addEventListener('click', function(){
// 	div.style.width = '300px';
// 	div.style.height = '300px';
// 	div.style.border = '5px solid black';
// 	div.style.background = 'red';
// });

//#2

// let div = document.querySelector('.div');

// let button = document.querySelector('button');
// button.addEventListener('click', function(){
// 	div.style.fontSize = '20px';
// 	div.style.borderTop = '5px solid black';
// 	div.style.background = 'red';
// });

//#3

// let button = document.querySelector('button');
// let li = document.querySelectorAll('li')

// button.addEventListener('click', function(){
// 	li.style.cssFloat = 'left';
// });

//265

//#2

// let p = document.querySelector('p');
// let red = document.querySelector('#red');
// let fat = document.querySelector('#fat');
// let crossOut = document.querySelector('#crossOut');

// red.addEventListener('click', function(){
// 	p.classList.add('colorred')
// });
// crossOut.addEventListener('click', function(){
// 	p.classList.add('crossOut')
// });
// fat.addEventListener('click', function(){
// 	p.classList.add('fat')
// });

//#3

// let p = document.querySelector('p');
// let red = document.querySelector('#red');
// let fat = document.querySelector('#fat');
// let crossOut = document.querySelector('#crossOut');

// red.addEventListener('click', function(){
// 	p.classList.toggle('colorred')
// });
// crossOut.addEventListener('click', function(){
// 	p.classList.toggle('crossOut')
// });
// fat.addEventListener('click', function(){
// 	p.classList.toggle('fat')
// });

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function() {
// 	elem.classList.toggle('active');
// });

//#266

//#1,2,3,4,7,8,9,10

// let elem = document.querySelector('#elem');
// let previous = elem.previousElementSibling;
// let next = elem.nextElementSibling;
// let text = next.textContent;
// next.textContent = previous.textContent;
// previous.textContent = text;
// console.log(previous);

//#267

// let parent = document.querySelector('#parent');
// let elems1 = parent.querySelector('.www');
// let elems2 = parent.querySelector('.ggg');

//#269

//#1,2,3

// let div = document.querySelectorAll('.div');
// let button1 = document.querySelector('.button1')
// let button2 = document.querySelector('.button2')

// button1.addEventListener('click', function(){
// 	let num = +(button1.dataset.num);
// 	num += 1;
// 	button1.dataset.num = num;
// });
// button2.addEventListener('click', function(){
// 	alert(button1.dataset.num)
// });

//#4

// let input = document.querySelector('#elem');

// input.addEventListener('blur', function(){
// 	if(input.value != input.dataset.length){
// 		alert('Wrong!')
// 	}
// });

//#5

// let input = document.querySelector('#elem');

// input.addEventListener('blur', function(){
// 	if(input.value.length >= input.dataset.min && input.value.length <= input.dataset.max){
// 		alert('Right!');
// 	}else{
// 		alert('Wrong!');
// 	}
// });

//#6

// let apples = document.querySelector('#elem');
// let endPrice = 0;

// apples.addEventListener('click', function(){
// 	endPrice += +apples.dataset.productPrice *
// 	 +apples.dataset.productAmount;
// 	 apples.textContent += endPrice;
// });

//#270

// let elem = document.querySelector('#elem');

// console.log(elem.firstChild);        // комментарий
// console.log(elem.firstElementChild);

//#4

// let elem = document.querySelector('#elem')
// for(let node of elem.childNodes){
// 	console.log(node);
// }