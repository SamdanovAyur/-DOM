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

// let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// let table = document.querySelector('#table');

// for(let subArr of arr){
//     let tr = document.createElement('tr');
//     for(let elem of subArr){
//         let td = document.createElement('td');
//         td.textContent = elem ** 2;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// #332

// #1

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.querySelector('table');

// for(let elem of employees){
//     let tr = document.createElement('tr');

//     let td1 = document.createElement('td');
//     td1.textContent = elem.name;
//     tr.appendChild(td1);
    
//     let td2 = document.createElement('td');
//     td2.textContent = elem.age;
//     td2.addEventListener('click', function(){
//         this.textContent = +this.textContent + 1;
//     });
//     tr.appendChild(td2);

//     let td3 = document.createElement('td');
//     td3.textContent = elem.salary;
//     td3.addEventListener('click', function(){
//         this.textContent = +this.textContent * 1.1;
//     });
//     tr.appendChild(td3);

//     table.appendChild(tr);
// }

// #333

// #1

// let table = document.querySelector('#table');
// let btn = document.querySelector('button');

// let tr = document.createElement('tr');

// btn.addEventListener('click', function(){
//     let td = document.createElement('td');
//     td.textContent = 'X';
//     tr.appendChild(td);
// });

// table.appendChild(tr);

// #2

// let btn = document.querySelector('button');
// let table = document.querySelector('#table');

// btn.addEventListener('click', function(){
//     // for (let tr of trs) {
//     //     let td = document.createElement('td');
//     //     tr.appendChild(td);
//     // }
//     let tr1 = document.createElement('tr');
//     table.appendChild(tr1);
//     let trs = document.querySelectorAll('#table tr');

//     for (let tr of trs) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
    
//     table.appendChild(tr);
// });

// #334

// #1

// let tds = document.querySelectorAll('#table td');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function(){

//     for (let td of tds) {
//     td.textContent = +td.textContent * 2;
//     }
// });

// #335

// #1

// let btn = document.querySelector('#button');
// let ul = document.querySelector('#parent');

// btn.addEventListener('click', function(){
//     let li = document.createElement('li');
//     li.textContent = '!';
//     ul.appendChild(li);
// });
// ul.addEventListener('click', function(event){
//     event.target.remove();
// });

// #336

// #1

// let div = document.querySelector('div');
// let a = document.querySelector('a');

// a.addEventListener('click', function(event){
//     div.remove();
//     event.preventDefault();
// });

// #337

// #1

let li = document.querySelectorAll('li');

for(let elem of li){
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'remove';

    remove.addEventListener('click', function(event){
        elem.remove();
        event.preventDefault();
    });

    elem.appendChild(remove);
}