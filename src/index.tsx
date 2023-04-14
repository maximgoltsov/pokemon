import RootPage from '@pages/RootPage';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './reset.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<RootPage />),
  },
]);

ReactDOM.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  document.getElementById('root'),
);
