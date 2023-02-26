import styled from 'styled-components';

import { avatar } from '../assets/about';
import { Colors } from '../styles/colors.styles';

const Root = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  justify-items: center;
  margin-top: 100px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
`;

const Avatar = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 50%;
  object-fit: contain;
`;

const TextWrapper = styled.div`
  color: ${Colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 72%;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 100px;
  letter-spacing: 0.02em;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
`;

export const About = () => {
  return (
    <Root>
      <Avatar src={avatar} />
      <TextWrapper>
        <Title>Hello,</Title>
        <Text>
          My name is Maria, I’m a s a graphic marketing designer for Checkmarx Company, I
          created a wide range of visually engaging and effective marketing assets,
          including social graphics, banners, special tiles, email structures, digital
          banners, ads, landing pages, whitepapers, e-books, solution briefs, brochures,
          datasheets, case studies, and other materials. These designs were aimed at
          promoting the company&apos;s campaigns and effectively communicating key
          information to prospects and customers.
        </Text>
      </TextWrapper>
    </Root>
  );
};
