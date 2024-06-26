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

for (let f in foods) {
    console.log(f)
}

for (let f of foods) {
    console.log(f)
}
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

passByRef

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

console.log(x === undefined);
var x = "aha";

let c = "gay";
console.log(c);


// console.log("Who is gay?");

// setTimeout(() => {
//     console.log("Why are you gay?")
// }, 10);

// console.log("Who says I\'m gay?")

// function mystery() {
//     var chooseNumber = function() { return 7; };
//     return chooseNumber();
//     var chooseNumber = function() { return 10; };
//   }
//   console.log(mystery());

//   const numbers = [1, 2, 3];

// const newNumbers = [...numbers, 4, 5];

// console.log(newNumbers);

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];
let m = 3;
let n = 3;

var merge = function(nums1, m, nums2, n) {
    const nums3 = [...nums1];
    let idxThree = 0;
    let idxTwo = 0;
    let idxOne = 0;
    while (idxThree < m && idxTwo < n) {
        if (nums3[idxThree] > nums2[idxTwo]){
            nums1[idxOne] = nums2[idxTwo];
            idxTwo++;
        } else {
            nums1[idxOne] = nums3[idxThree];
            idxThree++;
        }
        idxOne++;
    }

    if (idxThree === m) {
        while (idxTwo < n) {
            nums1[idxOne] = nums2[idxTwo];
            idxTwo++;
            idxOne++;
        }
    }

    if (idxTwo === n) {
        while (idxThree < m) {
            nums1[idxOne] = nums3[idxThree];
            idxThree++;
            idxOne++;
        }
    }
};

console.log(merge(nums1, m, nums2, n))