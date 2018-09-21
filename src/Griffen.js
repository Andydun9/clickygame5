import React from 'react';
import Griffen from './image/griffon.jpg'

let score = 0

const GriffenImage =() =>(
   <button onClick={score++}><img src={Griffen} alt="picture of Bean" /></button>
)

export default GriffenImage;