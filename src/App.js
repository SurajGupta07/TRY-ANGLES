import React from "react";
import "./styles.css";
import { useState } from "react";
import logo from './math.svg';

export default function App() {

  let [triangleValue, setTriangleValue] = useState("")

  let firstAngle, secondAngle, thirdAngle;

  function angleOne(event){
    firstAngle = (event.target.value);
  }
  function angleTwo(event){
    secondAngle = (event.target.value);
  }
  function angleThree(event){
    thirdAngle = (event.target.value);
  }

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
        <div>
        <h1>TRY-ANGLES</h1>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href=''>Tri Calculator</a></li>
          </ul>
        </div>
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
      <p>{triangleValue}</p>
      <footer>
        <ul className="socialList">
          <li className="socialProfile"><a href="">LinkedIn</a></li>
          <li className="socialProfile"><a href="">Twitter</a></li>
          <li className="socialProfile"><a href="">Instagram</a></li>
        </ul>
      </footer>
    </div>
  );
}
