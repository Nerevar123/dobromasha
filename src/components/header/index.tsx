import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Colors } from '../../styles/colors.styles';

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 40px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  text-decoration-color: ${Colors.background};
  transition: text-decoration-color 0.4s ease-in-out;

  &:hover {
    text-decoration-color: ${Colors.black};
  }
`;

const Logo = styled(StyledLink)`
  font-size: 24px;
  line-height: 1.3;
  color: ${Colors.gray};
`;

const Button = styled(StyledLink)`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
  color: ${Colors.black};
  letter-spacing: 1px;
`;

const ColorButton = styled(Button)`
  background-color: ${Colors.lightGray};
  padding: 10px 28px;
  border-radius: 20px;
`;

const Bold = styled.span`
  font-weight: 700;
`;

export const Header = () => {
  return (
    <Root>
      <Logo to={''}>
        <Bold>Maria Dobrovolskaya</Bold> | Graphic Designer and Illustrator
      </Logo>
      <Buttons>
        <Button to={'about'}>about</Button>
        <ColorButton to={`resume`}>resume</ColorButton>
      </Buttons>
    </Root>
  );
};
