import React, { useState } from 'react';

export const App = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <h1>Num is {num}</h1>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
      <button onClick={() => setNum(0)}>Reset</button>
    </div>
  );
};

export default App;
