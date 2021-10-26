import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [state, setstate] = useState(0);

  return (
    <div className="calculator" data-testid="Calculator">
      <input className="w-100 button-border border-0 bg-secondary text-light screen pe-1 ps-1" type="text" value={state} />
      <div className="w-100">
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}9`, 10))}><small>AC</small></button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}9`, 10))}>&#177;</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}9`, 10))}>%</button>
        <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => setstate(parseInt(`${state}9`, 10))}>&#247;</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}7`, 10))}>7</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}8`, 10))}>8</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}9`, 10))}>9</button>
        <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => setstate(parseInt(`${state}9`, 10))}>x</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}4`, 10))}>4</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}5`, 10))}>5</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}6`, 10))}>6</button>
        <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => setstate(parseInt(`${state}9`, 10))}>-</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}1`, 10))}>1</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}2`, 10))}>2</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}3`, 10))}>3</button>
        <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => setstate(parseInt(`${state}9`, 10))}>+</button>
        <button className="button-border col-6 border-1" type="button" onClick={() => setstate(parseInt(`${state}0`, 10))}>0</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => setstate(parseInt(`${state}1`, 10))}>.</button>
        <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => setstate(`${state}1`)}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
