import "./CellCount.css"
import { getLiveCells } from "./GridUtilities";
import { useContext, useEffect } from "react";
import { GridContext } from "./GridProvider";

export default function CellInfo(props) {

    const [Grid, updateGrid] = useContext(GridContext)
    const {        
        gridWidth,
        gridHeight,
        liveCell,
        boxClass
    } = Grid;

    useEffect(() => {
        updateGrid("liveCell", getLiveCells(gridWidth, gridHeight, boxClass));
    }, [boxClass]);
    
    return (
        <div className="cellInfo">
            <span>Current Live Cells: {liveCell}</span>
        </div>
    )
}