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

// let div = document.querySelector('#elem');

// let p = document.createElement('p');
// p.textContent = '!!!';

// div.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');

// №325

// №1

// let btn = document.querySelector('button');
// let inp = document.querySelector('input');

// btn.addEventListener('click', function(){
//     let clone = inp.cloneNode(true);
//     btn.appendChild(clone);
// });

// #326

// #1,2

// let div = document.querySelector('div');

// console.log(div.matches('div'));

// #3

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');

// console.log(elem1.contains(elem2));

// ПРАКТИКА

// #327

// #1

// let parent = document.querySelector('#parent');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
//     p.addEventListener('click', function(){
//         p.textContent = +p.textContent + 1;
//     });
	
// 	parent.appendChild(p);
// }

// #328

// #1-4

// let array = [1,2,3,4,5];

// let ul = document.querySelector('ul');

// for(let elem of array){
//     let li = document.createElement('li');
//     li.textContent = elem;
//     li.addEventListener('click', function func(){
//         li.textContent += '!';
//         alert(li.textContent);
//         li.removeEventListener('click', func    )
//     });

//     ul.appendChild(li);
// }

// №329

// №1-3

// let table = document.querySelector('#table');

// for(let i = 0; i<10; i++){
//     let tr = document.createElement('tr');
//     for(let j = 0; j<5; j++){
//         let td = document.createElement('td');
//         td.textContent += 'x';
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// #4

// let table = document.querySelector('#table');
// let rows = document.querySelector('#rows');
// let columns = document.querySelector('#columns');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     for(let i = 1; i<= +rows.value; i++){
//         let tr = document.createElement('tr');
//         tr.textContent = i;
//         for(let j = 1; j<= +columns.value; j++){
//             let td = document.createElement('td');
//             td.textContent += j;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// });

// #330

// #1

// let table = document.querySelector('#table');

// let k = 2;
// for(let i = 1; i<= 5; i++){
//     let tr = document.createElement('tr');
//     tr.textContent = i;
//     for(let j = 1; j<= 5; j++){
//         let td = document.createElement('td');
//         td.textContent += k;
//         k += 2;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// #331

// #1

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let table = document.querySelector('#table');

for(let subArr of arr){
    let tr = document.createElement('tr');
    for(let elem of subArr){
        let td = document.createElement('td');
        td.textContent = elem ** 2;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}