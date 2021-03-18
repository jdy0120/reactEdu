import React, { memo } from 'react';
import TodoListItem from './TodoListItem';
import '../css/TodoList.scss'
import { Todos } from './types/type'

interface Props {
  todos: Todos[]
  onRemove: any
  onToggle: any
}

const TodoList:React.FunctionComponent<Props> = ({ todos,onRemove,onToggle }) => {
  return(
    <div className="TodoList">
      {
        todos.map(todo => <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>)
      }
    </div>
  );
}

export default memo(TodoList);