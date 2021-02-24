import React from "react";
import "./styles.css";
import { useState } from "react";
import logo from './math.svg';

export default function App() {

  let [triangleValue, setTriangleValue] = useState("")

  let firstAngle, secondAngle, thirdAngle;

  const angleOne = (event) => firstAngle = (event.target.value);
    
  const angleTwo = (event) => secondAngle = (event.target.value);
  
  const angleThree = (event) => thirdAngle = (event.target.value);
  

  function sumCalculator(event){
    var sum = Number(firstAngle) + Number(secondAngle) + Number(thirdAngle);
    if(sum >= 180){
      setTriangleValue("Hurray!, It's a triangle");
    }
    else{
      setTriangleValue("Another Try?, It's not a Triangle")
    }
  }

  return (
    <div className="App">
      <header>
          <h1>TRY-ANGLES</h1>
      </header>
      <div>
        <img className="img" src={logo} alt="TRY_ANGLES"/>
      </div>
      <div>
        <h2 id="inputMessage">Input Three Angles below</h2>
        <input className="numberInput" onChange={angleOne} type="number"></input>
        <input className="numberInput" onChange={angleTwo} type="number"></input>
        <input className="numberInput" onChange={angleThree} type="number"></input>
      </div>
      <button className="inputBtn" onClick={sumCalculator}>CALCULATE</button>
      <div>
        <p>{triangleValue}</p>
      </div>
      <div>
        <a href='tri.html'>Good with Triangles?</a>
      </div>
      <footer>
        <ul className="socialList">
          <li className="socialProfile"><a href='https://www.linkedin.com/in/suraj-gupta-a02463139/'>LinkedIn</a></li>
          <li className="socialProfile"><a href='https://twitter.com/Gupta07Suraj'>Twitter</a></li>
          <li className="socialProfile"><a href='https://www.instagram.com/suraj_gupta_07_/'>Instagram</a></li>
        </ul>
      </footer>
    </div>
  );
}
