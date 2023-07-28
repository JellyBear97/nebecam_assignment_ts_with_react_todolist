import React, { useState } from 'react';
import './reset.css';
import Layout from './components/common/Layout';
import FormNewTodo from './components/FormNewTodo';
import TodoList from './components/ItemList';
import { styled } from 'styled-components';

export interface Todo {
  id: string;
  content: string;
  isDone: boolean;
}

const initialTodos: Todo[] = [
  {
    id: 'abc',
    content: 'TypeScript 복습하기',
    isDone: false,
  },
  {
    id: 'bcd',
    content: '물 한잔 마시기',
    isDone: true,
  },
];

const App = () => {
  const [content, setContent] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return (
    <Layout>
      <FormNewTodo content={content} setContent={setContent} setTodos={setTodos} todos={todos} />
      <StMain>
        <TodoList isDone={false} todos={todos} setTodos={setTodos} />
        <TodoList isDone={true} todos={todos} setTodos={setTodos} />
      </StMain>
    </Layout>
  );
};

export default App;

const StMain = styled.main`
  box-sizing: border-box;
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 45px;
`;
