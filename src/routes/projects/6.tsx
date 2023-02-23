import { CheckmarxBlue } from '../../assets/projects';
import {
  img6_1,
  img6_2,
  img6_3,
  img6_4,
  img6_5,
  img6_6,
  img6_7,
  img6_8,
  img6_9,
  img6_10,
  img6_11,
} from '../../assets/projects/6';
import {
  CaptureBlock,
  Copyright,
  Header,
  Logo,
  Name,
  Project,
  Slide,
  Slides,
  Subtitle,
  Title,
} from './project.styles';

export const Project6 = () => {
  return (
    <Project>
      <Header>
        <Title>Checkmate Design System</Title>
        <Subtitle>
          RBriefFormat: 100% virtual summit Objective: Thought Leadership on Application
          Security Theme: Formula 1 “engineered insanity” with speed, style, and
          engineering finesse qualities manifested in the Checkmarx One platform for
          Application Security Testing in the modern world (Folder number 185)
          <Copyright>
            Proprietary information of Checkmarx Ltd. © All rights reserved worldwide
          </Copyright>
        </Subtitle>
        <Logo>
          <CheckmarxBlue />
        </Logo>
      </Header>
      <Slides>
        <CaptureBlock>
          <Name>First concepts of logo and visuals</Name>
        </CaptureBlock>
        <Slide src={img6_1} />
        <Slide src={img6_2} />
        <CaptureBlock>
          <Name>Final concept</Name>
        </CaptureBlock>
        <Slide src={img6_3} />
        <Slide src={img6_4} />
        <Slide src={img6_5} />
        <Slide src={img6_6} />
        <Slide src={img6_7} />
        <Slide src={img6_8} />
        <Slide src={img6_9} />
        <Slide src={img6_10} />
        <CaptureBlock>
          <Name>Landing page concepts</Name>
        </CaptureBlock>
        <Slide src={img6_11} />
      </Slides>
    </Project>
  );
};
