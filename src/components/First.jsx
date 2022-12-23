import React, { useState } from "react";

export const First = () => {
  // Only function components
  // Everytime component render useState will execute in the same order
  // dont put hooks in conditions / top level of your component
  //   const arr = useState(0); // default value // this is an array
  //   console.log(arr)
  //   const [counter, setCounter] = useState(0); // always return an array of , state = value, current state  , function => update state/
  // hardcode value everytime we add
  //   const [counter, setCounter] = useState(() => {
  //     const check = new Array(100).fill().map((item, index) => {
  //       return { value: index, selected: false };
  //     });
  //     return check;
  //   }); // Passing a function will not re-render one time
  const [state, setstate] = useState({
    counter: 4,
    theme: "blue",
  });
  const count = state.counter;
  const theme = state.theme;

  const decrementCount = () => {
    // setCounter(counter - 1); => 3-1 incorrect //
    // setCounter(counter - 1); => 3-1 //
    // setCounter((prev) => prev - 1); // this will solve it
    // setCounter((prev) => prev - 1); // this will solve it
    setstate((prev) => {
      return { ...prev, counter: prev.counter - 1 }; //  pass the value 
    }); // set state nor merging object
  };
  const incrementCount = () => {
    // setCounter(counter + 1); -> incorrect
    // setCounter((prev) => prev + 1);
  };
  return (
    <>
      <button style={{ width: "50px" }} onClick={decrementCount}>
        -
      </button>
      <span>{JSON.stringify(state)}</span>
      <button style={{ width: "50px" }} onClick={incrementCount}>
        +
      </button>
    </>
  );
};
