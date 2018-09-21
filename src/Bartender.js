import React from 'react';
import Bartender from './image/images1.jpeg'

let score = 0

const BartenderImage =() =>(
    <img src={Bartender} alt="picture of Bean" onClick= {score + 1} />
)

export default BartenderImage;