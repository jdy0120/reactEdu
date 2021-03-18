import React, { useState } from 'react'
import {Link, RouteComponentProps} from 'react-router-dom';

type Data = {
  id:string
  user:string
  age:number
}

const data:Array<Data> = [
  {
    id: "1",
    user: "doyeon",
    age: 28
  },
  {
    id: "2",
    user: "gildong",
    age: 27
  },
  {
    id: "3",
    user: "gogildong",
    age: 26
  },
  {
    id: "4",
    user: "doyeonism",
    age: 28
  }
]

interface Props {
  postId:string
}

const NoteListPage = ({ match,history }:RouteComponentProps<Props>) => {
  const { postId } = match.params;
  const names = data.filter(data => data.id === postId)
  if (!names[0]) { return <div>없는 Id입니다.</div> }
  return (
    <div>
      <h1>유저 이름 : { names[0].user }</h1>
      <h1>유저 나이 : { names[0].age }</h1>
      <button onClick={() => history.push('/')}>홈으로 이동</button>
    </div>
  );
};

export default NoteListPage;
// Context API