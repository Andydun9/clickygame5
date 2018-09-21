import React from 'react';
import Servent from './image/images.jpeg'

let score = 0

const ServentImage =() =>(
    <img src={Servent} alt="picture of Bean" onClick= {score + 1} />
)

export default ServentImage;