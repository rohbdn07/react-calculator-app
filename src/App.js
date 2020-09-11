import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(`${result}` + e.target.name);
  }

  function backSpace() {
    setResult(`${result}`.slice(0, result.length - 1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult(err);
    }
  }
  return (
    <div className='App'>
      <h2>Calculator</h2>
      <hr />
      <form>
        <input type='text' value={result} ref={inputRef} />
      </form>

      <div className='container'>
        <button id='clear' onClick={clear}>
          Clear
        </button>
        <button id='backspace' onClick={backSpace}>
          C
        </button>
        <button onClick={handleClick} name='+'>
          +
        </button>
        <button onClick={handleClick} name='7'>
          7
        </button>
        <button onClick={handleClick} name='8'>
          8
        </button>
        <button onClick={handleClick} name='9'>
          9
        </button>
        <button onClick={handleClick} name='-'>
          -
        </button>
        <button onClick={handleClick} name='4'>
          4
        </button>
        <button onClick={handleClick} name='5'>
          5
        </button>
        <button onClick={handleClick} name='6'>
          6
        </button>
        <button onClick={handleClick} name='*'>
          X
        </button>
        <button onClick={handleClick} name='1'>
          1
        </button>
        <button onClick={handleClick} name='2'>
          2
        </button>
        <button onClick={handleClick} name='3'>
          3
        </button>
        <button onClick={handleClick} name='/'>
          /
        </button>
        <button onClick={handleClick} name='0'>
          0
        </button>
        <button onClick={handleClick} name='.'>
          .
        </button>

        <button id='result' onClick={calculate}>
          Total
        </button>
      </div>
    </div>
  );
}

export default App;
