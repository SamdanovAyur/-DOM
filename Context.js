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

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
    let self = this;
	alert( square() );
	
	function square() {
		return +self.value * +self.value;
	}
}