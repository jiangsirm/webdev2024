import { createContext, useState} from 'react'

export const NumberContext =  createContext();

export default function NumberStateProvider(props) {
    const[numberState, setNumberState] = useState({
        first: 42,
        second: 84
    })

    return(
        <NumberContext.Provider value={[numberState, setNumberState]}>
            {props.children}
        </NumberContext.Provider>
    )
}