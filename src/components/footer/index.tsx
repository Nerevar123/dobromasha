import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Colors } from '../../styles/colors.styles';

const Root = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 60px;
`;

const Contacts = styled.div`
  font-size: 20px;
  line-height: 1.2;
  display: flex;
  gap: 8px;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  line-height: 1.2;
  color: ${Colors.black};
  text-decoration: underline;
  text-decoration-color: ${Colors.background};
  transition: text-decoration-color 0.4s ease-in-out;

  &:hover {
    text-decoration-color: ${Colors.black};
  }
`;

export const Footer = () => {
  return (
    <Root>
      <Contacts>
        <StyledLink to={'tel:+9720585851762'}>+9720585851762</StyledLink> |{' '}
        <StyledLink to={'mailto:dobrovolskayamaria@gmail.com'}>
          dobrovolskayamaria@gmail.com
        </StyledLink>
      </Contacts>
    </Root>
  );
};
