import React, { useState } from 'react'

const Calculator = () => {
  const [value, setValue] = useState("0");

  function handleValue(e) {
    let text = e.target.innerText;
    if (value === "0") {
      setValue(text);
      return;
    }
    setValue(value + text);
  }

  function calculate() {
    try {
      let ans = eval(value);
      setValue(ans.toString());
    } catch {
      setValue("Error");
    }
  }

  function handleClear() {
    setValue("0");
  }

  function handleBackspace() {
    let newVal = value.slice(0, -1) || "0";
    setValue(newVal);
  }

  return (
    <div className="bg-gray-100 border border-gray-300 w-fit mx-auto mt-20 p-5 rounded-lg shadow-lg">
      <div className="bg-gray-200 border h-16 mb-5 text-right p-4 rounded text-2xl font-semibold">
        {value}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <button className="btn" onClick={handleValue}>%</button>
        <button className="btn" onClick={handleClear}>C</button>
        <button className="btn" onClick={handleValue}>**</button>
        <button className="btn" onClick={handleBackspace}>⬅</button>

        <button className="btn" onClick={handleValue}>/</button>
        <button className="btn" onClick={handleValue}>7</button>
        <button className="btn" onClick={handleValue}>8</button>
        <button className="btn" onClick={handleValue}>9</button>

        <button className="btn" onClick={handleValue}>*</button>
        <button className="btn" onClick={handleValue}>4</button>
        <button className="btn" onClick={handleValue}>5</button>
        <button className="btn" onClick={handleValue}>6</button>

        <button className="btn" onClick={handleValue}>-</button>
        <button className="btn" onClick={handleValue}>1</button>
        <button className="btn" onClick={handleValue}>2</button>
        <button className="btn" onClick={handleValue}>3</button>
        <button className="btn" onClick={handleValue}>+</button>

        <button className="btn col-span-1" onClick={handleValue}>0</button>
        <button className="btn" onClick={handleValue}>.</button>
        <button className="btn bg-blue-600 text-white hover:bg-blue-700" onClick={calculate}>=</button>
      </div>
    </div>
  )
}

export default Calculator;
