import React, { useState } from 'react'

const Counter:React.FC = () => {
  const [value,setValue] = useState(0);
  const plusNum = () => {
    setValue(value => value+1)
  }
  const minusNum = () => {
    setValue(value => value-1)
  }
  return (
    <div>
      <p>현재 카운터 값은 <b>{value}</b>입니다.</p>
      <button onClick={plusNum}>+1</button>
      <button onClick={minusNum}>-1</button>
    </div>
  );
};

export default Counter;