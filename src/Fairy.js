import React from 'react';
import Fairy from './image/Hooker.jpg'

let score = 0

const FairyImage =() =>(
    <button onClick={score++}><img src={Fairy} alt="picture of Bean" onClick= {score + 1} /></button>
)

export default FairyImage;