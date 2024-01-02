import { createContext, useState, useContext, useEffect } from "react";

const CounterSettingContext = createContext({ counter: 0 });

const useCounterContext = () => {
  let counterContext = useContext(CounterSettingContext); //gain access to counter context
  const [counterState, setCounterState] = useState(counterContext);
  /**
   * when changing state value
   * the useEffect will update the counter value in the counter context
   */
  useEffect(() => {
    counterContext.counter = counterState.counter;
  }, [counterState]);
  return [counterState, setCounterState];
};

export default useCounterContext;
