import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Facebook, Gmail, Linkedin, Whatsapp } from '../../assets/social';

const Root = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  bottom: 120px;
  left: 30px;

  @media screen and (max-width: 950px) {
    left: 20px;
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
      <SocialLink to={'https://wa.me/+972585851762'} target="_blank">
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
