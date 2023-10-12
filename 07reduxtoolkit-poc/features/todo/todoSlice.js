/* eslint-disable no-unused-vars */

import { createSlice, nanoid } from "@reduxjs/toolkit";

//step 2 to initial basic object /state
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

// Step 3
export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    //state-current state ki value
    //action - any action.payload data as input for reducer[its object in payload
    //anything will pass but here we are using text field]
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      alert(" action.payload " + action.payload)
      state.todos = state.todos.filter((tds) => tds.id !== action.payload);
    },
  },
});

console.log(" Slice ");
console.log(todoSlice);

//step 4
//will work in components
export const { addTodo, removeTodo } = todoSlice.actions;

//step 5 for store all reucers
//in js we dont have named to default exporters 
export default todoSlice.reducer ; 