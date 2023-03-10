import { Suspense } from 'react';
import { Link, Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { BackArrow } from '../assets/projects';
import { BurgerMenu, Footer, Header, Preloader } from '../components';
import { Colors } from '../styles/colors.styles';
import { GlobalStyles } from '../styles/global.styles';

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
  flex: 1;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.gray};
  margin-top: 40px;
  text-decoration: underline;
  text-decoration-color: ${Colors.background};
  transition: text-decoration-color 0.4s ease-in-out;

  &:hover {
    text-decoration-color: ${Colors.gray};
  }
`;

export const BackText = styled.span`
  margin-left: 6px;
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
        {location.pathname.startsWith('/projects') && (
          <BackLink to={''}>
            <BackArrow />
            <BackText>back to projects</BackText>
          </BackLink>
        )}
        <Footer />
      </App>
    </Suspense>
  );
};
