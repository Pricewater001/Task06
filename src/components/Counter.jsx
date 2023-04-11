import React, { useContext, useEffect, useReducer } from "react";
import ValueContext from "./context";

function reducer(state, action) {
  if (action.type === "increment") {
    return {
      age: state.age + action.newAge,
    };
  }
  throw Error("UnKnown Action");
}

const Counter = () => {



  const [state, dispatch] = useReducer(reducer, { age: 50 });
  const context = useContext(ValueContext);
  useEffect(() => {
    console.time("time")
    console.timeEnd("Time End ");
    // console.timeStamp("Time Stamp")

    return () => {
      return 0;
    };
  });

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "increment", newAge: 150 });
        }}
      >
        Click Me to increment
      </button>
      <p>Hello! You are {state.age}.</p>
    </div>
  );
};

export default Counter;
