import "./ToolBar.css"

export default function ToolBar(props) {
    const toggleHeatMap = props.toggleHeatMap;
    const toggleAutoplay = props.toggleAutoplay;
    const gridHeight = props.gridHeight;
    const gridWidth = props.gridWidth;
    const handleHeatMap = props.handleHeatMap;
    const handleAutoplay = props.handleAutoplay;
    const randomizeLiveCell = props.randomizeLiveCell;
    const resetGrid = props.resetGrid;
    const forwardOneFrame = props.forwardOneFrame;
    const changeHeight = props.changeHeight;
    const changeWidth = props.changeWidth;

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