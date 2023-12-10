import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/Components /App/App.js';
import { BrowserRouter } from 'react-router-dom';

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
