import React, { useState } from 'react';
import './reset.css';
import Layout from './components/common/Layout';
import FormNewTodo from './components/FormNewTodo';
import TodoList from './components/ItemList';

export interface Todo {
  id: string;
  content: string;
  isDone: boolean;
}

const initialTodos: Todo[] = [
  {
    id: 'abc',
    content: '금붕어잡기',
    isDone: false,
  },
  {
    id: 'bcd',
    content: '졸지말기',
    isDone: true,
  },
];

const App = () => {
  const [content, setContent] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return (
    <Layout>
      <FormNewTodo content={content} setContent={setContent} setTodos={setTodos} todos={todos} />
      <main>
        <TodoList isDone={false} todos={todos} setTodos={setTodos} />
        <TodoList isDone={true} todos={todos} setTodos={setTodos} />
      </main>
    </Layout>
  );
};

export default App;
