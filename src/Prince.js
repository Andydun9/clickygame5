import React from 'react';
import Prince from './image/images2.jpeg'

let score = 0

const PrinceImage =() =>(
    <img src={Prince} alt="picture of Bean" onClick= {score + 1} />
)

export default PrinceImage;