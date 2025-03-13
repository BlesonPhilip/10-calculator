import React from "react";
import "./calculator.css";
import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  return (
    <div className="calc">
      <div className="section">
        <div className="display">{display}</div>
        <div className="buttons">
          <div className="row">
            <div className="col">1</div>
            <div className="col">2</div>
            <div className="col">3</div>
            <div className="col">+</div>
          </div>

          <div className="row">
            <div className="col">4</div>
            <div className="col">5</div>
            <div className="col">6</div>
            <div className="col">-</div>
          </div>
          <div className="row">
            <div className="col">7</div>
            <div className="col">8</div>
            <div className="col">9</div>
            <div className="col">*</div>
          </div>
          <div className="row">
            <div className="col">.</div>
            <div className="col">0</div>
            <div className="col">=</div>
            <div className="col">/</div>
          </div>
          <div className="row">
            <div className="col">Clear</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
