// c 239 до 262
let elem1 = document.querySelectorAll('#elem');
let input = document.querySelectorAll('#input1');
let div = document.querySelector('#div');
let href = document.querySelector('a');
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let ul = document.querySelectorAll('#ul li');
let arr = [];
img1.width = 300;
img2.width = 300;
button1.value = 1;
button1.addEventListener('click', func2);

for(let li of ul){
	li.addEventListener('click', function func(){
		this.textContent = Number(li.textContent) + 1;
		if(this.textContent >= 10){
			this.removeEventListener('click', func);
		}
	});
}

function func2() {
	this.value = Number(this.value) + 1;
	if(this.value >= 10){
		this.removeEventListener('click', func2);
	}
}
console.log(input1.value);
console.log(input1.getAttribute('value'));
console.log(href.getAttribute('href'));
