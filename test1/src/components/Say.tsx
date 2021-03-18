import React, { useState } from 'react';

const Say: React.FC = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요.');

  const [color, setcolor] = useState('black');
  const setRed = () => {setcolor('red')}
  const setBlue = () => {setcolor('blue')}
  const setGreen = () => {setcolor('green')}
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={setRed}>빨간색</button>
      <button style={{ color: 'blue' }} onClick={setBlue}>파란색</button>
      <button style={{ color: 'green' }} onClick={setGreen}>초록색</button>
    </div>
  );
}

export default Say;