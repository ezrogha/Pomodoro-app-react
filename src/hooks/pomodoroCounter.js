import { useState } from 'react';

function usePomodoroCounter(InitialValue){
  const [count, setCount] = useState(InitialValue)
  const tictoc = () => {
    setCount(InitialValue - 1);
    console.log(count)
  }
  setInterval(tictoc, 1000)
  return [count, setCount]
}

export default usePomodoroCounter;
