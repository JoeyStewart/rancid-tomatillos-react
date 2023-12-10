import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Root from "./Routes/root";
import Selection, { loader as selectionLoader } from "./Routes/selection";
import ErrorPage from "./error-page";
import Movies, { loader as moviesLoader } from "./Components/Movies/Movies";
import reportWebVitals from "./reportWebVitals";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Movies />,
        loader: moviesLoader,
      },
      {
        path: "movie/:movieId",
        element: <Selection />,
        loader: selectionLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
