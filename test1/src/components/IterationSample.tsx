import React, {useState} from 'react';

const IterationSample:React.FC = () => {
  const [names,setNames] = useState([
    { id: 1, text:'눈사람' },
    { id: 2, text:'얼음' },
    { id: 3, text:'눈' },
    { id: 4, text:'바람' }
  ])

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    }); // 새로운 원소를 추가한 배열을 만들고 setNames로 names를 바꿔준다.
    setNextId(nextId + 1); // nextId 값에 1을 더해준다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(''); // inputText를 비운다.
  }

  const onRemove = (id:number) => {
    const nextNames = names.filter(name => name.id !== id); // nextNames라는 새로운 배열을 만들고
    setNames(nextNames); // names의 배열을 새롭게 바꾼다.
  }

  const namesList = names.map(name => <li key={name.id} style={{cursor: 'pointer'}} onDoubleClick={() => {onRemove(name.id)}}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <input type="button" value='추가' onClick={onClick}/>
      <ul>
        {namesList}
      </ul>
    </>
  );
}

export default IterationSample;