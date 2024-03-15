import "./Grid.css"
import { GridClassContext } from "./GridClassProvider"
import React, {useContext} from "react"

export default function Grid() {
    const [GridClass, updateGridClass] = useContext(GridClassContext)

    function clickBox(index) {
        let prev = GridClass.boxGrid;
        prev[index] = prev[index] === "box" ? "box select": "box";
        updateGridClass("boxGrid", prev)
    }

    function getGrid(){
        let gridItems = []
        for (let i = 0; i < 4; i++) {
            gridItems.push(<div className={GridClass.boxGrid[i]} onClick={() => clickBox(i)} key={i}></div>)
        }
        return gridItems;
    }

    return(
        <div className="gridContainer">
            {getGrid()}
        </div>
    )
}