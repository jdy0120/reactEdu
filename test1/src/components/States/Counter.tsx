import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0); // <number를 사용하지 않아도 알아서 type적용이 된다.>
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;