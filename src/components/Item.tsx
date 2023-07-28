import React from 'react';
import { Todo } from '../App';
import { styled } from 'styled-components';

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
    <StWrapper>
      <p>{item.content}</p>
      <StButtons>
        <Button onClick={() => onClickDeleteHandler(item.id)} name="delete">
          삭제
        </Button>
        <Button onClick={() => onClickSwitchHandler(item.id)} name="switch">
          {item.isDone ? '취소' : '완료'}
        </Button>
      </StButtons>
    </StWrapper>
  );
};

export default Item;

const StWrapper = styled.div`
  background-color: #fff;
  /* border: 1px solid #000; */
  border: 1px solid #819981;

  padding: 20px;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  & > p {
    color: #777777;
    font-weight: 500;
  }
`;

const StButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #fff;
  width: 45px;
  height: 30px;
  border-radius: 10px;
  color: #666666;
  border: ${({ name }) => {
    if (name === 'delete') {
      return '1.5px solid #b67162;';
    } else if (name === 'switch') {
      // return '1.5px solid #9e9d89';
      return '1.5px solid #96947c';
    }
  }};
  &:hover {
    background-color: ${({ name }) => {
      if (name === 'delete') {
        return '#E2BCB7';
      } else if (name === 'switch') {
        return '#9e9d8982';
      }
    }};
  }
`;
