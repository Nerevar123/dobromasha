import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Preloader } from '../components/preloader';
import { GlobalStyles } from '../styles/global.styles';

const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OutletWrapper = styled.div`
  padding-inline: 120px;
`;

export const Root = () => {
  return (
    <Suspense fallback={<Preloader visible />}>
      <GlobalStyles />
      <App>
        <OutletWrapper>
          <Header />
          <Outlet />
        </OutletWrapper>
        <Footer />
      </App>
    </Suspense>
  );
};
