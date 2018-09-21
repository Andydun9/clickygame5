import React from 'react';
import Bean from './image/bean_8.jpg'

let score = 0

const BeanImage =() =>(
    <button onClick={score +1}><img src={Bean} alt="picture of Bean" onClick= {score + 1} /></button>
)

export default BeanImage;