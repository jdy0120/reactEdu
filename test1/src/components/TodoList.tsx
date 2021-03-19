import React, { useState,memo } from 'react';
import TodoItem from './TodoItem';

interface TodoItemState {
  id: number;
  text: string;
  done: boolean;
}

type State = {
  input: string;
  todoItems: Array<TodoItemState>;
}

const TodoList:React.FC = () => {
  const [nextTodoId, setNextTodoId] = useState(0);

  const [state, setState] = useState<State>({
    input: '',
    todoItems: []
  })

  const onToggle = (id: number): void => {
    const { todoItems } = state;
    const nextTodoItems:TodoItemState[] = todoItems.map( item => {
      if(item.id === id) {
        item.done = !item.done
      }
      return item
    });

    setState({
      ...state,
      todoItems: nextTodoItems
    });
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    const { todoItems, input } = state;
    setNextTodoId(nextTodoId+1)
    const newItem:TodoItemState = {id: nextTodoId, text: input, done: false}
    const nextTodoItems:TodoItemState[] = todoItems.concat(newItem);
    setState({
      input: '',
      todoItems: nextTodoItems
    })
  }

  const onRemove = (id: number) : void => {
    const { todoItems } = state;
    const nextTodoItems: TodoItemState[] = todoItems.filter( item => item.id !== id );
    setState({
      ...state,
      todoItems: nextTodoItems
    });
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setState({
      ...state,
      input: value
    });
  };

  const todoItemList: React.ReactElement[] = state.todoItems.map(
    todo => (
      <TodoItem
        key={todo.id}
        done={todo.done}
        onToggle={() => onToggle(todo.id)}
        onRemove={() => onRemove(todo.id)}
        text={todo.text}
      />
    )
  )

  return (
    <div>
      <h1>Todo List</h1>
      <form action="" onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={state.input}/>
        <button type="submit">추가하기</button>
      </form>
      <ul>
        {todoItemList}
      </ul>
    </div>
  );
}

export default memo(TodoList);