import React, { useReducer } from 'react';
import { State,Action } from '../types/type'

const reducer = (state:any, action:any) => {
  return {
    ...state,
    [action.name]:action.value
  };
}

const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer , {
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target)
  }

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름: </b> {name}
      </div>
      <div>
        <b>닉네임: </b> {nickname}
      </div>
    </div>
  );
};

export default InfoReducer;