// #318

// #1

// let ol = document.querySelector('ol');

// let li = document.createElement('li');
// li.textContent = 'item';
// ol.appendChild(li);

// #2

// let ol = document.querySelector('ol');
// let btn = document.querySelector('#button');

// btn.addEventListener('click', function(){
// 	let li = document.createElement('li');
// 	li.textContent = 'item';
// 	ol.appendChild(li);
// });

// #319

// #1

// let ol = document.querySelector('ol');
// let btn = document.querySelector('#button');

// btn.addEventListener('click', function(){
//     let li = document.createElement('li');
//     li.textContent = 'item'
//     ol.appendChild(li);
//     li.addEventListener('click', function(){
//         this.textContent += '!';
//     });
// });

// #320

// #1

// let ul = document.querySelector('ul');

// for(let i = 1; i <= 10; i++){
//     let li = document.createElement('li');
//     li.textContent = i;
//     ul.appendChild(li);
// }

// #321

// #1

// let div = document.querySelector('div');
// let p = document.querySelector('p');

// for(let i = 1; i <= 5; i++){
//     let inp = document.createElement('input');
//     inp.addEventListener('blur', function(){
//         p.textContent += inp.value;
//     })
//     div.appendChild(inp);
// }

// #322

// #1

// let li = document.querySelectorAll('li');

// for(let elem of li){
//     elem.addEventListener('click', function(){
//         elem.remove();
//     });
// }

// let ul = document.querySelector('ul');
// let btn = document.querySelector('#button');

// btn.addEventListener('click', function(){
//     console.log('asdasd');
//     ul.lastElementChild.remove();
// });

// #323

// #1

// let ul = document.querySelector('ul');

// let start = document.createElement('li');
// start.textContent = 'start';

// ul.prepend(start);

// let finish = document.createElement('li');
// finish.textContent = 'finish';

// ul.append(finish);

// let ul = document.querySelector('ul');
// let elem = document.querySelector('#elem');

// let li = document.createElement('li');
// li.textContent = 'new';
// li.addEventListener('click', function(){
//     this.textContent += '!';
// });

// ul.insertBefore(li, elem);

// #324

// #1

// let div = document.querySelector('#elem');

// let p = document.createElement('p');
// p.textContent = '!!!';

// div.insertAdjacentElement('beforeBegin', p);

// #2

// let div = document.querySelector('#elem');

// let p = document.createElement('p');
// p.textContent = '!!!';

// div.insertAdjacentElement('afterEnd', p);

// #3

// let div = document.querySelector('#elem');

// let p = document.createElement('p');
// p.textContent = '!!!';

// div.insertAdjacentElement('afterBegin', p);

// #4

// let div = document.querySelector('#elem');

// let p = document.createElement('p');
// p.textContent = '!!!';

// div.insertAdjacentElement('beforeEnd', p);

// #5

let div = document.querySelector('#elem');

let p = document.createElement('p');
p.textContent = '!!!';

div.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');