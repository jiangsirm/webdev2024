const carColor = {
    car1: "red",
    car2: "blue",
    car3: "green"
}


const {
    car1,
    car2,
    car3
} = carColor;

car1;

const foods = ["burger", "tofu", "apple", "kun"];
const [first, second, ...remainder] = foods;

first
second
remainder

function getFood() {
    return first;
}

const func1 = function() {
    return second;
}

const food1 = func1();
food1;
const food2 = getFood();

const func2 = (one, two) => one + two; 

const result = func2(food1, food2);
result

carColor

const moreColor = {
    ...carColor,
    chick: "pink",
    dino: "green",
    car1: "blue"
}
moreColor

moreColor.car1 = "red"

moreColor

moreColor["car1"] = "aster"

moreColor

console.log(returnSomething())
// above is good

function returnSomething() {
    return moreColor["chick"]
}

console.log(returnSomething())

// console.log(apple())
// above line is not good

let apple = () => {
    return moreColor["chick"]
}

console.log(apple())

let condition = "";

if (condition) {
    console.log("it is true")
} else {
    console.log("it is falsy")
}

const passByRef = {
    chick: "kun"
};

function addRap(obj) {
    obj.rap = "Rap"
};

addRap(passByRef)

passByRef;

// object is changed object is modifed directly

let kun = "kun"

function addA(str) {
    str += "A"
    console.log(str)
}

addA(kun)
addA("Heizi")

// destructuring

kun;

const{ chick, rap } = passByRef;

chick
rap