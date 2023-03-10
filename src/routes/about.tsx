import styled from 'styled-components';

import { avatar } from '../assets/about';
import { Colors } from '../styles/colors.styles';
import { inlineMargin } from '../styles/global.styles';

const Root = styled.section`
  ${inlineMargin};

  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 20px;
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
          I am an experienced graphic designer and illustrator who has a proven track
          record of creating successful print and digital projects from conception to
          completion. I work closely with clients to ensure their goals and company briefs
          are met, infusing a creative energy throughout the design process with a keen
          eye for detail and hierarchy of messaging. I approach every project
          thoughtfully, creating visuals that not only look great, but also resonate with
          the target audience.
        </Text>
      </TextWrapper>
    </Root>
  );
};
