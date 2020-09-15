import React, { useState } from 'react'

const Counter = () =>{

  const [count, SetCount]= useState(5)

  const Increase = (num = 1) => SetCount(count + num)
  
  const Decrease = (num = 1) => {
    if(count-num >= 0 ) SetCount(count - num);
}

  return(
    <center>
      <p>{count}</p>
    <div>
    <button onClick = {()=> Decrease()} >-1</button>
    <button onClick = {()=> Decrease(2)} >-2</button>
    <button onClick = {()=> SetCount(5) } >Reset</button>
    <button onClick = {()=> Increase(1)} >1</button>
    <button onClick = {()=> Increase(2)} >2</button>
    </div>
    <br/>
    </center>
  )


}


export default Counter