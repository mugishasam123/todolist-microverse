import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import './App.css';
import About from './pages/About';
import NotMatch from './pages/NotMatch';

const TodoContainer = () => {
  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);

    return { todos: savedTodos } || { todos: [] };
  }
  const [state, setState] = useState(getInitialTodos());

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState({
      todos: [...state.todos, newTodo],
    });
  };
  const setUpdate = (updatedTitle, id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  const handleChange = (id) => {
    setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  const delTodo = (id) => {
    setState({
      todos: [...state.todos.filter((todo) => todo.id !== id)],
    });
  };

  useEffect(() => {
    const temp = JSON.stringify(state.todos);
    localStorage.setItem('todos', temp);
  }, [state.todos]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <>
                <div className="container">
                  <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={addTodoItem} />
                    {' '}
                    <TodoList
                      todos={state.todos}
                      handleChangeProps={handleChange}
                      deleteTodoProps={delTodo}
                      setUpdate={setUpdate}
                    />
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </>
            )}
          />
          {' '}
          <Route path="/about" element={<About />} />
          {' '}
          <Route path="*" element={<NotMatch />} />
          {' '}
        </Routes>
        {' '}
      </Router>
      {' '}
    </>
  );
};

export default TodoContainer;
