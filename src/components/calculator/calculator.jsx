import React from "react";
import "./calculator.css";
import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result);
    } catch (error) {
      setDisplay("Error,invalid entry");
    }
  };
  const clearDisplay = () => {
    setDisplay("");
  };
  return (
    <div className="calc">
      <div className="section">
        <div className="display">{display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleClick("1")} className="col">
              1
            </button>
            <button onClick={() => handleClick("2")} className="col">
              2
            </button>
            <button onClick={() => handleClick("3")} className="col">
              3
            </button>
            <button onClick={() => handleClick("+")} className="col">
              +
            </button>
          </div>

          <div className="row">
            <button onClick={() => handleClick("4")} className="col">
              4
            </button>
            <button onClick={() => handleClick("5")} className="col">
              5
            </button>
            <button onClick={() => handleClick("6")} className="col">
              6
            </button>
            <button onClick={() => handleClick("-")} className="col">
              -
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleClick("7")} className="col">
              7
            </button>
            <button onClick={() => handleClick("8")} className="col">
              8
            </button>
            <button onClick={() => handleClick("9")} className="col">
              9
            </button>
            <button onClick={() => handleClick("*")} className="col">
              *
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleClick(".")} className="col">
              .
            </button>
            <button onClick={() => handleClick("0")} className="col">
              0
            </button>
            <button onClick={calculateResult} className="col">
              =
            </button>
            <button onClick={() => handleClick("/")} className="col">
              /
            </button>
          </div>
          <div className="row">
            <div onClick={clearDisplay} className="col">
              Clear
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
