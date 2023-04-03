// #303

// #1

// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
// 	console.log(this.value); // что выведет?
	
// 	function child() {
// 		console.log(this.value); // что выведет?
// 	}
// 	child();
// }

// #304

// #1

// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
//     let self = this;
// 	alert( square() );
	
// 	function square() {
// 		return +self.value * +self.value;
// 	}
// }

// #2

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
// 	child(this); // передаем параметром this
	
// 	function child(param) {
// 		console.log(param.value); // выводим value инпута
// 	}
// }

// #3

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
// 	console.log(this.value); // выведет 'text'
	
// 	let child = () => {
// 		console.log(this.value); // выведет 'text'
// 	}
// 	child();
// }

// #305

// #1

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// function func() {
// 	console.log(this.value); // выведет value инпута
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);

// #2

// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }

// func.call(elem, 'Smith', 'John'); // тут должно вывести 'hello, John Smit'

// #306

// #1

// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }

// func.apply(elem, ['Smith', 'John']); // тут должно вывести 'hello, John Smit'

// #307

// #1

let elem = document.getElementById('elem');

function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

func = func.bind(elem); // тут напишите конструкцию с bind()

func('John', 'Smit'); // тут должно вывести 'hello, John Smit'
func('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'