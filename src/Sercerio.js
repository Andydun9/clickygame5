import React from 'react';
import Sercio from './image/Sercio.jpg'

let score = 0

const SercioImage =() =>(
    <img src={Sercio} alt="picture of Bean" onClick= {score + 1} />
)

export default SercioImage;