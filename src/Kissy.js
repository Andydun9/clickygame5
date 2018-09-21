import React from 'react';
import Kissy from './image/Kissy.jpg'

let score = 0

const KissyImage =() =>(
    <img src={Kissy} alt="picture of Bean" onClick= {score + 1} />
)

export default KissyImage;