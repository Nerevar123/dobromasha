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
  img6_12,
} from '../../assets/projects/6';
import { useWindowSize } from '../../hooks/useWindowSize';
import {
  Copyright,
  Header,
  Logo,
  Name,
  Project,
  Slide,
  Slides,
  Subtitle,
  TextBlock,
  Title,
} from './project.styles';

export const Project6 = () => {
  const { width } = useWindowSize();

  return (
    <Project>
      <Header>
        <Title>Checkmate Design System</Title>
        <Subtitle>
          Checkmate is a 100% virtual summit aimed at providing thought leadership on
          application security. The theme of the summit is Formula 1, with a focus on the
          qualities of speed, style, and engineering finesse. These qualities are
          manifested in the Checkmarx One platform for application security testing in the
          modern world.
          <Copyright>
            Intellectual property of Checkmarx Ltd. © All rights reserved worldwide
          </Copyright>
        </Subtitle>
        <Logo>
          <CheckmarxBlue />
        </Logo>
      </Header>
      <Slides>
        <TextBlock>
          <Name>First concepts of logo and visuals</Name>
        </TextBlock>
        <Slide src={img6_1} />
        <Slide src={img6_2} />
        <TextBlock>
          <Name>Final concept</Name>
        </TextBlock>
        <Slide src={img6_3} />
        <Slide src={img6_4} />
        <Slide src={img6_5} />
        <Slide src={img6_6} />
        <Slide src={img6_7} />
        <Slide src={img6_8} />
        <Slide src={img6_9} />
        <Slide src={img6_10} />
        <TextBlock>
          <Name>Landing page concepts</Name>
        </TextBlock>
        {width > 800 ? <Slide src={img6_11} /> : <Slide src={img6_12} />}
      </Slides>
    </Project>
  );
};
