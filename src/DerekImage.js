import React from 'react';
import Derek from './image/Derek.jpg'

let score = 0

const DerekImage =() =>(
    <button onClick={score++}><img src={Derek} alt="picture of Bean" onClick= {score + 1} /></button>
)

export default DerekImage;