import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Facebook, Gmail, Linkedin, Whatsapp } from '../../assets/social';

const Root = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  bottom: 120px;
  left: 20px;

  @media screen and (max-width: 950px) {
    left: 10px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const SocialLink = styled(Link)``;

export const SocialIcons = () => {
  return (
    <Root>
      <SocialLink to={`https://www.facebook.com/dobromasha`} target="_blank">
        <Facebook />
      </SocialLink>
      <SocialLink to={'tel:+9720585851762'} target="_blank">
        <Whatsapp />
      </SocialLink>
      <SocialLink to={'mailto:dobrovolskayamaria@gmail.com'} target="_blank">
        <Gmail />
      </SocialLink>
      <SocialLink to={`https://www.linkedin.com/in/dobrovolskayamaria`} target="_blank">
        <Linkedin />
      </SocialLink>
    </Root>
  );
};
