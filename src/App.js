import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { divide, multiple, plus } from "./redux/modules/counter";
import { minus } from "./redux/modules/counter";

function App() {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.counter);
  const [input, setInput] = useState({
    number: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div>
      <input type="text" name="number" value={input.number} onChange={onChangeHandler} />
      <button
        onClick={() => {
          dispatch(plus(Number(input.number)));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minus(Number(input.number)));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(multiple(Number(input.number)));
        }}
      >
        x
      </button>
      <button
        onClick={() => {
          dispatch(divide(Number(input.number)));
        }}
      >
        /
      </button>
      <p>{num}</p>
    </div>
  );
}

export default App;
