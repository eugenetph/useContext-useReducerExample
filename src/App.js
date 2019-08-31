import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = React.createContext(); // 3

const initialState = 0;
const reducer = (state, action) => { // 1
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState); // 2
  return (
    <CountContext.Provider // 4
      value={{ countState: count, countDispatch: dispatch } }>
    <div className="App">
      Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    </CountContext.Provider>
  );
}

export default App;

// hierarchy
// A
// B -> D
// C -> E -> F
// A & D & F share same state

// steps to use

// In App Component
// 1. create reducer
// 2. import and use useReducer
// 3. create CountContext
// 4. wrap App with CountContext.Provider

// In Child Component
// 5. import useContext
// 6. import CountContext
// 7. use useContext with CountContext as arguement
// 8. use countContext.countDispatch("increment")} 
// 9. use { countContext.countState } 

// Note: 
// dispatch is like action in reducer
// count is the return value from the reducer

// credit: https://www.youtube.com/watch?v=BCD2irXaVoE