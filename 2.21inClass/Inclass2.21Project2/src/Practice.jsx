

export default function Practice(props) {
    let num = props.numInput;
    let color = props.bgColor;
    const onClick = props.click;
    
    return (
        <div>
            the num is <span style={{backgroundColor: color}}>{num}</span> 
            <button onClick={onClick}>Click!</button>
        </div>
    )
}