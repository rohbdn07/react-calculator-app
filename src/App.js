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
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}

export default App;
