import React from 'react';
import { styled } from 'styled-components';
import { Todo } from '../App';
import { nanoid } from 'nanoid';

type Props = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const FormNewTodo = ({ content, setContent, setTodos, todos }: Props) => {
  const onChangeContentHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContent(e.target.value);
  };

  const onSubmitTodoHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo: Todo = {
      id: nanoid(),
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setContent('');
  };
  return (
    <StForm onSubmit={e => onSubmitTodoHandler(e)}>
      <input placeholder="할 일을 작성해주세요" value={content} onChange={e => onChangeContentHandler(e)} />
      <button type="submit">ADD</button>
    </StForm>
  );
};

export default FormNewTodo;

const StForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 45px;
  & > input {
    box-sizing: border-box;
    width: 500px;
    height: 45px;
    padding: 20px;
    vertical-align: middle;
    border: 1px solid #bdbdbd;
    border-right: none;
    border-radius: 10px 0 0 10px;
  }
  & > input:focus {
    outline: none;
  }

  & > button {
    width: 80px;
    height: 45px;
    border: 1px solid #bdbdbd;
    /* background-color: #eee; */
    /* background-color: #7a9379; */
    background-color: #819981;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    border-radius: 0 10px 10px 0;
  }
`;
