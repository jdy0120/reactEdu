import React, { useRef } from 'react';

const RefSample:React.FC = () => {
  const id = useRef(1);
  const setId = (n:number) => {
    id.current = n;
  }
  const printId = () => {
    console.log(id.current);
  }
  return (
    <div>
      refsample
    </div>
  );
}

export default RefSample;