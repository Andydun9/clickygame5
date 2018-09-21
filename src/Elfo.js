import React from 'react';
import Elfo from './image/elfo.jpg'

let score = 0

const ElfoImage =() =>(
    <div>
    <button onClick={score++}><img src={Elfo} alt="picture of Bean" /></button>
    {console.log(score)}
    </div>
)



export default ElfoImage;