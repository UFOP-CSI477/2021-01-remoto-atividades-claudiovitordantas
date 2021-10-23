import { useState } from "react";

import classes from "./calculadora.module.css";

export default function Calculadora() {
  const [value, setValue] = useState([]);
  const [operation, setOperation] = useState("");

  const getOperationHandler = (event) => {
    setOperation(event.target.value);
  };

  const calculateHandler = (event) => {
    event.preventDefault();
    let result = 0;
    if (operation === "*") {
      result = 1;
    }

    if (operation === "+") {
      for (let i = 0; i < value.length; i++) {
        result = result + value[i];
      }
    } else if (operation === "*") {
      for (let i = 0; i < value.length; i++) {
        result = result * value[i];
      }
    } else if (operation === "-") {
      for (let i = 0; i < value.length; i++) {
        result = result - value[i];
      }
    } else if (operation === '/') {
        for (let i = 0; i < value.length; i++) {
          result = result - value[i];
        }
    }
    console.log(result);
  };

  const getValueHandler = (event) => {
    setValue((prev) => {
      return [...prev, parseInt(event.target.value)];
    });
  };

  return (
    <div className={classes.calc}>
      <div className={classes.display}>{value}</div>
      <form onSubmit={calculateHandler}>
        <div>
          <button type="button">OFF</button>
          <button type="button">√</button>
          <button type="button">%</button>
          <button type="button">÷</button>
        </div>
        <div>
          <button onClick={getValueHandler} type="button" id="key" value="7">
            7
          </button>
          <button onClick={getValueHandler} type="button" value="8">
            8
          </button>
          <button onClick={getValueHandler} type="button" value="9">
            9
          </button>
          <button value="*" onClick={getOperationHandler} type="button">
            X
          </button>
        </div>
        <div>
          <button onClick={getValueHandler} type="button" value="4">
            4
          </button>
          <button onClick={getValueHandler} type="button" value="5">
            5
          </button>
          <button onClick={getValueHandler} type="button" value="6">
            6
          </button>
          <button value="-" onClick={getOperationHandler} type="button">
            -
          </button>
        </div>
        <div>
          <button onClick={getValueHandler} type="button" value="1">
            1
          </button>
          <button onClick={getValueHandler} type="button" value="2">
            2
          </button>
          <button onClick={getValueHandler} type="button" value="3">
            3
          </button>
          <button
            onClick={getOperationHandler}
            value="+"
            type="button"
            className={classes.times}
          >
            +
          </button>
        </div>
        <div>
          <button onClick={getValueHandler} type="button" value="0">
            0
          </button>
          <button type="button">.</button>
          <button type="submit">=</button>
        </div>
      </form>
    </div>
  );
}
