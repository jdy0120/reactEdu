import React, { useState } from 'react';

const Timer:React.FC = () => {

  const [nowDate,setNowDate] = useState(new Date().toLocaleTimeString());

  const setTime = () => {
    setNowDate(new Date().toLocaleTimeString());
  }

  setInterval(setTime,1000)
  return (
    <div>
      <h1>{nowDate}</h1>
    </div>
  );
}

export default Timer;