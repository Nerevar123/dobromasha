import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 32px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Header = () => {
  return (
    <Root>
      <Link to={''}>Maria Dobrovolskaya | Graphic Designer and Illustrator</Link>
      <Buttons>
        <button>Projects</button>
        <button>About</button>
      </Buttons>
    </Root>
  );
};
