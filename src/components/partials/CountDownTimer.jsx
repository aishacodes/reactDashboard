import React, { useState } from 'react';



export default () => {
  const [color, setColor] = useState('rgb(0,0,0)')

  const Rand = (min, max) => {
    let randomNum = Math.random() * (max - min) + min;
  return Math.floor(randomNum);
  }



 let Ran = `rgb(${Rand(0,255)}, ${Rand(0,255)}, ${Rand(0,255)})`
console.log(Ran)

  return(
    <div onClick = {() => setColor(Ran)} style= { {width: '10rem', height:'10rem', background:color }}>
    </div>
  )
}