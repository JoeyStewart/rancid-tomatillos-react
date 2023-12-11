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
        errorElement: <ErrorPage />,
      },
      {
        path: "movie/:movieId",
        element: <Selection />,
        loader: selectionLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
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

reportWebVitals();
