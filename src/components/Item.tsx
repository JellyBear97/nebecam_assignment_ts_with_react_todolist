import React from 'react';
import { Todo } from '../App';

type Props = {
  item: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Item = ({ item, todos, setTodos }: Props) => {
  const onClickSwitchHandler = (itemId: string) => {
    const renewalTodos = todos.map(item => {
      if (item.id === itemId) {
        return (item = { ...item, isDone: !item.isDone });
      }
      return item;
    });
    setTodos(renewalTodos);
  };

  const onClickDeleteHandler = (itemId: string): void => {
    const renewalTodos = todos.filter(item => {
      return item.id !== itemId;
    });
    setTodos(renewalTodos);
  };

  return (
    <div>
      <p>{item.content}</p>
      <div>
        <button onClick={() => onClickDeleteHandler(item.id)}>삭제</button>
        <button onClick={() => onClickSwitchHandler(item.id)}>{item.isDone ? '취소' : '완료'}</button>
      </div>
    </div>
  );
};

export default Item;
