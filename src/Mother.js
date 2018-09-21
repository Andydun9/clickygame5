import React from 'react';
import Mother from './image/images3.jpeg'

let score = 0

const MotherImage =() =>(
    <img src={Mother} alt="picture of Bean" onClick= {score + 1} />
)

export default MotherImage;