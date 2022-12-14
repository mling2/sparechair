import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import RentTransaction from "./pages/RentTransaction";
import SellerForm from './pages/SellerForm';
import Header from './pages/Header';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/transaction",
    element: <RentTransaction />,
  },
  {
    path: "/seller",
    element: <SellerForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.min.css"></link></head>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
