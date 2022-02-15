import React, { useState, useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const TodoContainer = () => {
  function getInitialTodos() {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
   
    return {todos:savedTodos} || {todos:[]};
  }
  const [state, setState] = useState(getInitialTodos());

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
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
    setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    });
  };

  const delTodo = (id) => {
    setState({
      todos: [
        ...state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  useEffect(() => {
    const temp = JSON.stringify(state.todos);
    localStorage.setItem("todos", temp);
  }, [state.todos]);

  return (
    <div className="container">
      <div className="inner">
        <NavBar />
        <Header />
        <InputTodo addTodoProps={addTodoItem} />{" "}
        <TodoList
          todos={state.todos}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
          handleChangeProps={handleChange}
        />{" "}
      </div>{" "}
    </div>
  );
};

export default TodoContainer;
