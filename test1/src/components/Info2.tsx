import React,{ useState } from 'react';

const Info2:React.FC = () => {
  const[visible, setvisible] = useState(false);

  const changeVisible = () => {
    setvisible(!visible)
  }
  return (
    <div>
      <button onClick={changeVisible}>
        {visible ? '숨기기' : '보이기'}
      </button>
    </div>
  );
}

export default Info2;