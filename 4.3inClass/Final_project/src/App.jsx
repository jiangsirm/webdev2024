import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {

  const[userNameState, setUserNameState] = useState("Do I know this Guy?");

  function iknowAGuy() {
    console.log("running i know a guy");
    axios.get("https://randomuser.me/api/")
      .then(function(res) {
        console.log(res.data.results[0].name)
        console.log("I know this guy")
      });
    console.log("finishing i know a guy");
  }

  async function iAlsoKnowAGuy() {
    const res = await axios.get("https://randomuser.me/api/");
    let name = res.data.results[0].name
    console.log(res.data.results[0].name)
    setUserNameState("I know " + name.title + " " + name.first + " " + name.last)
    console.log("I Also know this guy")
  }

  useEffect(() => {
    console.log("App Runing");
    iknowAGuy();
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

export default App
