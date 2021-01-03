import React from "react";
import "./styles.css";

export default function App() {

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
    var sum = firstAngle + secondAngle + thirdAngle;
    console.log(sum)
  }

  return (
    <div className="App">
      <h1>TRY-ANGLES</h1>
      <div>
        <input className="numberInput" onChange={angleOne} type="number"></input>
        <input className="numberInput" onChange={angleTwo} type="number"></input>
        <input className="numberInput" onChange={angleThree} type="number"></input>
      </div>
      <button className="inputBtn" onClick={sumCalculator}>CALCULATE</button>
    </div>
  );
}
