import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ListItems } from './RandomList'
import Practice from './Practice'

function App() {
  const [count, setCount] = useState(0);
  const [conditionNow, setTF] = useState(false);
  const num1 = 42;

  function switchTF() {
    setTF(conditionNow ? false: true)
  }

  function increaseCount() {
    setCount(count + 1)
  }

  function doubleTask() {
    switchTF();
    increaseCount();
  }

  let component = (
    <div>This Number is: {num1}</div>
  )

  if (conditionNow) {
    component = (
    <div>
      <div>This number has no meaning</div>
    </div>)
  }

  return (
    <>
      <Practice numInput = {5}/>
      <div>Hello This is a first react line</div>
      <ListItems/>
      {component}
      <div>
        <a target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>In Class Practice</h1>
      <div className="card">
        <button onClick={() => switchTF()}>
          Condition is {conditionNow.toString()}
        </button>
        <div></div>
        <button onClick={() => doubleTask()}>
          Do things Together {conditionNow.toString()} {count}
        </button>
        <div></div>
        <button onClick={() => increaseCount()}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
