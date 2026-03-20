import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import NotFound from "./components/NotFound";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Cart from "./components/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router ={router} />);
