function rollDice(inputString) {
    const numbers = inputString.match(/\d+/g);
    const diceNum = Number(numbers[0]);
    const diceSize = Number(numbers[1]);
    let result = 0;
    for(var i = diceNum; i > 0; i--) {
       result += 1 + Math.floor(Math.random() *  (diceSize))
    }
    return result
}

console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))
console.log(rollDice("3d6"))