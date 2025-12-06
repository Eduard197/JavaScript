// #I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
let calc = (a,b) => a*b;
console.log(calc(10,20));
// #ETGAxbEn8l
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

let calcA = (r) =>Math.PI*r*r;
console.log(calcA(Math.PI*10*10));

// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

let calcB = (r,h)=>2*Math.PI*r*(r*h);
console.log(calcB(2*Math.PI*10*(10*40)));

// #SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент

let printArray=arr =>arr.forEach(item=> console.log(item));
printArray([1,2,3,4,5]);


// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент


let paragraf = text=>{
    document.write(`<p>${text}</p>`);
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
    for(let i = 0;i<counter;i++){
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');

}
ListA('Okten',10);

//
// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

ListB =(arreyofPremitiv)=>{
    document.write(`<ul>`);
    for (let item of arreyofPremitiv){
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

let arrayminiValue = (numbers)=>{
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

let numberssum = (arr)=>{
    let basket = 0;
    for(const item of arr){
        basket = basket+item;
    }
    return basket;
}
console.log(numberssum([1,2,10]));


// #kpsbSQCt2Lf
// //
// // – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// //
// // Приклад  swap([11,22,33,44],0,1) //=>


// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

numbersAswap = (arr,i1,i2)=>{
    if(i1<arr.length && i2<arr.length){
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
        return `Валюта з кодом ${exchangeCurrency} не знайдена.`;
    }

    const result = sumUAH / targetCurrency.value;
    return result;
}

const currencyRates = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];

const amountUAH = 10000;
const target = 'USD';

const exchangedAmount = exchange(amountUAH, currencyRates, target);
console.log(`Сума ${amountUAH} UAH дорівнює ${exchangedAmount} ${target}`);

for(let i =0; i <=100;i+=2){
    console.log(i);
}
let names = ['олег','Аня','Олена','Макс','Катя'];
for(let name of names){
    console.log(`Привіт,${name}!`);
}
 let user = {
    name:'Oлег',
     age:25,
     city:'Київ'
 };



// #coYydZuaeEB
//
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
//


let temps = [
    {day:`monday`,morning:15, noon:22, evening:17},
    {day:`tuesday`, morning:15,noon:22,evening:17 },
    {day:`wednesday`,morning:15, noon:22, evening:17 },
    {day:`thursday`,morning:15, noon:22, evening:17},
    {day:`friday`, morning:15,noon:22,evening:17 },
    {day:`saturday`,morning:15, noon:22, evening:17 },
    {day:`monday`,morning:15, noon:22, evening:17 },
];
console.log(temps);

// #bAUsaq6LI
//
// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3



// let x =+prompt (`enter number 1, 0, 3`);
// if(x!==0){
//     console.log(`right`);
// }else {
//     console.log(`wrong`)
// }

// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).

let time=0;
if(time >= 0 && time < 15){
    console.log(1);
} else if(time > 15 && time < 30) {
    console.log(2);
} else if(time > 30 && time < 45) {
    console.log(3);
} else if(time >45 && time <60) {
    console.log(4);
}

// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
let day =15;
if(day >= 0 && day < 10){
    console.log(1)
}else if(day > 10 && day < 20){
    console.log(2)
}else if(day > 20 && day <=31){
    console.log(3)
}


// #KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).

let key = `Friday`
switch(key){
    case(`monday`):
        console.log(`asashdgf`);
        console.log(`asdfghj`);
        console.log(`zxcvn`);
        break;
    case(`tuesday`):
        console.log(22222222);
        console.log(3333333333);
        console.log(444444444);
        break;
    case(`wednesday`):
        console.log(`asashdgf`);
        console.log(`asdfghj`);
        console.log(`zxcvn`);
        break;
    case(`thursday`):
        console.log(22222222);
        console.log(3333333333);
        console.log(444444444);
        break;
    case(`Friday`):
        console.log(`asashdgf`);
        console.log(`asdfghj`);
        console.log(`zxcvn`);
        break;
    case(`saturday`):
        console.log(22222222);
        console.log(3333333333);
        console.log(444444444);
        break;
    case(`monsday`):
        console.log(`asashdgf`);
        console.log(`asdfghj`);
        console.log(`zxcvn`);
        break;
    default:
        console.log(`???`);
}


// #uwsz1RnTQJ1
//
// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.





let a = 0;
let b = 2;
if(a > b){
    console.log(a);
}else if(a < b){
    console.log(b);
}else if(a === b){
    console.log(`===`);
}


// #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


let x = 0;
if(!x){
    x = undefined;
}

// #awLXL6TBzg
//
// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

    if(coursesAndDurationArray[0].monthDuration > 5){
        console.log('Cупер');
    }
    if(coursesAndDurationArray[1].monthDuration > 5){
        console.log('Супер');
    }
    if(coursesAndDurationArray[2].monthDuration > 5){
        console.log('Супер');
    }
    if(coursesAndDurationArray[3].monthDuration > 5){
        console.log('Супер');
    }
    if(coursesAndDurationArray[4].monthDuration > 5){
        console.log('Супер');
    }
    if(coursesAndDurationArray[5].monthDuration >5){
        console.log('Супер');
    }


// #y7crMeFwHcS
//
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for(let i = 0; i < 10; i++){
    document.write(`<div>Okten scool</div>`)
}

// #TYj7ncx
//
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


for(let i = 0; i < 10; i++){
    document.write(`<div>${i} Hello Okten</div>`)
}

// #uzkt71dp
//
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i <20){
    
    document.write(`<h1>Hi world</h1>`)

i++;

}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let item of listOfItems ){
    document.write(`    
    <li>${item}</li>           
    `)
}
document.write(`</ul>`)



// #Hdjws7E
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
//
// побудувати структуру по шаблону
//
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон



let products = [

    {

        title: 'milk',

price: 22,

    image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg'

    },

{

    title: 'juice',

    price: 27,

        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'

},

{

    title: 'tomato',

    price: 47,

        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'

},

{

    title: 'tea',

    price: 15,

        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'

},

];

for(let product of products){
    document.write(`
<div class="product-card">

<h3 class="product-title">${product.title}. Price –${product.price}</h3>

<img src=${product.image} alt=""class="product-image">

</div>
`)
}


// #4WrHwFTEop0
//
// є масив

let users = [

    {name: 'vasya', age: 31, status: false},

{name: 'petya', age: 30, status: true},

{name: 'kolya', age: 29, status: true},

{name: 'olya', age: 28, status: false},

{name: 'max', age: 30, status: true},

{name: 'anya', age: 31, status: false},

{name: 'oleg', age: 28, status: false},

{name: 'andrey', age: 29, status: true},

{name: 'masha', age: 30, status: true},

{name: 'olya', age: 31, status: false},

{name: 'max', age: 31, status: true}

];

// за допомогою циклу вивести:
//
//     – користувачів зі статусом true

for(let user of users){
    if(user.status){
        console.log(user);
    }
}
//
//  – користувачів зі статусом false
for(let user of users){
    if(!user.status){
        console.log(user);
    }
}


//
//  – користувачів, які старші за 30 років

for(let user of users){
    if(user.age > 30){
        console.log(user);
    }
}










let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];
document.write(`<div class="users-box">`)
for(let user of usersList){
    document.write(`
<div class="user-block">

<h2>${user.id} – ${user.name} – ${user.username} </h2>

<h3>${user.email} – ${user.phone}</h3>

<div class="address-block">

<p>City – ${user.address.city}</p>

<p>Street –${user.address.street}</p>

<p>Suite – ${user.address.suite}</p>

<p>Zip code – ${user.address.zipcode}</p>

</div>

</div>

`)
}
document.write(`</div>`)


// #WpkK0ZH1
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