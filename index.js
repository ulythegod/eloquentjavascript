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
    },
    {
        name: "Latin",
        ranges: [
            [65, 91],
            [97, 123],
            [170, 171],
            [186, 187],
            [192, 215],
            [216, 247],
            [248, 697],
            [736, 741],
            [7424, 7462],
            [7468, 7517],
            [7522, 7526],
            [7531, 7544],
            [7545, 7615],
            [7680, 7936],
            [8305, 8306],
            [8319, 8320],
            [8336, 8349],
            [8490, 8492],
            [8498, 8499],
            [8526, 8527],
            [8544, 8585],
            [11360, 11392],
            [42786, 42888],
            [42891, 42927],
            [42928, 42936],
            [42999, 43008],
            [43824, 43867],
            [43868, 43877],
            [64256, 64263],
            [65313, 65339],
            [65345, 65371]
        ],
        direction: "ltr",
        year: -700,
        living: true,
        link: "https://en.wikipedia.org/wiki/Latin_script"
    },
    {
        name: "Cyrillic",
        ranges: [
            [1024, 1157],
            [1159, 1328],
            [7296, 7305],
            [7467, 7468],
            [7544, 7545],
            [11744, 11776],
            [42560, 42656],
            [65070, 65072]
        ],
        direction: "ltr",
        year: 950,
        living: true,
        link: "https://en.wikipedia.org/wiki/Cyrillic_script"
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
/**
 * функция для определения того, какой именно скрипт используется в тексте.
 * метод some - еще одна функция высшего порядка. Она принимает функцию test
 * и говорит вовзращает ли функция true для любого элемента в массиве
 */
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
console.log("Recognizing text\n");
/**
 * функция ожидает коллекцию (все, по чему пожно пройтись в цилом for/of)
 * и функцию которая подсчитывает груповое имя данного элемента
 */
//Recognizing text
function countBy(items, groupName) {
    var counts = [];
    var _loop_1 = function (item) {
        var name_1 = groupName(item);
        var known = counts.findIndex(function (c) { return c.name === name_1; });
        if (known === -1) {
            counts.push({ name: name_1, count: 1 });
        }
        else {
            counts[known].count++;
        }
    };
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        _loop_1(item);
    }
    return counts;
}
console.log(countBy([1, 2, 3, 4, 5], function (n) { return n > 2; }));
/**
 * функция считывает символы по их имени используя characterScript
 * чтобы определить к какому алфавиту они относятся. Фильтр
 * отбрасывает все "none" из полученного массива после этого.
 * Чтобы подсчитать проценты, нам сначала нужно общее количество
 * символов, которые принадлежат алфавиту, это можно сделать функцией reduce.
 * Если нет таких символов, функция вернет специальную строку.
 * Затем, она трансформирует подсчитанные данные в читаемую строку
 * с помощью map и соединит их с join.
 */
function textScripts(text) {
    var scripts = countBy(text, function (char) {
        var script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(function (_a) {
        var name = _a.name;
        return name !== "none";
    });
    var total = scripts.reduce(function (n, _a) {
        var count = _a.count;
        return n + count;
    }, 0);
    if (total === 0)
        return "No scripts found";
    return scripts.map(function (_a) {
        var name = _a.name, count = _a.count;
        return "".concat(Math.round(count * 100 / total), " % ").concat(name);
    }).join(", ");
}
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
//Exercises
//Flattening
console.log("Flattering \n");
var arrays = [[1, 2, 3], [4, 5], [6]];
var flattenArray = [];
for (var _i = 0, arrays_1 = arrays; _i < arrays_1.length; _i++) {
    var element = arrays_1[_i];
    flattenArray = flattenArray.concat(element);
}
console.log(flattenArray);
console.log("Your own loop \n");
//Your own loop
function loop(num, test, update, body) {
    while (test(num)) {
        body(num);
        num = update(num);
    }
}
loop(3, function (n) { return n > 0; }, function (n) { return n - 1; }, console.log);
console.log("Everything \n");
//Your own loop
function every(array, test) {
    for (var _i = 0, array_4 = array; _i < array_4.length; _i++) {
        var element = array_4[_i];
        if (!test(element)) {
            return false;
        }
    }
    return true;
}
console.log(every([1, 3, 5], function (n) { return n < 10; }));
console.log(every([2, 4, 16], function (n) { return n < 10; }));
console.log(every([], function (n) { return n < 10; }));
function everySome(array, test) {
    return array.some(function (element) { return !test(element); });
}
console.log(everySome([1, 3, 5], function (n) { return n < 10; }));
console.log(everySome([2, 4, 16], function (n) { return n < 10; }));
console.log(everySome([], function (n) { return n < 10; }));
console.log("Dominant writing direction \n");
//Dominant writing direction
function dominantDirection(text) {
    var scripts = countBy(text, function (char) {
        var script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(function (_a) {
        var name = _a.name;
        return name !== "none";
    });
    if (scripts.length === 0) {
        return "ltr";
    }
    return scripts.reduce(function (a, b) { return a.count > b.count ? a : b; });
}
console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, այբըթթօծա"));
