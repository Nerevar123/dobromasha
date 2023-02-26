import styled from 'styled-components';

import { ProjectsGrid } from '../components/projects-grid';
import { SocialIcons } from '../components/social-icons';
import { Colors } from '../styles/colors.styles';

const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Colors.gray};
`;

const Title = styled.h1`
  font-size: 100px;
  line-height: 1;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 8px;
  letter-spacing: 0.02em;

  @media screen and (max-width: 800px) {
    font-size: 60px;
  }
`;

const Subtitle = styled.p`
  font-size: 22px;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 80px;
  text-transform: uppercase;
  letter-spacing: 0.02em;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const Projects = () => {
  return (
    <Root>
      <Title>I’m Maria</Title>
      <Subtitle>a Graphic Designer and Illustrator</Subtitle>
      <ProjectsGrid />
      <SocialIcons />
    </Root>
  );
};
