import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./componenets/Layout.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./componenets/Home/Home.jsx";
import About from "./componenets/About/About.jsx";
import Contact from "./componenets/Contact/Contact.jsx";
import User from "./componenets/Params/User.jsx";
import GitHub, { fetchGithubData } from "./componenets/GitHub.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "github",
        element: <GitHub />,
        loader:fetchGithubData
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);

/* 
Link: The Link component is the simplest and most basic way to navigate between different routes in a React application. It renders an anchor (<a>) element and allows you to specify the to prop with the target route. When clicked, it triggers a navigation to the specified route.
NavLink: NavLink is an extension of the Link component. It provides additional functionality for styling and handling active route highlighting. NavLink adds the active class to the rendered element when the current route matches the to prop, allowing you to style the active link differently.
*/
