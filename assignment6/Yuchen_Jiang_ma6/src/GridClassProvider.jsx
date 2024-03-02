import React from "react";
import { useState, createContext } from "react";

export const GridClassContext = createContext();

export default function GridClassProvider(props) {
    const [GridClass, setGridClass] = useState ([
        "box", "box", "box", "box"
    ]);

    const updateGridClass = (index, updateClass) => {
        setGridClass((prevGrid) => {
            let update = [...prevGrid];
            update[index] = updateClass;
            return update;
            }
        )
    };

    return (
        <GridClassContext.Provider value={{GridClass, updateGridClass}}>
            {props.children}
        </GridClassContext.Provider>
    )
}