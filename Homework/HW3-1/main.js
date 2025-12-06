#WpkK0ZH1
//
// –створити масив з:
//
//     – з 5 числових значень
//
// – з 5 стічкових значень
//
// – з 5 значень стрічкового, числового та булевого типу
//
// – та вивести його в консоль

let array = [1,2,3,4,5.4,'okten','hello','twenty','class','scool',true,false,true,true,false];
console.log(array);


// #4aDbSgh
//
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
const arr = [1,2,3,4,5.4,'okten','hello','twenty','class','scool',true,false,true,true,false];
console.log(arr[11]);


// #qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
// 1. перебрати його циклом while

let numbars =  [2,17,13,6,22,31,45,66,100,-18];
let index = 0;
while(index<numbars.length){
    let numbar = numbars[index];
    console.log(numbar);
    index++;
}

//
//     2. перебрати його циклом for
// let numbars = [2,17,13,6,22,31,45,66,100,-18];
// for(let i =0;i< numbars.length; i ++){
//     console.log(numbars[i]);
// }

//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let numbarsA = [2,17,13,6,22,31,45,66,100,-18];
let indexA = 0;
while(indexA < numbarsA.length){
    if(indexA %2 !== 0){
        let numbar = numbarsA[indexA];
        console.log(numbar);
    }
    indexA ++;
}
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом


let numbarsB =  [2,17,13,6,22,31,45,66,100,-18];
for(let indexB = 0; indexB < numbarsB.length; indexB ++){
    if( indexB %2 !== 0){
        console.log(numbarsB[indexB]);
    }
}

//
// 5. перебрати циклом while та вивести  числа тільки парні  значення


let numbarsC = [2,17,13,6,22,31,45,66,100,-18];
let indexC = 0;
while (indexC < numbarsC.length){
    if( indexC %2 === 0){
        let numbarC = numbarsC[indexC];
        console.log(numbarC);
    }
    indexC ++;

}

//
// 6. перебрати циклом for та вивести  числа тільки парні  значення


let numbarsD =  [2,17,13,6,22,31,45,66,100,-18];
for( let indexD = 0; indexD < numbarsD.length; indexD ++){
    if(indexD %2 !== 0){
        console.log(numbarsD[indexD]);
    }
}

// 7. замінити кожне число, кратне 3, на слово “okten”

let numbarsE = [2,17,13,6,22,31,45,66,100,-18];
for(let indexE = 0; indexE<numbarsE.length; indexE ++){
    if(indexE %3 === 0){
        numbarsE[indexE] = 'okten';
        console.log(numbarsE[indexE]);
    }
}
//
// 8. вивести масив у зворотньому порядку.

let numbarsK = [2,17,13,6,22,31,45,66,100,-18];
for(let i = numbarsK.length -1; i > 0; i --){
    if(i %3 === 0){
        numbarsK[i] = 'okten';
        console.log(numbarsK[i]);
    }
}


//
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)

// / 1. перебрати його циклом while

let numbarsF =  [2,17,13,6,22,31,45,66,100,-18];
let indexF = numbarsF.length-1;
while(indexF >= 0){
    let numbar = numbarsF[indexF];
    console.log(numbar);
    indexF--;
}
// 2. перебрати його циклом for
let numbarsJ = [2,17,13,6,22,31,45,66,100,-18];
for(let indexJ = numbarsJ.length -1;indexJ >= 0; indexJ --){
    console.log(numbarsJ[indexJ]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let numbarsH = [2,17,13,6,22,31,45,66,100,-18];
let indexH = numbarsA.length-1;
while(indexH >= 0){
    if(indexH %2 !== 0){
        let numbar = numbarsH[indexH];
        console.log(numbar);
    }
    indexH --;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом


let numbarsP =  [2,17,13,6,22,31,45,66,100,-18];
for(let indexP = numbarsP.length-1; indexP >= 0 ; indexP --){
    if( indexP %2 !== 0){
        console.log(numbarsP[indexP]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення


let numbarsO = [2,17,13,6,22,31,45,66,100,-18];
let indexO = numbarsO.length -1;
while(indexO >= 0){
    let numbarO = numbarsO[indexO];
    console.log(numbarO);
    indexO --;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

let numbarsQ = [2,17,13,6,22,31,45,66,100,-18];
for(let indexQ = numbarsQ.length-1; indexQ >= 0; indexQ --){
    if(indexQ %2===0){
        console.log(numbarsQ[indexQ]);
    }
}

// #yHAwJOyiC
//
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numbarsX = [2,17,13,6,22,31,45,66,100,-18];
for(let numbarX of numbarsX){
    console.log(numbarX);
}

// Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

let textes = ['hello','hello okten','hello world','hello okten','hello world','hello okten','hello world','hello okten','hello world','hello'];
for(let texte of textes ){
    console.log(texte);
}

// #Bm76xmg
//
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let textesA = ['hello','hello okten', 1,'hello okten',2 ,'hello okten',true,'hello okten',false,'hello'];
for(let texteA of textesA){
    console.log(texteA);
}

// #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let textesB = ['hello','hello okten', 1,'hello okten',2 ,'hello okten',true,'hello okten',false,'hello'];
for(let texteB of textesB){
    if(typeof texteB === 'boolean'){
        console.log(texteB);
    }
}
// #9stMq2ou
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let textesC = ['hello','hello okten', 1,'hello okten',2 ,'hello okten',true,'hello okten',false,'hello'];
for(let texteC of textesC){
    if(typeof texteC === 'number'){
        console.log(texteC);
    }
}

// #mK4pmM4
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let textesD = ['hello','hello okten', 1,'hello okten',2 ,'hello okten',true,'hello okten',false,'hello'];
for(let texteD of textesD){
    if(typeof texteD === 'string'){
        console.log(texteD)
    }
}
// #0pm3EyTKy9
//
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let textesE = ['hello','hello okten', 1,'hello okten',2 ,'hello okten',true,'hello okten',false,'hello'];
console.log(textesE[0]);
console.log(textesE[1]);
console.log(textesE[2]);
console.log(textesE[3]);
console.log(textesE[4]);
console.log(textesE[5]);
console.log(textesE[6]);
console.log(textesE[7]);
console.log(textesE[8]);
console.log(textesE[9]);

// #mDMWMW5a
//
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let indexZ = 0; indexZ < 10; indexZ ++){
    document.write(`<p>hello okten ${indexZ}</p>`);
    console.log(`hello okten ${indexZ}`);
}

// #4sXhaa5YMM
//
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


for(let indexY = 0;indexY < 100;indexY ++){
    document.write(`<p>hello okten ${indexY}</p>`);
    console.log(`hello okten ${indexY}`);
}

// #s24slNyz7
//
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let indexX = 0;indexX < 100; indexX +=2){
    document.write(`<p>hello okten ${indexX}</p>`);
    console.log(`hello okten ${indexX}`);
}
//
// #zananT5FR1
//
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for(let indexL = 0;indexL < 100;indexL +=2){

    document.write(`<p>hello world ${indexL}</p>`);
    console.log(`hello world ${indexL}`);

}


// #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for(let i = 0;i < 100;i ++){
    if(i %2 !== 0){
        document.write(`<h>Okten scool ${i}</h>`);
        console.log(`Okten scool ${i}`)
    }
}

// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).

let Books = [
    {title:'A',pageCount:100,authors: [{name: 'asdfghhj',age:20}, {name: 'zxcvbn', age: 20}],genre:'AA'},
    {title:'Ba',pageCount:110,authors: [{name: 'asdfghhj',age:20}],genre:'AA'},
    {title:'Cbqweavbnm',pageCount:130,authors: [{name: 'asdfghhj',age:20}],genre:'AAA'},
    {title:'Dcjlk',pageCount:109,authors: [{name: 'asdfghhj',age:20}],genre:'AABB'},
    {title:'Eeezxcvb',pageCount:150,authors: [{name: 'asdfghhj',age:20}],genre:'AA'},
];
//
// – знайти найбільшу книжку.
let maxBook = Books[0];
for(let Book of Books){
    if(Book.pageCount > maxBook.pageCount){
        maxBook = Book;
    }
}
console.log(maxBook);

//
// – знайти книжку/ки з найбільшою кількістю жанрів
let maxbook = Books[0];
for (let book of Books){
    if(book.genre > maxbook.genre){
        maxbook = book;
    }
}
console.log(maxbook);

//
// – знайти книжку/ки з найдовшою назвою
let Maxbook = Books[0];
for(let book of Books){
    if(book.title > Maxbook.title){
        Maxbook = book;
    }
}
console.log(Maxbook);
//
// – знайти книжку/ки, які писали 2 автори

let maXbook = Books[0];
for(let book of Books){
    if(book.authors.length === 2){
        maXbook = book;
        console.log(maXbook);
    }
}


//
// – знайти книжку/ки, які писав 1 автор

let MaXbook = Books[0];
for(let book of Books){
    if(book.authors.length === 1){
        MaXbook = book;
        console.log(MaXbook);
    }
}


// 1. Створити пустий масив та :
//
//     a. заповнити його 50 парними числами за допомоги циклу.

let arrayA = [ ];
for(let i = 0; i < 50; i ++){
    let numbar = i * 2;
    arrayA = numbar;
    console.log(arrayA);
}
//
//     b. заповнити його 50 непарними числами за допомоги циклу.

let arrayB = [];
for(let i = 0; i < 50; i ++){
    let namber = i *2+1;
    arrayB = namber;
    console.log(arrayB);
}
//
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
let arrayC = [];
for(let i = 0; i < 20; i ++){
    let namber = Math.random() *100;
    arrayC = Math.random() *100;
    console.log(arrayC);
}

//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arrayD = [];
for(let i = 0; i < 20; i ++){
    let namber = Math.random(8) * 732;
    arrayD = Math.random(8) * 732;
    console.log(`${i}:${arrayD} `);
}
//
// 2. Вивести за допомогою console.log кожен третій елемент

let arrayE = [8,45,78,37,58,67,78,56,34,23,21,12,90,567,567,234,34,908,25,456];
for( let i = 2; i < arrayE.length; i += 3){
    console.log(arrayE[i]);
}

//
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.

let arrayI = [8,45,78,37,58,67,78,56,34,23,21,12,90,567,567,234,34,908,25,456];
console.log(``)
for( let i = 2; i < arrayI.length; i +=3){
    if(i %2 ===0){
        console.log(arrayI[i]);
    }
}

//
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив

let arrayF =  [8,45,78,37,58,67,78,56,34,23,21,12,90,567,567,234,34,908,25,456];
console.log(``);
let Array =[];
let newindex = 0;
for(let i = 2; i < arrayF.length; i +=3){
    let element = arrayF[i]
    if (element % 2 === 0) {
        Array[newindex] = element;
        newindex++;
    }
}
console.log(Array);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let number =  [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for(let i = 0; i < number.length; i ++){
    let right = number[i+1];
    if(right %2 ===0){
        console.log(number[i]);
    }
}

//
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let numberA = [100,250,50,168,120,345,188];
let sumnumberA = 0;
let check = 0;
for(let i =0; i < numberA.length; i++){
    sumnumberA = sumnumberA + numberA[i];
    check = sumnumberA / numberA.length;
    console.log(sumnumberA);
    console.log(check);
}


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let elementQ = 0;
let arrayT = [];
let arrayP = [];
let newIndex = 0;
for( let i =0; i < 20; i ++){
    let randomNamber = Math.random() * 100;
    arrayT[newIndex] = randomNamber;
    let elementQ = randomNamber * 5;
    arrayP[newIndex] = elementQ;
    newindex  ++;
}
console.log(arrayP);
console.log(arrayT);

//
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.


let list = ['hello','hello okten', 1,'hello okten',2 ,'hello okten',true,'hello okten',false,'hello'];
let newList =[];
let newindexA = 0;
for(let i = 0; i < list.length; i ++){
    if(typeof list[i] === 'number'){
        newList[newindexA] = list[i];
        newindexA ++;
    }
}
console.log(newList);


// Дано 2 масиви з рівною кількістю об’єктів.
//
//     Масиви:
//
// let usersWithId = [
//
//     {id: 1, name: ‘vasya’, age: 31, status: false},
//
// {id: 2, name: ‘petya’, age: 30, status: true},
//
// {id: 3, name: ‘kolya’, age: 29, status: true},
//
// {id: 4, name: ‘olya’, age: 28, status: false}
//
// ];
//
//
//
// let citiesWithId = [
//
//     {user_id: 3, country: ‘USA’, city: ‘Portland’},
//
// {user_id: 1, country: ‘Ukraine’, city: ‘Ternopil’},
//
// {user_id: 2, country: ‘Poland’, city: ‘Krakow’},
//
// {user_id: 4, country: ‘USA’, city: ‘Miami’}
//
// ];
//
//
//
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//
// Записати цей об’єкт в новий масив

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];
    let city;
    let newindex = 0;
    for (let j = 0; j < citiesWithId.length; j++) {
        if (citiesWithId[j].user_id === user.id) {
            city = citiesWithId[j];
        }
    }

}

// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let numbers = [1,2,3,4,6,7,8,9,22,335];
for(let i = 0; i < numbers.length; i ++){
    if(numbers[i] %2 === 0){
        console.log(numbers[i]);
    }
}
//
//
//
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let numbersA = [1,2,3,4,6,7,8,9,22,335];
let newNumbersA = [];
let newindexB = 0;
for(let i = 0; i < numbersA.length; i ++){
    newNumbersA[newindexB] = numbersA[i];
    newindexB ++;
}
console.log(newNumbersA);


// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
let litters = ['a', 'b', 'c'];
let litter = ``;
for(let  i = 0; i < litters.length; i ++){
    litter += litters[i];
}
console.log(litter);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.


let littersA = ['a', 'b', 'c'];
let litterA =``;
let Index = 0;
while(Index < littersA.length){
    litterA += littersA[Index];
    Index ++;
}
console.log(litterA);
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

let littersB = ['a', 'b', 'c'];
let litterB = ``
for(litter of littersB){
    litterB += litter;
}
console.log(litterB);


