import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ListItems } from './RandomList'

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
      <div>Hello This is a first react line</div>
      <ListItems/>
      {component}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
