import React from 'react';
import Pandergast from './image/Pendergast.jpg'

let score = 0

const PandergastImage =() =>(
    <img src={Pandergast} alt="picture of Bean" onClick= {score + 1} />
)

export default PandergastImage;