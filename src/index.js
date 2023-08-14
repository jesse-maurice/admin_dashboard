import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from '../src/App';
import OrdersPage from '../src/Pages/OrdersPage';
import GroupsPage from './Pages/GroupsPage';
import MessagePage from './Pages/MessagePage';
import AddProducts from './Pages/Products/AddProducts';
import ProductsList from './Pages/Products/ProductsList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Dashboard",
    element: <App />,
  },
  {
    path: "Orders",
    element: <OrdersPage />,
  },
  {
    path: "Groupss",
    element: <GroupsPage />,
  },
  {
    path: "Product list",
    element: <ProductsList />,
  },
  {
    path: "Add products",
    element: <AddProducts />,
  },
  {
    path: "Messages",
    element: <MessagePage />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


