//Looping a triangle
let str: string = "#";

while (str.length <= 7) {
    console.log(str);
    str += "#";
}

console.log();

//FizzBuzz
for(let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "FizzBuzz");        
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i, "Buzz");
    } else if (i % 3 === 0) {
        console.log(i, "Fizz");
    }
}

console.log();

//Chessboard
let size: number = 8;

for (let i: number = 1; i <= size; i++) {
    let str: string = "";
    for (let j: number = 1; j <= size; j++) {
        if (i % 2 === j % 2) {
            str += " ";
        } else {
            str += "#";
        }
    }
    console.log(str);    
}

console.log("Filtering arrays\n");

//Filtering arrays
type Script = {
    name: string,
    ranges: number[][],
    direction: string,
    year: number,
    living: boolean,
    link?: string
}

/**
 * функция использует аргумент test, который принимате функцию для того, чтобы 
 * заполнить пробел в вычислении - процесс. для решения, какие элементы нужно сохранять.
 * 
 */
function filter(array: Script[], test: Function): Script[] {
    let passed: Script[] = [];

    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }

    return passed;
}

const SCRIPTS: Script[] = [
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
        name:	"Han",
        ranges:	[
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
        direction:	"ltr",
        year:	-1100,
        living:	true,
        link:	"https://en.wikipedia.org/wiki/Chinese_characters"
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
        name:	"Cyrillic",
        ranges:	[
            [1024, 1157],
            [1159, 1328],
            [7296, 7305],
            [7467, 7468],
            [7544, 7545],
            [11744, 11776],
            [42560, 42656],
            [65070, 65072]
        ],
        direction:	"ltr",
        year:	950,
        living:	true,
        link:	"https://en.wikipedia.org/wiki/Cyrillic_script"
    }
];

console.log(filter(SCRIPTS, (script: Script) => script.living));
console.log(filter(SCRIPTS, (script: Script) => script.direction === "ttb"));

console.log("Transforming with map\n");

//Transforming with map
/**
 * метод трансформирует массив, с помощью применения функции ко всем его элементам
 * и создания ногово массива из возвращенных значений. Новый массив будет иметь ту 
 * же длину. что и входной массив, но его контент будет приведен в соответсвии с 
 * новой формой данной функуицей transform
 */
function map(array: Script[], transform: Function): Script[] {
    let mapped: Script[] = [];

    for (let element of array) {
        mapped.push(transform(element));
    }

    return mapped;
}

let rtlScripts = SCRIPTS.filter((s: Script) => s.direction === "ttb");
console.log(map(rtlScripts, (s: Script) => s.name));

console.log("Summarizing with\n");

//Summarizing with
/**
 * Еще одна общая вещь, которую можно делять с массивами - вычисление одного 
 * значения из них. Эта функция создает значение с помощью повторяющегося
 *  получения одного элемента из массива и совмещения его с текущим 
 * значением. При скложении номеров, вы начинаете с нулевого номера,
 * и для каждого элемента делаете его добавление к сумме.
 */
function reduce(array: any[], combine: Function, start: number): number {
    let current: number = start;

    for (let element of array) {
        current = combine(current, element);
    }

    return current;
}

console.log(reduce([1, 2, 3, 4], (a: number, b: number) => a + b, 0));

/**
 * функция сокращает назначенные диапазоны в скрипт с помощью суммирования их размеров.
 */
function characterCount(script: Script) {
    return script.ranges.reduce((count: number, [from, to]: number[]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

console.log("Composability\n");

//Composability
function average(array: any[]) {
    return array.reduce((a, b) => a + b) / array.length
}

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year)
)));
console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year)
)));

console.log("Strings and character codes\n");

//Strings and character codes
/**
 * функция для определения того, какой именно скрипт используется в тексте.
 * метод some - еще одна функция высшего порядка. Она принимает функцию test 
 * и говорит вовзращает ли функция true для любого элемента в массиве
 */
function characterScript(code: number) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]: number[]) => {
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
function countBy(items: any[], groupName: Function) {
    let counts: any[] = [];

    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name === name);
        if (known === -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }

    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

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
function textScripts(text: any) {
    let scripts = countBy(text, char => {        
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name !== "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total === 0) return "No scripts found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)} % ${name}`;
    }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

//Exercises
//Flattening
console.log("Flattering \n");

let arrays = [[1, 2, 3], [4, 5], [6]];
let flattenArray: number[] = [];

for (let element of arrays) {    
    flattenArray = flattenArray.concat(element);
}

console.log(flattenArray);

console.log("Your own loop \n");
//Your own loop
function loop(num: number, test: Function, update: Function, body: Function) {
    while (test(num)) {
        body(num);
        num = update(num);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

console.log("Everything \n");
//Your own loop
function every(array: number[], test: Function) {
    for (let element of array) {
        if (!test(element)) {
            return false
        }
    }

    return true;
}

// console.log(every([1, 3, 5], n => n < 10));
// console.log(every([2, 4, 16], n => n < 10));
// console.log(every([], n => n < 10));

function everySome(array: number[], test: Function) {
    return array.some(element => !test(element));
}

// console.log(everySome([1, 3, 5], n => n < 10));
// console.log(everySome([2, 4, 16], n => n < 10));
// console.log(everySome([], n => n < 10));

console.log("Dominant writing direction \n");
//Dominant writing direction
function dominantDirection(text: any) {
    let scripts = countBy(text, char => {        
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name !== "none");

    if (scripts.length === 0) {
        return "ltr";
    }

    return scripts.reduce((a, b) => a.count > b.count ?  a : b);
}

// console.log(dominantDirection("Hello!"));
// console.log(dominantDirection("Hey, այբըթթօծա"));

//Project: A Robot
console.log("Project: A Robot \n");

const roads: string[] = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges: string[]) {
    let graph = Object.create(null);

    function addEdge(from: string, to: string) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    place: string;
    parsels: any[];

    constructor (place: string, parsels: any) {
        this.place = place;
        this.parsels = parsels;
    }

    move(destination: string) {
        console.log("roadGraph", roadGraph);
        console.log("this.place", this.place);
        console.log("this.parsels", this.parsels);
        
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parsels.map((p: { place: string; address: any; }) => {
                if (p.place != this.place) return p;
            }).filter((p: { place: string; address: any; }) => p.place != p.address);

            return new VillageState(destination, parcels);
        }
    }
}

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);

let next = first.move("Alice's House");

console.log(next.place);
console.log(next.parsels);
console.log(first.place);
