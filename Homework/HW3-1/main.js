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


