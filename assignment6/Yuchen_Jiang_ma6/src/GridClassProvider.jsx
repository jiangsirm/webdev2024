import React from "react";
import { useState, createContext } from "react";

export const GridClassContext = createContext();

export default function GridClassProvider(props) {


    const [GridClass, setGridClass] = useState ({
        boxGrid: ["box", "box", "box", "box"]
    });

    const updateGridClass = (fieldName, updatedField) => {
        setGridClass((prevGrid) => ({
            ...prevGrid,
            [fieldName]: updatedField
            })
        )
    };


    return (
        <GridClassContext.Provider value={[GridClass, updateGridClass]}>
            {props.children}
        </GridClassContext.Provider>
    )
}