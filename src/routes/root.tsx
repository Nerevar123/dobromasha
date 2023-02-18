import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import img1 from '../assets/test.png';
import { Header } from '../components/header';
import { Preloader } from '../components/preloader';
import { GlobalStyles } from '../styles/global.styles';

const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 120px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Child = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  src: ${({ src }) => src};
`;

export const Root = () => {
  return (
    <Suspense fallback={<Preloader visible />}>
      <GlobalStyles />
      <App>
        <Header />
        <h1>Dobromasha</h1>
        <p>
          Verint® (NASDAQ: VRNT) is a global leader in Actionable Intelligence® solutions
          with a focus on customer engagement optimization, security intelligence, and
          fraud, risk and compliance. Today, more than 10,000 organizations in 180
          countries count on intelligence from Verint solutions to make more informed,
          effective and timely decisions.
        </p>
        <Grid>
          <Child height={300} src={img1} />
          <Child height={250} src={img1} />
          <Child height={200} src={img1} />
          <Child height={200} src={img1} />
          <Child height={350} src={img1} />
          <Child height={500} src={img1} />
        </Grid>
        <Link to={`about`}></Link>
        <Outlet />
      </App>
    </Suspense>
  );
};
