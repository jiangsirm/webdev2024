// const http = require("http")

// const server = http.createServer(
//     (req, res) => {
//         res.writeHead(200, {"Content-Type": 'text/plain'})
//         res.end("Great! this works")
//     }
// )

// server.listen(8000, "127.0.0.1", () => {
//     console.log(`Starting server`);
// })

const express = require("express");
// const helper = require("./helper");
const pokemon = require("./backend/pokemon.cjs")
const user = require("./backend/trainer.cjs")
const mongoose = require("mongoose")

const app = express();

const mongoDBEndPoint = "...."

mongoose.connect(mongoDBEndPoint, {
    useNewUrlParser:true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/pokemon", pokemon);
app.use("/api/user", user);

// app.get('/', function(request, response){
//     response.send(helper.wordFunction())
// });

app.get('/', function(request, response){
    response.send("Paqiuli Go!")
});

app.put("/", function(request, response) {
    response.send("Pulling on your weee weee's!")
    }
)

app.listen(8000, function(){
    console.log("deep dark fantasy");
});