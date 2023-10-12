import { configureStore } from "@reduxjs/toolkit";
//we can use any name to get default export objects
import todoReducers from "../../features/todo/todoSlice";

//Step 1 To configure Store
export const store = configureStore({
  reducer: todoReducers
});
