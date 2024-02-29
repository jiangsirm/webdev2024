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