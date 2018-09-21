import React from 'react';
import Queen from './image/images4.jpeg'

let score = 0

const QueenImage =() =>(
    <img src={Queen} alt="picture of Bean" onClick= {score + 1} />
)

export default QueenImage;