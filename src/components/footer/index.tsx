import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Colors } from '../../styles/colors.styles';

const Root = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
  padding-block: 50px;
  padding-inline: 120px;
  background-color: ${Colors.white};
`;

const Copyright = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: ${Colors.textGray};
  margin-block: 0;
`;

const Contacts = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.6px;
  color: ${Colors.gray};
  text-decoration: underline;
  text-decoration-color: ${Colors.background};
  transition: text-decoration-color 0.4s ease-in-out;

  &:hover {
    text-decoration-color: ${Colors.gray};
  }
`;

export const Footer = () => {
  return (
    <Root>
      <Copyright>© 2023 Maria Dobrovolskaya</Copyright>
      <Contacts>
        <StyledLink to={'tel:+9720585851762'}>+9720585851762</StyledLink> |{' '}
        <StyledLink to={'mailto:dobrovolskayamaria@gmail.com'}>
          dobrovolskayamaria@gmail.com
        </StyledLink>
      </Contacts>
    </Root>
  );
};
