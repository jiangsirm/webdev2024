import { useState, useContext } from 'react'
import Practice from './Practice';
import { NumberContext } from './Practice2';

export default function Home() {
    const[numberTrackState, setNumbertrackState] = useContext(NumberContext);
    const [num2, setNum2] = useState(42);

    const [numberState, setNumberState] = useState({
        num1: 42,
        num2: 84
    })

    let num = 40 + 2;

    function app() {
        num = num > 200000 ? 42: num * (Math.random() + 1);
        console.log(num);
    }

    const app2 = () => {
        setNum2(num2 > 200000 ? 42: num2 * (Math.random() + 1));
    }

    function randomNum(number) {
        console.log(Math.floor(number * Math.random()))
    }

    const foods = ["kun", "chicken", "wanzi"];
    const container = [];

    for (let str of foods) {
        container.push(
            <div>{str}</div>
        )
    }

    return (
        <div>
            {container}
            <Practice numInput={num} bgColor={"blue"} click={app2}/>
            <Practice numInput={num2} bgColor={"violet"} click={app}></Practice>
            The Truth is {numberTrackState.second}<br></br>
            <button onClick={() => app()}>Click Num</button><br></br>
            The Truth is {num2}<br></br>
            <button onClick={() => app2()} >Click Num2</button><br></br>
            The Truth is {num2}
        </div>
    )
}