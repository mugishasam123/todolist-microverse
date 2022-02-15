import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul>
      {" "}
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setUpdate ={props.setUpdate}
          deleteTodoProps={props.deleteTodoProps}
          handleChangeProps={props.handleChangeProps}
        />
      ))}{" "}
    </ul>
  );
};

export default TodoList;
