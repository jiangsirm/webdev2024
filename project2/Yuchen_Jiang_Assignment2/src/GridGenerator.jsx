import { useState, useEffect } from "react"
import React from "react"

import "./Box.css"

import ToolBar from "./ToolBar.jsx";
import CellInfo from "./CellInfo.jsx";

import getRandomCells from "./GetRandomGrid.js";
import getNextGrid from "./GetNextGrid.js";

export function Grid() {
    const [gridWidth, setGridWidth] = useState(20);
    const [gridHeight, setGridHeight] = useState(20);
    const [boxClass, setBoxClass] = useState(getRandomCells(gridWidth, gridHeight));
    const [heatMap, setHeatMap] = useState(Array(40 * 40).fill(0));
    const [liveCell, setLiveCell] = useState(getLiveCells());
    const [toggleAutoplay, setToggleAutoplay] = useState(false);
    const [toggleHeatMap, setToggleHeatMap] = useState(false);
    
    const frame = 100;

    useEffect(() => {
        let interval;
        if (toggleAutoplay) {
            interval = setInterval(() => {
                setBoxClass((preGrid) => getNextGrid(gridWidth, gridHeight, preGrid));
              }, frame);
        }
        return () => clearInterval(interval);
    }, [toggleAutoplay]);

    useEffect(() => {
        setLiveCell(getLiveCells());
    }, [boxClass]);

    useEffect(() => {
        setHeatMap(getHeatDegree());
    }, [boxClass]);

    function resetGrid() {
        setToggleAutoplay(false);
        setBoxClass(Array(40 * 40).fill('box'));
        setHeatMap(Array(40 * 40).fill(0));
    }

    function handleAutoplay() {
        setToggleAutoplay(prevToggle => !prevToggle);
    }

    function handleHeatMap() {
        setToggleHeatMap(prevToggle => !prevToggle);
    }

    function forwardOneFrame() {
        setToggleAutoplay(false);
        setBoxClass(getNextGrid(gridWidth, gridHeight, boxClass));
    }

    function getHeatDegree() {
        let update = [...heatMap];
        for (let i = 0; i < gridHeight * gridWidth; i++) {
            if (boxClass[i] === "box live") {
                update[i] = 9;
            } else if (update[i] > 0) {
                update[i] -= 1;
            }
        }
        return update;
    }

    function getLiveCells() {
        let count = 0;
        for (let i = 0; i < gridHeight * gridWidth; i++) {
            if (boxClass[i] === 'box live') {
                count += 1;
            }
        }
        return count;
    }
    
    function randomizeLiveCell(width, height) {
        setHeatMap(Array(40 * 40).fill(0));
        setToggleAutoplay(false);
        setBoxClass(getRandomCells(width, height));
    }

    function changeWidth(event) {
        const newWidth = parseInt(event.target.value);
        if(isNaN(newWidth)) {
            setGridWidth(NaN)
        } else if (newWidth < 3) {
            setGridWidth(3);
        }  else if (newWidth > 40) {
            setGridWidth(40);
        } else {
            setGridWidth(newWidth);
        }
        resetGrid()
    }

    function changeHeight(event) {
        const newHeight = parseInt(event.target.value);
        if (isNaN(newHeight)) {
            setGridHeight(NaN);
        } else if (newHeight < 3) {
            setGridHeight(3);
        } else if (newHeight > 40) {
            setGridHeight(40);
        } else {
            setGridHeight(newHeight);
        }
        resetGrid();
    }

    function clickBox(index) {
        if (toggleAutoplay === false) {
            const update = [...boxClass];
            update[index] = update[index] === 'box' ? 'box live': 'box';
            setBoxClass(update)
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
            <ToolBar
                    toggleHeatMap={toggleHeatMap}
                    toggleAutoplay={toggleAutoplay}
                    gridHeight={gridHeight}
                    gridWidth={gridWidth}
                    handleHeatMap={handleHeatMap}
                    handleAutoplay={handleAutoplay}
                    randomizeLiveCell={randomizeLiveCell}
                    resetGrid={resetGrid}
                    forwardOneFrame={forwardOneFrame}
                    changeHeight={changeHeight}
                    changeWidth={changeWidth}
            />
            <CellInfo liveCell={liveCell}/>
        </div>
    )
}