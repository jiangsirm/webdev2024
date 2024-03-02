import "./CellCount.css"

export default function CellInfo(props) {
    const liveCell = props.liveCell;
    
    return (
        <div className="cellInfo">
            <span>Current Live Cells: {liveCell}</span>
        </div>
    )
}