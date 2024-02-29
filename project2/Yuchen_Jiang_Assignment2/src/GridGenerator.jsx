import { useState } from "react"
import React from "react"
import "./Box.css"
import { useEffect } from "react";

export function Grid() {
    const [gridWidth, setGridWidth] = useState(20);
    const [gridHeight, setGridHeight] = useState(20);
    const [boxClass, setBoxClass] = useState(getRandomCells(gridWidth, gridHeight));
    const [toggleAutoplay, setToggleAutoplay] = useState(false);
    const [liveCell, setLiveCell] = useState(getLiveCells());
    const [heatMap, setHeatMap] = useState(Array(40* 40).fill(0));
    const [toggleHeatMap, setToggleHeatMap] = useState(false);
    
    const frame = 100;

    const colorArray = [
        "#000080", // Navy Blue
        "#0000FF", // Blue
        "#4169E1", // Royal Blue
        "#6495ED", // Cornflower Blue
        "#87CEEB", // Sky Blue
        "#ADD8E6", // Light Blue
        "#B0E0E6", // Powder Blue
        "#BFEFFF", // Light Steel Blue
        "#CFECEC", // Light Blue Grey
        "#E0F8F8"  // Light Cyan
      ];

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
                const possibility = Math.floor(Math.random() * 20);
                if (possibility === 0) {
                    update[i] = update[i] === 'box' ? 'box live': 'box';
                }
        }
        return update;
    }
    
    function randomizeLiveCell(width, height) {
        setHeatMap(Array(40 * 40).fill(0));
        setToggleAutoplay(false);
        setBoxClass(getRandomCells(width, height));
    }

    function changeWidth(event) {
        const newWidth = parseInt(event.target.value);
        if(isNaN(newWidth)) {
            setGridWidth(3)
        } else if (newWidth < 3) {
            setGridWidth(3);
        }  else if (newWidth > 40) {
            setGridWidth(40);
        } else {
            setGridWidth(newWidth);
        }
        setToggleAutoplay(false);
        setBoxClass(Array(40 * 40).fill('box'));
        setHeatMap(Array(40 * 40).fill(0));
    }

    function changeHeight(event) {
        const newHeight = parseInt(event.target.value);
        if (isNaN(newHeight)) {
            setGridHeight(3);
        } else if (newHeight < 3) {
            setGridHeight(3);
        } else if (newHeight > 40) {
            setGridHeight(40);
        } else {
            setGridHeight(newHeight);
        }
        setToggleAutoplay(false);
        setBoxClass(Array(40 * 40).fill('box'));
        setHeatMap(Array(40 * 40).fill(0));
    }

    function clickBox(index) {
        if (toggleAutoplay === false) {
            console.log("clicked")
            const update = [...boxClass];
            update[index] = update[index] === 'box' ? 'box live': 'box';
            setBoxClass(update)
        }
    }

    function getColorCode(number) {
        return colorArray[9 - number];
    }

    function renderGrid() {
        const gridBoxes = [];
        for (let i = 0; i < gridWidth * gridHeight; i++) {
            let boxElement;
            if (toggleHeatMap) {
                boxElement = <div key={i} className={boxClass[i]} onClick={() => clickBox(i)} style={{"backgroundColor": getColorCode(heatMap[i])}}></div>;
            } else {
                boxElement = <div key={i} className={boxClass[i]} onClick={() => clickBox(i)}></div>;
            }
            gridBoxes.push(boxElement);
        }
        return gridBoxes;   
    }

    return (
        <div id="outerContainer">
            <div id="gridOuterContainer">
                <div id="gridContainer" style={{'--grid-height': gridHeight, '--grid-width': gridWidth}}>
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