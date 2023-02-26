import './burgerStyles.css';

import { Suspense, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { img1_14 } from '../assets/projects/1';
import { img4_9 } from '../assets/projects/4';
import { img5_8 } from '../assets/projects/5';
import { Footer, Header, Preloader } from '../components';
import { Colors } from '../styles/colors.styles';
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

const StyledLink = styled(Link)`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.6px;
  color: ${Colors.lightGray};
  text-decoration: none;
`;

export const Root = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  return (
    <Suspense fallback={<Preloader visible />}>
      <GlobalStyles />
      <ScrollRestoration />
      <App>
        <Menu
          right
          width={'100%'}
          className={'burger-menu'}
          onOpen={() => setIsMenuOpen(true)}
          onClose={() => setIsMenuOpen(false)}
          isOpen={isMenuOpen}
        >
          <StyledLink to={''} onClick={() => setIsMenuOpen(false)}>
            home page
          </StyledLink>
          <StyledLink to={'about'} onClick={() => setIsMenuOpen(false)}>
            about
          </StyledLink>
          <StyledLink to={`resume`} onClick={() => setIsMenuOpen(false)}>
            resume
          </StyledLink>
        </Menu>
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
