import React, {useContext} from "react";
import { GridClassContext } from "./GridClassProvider";

export default function Count(props) {
    const [GridClass, updateGridClass] = useContext(GridClassContext)

    function getCount(){
        let count = 0;
        for (let str of GridClass.boxGrid) {
            if (str === "box select") {
                count += 1
            }
        }
        return count;
    }

    return(
        <div>
            Total Count is {getCount()}
        </div>
    )
}