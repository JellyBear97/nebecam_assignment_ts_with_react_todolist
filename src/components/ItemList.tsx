import React from 'react';
import Item from './Item';
import { Todo } from '../App';

type Props = {
  isDone: boolean;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const ItemList = ({ isDone, todos, setTodos }: Props) => {
  return (
    <section>
      <h1>{isDone ? 'Done' : 'Working'}</h1>
      {todos
        .filter(item => {
          return item.isDone === isDone;
        })
        .map(item => {
          return <Item key={item.id} item={item} todos={todos} setTodos={setTodos} />;
        })}
    </section>
  );
};
export default ItemList;
