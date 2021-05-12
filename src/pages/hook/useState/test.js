import React , { useState } from 'react'

function testUseState(){
    //声明一个变量 
     const [count,setcount] = useState(0);
     return(
         <div>
             <p>您点击了count{count}</p>
             <button onClick={ () => setcount( count + 1 ) }>click me</button>
         </div>
     )
}
export default testUseState;