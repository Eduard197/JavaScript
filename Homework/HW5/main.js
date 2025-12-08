#I2XsG6f

// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
let calc = (a,b) => a*b;
console.log(calc(10,20));

// #ETGAxbEn8l
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r


let calcA = (r) => Math.PI * r * r;
console.log(calcA(Math.PI * 10 * 10));

// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r


let calcB = (r,h) => 2 * Math.PI * r *(r*h);
console.log(calcB(2 * Math.PI * 10 * (10*40)));

// #SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент



let printArray = arr => arr.forEach(item => console.log(item));
printArray([1,2,3,4,5]);


// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент


let paragraf = text =>{
    document.write(`<p>${text}</p>`)
}
paragraf(`Hello Okton`);

// #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


let List = text =>{
    document.write(`
    <ul>
        <li>${text}</li>

        <li>${text}</li>

        <li>${text}</li>
    </ul>`);
};
List (`Okten`);

//
//
// #0Kxco1edSN
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ListA = (text,counter)=>{
    document.write('<ul>')
    for(let i = 0; i < counter; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');

}


//
// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

ListB =(arreyOfPremitiv)=>{
    document.write(`<ul>`);
    for (let item of arreyOfPremitiv){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
ListB([123,34,56,true,'asdf']);



// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.


ListC = (users)=> {
    for(let user of users){
        document.write(`<div>${user.id}${user.name}${user.age}</div>`);
    }
}
ListC ([
    {id:1,name:'kokos',age:123},
    {id:2,name:'kokos',age:123},
    {id:3,name:'kokos',age:123},
    {id:4,name:'kokos',age:123},
    {id:5,name:'kokos',age:123}
]);


// #pghbnSB
//
// – створити функцію, яка повертає найменше число з масиву

let arrayminiValue = (numbers) => {
    let min = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        let number = numbers [i];
        if (number < min){
            min = number
        }
    }
    return min;
}
console.log(arrayminiValue([33,56,3,786,89,700]));


// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let numberssum = (arr)=>  {
    let basket = 0;
    for(const item of arr){
        basket = basket + item;
    }
    return basket;
}
console.log(numberssum([1,2,10]));



// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

numbersAswap = (arr,i1,i2)=> {
    if(i1 < arr.length && i2 < arr.length){
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return '!!!!!';
}
console.log(numbersAswap([11,22,33,44],0,1));



// #mkGDenYnNjn
//
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250


 exchange = (sumUAH, currencyValues, exchangeCurrency)=> {
    const targetCurrency = currencyValues.find(item => item.currency === exchangeCurrency);

    if (!targetCurrency) {
        return `${exchangeCurrency}`;
    }

     return sumUAH / targetCurrency.value;
}

const currencyRates = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];

const amountUAH = 10000;
const target = 'USD';

const exchangedAmount = exchange(amountUAH, currencyRates, target);
console.log(` ${amountUAH} ${exchangedAmount} ${target}`);

