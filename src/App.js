import React from "react";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <h1>Calculator</h1>
      <hr />
      <form action=''>
        <input type='text' value='' />
      </form>
      <div className='container'>
        <button id='clear'>Clear</button>
        <button id='c'>C</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>X</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>/</button>
        <button></button>
        <button>0</button>

        <button id='result'>Total</button>
      </div>
    </div>
  );
}

export default App;
