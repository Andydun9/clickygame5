import React from 'react';
import Luci from './image/Luci.jpg'

let score = 0

const LuciImage =() =>(
    <img src={Luci} alt="picture of Bean" onClick= {score + 1} />
)

export default LuciImage;