import { Suspense } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { img1_14 } from '../assets/projects/1';
import { img4_9 } from '../assets/projects/4';
import { img5_8 } from '../assets/projects/5';
import { BurgerMenu, Footer, Header, Preloader } from '../components';
import { GlobalStyles } from '../styles/global.styles';
import { Slide } from './projects/project.styles';

const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  & > div:first-child {
    @media screen and (min-width: 801px) {
      display: none;
    }
  }
`;

const OutletWrapper = styled.div`
  padding-inline: 8.33%;
  flex: 1;

  @media screen and (max-width: 800px) {
    padding-inline: 24px;
  }
`;

export const Root = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Preloader visible />}>
      <GlobalStyles />
      <ScrollRestoration />
      <App>
        <BurgerMenu />
        <OutletWrapper>
          <Header />
          <Outlet />
        </OutletWrapper>
        {location.pathname === '/projects/1' && <Slide src={img1_14} />}
        {location.pathname === '/projects/4' && <Slide src={img4_9} />}
        {location.pathname === '/projects/5' && <Slide src={img5_8} />}

        <Footer />
      </App>
    </Suspense>
  );
};
