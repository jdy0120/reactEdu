import React, { useState } from 'react';

const EventPractice: React.FC = () => {
  const [ message,setmessage ] = useState('');
  const PrintText = () =>{
    alert(message);
  }
  const SetMessage = (e:React.ChangeEvent<HTMLInputElement>) => {
    setmessage(e.target.value);
  }
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={SetMessage}/>
      <h1>{message}</h1>
      <input type='button' onClick={PrintText} value='확인' />
    </div>
  );
};

export default EventPractice;