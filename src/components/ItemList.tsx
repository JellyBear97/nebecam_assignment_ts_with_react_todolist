import React from 'react';
import Item from './Item';
import { Todo } from '../App';
import { styled } from 'styled-components';

type Props = {
  isDone: boolean;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const ItemList = ({ isDone, todos, setTodos }: Props) => {
  return (
    <StSection>
      <h3>{isDone ? 'Done' : 'Working'}</h3>
      {todos.length === 0 && (
        <div>
          <p>첫 번째 할 일을 작성해볼까요?</p>
        </div>
      )}
      {todos
        .filter(item => {
          return item.isDone === isDone;
        })
        .map(item => {
          return <Item key={item.id} item={item} todos={todos} setTodos={setTodos} />;
        })}
    </StSection>
  );
};
export default ItemList;

const StSection = styled.section`
  width: 50%;
  min-height: 420px;
  padding: 30px 40px;
  /* background-color: #f5efe8; */
  /* background-color: #f3f0eb; */
  background-color: #f6f4f0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  & > h3 {
    color: #819981;
    font-weight: 700;
    font-size: 22px;
  }
`;
