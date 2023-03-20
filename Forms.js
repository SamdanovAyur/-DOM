// #274 

// #1

// let txtArea = document.querySelector('textarea');
// let p = document.querySelector('p');

// txtArea.addEventListener('blur', function(){
//     p.textContent = txtArea.value;
// });

// #275

// #1

// let inp = document.querySelector('input');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     inp.disabled = false;
// });

// #2

// let inp = document.querySelector('input');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click', function(){
//     inp.disabled = false;
// });
// btn2.addEventListener('click', function(){
//     inp.disabled = true;
// });

// #3

// let inp = document.querySelector('input');
// let btn1 = document.querySelector('button');

// btn1.addEventListener('click', function(){
//     alert(inp.disabled);
// });

// #276

// #1

// let inp = document.querySelector('input');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click', function(){
//     inp.checked = true;
// });
// btn2.addEventListener('click', function(){
//     inp.checked = false;
// });

// #2

// let inp = document.querySelector('input');
// let btn1 = document.querySelector('button');
// let p = document.querySelector('p');

// btn1.addEventListener('click', function(){
//     if(inp.checked == true){
//         p.textContent = 'Hello';
//     }else{
//         p.textContent = 'FuckYou';
//     }
// });

// #277

// #1

// let inp = document.querySelector('input');
// let btn1 = document.querySelector('button');

// btn1.addEventListener('click', function(){
//     inp.checked = !inp.checked;
// });

// #278

// #1

// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
// 			console.log(radio.value);
// 		}
// 	}
// });

// #279

// #1


// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');

// elem.addEventListener('change', function() {
// 	p.textContent = this.value
// });

// #2

// let inp = document.querySelector('input');

// inp.addEventListener('change', function(){
// 	console.log(inp.checked);
// });

// #3

// let inp = document.querySelector('input');

// inp.addEventListener('change', function(){
// 	if(+inp.value < 5){
// 		inp.style.border = '1px solid green';
// 	}
// 	if(+inp.value > 5){
// 		inp.style.border = '1px solid red';
// 	}
// });

// #280

// #1

// let inp = document.querySelector('input');

// inp.addEventListener('input', function(){
// 	if(inp.value.length >= 5){
// 		alert('sadasd');
// 	}
// });

// #2

// let inp = document.querySelector('input');
// let p = document.querySelector('p');

// inp.addEventListener('input', function(){
// 	if(inp.value.length >= 5){
// 		p.textContent = 'превышено на ' + (inp.value.length - 5);
// 	}
// });

// #281

// #1

// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');

// inp1.addEventListener('input', function(){
// 	if(inp1.value.length >= 2){
// 		inp2.focus();
// 	}
// });

// inp2.addEventListener('input', function(){
// 	if(inp2.value.length >= 2){
// 		inp2.blur();
// 	}
// });

// #282

// #1

