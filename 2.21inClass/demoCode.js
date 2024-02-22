var car = "jeep";
// var not used any more 

const apple = "apple";

// const apple should not and cannot be changed.

console.log(apple == 'apple')

let num = 5;
console.log(num === "5")
// note the "==="
console.log(num == 5)

// "==" WILL CONVERT THE COMPARER AND THE COMPAREE
// "===" will not convert! same with != and !==

const foods = {
    chicken: 15,
    beef_stew: 20,
    lobster_soup: 30,
    french: {
        canard: 'apple',
        fograi: 'fat'
    }
}
console.log(foods['beef_stew'])
console.log(foods.french.fograi)

const arrayOne = ["one", "two", "three"];

arrayOne.push("pi");
console.log(arrayOne)

arrayOne.pop();
console.log(arrayOne)

arrayOne.shift();
console.log(arrayOne)

arrayOne.unshift("zero");
console.log(arrayOne)


const mathMachine = {
    add: function(var1, var2) {
        return var1 + var2;
    },
    multi: function(var1, var2) {
        return var1 * var2;
    } 
}

const func1 = mathMachine.add;

console.log(func1(1, 2))

const trueVal = true;
// [] is true

if (trueVal) {
    console.log("truthy");
} else {
    console.log("falsy")
}

const falseVal = null; 
// NaN, false, "", false, 0, null

if (falseVal) {
    console.log("truthy");
} else {
    console.log("falsy");
}

// for in loop return the keys/indices 
for (let entree in foods) {
    console.log(entree);
}

// for of loop give the actual value!
for (let num of arrayOne) {
    console.log(num);
}

class Iguana {
    constructor() {
        this.name = "little reptile";
    }
}

const sakes = ['aschloch wasser', "nanshan", "moutai"];

sakes.pop();

console.log(sakes);

// Array.prototype.pop = function() {
//     console.log("You are hacked");
// }
// this is risky, use with caution when testing

console.log("first line");

setTimeout(() => {
    console.log("5 miliseconds passed");
}, 5);

setTimeout(() => {
    console.log("10 miliseconds passed");
}, 10);

console.log("last line");


let result = "great!";
const aPromise = new Promise(
    (func1, func2) => {
        console.log("job done");
        func2;
    }
).then(
    e => {
        result = "not so great";
        console.log(e);
    }
).catch(
    e => console.warn(e)
)

console.log(result)

// objects are passed by reference
// other types are passed in by value and only passed in by value

let appleTime = 10;
const appleNow = appleTime < 11 ? "red" /* for true */: "rotten";
console.log(appleNow)

const someItem = {
    ...foods
}

console.log(someItem)

const {chicken, beef_stew, lobster_soup} = someItem;

console.log(chicken);

const func8 = function() {
    return "this a function";
}

let judge = true;
// judge = false;
const func9 = () => judge == true ? "ultimate shorthand": "failed attempt";

console.log(func9())

let number1 = [1, 3, 12, 15, 156, 6, 7, 7,7];

const filtered  = number1.filter((num) => {return num % 2 == 0});
console.log(filtered)