import React from 'react'
import logo from './logo.jpeg'
import BeanImage from "./BeanImage"
import BuntyImage from "./BuntyImage"
import DerekImage from "./DerekImage"
import ElfoImage from "./Elfo"
import FairyImage from "./Fairy"
import "./App.css"
// import GriffenImage from "./GriffenImage"
// import KissyImage from "./KissyImage"
// import LuciImage from "./LuciImage"
// import MotherImage from "./MotherImage"
// import PandergastImage from "./PandergastImage"
// import PrinceImage from "./PrinceImage"
// import QueenImage from "./QueenImage"
// import SercerioImage from "./SercerioImage"
// import ServentImage from "./ServentImage"
// import ZogImage from "./ZogImage"

let score=0;

const App = () => (
  <div>
  <header>
<img src={logo} alt="logo" />
<h1>Clicky Game</h1>
<h2>The goal of this game is to select a picture. Each photo you select will give you a point. If you select the same photo twice the game will end. See how many points that you can get!</h2>
<h3>Score</h3>
<p>{score}</p>
  </header>
  <body>

  <BeanImage />
  <BuntyImage />
  <DerekImage />
  <ElfoImage />
  <FairyImage />
  {/* <GriffenImage /> */}
  {/* <KissyImage /> */}
  {/* <LuciImage />
  <MotherImage />
  <PandergastImage />
  <PrinceImage />
  <QueenImage />
  <SercerioImage />
  <ServentImage />
  <ZogImage /> */}

  </body>
  </div>
);



export default App;

