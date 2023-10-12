import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../app/store/store.js";
import App from "./App.jsx";
import "./index.css";

//Provider like context to make in context to access store
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
