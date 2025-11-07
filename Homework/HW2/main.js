// #67kfznmiMl
//
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ["helo", 47, true, null, undefined, {key:"value"}, [1,2,3], NaN, 10.5, function(){return"func";}]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// #LARqoUj5I
//
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

let book1 = {title:'A',pageCount:'100',genre:'AA'};
let book2 = {title:'B',pageCount:'200',genre:'BB'};
let book3 = {title:'C',pageCount:'300',genre:'CC'};

// #sA3Gg1sCp

// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'nazva',
    pageCount: 300,
    genre: 'fentezi',
    authors: [{name: 'asdfghhj',age:20},
              {name: 'zxcvbn', age: 20}]
}
let book5 = {
    title: 'nazva',
    pageCount: 354,
    genre: 'fentezi',
    authors: [{name: 'asdfghhj',age:20},
              {name: 'zxcvbn', age: 20}]
}
let book6 = {
    title: 'nazva',
    pageCount: 400,
    genre: 'fentezi',
    authors: [{name: 'asdfghhj',age:20},
              {name: 'zxcvbn', age: 20}]
}

// #jCHFnEbdmFd
//
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'qwe1', username: 'rty', password: '1234'},
    {name: 'qwe2', username: 'asd', password: '1234'},
    {name: 'qwe3', username: 'fgh', password: '1234'},
    {name: 'qwe4', username: 'hjk', password: '1234'},
    {name: 'qwe5', username: 'zxc', password: '1234'},
    {name: 'qwe6', username: 'vbn', password: '1234'},
    {name: 'qwe7', username: 'plm', password: '1234'},
    {name: 'qwe8', username: 'okn', password: '1234'},
    {name: 'qwe9', username: 'uhv', password: '1234'},
    {name: 'qwe10', username: 'tfc', password: '1234'},
];
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
console.log(users[6]);
console.log(users[7]);
console.log(users[8]);
console.log(users[9]);

// #coYydZuaeEB
//
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let temps = [
    {
    day: 'monday',values: {
        morning: 13,
        day: 25,
        night:15
    }
},
    {
        day: 'tuesday',values: {
            morning: 13,
            day: 25,
            night:15
        }
    },
    {
        day: 'wednesday',values: {
            morning: 13,
            day: 25,
            night:15
        }
    },
    {
        day: 'thusday',values: {
            morning: 13,
            day: 25,
            night:15
        }
    },
    {
        day: 'friday',values: {
            morning: 13,
            day: 25,
            night:15
        }
    },
    {
        day: 'saturday',values: {
            morning: 13,
            day: 25,
            night:15
        }
    },
    {
        day: 'sunday',values: {
            morning: 13,
            day: 25,
            night:15
        }
    }
]

// #bAUsaq6LI
//
// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('enter number 1 0 -3');
if (x !==0) {
    console.log('right');
} else{
    console.log('wrong');
}

// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).

let time =48;
if (time>=0 && time<15){
    console.log('1');
} else if (time>=15 && time<30){
    console.log('2');
} else if (time>=30 && time<45){
    console.log('3');
} else if (time>=45 && time<60){
    console.log('4');
}

// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 11;
if (day>=0 && day<10){
    console.log('1');
} else if (day>=10 && day<20){
    console.log('2');
}else if (day>=20 && day<31){
    console.log('3');
}

// #KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).

switch (3) {
    case 1:
        console.log('asdqwe');
        console.log('asdqwe');
        console.log('asdqwe');
        console.log('asdqwe');
        break;
    case 2:
        console.log(22222);
        console.log(22222);
        console.log(22222);
        console.log(22222);
        break;
    case 3:
        console.log(33333);
        console.log(33333);
        console.log(33333);
        console.log(33333);
        break;
    case 4:
        console.log('asdqwe');
        console.log('asdqwe');
        console.log('asdqwe');
        console.log('asdqwe');
        break;
    case 5:
        console.log(22222);
        console.log(22222);
        console.log(22222);
        console.log(22222);
        break;
    case 6:
        console.log(33333);
        console.log(33333);
        console.log(33333);
        console.log(33333);
        break;
    case 7:
        console.log(33333);
        console.log(33333);
        console.log(33333);
        console.log(33333);
        break;
    default:
        console.log(('????'));
}

// #uwsz1RnTQJ1
//
// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.


let a =0;
let b =0;
if (a>b){
    console.log(a);
} else if(a<b){
    console.log(b);
} else if(a===b){
    console.log('===')
}


// #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


let newX = NaN;
if (!x){
    x='default';
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
 coursesAndDurationArray.forEach(course=>{
     if (course.monthDuration>5){
         console.log('Cпер');
     }
});








