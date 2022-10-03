import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouteObject,
  RouterProvider
} from "react-router-dom";
import BringListEdit from './BringListEdit';
import BringListView from './BringListView';
import { ErrorPage } from './ErrorPage';
import './index.css';

const routes: RouteObject[] = [
  { path: '/', element: <BringListView />, errorElement: <ErrorPage /> },
  { path: '/view', element: <BringListView /> },
  { path: '/edit', element: <BringListEdit /> },
]

const router = createBrowserRouter(routes,
  { basename: import.meta.env.BASE_URL },
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

