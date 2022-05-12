//Looping a triangle
var str = "#";
while (str.length <= 7) {
    console.log(str);
    str += "#";
}
console.log();
//FizzBuzz
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "FizzBuzz");
    }
    else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i, "Buzz");
    }
    else if (i % 3 === 0) {
        console.log(i, "Fizz");
    }
}
console.log();
//Chessboard
var size = 8;
for (var i = 1; i <= size; i++) {
    var str_1 = "";
    for (var j = 1; j <= size; j++) {
        if (i % 2 === j % 2) {
            str_1 += " ";
        }
        else {
            str_1 += "#";
        }
    }
    console.log(str_1);
}
console.log("Filtering arrays\n");
/**
 * функция использует аргумент test, который принимате функцию для того, чтобы
 * заполнить пробел в вычислении - процесс. для решения, какие элементы нужно сохранять.
 *
 */
function filter(array, test) {
    var passed = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
var SCRIPTS = [
    {
        name: "Coptic",
        ranges: [
            [994, 1008],
            [11392, 11508],
            [11513, 11520]
        ],
        direction: "ltr",
        year: -200,
        living: false,
        link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
    },
    {
        name: "Adlam",
        ranges: [
            [125184, 125259],
            [125264, 125274],
            [125278, 125280]
        ],
        direction: "rtl",
        year: 1987,
        living: true,
        link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
    },
    {
        name: "Armenian",
        ranges: [
            [1329, 1367],
            [1369, 1376],
            [1377, 1416],
            [1418, 1419],
            [1421, 1424],
            [64275, 64280]
        ],
        direction: "ltr",
        year: 405,
        living: true,
        link: "https://en.wikipedia.org/wiki/Armenian_alphabet"
    },
    {
        name: "Mongolian",
        ranges: [
            [6144, 6146],
            [6148, 6149],
            [6150, 6159],
            [6160, 6170],
            [6176, 6264],
            [6272, 6315],
            [71264, 71277]
        ],
        direction: "ttb",
        year: 1204,
        living: false,
        link: "https://en.wikipedia.org/wiki/Mongolian_script"
    },
    {
        name: "Han",
        ranges: [
            [11904, 11930],
            [11931, 12020],
            [12032, 12246],
            [12293, 12294],
            [12295, 12296],
            [12321, 12330],
            [12344, 12348],
            [13312, 19894],
            [19968, 40939],
            [63744, 64110],
            [64112, 64218],
            [131072, 173783],
            [173824, 177973],
            [177984, 178206],
            [178208, 183970],
            [183984, 191457],
            [194560, 195102]
        ],
        direction: "ltr",
        year: -1100,
        living: true,
        link: "https://en.wikipedia.org/wiki/Chinese_characters"
    },
    {
        name: "SignWriting",
        ranges: [
            [120832, 121484],
            [121499, 121504],
            [121505, 121520]
        ],
        direction: "ttb",
        year: 1974,
        living: true,
        link: "https://en.wikipedia.org/wiki/SignWriting"
    }
];
console.log(filter(SCRIPTS, function (script) { return script.living; }));
console.log(filter(SCRIPTS, function (script) { return script.direction === "ttb"; }));
console.log("Transforming with map\n");
//Transforming with map
/**
 * метод трансформирует массив, с помощью применения функции ко всем его элементам
 * и создания ногово массива из возвращенных значений. Новый массив будет иметь ту
 * же длину. что и входной массив, но его контент будет приведен в соответсвии с
 * новой формой данной функуицей transform
 */
function map(array, transform) {
    var mapped = [];
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var element = array_2[_i];
        mapped.push(transform(element));
    }
    return mapped;
}
var rtlScripts = SCRIPTS.filter(function (s) { return s.direction === "ttb"; });
console.log(map(rtlScripts, function (s) { return s.name; }));
console.log("Summarizing with\n");
//Summarizing with
/**
 * Еще одна общая вещь, которую можно делять с массивами - вычисление одного
 * значения из них. Эта функция создает значение с помощью повторяющегося
 *  получения одного элемента из массива и совмещения его с текущим
 * значением. При скложении номеров, вы начинаете с нулевого номера,
 * и для каждого элемента делаете его добавление к сумме.
 */
function reduce(array, combine, start) {
    var current = start;
    for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
        var element = array_3[_i];
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([1, 2, 3, 4], function (a, b) { return a + b; }, 0));
/**
 * функция сокращает назначенные диапазоны в скрипт с помощью суммирования их размеров.
 */
function characterCount(script) {
    return script.ranges.reduce(function (count, _a) {
        var from = _a[0], to = _a[1];
        return count + (to - from);
    }, 0);
}
console.log(SCRIPTS.reduce(function (a, b) {
    return characterCount(a) < characterCount(b) ? b : a;
}));
console.log("Composability\n");
//Composability
function average(array) {
    return array.reduce(function (a, b) { return a + b; }) / array.length;
}
console.log(Math.round(average(SCRIPTS.filter(function (s) { return s.living; }).map(function (s) { return s.year; }))));
console.log(Math.round(average(SCRIPTS.filter(function (s) { return !s.living; }).map(function (s) { return s.year; }))));
console.log("Strings and character codes\n");
//Strings and character codes
function characterScript(code) {
    for (var _i = 0, SCRIPTS_1 = SCRIPTS; _i < SCRIPTS_1.length; _i++) {
        var script = SCRIPTS_1[_i];
        if (script.ranges.some(function (_a) {
            var from = _a[0], to = _a[1];
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}
console.log(characterScript(6161));
