import React from 'react'

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
  }
]

const NotePage = () => {

  const dataList = data.map(data => 
  (<div>
    <h1>유저 id: {data.id}</h1>
    <h1>유저 이름: {data.user}</h1>
    <h1>유저 나이: {data.age}</h1>
    <hr/>
  </div>))

  return (
    <div>
      {dataList}
    </div>
  );
}

export default NotePage;