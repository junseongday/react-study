import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const GloabalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
function App() {
  return (
    <>
      <GloabalStyle/>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
