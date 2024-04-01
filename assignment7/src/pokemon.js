const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

// replace this string with your full name
const name = "Yuchen Jiang"

console.log(`My name is ${name}`)

// use this list as your temporary database!
// note that it will reset every time you restart your server
const myPokemon = [{
    id: "fc10b559-872c-43cd-bad2-f02e2e0a2d58", name: "Pikachu", health: 10, level: 1
}];

router.get('/', function(req, res) {
    // return all pokemon
    return res.status(200).json(myPokemon);
});

router.post('/', (req, res) => {
    const reqSent = req.body;
    let newPoke = {
        name: reqSent.name,
        level: reqSent.level ?? Math.floor(Math.random() * 10 + 1),
        health: reqSent.health ?? Math.floor(Math.random() * 91 + 10)
    };

    for (let i = 0; i < myPokemon.length; i++) {
        const curPoke = myPokemon[i];
        if (curPoke.name === newPoke.name) {
            return res.status(400).json({
                message: newPoke.name + " is already in the Pokedex. Request Failed",
                pokemon: curPoke
            });
        }
    }

    newPoke.id = uuid();
    myPokemon.push(newPoke);
    let message = newPoke.name + " is added to the Pokedex!";
    return res.status(200).json({message, newPoke});
});

router.get('/:pokemonId', function (req, res) {
    const pokeid = req.params.pokemonId;
    for (let i = 0; i < myPokemon.length; i++) {
        const curPoke = myPokemon[i];
        if (curPoke.id === pokeid) {
            return res.status(200).json(curPoke);
        }
    }

    return res.status(404).send("Pokemon Not Found!");
});

router.put('/:pokemonId', function(req, res) {
    const pokeid = req.params.pokemonId;
    const pokeHolder = req.body;
    const newPoke = {
        name: pokeHolder.name.toString(),
        id: pokeHolder.id.toString(),
        health: isNaN(pokeHolder.health) ? Math.floor(Math.random() * 91 + 10) : parseInt(pokeHolder.health),
        level: isNaN(pokeHolder.level) ? Math.floor(Math.random() * 10 + 1) : parseInt(pokeHolder.level)
    }

    for (let i = 0; i < myPokemon.length; i++) {
        const curPoke = myPokemon[i];
        if (curPoke.id === pokeid) {
            myPokemon[i] = newPoke;
            return res.status(200).json(myPokemon[i]);
        }
    }

    return res.status(404).send("Pokemon Not Found!"); 
})

router.delete('/:pokemonId', function(req, res) {
    const pokeid = req.params.pokemonId;

    for (let i = 0; i < myPokemon.length; i++) {
        const curPoke = myPokemon[i];
        if (curPoke.id === pokeid) {
            myPokemon.splice(i, 1);
            return res.status(200).send("Pokemon with " + pokeid + " is gone.");
        }
    }
    return res.status(200).send("Pokemon with " + pokeid + " is gone.");
    // delete pokemon if pokemonId matches the id of one
    // return 200 even if no pokemon matches that Id
})

module.exports = router;