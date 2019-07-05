// Devtools console message ✨
console.log('%cLesson 1!', 'color: red; font-size: 25px; font-weight: bold;');

/**
 * правильная запись
function HellowEorld() {
    var a = 'hello';
    return { 'a': 1 }
}

HellowEorld()

 * неправильная запись
 function HellowEorld() {
    var a = 'hello';
    return
    { 'a': 1 }
}

 HellowEorld()
*/


/**
 * Особенности
 */
// 1 == 1 //true
// 'foo' == 'foo'; //true
// [1,2,3] == [1,2,3]; //false
// new Array(3) == ',,'; //true
// new Array(3).toString(); // ",,"
// new Array(3) === ',,'; // false

/**
 * Числа
 */
// 0.1 +0.2 == 0.3 //false
// 1 == 1.0 //true

/**
 * Ошибочные числа
 */
// 1/0 //Infinity
// -1/0 //-Infinity
// NaN //NaN
// NaN / 1 //NaN
// NaN == NaN false
//isNaN( 0 ) // false
//isNaN( NaN ) // true

/**
 * Некоторые удобные функции
 */
//Number(10) //10
//Number(10.23) //10.23
//Number('fhhgt') //NaN
//parseInt('18') //18
//parseInt('18jffj') //18
//parseInt('19.8') //19
//parseInt(20.8) //20
//parseInt("ff") //NaN
//parseInt( "ff", 16 ) //255
//parseInt( "0x10" ) //16
//parseFloat("0.4" ) // 0.4
//parseFloat("0.4ddzd" ) // 0.4

/**
 * Преобразования (метода объекта number)
 * Обрезка числа после запятой с заданной длинной
 */
//var y = 23.444;
//y.toFixed() //23
//y.toFixed(1) //23.4
//y.toFixed(2) //23.44

/**
 * Округление возможно делать с помощью объекта Math
 */
//Math.floor( 23.555 ) //23
//Math.ceil( 23.555 ) //24

/**
 * Также Math содержит другие математические функции
 */
//Math.max( 10, 20 ) // 20
//Math.max( -10, -20 ) //-10
//Math.max( -10, 20 ) //20


/**
 * Строки
 */
// var string1 = "本語";
// var string = "test";
// string.length //4
// s'42'.length //2

/**
 * Использование символов юникода
 */
// "\u1552" // ᕒ
// "\u1552".length // 1

/**
 * Экранирование запрещенных символов с помощью \
 */
// 'is\'s my life' //верно
// 'is's my life' //неверно

/**
 * Строки vs. символы
 */
// 'is my life'.charAt(4) //y
// 'is my life'.charAt(200) //''
// 'is my life'.charAt(-1) //''

/**
 * Конкатенация
 */
// 'wefw' + 'S3' // wefwS3
// 'weee'.charAt(2) + 'r2sdf4'.charAt(3) // ed

/**
 * Строки и числа
 */
// "12" / 2 //6
// "DAY" * 2 //NaN
// 42.toString() // строка
// a.toString().length //2
// a.toString().length.toString() //строка
// 'Bil' + 188 // 'Bil188'
// (188 + 1) + 'sd' + 1 // '189sd1'

/**
 * Сравнение строк
 */
// 'sd' == 'sdr' //false
// 'sd' == 'sd' //true
// 'a' < 'b' //true
// 'a' > 'b' //false
// 'abcd' < 'abcd' //false
// abcd' < 'abdc' true
// 'ab' === 'ab' //true
// 'toy' === 't' + 'o' + 'y'

/**
 * Conditional statements
 */
// if ( condition && condition ) {
//     // some action happens here for logic AND
// } else if ( condition || condition ) {
//     // some action for logic OR
// } else if ( !condition ) {
//     // some action happens here for negating condition
// } else {
//     if ( condition ) {
//         // some action happens here for nesting conditions
//     }
// }

/**
 * Comparison operator
 */
// ==
// !=
// ===
// !==
// >
// <
// >=
// <=

/**
 * Объекты
 */
// var obj = {}; // Создание объекта
// var person = {
//     "name" : "Alex",
//     "age" : 25
// };

/**
 * Доступ к свойтвам объектов через точку
 */
// var person = {
//     "name" : "Alex",
//     "age" : 25 };
// person.name; // "Alex"
// person.age; // 25


/**
 * Доступ к свойтвам объектов через []
 */
// var person = {
//     name : "Alex", // кавычки в для имени объекта указывать не обязательно
//     age : 25,
//     "" : "Hello" // названием свойства должна быть строка можно даже пустая, но для пустой надо указать кавычки
//     name-d: 'Alex', //ошибка
//     'name-d': 'Alex', //правильно
//     ';,': 'Hello'
// };
// person["name"]; // "Alex"
// person["age"]; // 25
// person[""]; // "Hello"


/**
 * Вложенность
 */

// var parson = {
//    'name': 'Alex',
//    'age': 25,
//    'wife': {
//        name: 'Mari',
//        'age': 25,
//    }
// };

// var parson = {
//     'name': 'Alex',
//     'age': 25,
//     'wife': {
//         name: 'Mari',
//         'age': 25,
//     }
// };
//
// parson.wife; //'Object'
// parson.wife['name']; //'Mari'


/**
 * Обновление
 */
// var parson = {
//     'name': 'Alex',
//     'age': 25,
//     'wife': {
//         name: 'Mari',
//         'age': 25,
//     }
// };
// parson.wife.name = 'Hana';
// parson.wife.name // 'Hana'


/**
 * Прототипы
 */
// var Human = {
//     type: 'Human',
//     head: 1,
//     legs: 2
// };
//
// var Human2 = Human;
//
// var Superhumen = Object.create( Human );
// Superhumen.type //Human
// Superhumen.head //1
// Superhumen.legs //2
// Superhumen.r //undefined

/**
 * Удаление свойства
 */
// var Human = {
//     type: 'Human',
//     head: 1,
//     legs: 2
// };
//
// delete Human.type;
// Human.type; //undefined


// var Human = {
//     type: 'Human',
//     head: 1,
//     legs: 2
// };
//
// var Superhumen = Object.create( Human );
// console.log( Superhumen.type ); //'Human'
//
// Superhumen.type = '23';
// console.log( Superhumen.type ); //23
// delete Superhumen.type;
// console.log( Superhumen.type ); //'Human'

