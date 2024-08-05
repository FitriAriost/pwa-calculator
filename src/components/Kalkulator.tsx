import React, { useState } from "react";
import "./Kalkulator.css";

const Kalculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
      setInput("");
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="Kalkulator">
      <div className="display">
        <div className="input">{input + result}</div>
        {/* <div className="result">{result}</div> */}
      </div>
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          "=",
          "AC",
          "+",
        ].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Kalculator;
