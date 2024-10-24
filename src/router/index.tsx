import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from 'views/About';
import Main from 'views/Main';
import Navigate from 'views/Navigate';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate />,
    children: [
      // Navigate.tsx에 Outlet으로 출력
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
