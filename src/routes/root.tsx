import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Preloader } from '../components/preloader';
import { GlobalStyles } from '../styles/global.styles';

export const Root = () => {
  return (
    <Suspense fallback={<Preloader visible />}>
      <GlobalStyles />
      <h1>React Router Contacts</h1>
      <Link to={`about`}>About</Link>
      <Outlet />
    </Suspense>
  );
};
