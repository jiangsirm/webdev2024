import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function Pokemon() {

  const[userNameState, setUserNameState] = useState("Do I know this Guy?");

  function iknowAGuy() {
    console.log("running i know a guy");
    // axios.get("https://randomuser.me/api/")
    //   .then(function(res) {
    //     console.log(res.data.results[0].name)
    //     console.log("I know this guy")
    //   });
    console.log("finishing i know a guy");
  }

  async function iAlsoKnowAGuy() {
    console.log("this is pokemon!")
    const res = await axios.get("/api/pokemon");
    console.log(res.data)
    let pokemons = [];
    for (let i = 0; i < res.data.length; i++) {
      const poke = res.data[i]
      pokemons.push(<div>{poke.name + " is " + poke.color}</div>)
    }
    setUserNameState(pokemons)
  }

  useEffect(() => {
    console.log("App Runing");
    // iknowAGuy();
    iAlsoKnowAGuy();
  },[])

  return (
    <>
     <div>
      {userNameState}
     </div>
    </>
  )
}

export default Pokemon
