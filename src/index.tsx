import RootPage from '@pages/RootPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import * as UI from './styled';

import './reset.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: (<RootPage />),
  },
]);

const queryClient = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UI.Page>
        <UI.Wrapper>
          <RouterProvider router={router} />
        </UI.Wrapper>
      </UI.Page>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root'),
);
