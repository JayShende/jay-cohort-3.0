/* eslint-disable react/display-name */

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { CounterAtom, IsEven_Selector } from "./store/atom/counter";

// const countContext=createContext();

function App() {
  return (
    <div>
      <RecoilRoot>
        <Counter />
        <Button />
        <IsEven />
      </RecoilRoot>
    </div>
  );
}

function Button() {
  const setCount = useSetRecoilState(CounterAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((previousValue) => previousValue + 2);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((previousValue) => previousValue - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function Counter() {
  const count=useRecoilValue(CounterAtom);
  return(
    <div>
     <h2> {count}</h2>
    </div>
  )
}

function IsEven() {
  const ans=useRecoilValue(IsEven_Selector);
  return (
    <div>
      {ans?"Even":"Odd"}
    </div>
  )
}

export default App;
