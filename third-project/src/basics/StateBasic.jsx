import './StateBasic.css'
import { useState } from 'react'

function StateBasic() {
    const [count, setCount] = useState(0)

    console.log(useState(0))
    
    const [isPinned, setPinned] = useState(false)

    // const togglePinned = () => {
    //     setPinned(!isPinned)
    // }
    const togglePinned = () => {
        setPinned(p => !p)
    }


    return(
        <>
            {/* <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                + 
            </button>
            <button onClick={() => setCount(count - 1)}>
                -
            </button> */}

            <h2>Count : {count}</h2>
            <button onClick={() => setCount(c => c + 1)}>
                + 
            </button>
            <button onClick={() => setCount(c => c - 1)}>
                -
            </button>

            <button onClick={togglePinned}>
                {isPinned && '🐌'} pinn This!
            </button>
        </>
    )
}

export default StateBasic
