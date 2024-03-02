import "./Grid.css"
import { GridClassContext } from "./GridClassProvider"
import React, {useContext} from "react"

export default function Grid() {
    const {GridClass, updateGridClass} = useContext(GridClassContext)

    function clickBox(index) {
        updateGridClass(index, GridClass[index] === "box" ? "box select": "box")
    }

    function getGrid(){
        let gridItems = []
        for (let i = 0; i < 4; i++) {
            gridItems.push(<div className={GridClass[i]} onClick={() => clickBox(i)} key={i}></div>)
        }
        return gridItems;
    }

    return(
        <div className="gridContainer">
            {getGrid()}
        </div>
    )
}