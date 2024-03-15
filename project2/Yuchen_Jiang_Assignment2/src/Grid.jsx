import { useState, useEffect, useContext} from "react"
import React from "react"

import "./Box.css"

import ToolBar from "./ToolBar.jsx";
import CellInfo from "./CellInfo.jsx";

import {getRandomCells, getHeatDegree, getLiveCells} from "./GridUtilities.js";
import getNextGrid from "./GetNextGrid.js";

import { GridContext } from "./GridProvider.jsx";

export default function Grid() {
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

    const frame = 100;

    useEffect(() => {
        let interval;
        if (toggleAutoplay) {
            interval = setInterval(() => {
                updateGrid("boxClass", getNextGrid(gridWidth, gridHeight, boxClass))
              }, frame);
        }
        return () => clearInterval(interval);
    }, [boxClass, toggleAutoplay]);

    useEffect(() => {
        updateGrid("heatMap", getHeatDegree(gridWidth, gridHeight, boxClass, heatMap));
    }, [boxClass]);

    function clickBox(index) {
        if (toggleAutoplay === false) {
            const update = [...boxClass];
            update[index] = update[index] === 'box' ? 'box live': 'box';
            updateGrid("boxClass", update)
        }
    }

    function renderGrid() {
        const gridBoxes = [];
        for (let h = 0; h < gridHeight; h++) {
            let boxRow = []
            for (let r = 0; r < gridWidth; r++) {
                let i = r + h * gridWidth
                let suffix = toggleHeatMap ? " " + "heatLevel" + heatMap[i].toString(): "";
                let boxElement = <div key={i} className={boxClass[i] + suffix} onClick={() => clickBox(i)}></div>;
                boxRow.push(boxElement);
            }
            gridBoxes.push(<div key={h} className={"gridRowContainer"}>{boxRow}</div>);
        }
        return gridBoxes;   
    }

    return (
        <div id="outerContainer">
            <div id="gridOuterContainer">
                <div id="gridColumnContainer">
                    {renderGrid()}
                </div>
            </div>
            <ToolBar/>
            <CellInfo/>
        </div>
    )
}