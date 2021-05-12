import React, { useState,useEffect} from 'react'
function TestUseEffect(){
    const [count,setCount] = useState(0);
    //similar to componentDidMount and componentDidUpdate
    useEffect(()=>{
        document.title = `you click ${count} times button!`
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default TestUseEffect;