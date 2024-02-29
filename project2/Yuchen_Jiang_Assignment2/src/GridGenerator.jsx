import { useState } from "react"
import React from "react"
import "./Box.css"
import { useEffect } from "react";

export function Grid() {
    const [gridWidth, setGridWidth] = useState(20);
    const [gridHeight, setGridHeight] = useState(20);
    const [boxClass, setBoxClass] = useState(getRandomCells(gridWidth, gridHeight));
    const [heatMap, setHeatMap] = useState(Array(40* 40).fill(0));
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

    function getNextGrid(width, height, prevGrid) {
        const update = [...prevGrid];
        for (let i = 0; i < height * width; i++) {
            let liveCount = 0;
            if (Math.floor(i / width) > 0) {
                if (prevGrid[i - width] === "box live") {
                    liveCount += 1;
                }
                if (i % width > 0) {
                    if (prevGrid[i - width - 1] === "box live") {
                        liveCount += 1;
                    }
                }
                
                if (i % width < width - 1) {
                    if (prevGrid[i - width + 1] === "box live") {
                        liveCount += 1;
                    }
                } 
            }

            if (Math.floor(i / width) < height - 1) {
                if (prevGrid[i + width] === "box live") {
                    liveCount += 1
                }

                if (i % width > 0) {
                    if (prevGrid[i + width - 1] === "box live") {
                        liveCount += 1;
                    }
                }
                
                if (i % width < width - 1) {
                    if (prevGrid[i + width + 1] === "box live") {
                        liveCount += 1;
                    }
                } 
            }

            if (i % width > 0) {
                if (prevGrid[i - 1] === "box live") {
                    liveCount += 1;
                }
            }
            
            if (i % width < width - 1) {
                if (prevGrid[i + 1] === "box live") {
                    liveCount += 1;
                }
            }

            if (prevGrid[i] === "box" && liveCount === 3) {
                update[i] = "box live";
            } else if (prevGrid[i] === "box live") {
                if (liveCount < 2 || liveCount > 3) {
                    update[i] = "box";
                }
            }
        }
        return update;
    }

    function getRandomCells(width, height) {
        const update = Array(40 * 40).fill('box');
        for (let i = 0; i < width * height; i++) {
            const possibility = Math.floor(Math.random() * 25);
            if (possibility === 0) {
                update[i] = 'box live';
                for (let row = -1; row <= 1; row++) {
                    for (let col = -1; col <= 1; col++) {

                        if (row === 0 && col === 0) continue;
    
                        const newRow = Math.floor(i / width) + row;
                        const newCol = (i % width) + col;
    
                        if (newRow >= 0 && newRow < height && newCol >= 0 && newCol < width) {
                            const neighborIndex = newRow * width + newCol;

                            if (Math.random() < 0.2) {
                                update[neighborIndex] = 'box live';
                            }
                        }
                    }
                }
            }      
        }
        return update;
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
                let boxElement;
                if (toggleHeatMap) {
                    boxElement = <div key={i} className={boxClass[i] + " " + "heatLevel" + heatMap[i].toString()} onClick={() => clickBox(i)} ></div>;
                } else {
                    boxElement = <div key={i} className={boxClass[i]} onClick={() => clickBox(i)}></div>;
                }
                boxRow.push(boxElement);
            }
            gridBoxes.push(<div className={"gridRowContainer"}>{boxRow}</div>);
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
            <div className="toolBarContainer">
                <button className="toolItem toggle" onClick={() => handleHeatMap()}>{toggleHeatMap ? "Regular" : "Heatmap"}</button>
                <button className="toolItem toggle" onClick={() => handleAutoplay()}>{toggleAutoplay ? "Stop": "Auto"}</button>
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
            <div className="cellInfo">
                <span>Current Live Cells: {liveCell}</span>
            </div>
        </div>
    )
}