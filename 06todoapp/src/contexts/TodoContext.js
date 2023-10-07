/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

export const todoContext = React.createContext({
  todos: [{ id: 1, todo: "Test", isCompleted: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const TodoContextProvider = todoContext.Provider;
export const useTodoContext = () => {
  return useContext(todoContext);
};
``