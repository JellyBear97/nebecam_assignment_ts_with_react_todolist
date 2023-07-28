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
      <input type="text" placeholder="할 일을 작성해주세요" value={content} onChange={e => onChangeContentHandler(e)} />
      <button type="submit">할 일 추가</button>
    </StForm>
  );
};

export default FormNewTodo;

const StForm = styled.form`
  padding: 20px;
  & > input {
    width: 400px;
    height: 40px;
    padding: 10px 20px;
  }

  & > button {
    width: 80px;
    height: 40px;
  }
`;
