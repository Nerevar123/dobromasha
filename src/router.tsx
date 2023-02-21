import { createBrowserRouter } from 'react-router-dom';

import { About, ErrorPage, Projects, Root } from './routes';
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
} from './routes/projects';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Projects />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects/1',
        element: <Project1 />,
      },
      {
        path: 'projects/2',
        element: <Project2 />,
      },
      {
        path: 'projects/3',
        element: <Project3 />,
      },
      {
        path: 'projects/4',
        element: <Project4 />,
      },
      {
        path: 'projects/5',
        element: <Project5 />,
      },
      {
        path: 'projects/6',
        element: <Project6 />,
      },
    ],
  },
]);
