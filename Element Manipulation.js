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

let ol = document.querySelector('ol');
let btn = document.querySelector('#button');

btn.addEventListener('click', function(){
    let li = document.createElement('li');
    li.textContent = 'item'
    ol.appendChild(li);
    li.addEventListener('click', function(){
        this.textContent += '!';
    });
});
