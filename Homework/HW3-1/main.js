// #WpkK0ZH1
//
// –створити масив з:
//
//     – з 5 числових значень
//
// – з 5 стрічкових значень
//
// – з 5 значень стрічкового, числового та булевого типу
//
// – та вивести його в консоль

let number =  [1,2,3,4,5.1];
console.log(number);

let String = ['Привіт','Привіт','Привіт','Привіт','Привіт'];
console.log(String);

let boolean = [true,false,true,false,true];
console.log(boolean);



// #4aDbSgh
//
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль

let list = ['hello',47,3.14,true,'фінал']
console.log(list[4]);

// #qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
// 1. перебрати його циклом while
let numbers = [2,17,13,6,22,31,45,66,100,-18];
let index = 0;
console.log(``);
while (index<numbers.length){
    let number = numbers[index];
    console.log(number)
    index++;
}
//
//     2. перебрати його циклом for

let  b =[2,17,13,6,22,31,45,66,100,-18];
console.log(``);
for(let i =0; i< b.length;i++){
    console.log(b[i]);
}

//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let numbersc = [2,17,13,6,22,31,45,66,100,-18];
console.log(``);
let indexc = 0;
while (indexc<numbersc.length){
    if (indexc%2!==0){
        let number = numbersc[indexc];
        console.log(number);
    }
    indexc++;
}
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

let  d =[2,17,13,6,22,31,45,66,100,-18];
console.log(``);
for(let i = 1;i<d.length;i+=2){
    console.log(d[i]);
}
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення

let numberse = [2,17,13,6,22,31,45,66,100,-18];
console.log(``);
let indexe = 0;
while (indexe<numberse.length){
    if (numberse[indexe] % 2 === 0){
        let numbere = numberse[indexe];
        console.log(numbere);
    }
    indexe++;
}

//
// 6. перебрати циклом for та вивести  числа тільки парні  значення

let f = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0;i <f.length;i++){
    let element = f[i];
    if(element%2===0){
        console.log(`${i}:${element}`);
    }
}

//
// 7. замінити кожне число, кратне 3, на слово “okten”

let g = [2,17,13,6,22,31,45,66,100,-18];
for(let i = 0;i<g.length;i++){
    let element = g[i];
    if(element!==0&&element% 3===0){
        g[i] = 'okten';
    }
}
console.log(g);

//
// 8. вивести масив у зворотньому порядку.


let h = [2,17,13,6,22,31,45,66,100,-18];
console.log('');
for (let i = h.length-1; i>=0; i--){
    console.log(h[i]);
}
//
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)(for)

// 2.1 перебрати його циклом for

let l = [2,17,13,6,22,31,45,66,100,-18];
console.log('');
for(let i = l.length-1; i>=0; i--){
    console.log(l[i]);
}
// 3.1 перебрати циклом while та вивести  числа тільки з непарним індексом

let m = [2,17,13,6,22,31,45,66,100,-18];
console.log(``);
let indexm = m.length -1;
while(indexm>=0){
    if(indexm%2!==0){
        let element = m[indexm];
        console.log(element);
    }
    indexm--;
}
// 4.1 перебрати циклом for та вивести  числа тільки з непарним індексом

let n = [2,17,13,6,22,31,45,66,100,-18];
console.log(``);
for( let i = n.length -1; i >=0; i --){
    if(i % 2 !==0){
        let element = n[i];
        console.log(element);
    }
}
// 5.1 перебрати циклом while та вивести  числа тільки парні  значення

let o =  [2,17,13,6,22,31,45,66,100,-18];
console.log(``);
let indexo = o.length -1;
while(indexo>=0){
    let element = o[indexo];
    if(element%2===0){
        console.log(element);
    }
    indexo--;
}
// 6.1 перебрати циклом for та вивести  числа тільки парні  значення

let p = [2,17,13,6,22,31,45,66,100,-18];
console.log(``);
for(let i = p.length -1; i>=0;i--){
    let element = p[i];
    if(element % 2===0){
        console.log(element);
    }
}
// #yHAwJOyiC
//
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let r = [3,4,5,6,7,8,9,11,13,3.7];
console.log(``);
for( let element of r){
    console.log(element);
}

// #GamKju89ob
//
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

let s = ['hello','hello okten','hello world','hello okten','hello world','hello okten','hello world','hello okten','hello world','hello'];
console.log(``);
for( let element of s){
    console.log(element);
}

// #Bm76xmg
//
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let t = ['hello','hello okten','hello world','hello okten','hello world',1,2,3,4,5];
console.log(``);
for( let element of t){
    console.log(element);
}


// #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи


let q = ['hello','hello okten',1,2,3,false,true,false,true];
console.log(``);
for (let element of q){
if(typeof element==='boolean'){
    console.log(element);
}
}
// #9stMq2ou
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let w = ['hello','hello okten',1,2,3,false,true,false,true];
console.log(``);
for(let element of w){
    if (typeof element===`number`){
        console.log(element);
    }
}


// #mK4pmM4
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let z = ['hello','hello okten','hello',1,2,3,false,true,false,true];
console.log(``);
for(let element of z){
    if (typeof element===`string`){
        console.log(element);
    }
}

// #0pm3EyTKy9
//
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let x = ['hello','hello okten','hello',1,2,3,false,true,false,true];
console.log(``)
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
console.log(x[3]);
console.log(x[4]);
console.log(x[5]);
console.log(x[6]);
console.log(x[8]);
console.log(x[9]);


// #mDMWMW5a
//
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


for (let i = 0; i <=10; i++) {
    document.write(`<div>Okten is cool ${i}</div>`);
    console.log(`(Okten is cool):${i}`);
}


// #4sXhaa5YMM
//
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i <=100; i++) {
    document.write(`<div>Okten is cool ${i}</div>`);
    console.log(`(Okten is cool):${i}`);
}

// #zananT5FR1
//
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


for (let i = 0; i <=100;i+=2) {
    document.write(`<div>Okten is cool ${i}</div>`);
    console.log(`(Okten is cool):${i}`);
}

// #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


for (let i = 1; i <=100;i+=2) {
    document.write(`<div>Okten is cool ${i}</div>`);
    console.log(`(Okten is cool):${i}`);
}

//
// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).

const books = [
    {title:'A',pageCount:100,authors: [{name: 'asdfghhj',age:20}, {name: 'zxcvbn', age: 20}],genre:'AA'},
    {title:'Ba',pageCount:110,authors: [{name: 'asdfghhj',age:20}],genre:'AA'},
    {title:'Cbqwea',pageCount:130,authors: [{name: 'asdfghhj',age:20}],genre:'AAA'},
    {title:'Dcjlk',pageCount:109,authors: [{name: 'asdfghhj',age:20}],genre:'AA'},
    {title:'Eeezxcvb',pageCount:150,authors: [{name: 'asdfghhj',age:20}],genre:'AA'},
];

//
// – знайти найбільшу книжку.
let maxBook = books[0];
for(const book of books){
    if(book.pageCount>maxBook.pageCount){
        maxBook = book;
    }
}
console.log(maxBook);

//
// – знайти книжку/ки з найбільшою кількістю жанрів

let maxgenre = books[0];
for(const book of books){
    if(book.genre.length>maxgenre.genre.length){
        maxgenre = book;
    }
}
console.log(maxgenre);

//
// – знайти книжку/ки з найдовшою назвою

let maxtitle = books[0];
for(const book of books){
    if(book.title.length>maxtitle.title.length){
        maxtitle = book;
    }
}
console.log(maxtitle);
//
// – знайти книжку/ки, які писали 2 автори

let maxauthors = books[0];
for(const book of books){
    if(book.authors===2){
        maxauthors = book;
    }
}
console.log(maxauthors);

//
// – знайти книжку/ки, які писав 1 автор


let oneauthors = books[0];
for(const book of books){
    if (book.authors.length===1){
        oneauthors=book;
        console.log(oneauthors);
    }
}


// 1. Створити пустий масив та :
//
//     a. заповнити його 50 парними числами за допомоги циклу.

let aa =[];
for(let i=0; i < 50; i++){
    aa.push(i*2);
}
console.log(aa);
//
//     b. заповнити його 50 непарними числами за допомоги циклу.

let bb = [];
for(let i =0; i <50; i++){
    bb.push(i*2+1);
}
console.log(bb);
//
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)


let сс = [];

for (let i = 0; i < 20; i++) {
    сс.push(Math.floor(Math.random() * 100));
}

console.log(сс);


//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)


let dd = [];

for (let i = 0; i < 20; i++) {
    dd.push(Math.floor(Math.random()* (732-8+1))+8);
}

console.log(dd);

// 2. Вивести за допомогою console.log кожен третій елемент



for (let i = 2; i < dd.length; i += 3) {

    console.log(dd[i]);
}

//
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.



let ff = dd;

for (let i = 2; i < dd.length; i += 3) {
    if (ff[i] % 2 === 0) {
        console.log(ff[i]);
    }
}

//
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив

let ei = [];

for (let i = 0; i < 20; i++) {
    ei.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8);
}
console.log(ei);

let fi = ei;

for (let i = 2; i < fi.length; i += 3) {
    if (fi[i] % 2 === 0) {
        console.log(fi[i]);
    }
}
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56


let Numbers = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
console.log(``)
for (let i = 0; i < Numbers.length - 1; i++) {

    let right = Numbers[i + 1];


    if (right % 2 === 0) {

        console.log(Numbers[i]);
    }
}

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.



let hh = [];
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    hh.push(randomNumber);
}
console.log(hh);
let multiplyhh = hh.map(function(element) {
    return element * 5;
});

console.log( multiplyhh);



// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.


let jj = [ "hello", 123, true, "world", 45.67, null, undefined, -88, "end" ];
console.log(jj);
let numberjj =jj.filter(function(element) {
    return typeof element === 'number';
});

console.log( numberjj)
