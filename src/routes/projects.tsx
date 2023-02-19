import styled from 'styled-components';

import { ProjectsGrid } from '../components/projects-grid';
import { Colors } from '../styles/colors.styles';

const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Colors.black};
`;

const Title = styled.h1`
  font-size: 120px;
  line-height: 1;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 12px;
  letter-spacing: 3px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 80px;
  text-transform: uppercase;
`;

export const Projects = () => {
  return (
    <Root>
      <Title>I’m Maria</Title>
      <Subtitle>a Graphic Designer and Illustrator</Subtitle>
      <ProjectsGrid />
    </Root>
  );
};
