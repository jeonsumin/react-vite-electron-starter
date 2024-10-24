import ReactDOM from 'react-dom/client';
import 'assets/css/utility.css';
import 'assets/css/common.css';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import { Provider } from 'react-redux';
import { store } from 'store';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
