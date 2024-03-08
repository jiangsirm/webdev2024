import React, { useEffect } from "react";
import { useState, createContext } from "react";
import {getRandomCells, getLiveCells, getHeatDegree} from "./GridUtilities";

export const GridContext = createContext();

export default function GridProvider(props) {
    const [Grid, setGrid] = useState({
        gridWidth: 20,
        gridHeight: 20,
        boxClass: [],
        heatMap: [],
        liveCell: [],
        toggleAutoplay: false,
        toggleHeatMap: false
    });

    useEffect(() => {
        const boxClass = getRandomCells(Grid.gridWidth, Grid.gridHeight)
        const heatMap = getHeatDegree(Grid.gridWidth, Grid.gridHeight, boxClass)
        const liveCell = getLiveCells(Grid.gridWidth, Grid.gridHeight, boxClass)

        updateGrid("boxClass", boxClass)
        updateGrid("heatMap", heatMap)
        updateGrid("liveCell", liveCell)

    }, [])

    const updateGrid = (field, newValue) => {
        setGrid((prevState) => ({
            ...prevState,
            [field]: newValue
        }))
    };

    return (
        <GridContext.Provider value={{Grid, updateGrid}}>
            {props.children}
        </GridContext.Provider>
    )
}