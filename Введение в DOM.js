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

// №271

// let li = document.querySelectorAll('li');
// let yearSum = 0;
// let text;

// for(let elem of li){
//     text = elem.textContent;
//     let sum = 0;
//     for(let num of text.split('')){
//         sum += +num;
//     }
//     if(sum == 6){
//         console.log(text);
//         yearSum += sum;
//     }
// }console.log(yearSum);

// #272

// #1,2

// let elems1 = document.querySelectorAll('.p1 p');
// for(let elem of elems1){
//     elem.textContent += '!';
// }

// let elems2 = document.querySelectorAll('.p2 p');

// for (let elem of elems2) {
// 	elem.addEventListener('click', function() {
// 		// let num = elem.textContent;
//         // Number(num) += 1;
//         elem.textContent = +elem.textContent + 1; 
// 	});
// }

//#3

// let button = document.querySelector('button');
// let elem   = document.querySelector('p');

// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>'+elem.innerHTML+'</b>';
// });

// №4

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	let sum = 0;
	
// 	for (let elem of elems) {
// 		sum += Number(elem.textContent);
// 	}
	
// 	console.log(sum);
// });

// #5

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function(){
// 		this.textContent += '!';
// 	});
// }

// #6

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.innerHTML = '<b>'+elem.innerHTML+'</b>';
// 	}
// });

// #7

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let sum = 0;

// for (let elem of elems) {
// 	sum += +elem.textContent;
// }
// button.addEventListener('click', function() {
// 	console.log(sum);
// });

// #8

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('input');
// let sum = 0;



// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		sum += +elem.value;
// 	}
// 	console.log(sum);
// });

// #9

// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function() {
// 	inp3.value = +inp1.value + +inp2.value;
// });

// #10

// let btn  = document.querySelector('#btn');
// let res  = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');

// btn.addEventListener('click', function() {
// 	res.textContent = +inp1.value + +inp2.value;
// });

// #11

// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// button.addEventListener('click',function() {
// 	for (let input of inputs) {
// 		if (input.value == input.dataset.text) {
// 			input.classList.add('right')
// 		} else {
// 			input.classList.add('wrong')
// 		}
// 	}
// });

// #12

// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// let texts = [
// 	'text1',
// 	'text2',
// 	'text3',
// ];

// button.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		for (let text of texts) {
// 			if (input.value == text) {
// 				input.classList.add('right')
// 			} else {
// 				input.classList.add('wrong')
// 			}
// 			break;
// 		}
// 	}
// });

// #13

// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;

// btn.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		sum = sum + +input.value;
// 	}
// 	console.log(sum);
// });

// #14

// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function() {
// 	inp3.value = +inp1.value + +inp2.value;
// });

// #15

// let inp = document.querySelector('#inp');

// inp.addEventListener('blur', function() {
// 	let digits = inp.value.split('');
// 	let sum = 0;
	
// 	for (let digit of digits) {
// 		sum += +digit;
// 	}
	
// 	console.log(sum);
// });

// #273 Практикум

// №1

// let inp = document.querySelector('input');
// let p = document.querySelector('p');

// inp.addEventListener('blur', function(){
// 	p.textContent += inp.value;
// });

// №2

// let inputs = document.querySelectorAll('input');
// let p = document.querySelector('p');
// let btn = document.querySelector('button');
// let sum = 0;

// btn.addEventListener('click', function(){
// 	for(let inp of inputs){
// 		sum += +inp.value;
// 	}
// 	p.textContent = sum;
// });

// #3

// let inp =document.querySelector('input');

// inp.addEventListener('blur', function(){
// 	let sum = 0;
// 	for(let num of inp.value.split('')){
// 		sum += +num;
// 	}
// 	console.log(sum);
// });

// #4

// let inp =document.querySelector('input');

// inp.addEventListener('blur', function(){
// 	let sum = 0;
// 	for(let num of inp.value.split(',')){
// 		sum += +num;
// 	}
// 	console.log((sum / (inp.value.split(',')).length));
// });

// #5

// let inputs = document.querySelectorAll('input');

// inputs[0].addEventListener('blur', function(){
// 	let fio = inputs[0].value.split(' ');
// 	let i = 1;
// 	for(let fio2 of fio){
// 		inputs[i++].value = fio2;
// 	}
// });

// #6

// let inp = document.querySelector('input');

// inp.addEventListener('blur', function(){
// 	let fio = inp.value.split(' ');
// 	let upFirst = [];
// 	for(let fio2 of fio){
// 		upFirst += fio2.slice(0,1).toUpperCase() + fio2.slice(1) + ' ';
// 	}
// 	inp.value = upFirst;
// });

// #7

// let inp = document.querySelector('input');

// inp.addEventListener('blur', function(){
// 	let fio = inp.value.split(' ');
// 	alert(fio.length)
// });

// #8

// let inp = document.querySelector('input');

// inp.addEventListener('blur', function(){
// 	let data = inp.value.split('.');
// 	inp.value = data[2] + '-' + data[1] + '-' + data[0];
// });

// #9

// let inp = document.querySelector('input');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function(){
// 	let str = inp.value;
// 	console.log(str);
// 	if(str == str.split('').reverse().join('')){
// 		console.log(true);
// 	}else{
// 		console.log(false);
// 	}
// });

// #10

// let inp = document.querySelector('input');

// inp.addEventListener('blur', function(){
// 	nums = inp.value.split('');
// 	for(let num of nums){
// 		if(num == 3){
// 			console.log(true);
// 		}else{
// 			console.log(false);
// 		}
// 	}
// });

// #11

// let p = document.querySelectorAll('p');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function(){
// 	for(let i = 0; i <= p.length; i++){
// 		p[i].textContent += i;
// 	}
// });

// #12

let a = document.querySelectorAll('a');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
	for(let aHref of a){
		aHref.textContent += '(' + aHref.href + ')';
	}
});