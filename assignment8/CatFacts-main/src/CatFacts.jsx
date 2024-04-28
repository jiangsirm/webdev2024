import axios from 'axios';
import CatLogo from './assets/cat.svg'
import { useState, useEffect} from 'react';
import './CatFacts.css';

// Student: Yuchen Jiang

function CatFacts() {

    // you may need to add other code elsewhere!
    const [message, setMessage] = useState("Loading");

    useEffect(() => {
        generateCatFact();
    },[])

    function generateCatFact() {
        setMessage("Loading")
        axios.get('https://catfact.ninja/fact')
            .then(response => {
                const res = response.data.fact;
                setMessage(res);
                console.log
            })
            .catch( error => {
                console.error("This happens when fetching cat facts: ", error);
                setMessage("Something went wrong.");
            });

    }

  return (
    <div className="App">
        <div className='catFactsText'>
            {message}
            {/* The cat fact should be displayed here*/} 
        </div>
        <div>
            <button onClick={generateCatFact} className="catFactBtn">
                Click me for a cat fact!
            </button>
        </div>
        <div>
            <img src={CatLogo} className="catFactImg" />
        </div>
    </div>
  )
}

export default CatFacts
