import "./ToolBar.css"
import { GridContext } from "./GridProvider";
import { useContext, useEffect } from "react";
import {getRandomCells, getHeatDegree, getLiveCells} from "./GridUtilities.js";
import getNextGrid from "./GetNextGrid.js"

export default function ToolBar() {
    const [Grid, updateGrid] = useContext(GridContext)
    const {        
        gridWidth,
        gridHeight,
        boxClass,
        heatMap,
        liveCell,
        toggleAutoplay,
        toggleHeatMap
    } = Grid;

    function resetGrid() {
        updateGrid("toggleAutoplay", false);
        updateGrid("boxClass", Array(40 * 40).fill('box'));
        updateGrid("heatMap", Array(40 * 40).fill(0));
    }

    function handleAutoplay() {
        updateGrid("toggleAutoplay", !toggleAutoplay);
    }

    function handleHeatMap() {
        updateGrid("toggleHeatMap", !toggleHeatMap);
    }

    function forwardOneFrame() {
        updateGrid("toggleAutoplay", false);
        updateGrid("boxClass", getNextGrid(gridWidth, gridHeight, boxClass));
    }
    
    function randomizeLiveCell(width, height) {
        updateGrid("heatMap", Array(40 * 40).fill(0));
        updateGrid("toggleAutoplay", false);
        updateGrid("boxClass", getRandomCells(width, height));
    }

    function changeWidth(event) {
        const newWidth = parseInt(event.target.value);
        if(isNaN(newWidth)) {
            updateGrid("gridWidth", NaN);
        } else if (newWidth < 3) {
            updateGrid("gridWidth", 3);
        }  else if (newWidth > 40) {
            updateGrid("gridWidth", 40);
        } else {
            updateGrid("gridWidth", newWidth);
        }
        resetGrid()
    }

    function changeHeight(event) {
        const newHeight = parseInt(event.target.value);
        if (isNaN(newHeight)) {
            updateGrid("gridHeight", NaN);
        } else if (newHeight < 3) {
            updateGrid("gridHeight", 3);
        } else if (newHeight > 40) {
            updateGrid("gridHeight", 40);
        } else {
            updateGrid("gridHeight", newHeight);
        }
        resetGrid();
    }


    return(
        <div className="toolBarContainer">
            <button className="toolItem" onClick={() => handleHeatMap()}>{toggleHeatMap ? "Regular" : "Heatmap"}</button>
            <button className="toolItem" onClick={() => handleAutoplay()}>{toggleAutoplay ? "Stop": "Auto"}</button>
            <button className="toolItem" onClick={() => randomizeLiveCell(gridWidth, gridHeight)}>Spawn Cells</button>
            <button className="toolItem" onClick={() => resetGrid()}>Reset</button>
            <button className="toolItem" onClick={() => forwardOneFrame()}>Next</button>
            <label className="toolItem" htmlFor="gridWidth">
                Grid Width: <input type="number" id="gridWidth" name="gridWidth" value={gridWidth} onChange={changeWidth}/>
            </label>
            <label className="toolItem" htmlFor="gridHeight">
                Grid Height: <input type="number" id="gridHeight" name="gridHeight" value={gridHeight} onChange={changeHeight}/>
            </label>
        </div>
    )
}