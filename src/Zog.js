import React from 'react';
import Zog from './image/Zog.jpg'

let score = 0

const ZogImage =() =>(
    <img src={Zog} alt="picture of Bean" onClick= {score + 1} />
)

export default ZogImage;