import './burgerStyles.css';

import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Colors } from '../../styles/colors.styles';

const StyledLink = styled(Link)`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.6px;
  color: ${Colors.lightGray};
  text-decoration: none;
`;

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
      <StyledLink
        to={`/Dobrovolskaya.pdf`}
        target="_blank"
        onClick={() => setIsMenuOpen(false)}
      >
        resume
      </StyledLink>
    </Menu>
  );
};
