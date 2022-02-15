/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (
  <ul>
    {' '}
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        setUpdate={props.setUpdate}
        deleteTodoProps={props.deleteTodoProps}
        handleChangeProps={props.handleChangeProps}
      />
    ))}
    {' '}
  </ul>
);

export default TodoList;
