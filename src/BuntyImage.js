import React from 'react';
import Bunty from './image/bunty.jpg'

let score = 0

const BuntyImage =() =>(
   <button onClick={score + 1}> <img src={Bunty} alt="picture of Bean" onClick= {score + 1} /></button>
)

export default BuntyImage;