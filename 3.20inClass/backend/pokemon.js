const express =require(
    "express"
)

const router = express.Router();

const pokeColors = [
    {name: "pilaoshu", color: "yellow"},
    {name: "shanaiduo", color: "Waifu!"},
    {name: "lucario", color: "Awesome!"}
];

router.post("/",
    function (req, res) {
        const reqBody = req.body;
        const newPoke = {
            name: reqBody.name,
            color: reqBody.color
        }
        pokeColors.push(newPoke);
        res.send(reqBody.name + " get'em !");
    }
)

router.put("/",
    function (req, res) {
        const reqBody = req.body;
        const newPoke = {
            name: reqBody.name,
            color: reqBody.color
        }

        for (let i = 0; i < pokeColors.length; i++) {
            const pokemonI = pokeColors[i];
            if (newPoke.name === pokemonI.name) {
                const old = pokemonI.color;
                pokemonI.color = newPoke.color;
                return res.send(pokemonI.name + " was " + old + "\n" + "Now " + pokemonI.name +  " is " + pokemonI.color);
            }
        }

        return res.send(reqBody.name + " is not in the pokedex!");
    }
)

router.delete("/",
    function (req, res) {
        const reqBody = req.body;
        const pokeName = reqBody.name;

        for (let i = 0; i < pokeColors.length; i++) {
            const pokemonI = pokeColors[i]
            if (pokeName === pokemonI.name) {
                pokeColors.splice(i, 1);
                return res.send("Bye bye " + pokeName +  " !");
            }
        }

        return res.send(reqBody.name + " is not in the pokedex!");
    }
)

router.get( "/:pokeName",
    function(req, res) {
        const pokemonName = req.params.pokeName;
        for (let i = 0; i < pokeColors.length; i++) {
            const pokemonI = pokeColors[i]
            if (pokemonName === pokemonI.name) {
                return res.send(pokemonName +  " is " + pokemonI.color);
            }
        }
        return res.send("There is no " + pokemonName + ". Frustrate you not!")
    }
)

router.get( "/",
    function(req, res) {
        const pokemonName = req.query.name;
        for (let i = 0; i < pokeColors.length; i++) {
            const pokemonI = pokeColors[i]
            if (pokemonName === pokemonI.name) {
                return res.send(pokemonName +  " is " + pokemonI.color);
            }
        }
        return res.send("There is no " + pokemonName + ". Frustrate you not!")
    }
)

router.post( "/",
    function(req, res) {
        res.send("This is charizard")
    }
)

module.exports = router;