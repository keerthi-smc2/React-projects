// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM fully loaded and parsed');
//     fetch('https://picsum.photos/v2/list')
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('content').innerText = JSON.stringify(data);

//             const gallery = document.getElementById('gallery-for-displaying');
//             data.forEach(item => {
//                 const imgElement = document.createElement('img');
//                 imgElement.src = item.download_url;
//                 imgElement.alt = item.author;
//                 imgElement.style.width = '150px';
//                 gallery.appendChild(imgElement);
//             });
            

//             const alejandroData = [];
//             const paulData = [];

//             data.filter(item => {
//                 if (item.author === 'Alejandro Escamilla')  {
//                 //   let filtered = console.log('filtered1', item);
//                 alejandroData.push(item);
//                     // return true;
//                 } else if(item.author === 'Paul Jarvis') {
//                     paulData.push(item);
//                 //   let filter2 = console.log('filtered2', item);
//                 }
//             });

//             console.log('Alejandro Data', alejandroData);
//             console.log('paul Data', paulData);


//             const sorted = data.sort((a,b) => a.id - b.id);
//             console.log('sorted', sorted);
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });


// var x= 7;

// function getName() {
//     console.log("Hello JS")
// }

// getName();
// console.log(x);
// getName2;


// var getName2 = function() {
//     console.log("Hello JS2")
// }

console.log(x); // undefined because for var keyword
var x = 10;

// console.log(y); // reference error 
// let y = 20;

// console.log(z); // reference error 
// const z = 30;


// 2. Difference between undefined AND Reference Error
let a;
console.log(a); //a is undefined  because a is not initialsed with any value

// console.log(b); // Output: ReferenceError: b is not defined

// a = 'keerthi';   // now a is intialised so it will be not-undefined
if(a === undefined) {
    console.log("a is undefined")
} else {
    console.log("a is not- undefined")
}

var c;
console.log(c);
c = 10;
console.log(c);
c = "hello world";
console.log(c);

function d() {
    f();
    function f() {
        console.log(e)
    }
}
var e = 20;
d();