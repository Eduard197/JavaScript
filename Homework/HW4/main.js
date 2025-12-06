
// #I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
function rectangl(a, b){
    const result = a * b;
    console.log(result);
    return result;
}
rectangl(5,10)


// #ETGAxbEn8l
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

function roundCircle(radius){
    return Math.PI*radius*radius
}

// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function Cylinder(radius,height){
    return 2*Math.PI*radius*height;
}
console.log(Cylinder(10,40));

// #SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент

function foobar(array){
    for(const item of array){
    console.log(item);
    }
}

// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function foobarA(text){
    document.write(`<p>${text}</p>`);
}
foobarA(`hello`);


// #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function foobarC(text){
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`);

}
foobarC('Heloo Okten');

// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function foobarB(text,counter){
      document.write('<ul>')
    for(let i = 0;i<counter;i++){
        document.write(`<li>${text}</li>`);
    }
       document.write('</ul>');

}
foobarB('Okten',10);

// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function foobarC(arreyofPremitiv){
    document.write(`<ul>`);
    for (let item of arreyofPremitiv){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
foobarC([123,34,56,true,'asdf']);

// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

function foobarD(users) {
    for(let user of users){
        document.write(`<div>${user.id}${user.name}${user.age}</div>`);
    }
}
foobarD([
    {id:1,name:'kokos',age:123},
    {id:2,name:'kokos',age:123},
    {id:3,name:'kokos',age:123},
    {id:4,name:'kokos',age:123},
    {id:5,name:'kokos',age:123}
]);


// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву

function arrayminiValue(numbers){
    let min = numbers[0];
    for(let i =1; i<numbers.length;i++){
     let number = numbers [i];
     if (number < min){
         min=number
     }
    }
    return min;
}
console.log(arrayminiValue([33,56,3,786,89,700]));

// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr){
    let basket = 0;
    for(const item of arr){
        basket = basket+item;
    }
    return basket;
}
console.log(sum([1,2,10]));


// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,i1,i2){
    if(i1<arr.length && i2<arr.length){
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return '!!!!!';
}
console.log(swap([11,22,33,44],0,1));


// #mkGDenYnNjn.html
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400




function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currencyObj = null;

    // Шукаємо потрібну валюту
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            currencyObj = currencyValues[i];
            break;
        }
    }

    if (!currencyObj) {
        return 0;
    }

    return sumUAH / currencyObj.value;
}
console.log(exchange(10000,[{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}],`USD`));









