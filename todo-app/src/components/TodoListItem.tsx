import React, { memo } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import '../css/TodoListItem.scss';
import { Todos } from './types/type'

interface Props {
  todo:Todos
  onRemove: any
  onToggle: any
}

const TodoListItem:React.FunctionComponent<Props> = ({ todo,onRemove,onToggle }) => {
  const { id, text,checked } = todo
  return (
    <div className="TodoListItem">
      <div className={"checkbox"} onClick={() => {onToggle(id)}}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => {onRemove(id)}}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default memo(TodoListItem);