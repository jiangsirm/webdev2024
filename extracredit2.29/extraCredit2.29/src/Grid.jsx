import { useState } from "react";
import "./Grid.css"

export default function Grid() {
    const[boxClass, setBoxClass] = useState(Array(9).fill("box"));

    function select(index, array) {
        return array[index] === 'box' ? 'box selected': 'box';
    }

    function onClick(index) {
        let update = [...boxClass];
        update[index] = select(index, update);
        if (index % 3 > 0) {
            update[index - 1] = select(index - 1, update)
        }
        if (index % 3 < 2) {
            update[index + 1] = select(index + 1, update)
        }

        if (Math.floor(index / 3) > 0) {
            update[index - 3] = select(index - 3, update)
        }

        if (Math.floor(index / 3) < 2) {
            update[index + 3] = select(index + 3, update)
        }
        setBoxClass(update);
    }

    function getBox() {
        let boxes = []
        for (let i = 0; i < 9; i++) {
            boxes.push(<div key={i} className={boxClass[i]} onClick={() => onClick(i)}>{i}</div>)
        }
        return boxes;
    }

    return (
        <div id="gridContainer">
            {getBox()}
        </div>
    )
}