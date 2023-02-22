import { CheckmarxBlue } from '../../assets/projects';
import {
  img3_1,
  img3_2,
  img3_3,
  img3_4,
  img3_5,
  img3_6,
  img3_7,
  img3_8,
  img3_9,
  img3_10,
  img3_11,
  img3_12,
} from '../../assets/projects/3';
import {
  Copyright,
  Description,
  Header,
  Logo,
  Name,
  Project,
  Slide,
  Slides,
  Subtitle,
  Text,
  TextBlock,
  Title,
} from './project.styles';

export const Project3 = () => {
  return (
    <Project>
      <Header>
        <Title>Hackathon Event for Checkmarx</Title>
        <Subtitle>
          Rebranding for Employee event which will take place both online and offline.
          Hackathon (also known as a hack day, hackfest, datathon or codefest) - is a
          social coding event that brings computer programmers and other interested people
          together to improve upon or build a new software program.
          <Copyright>
            Proprietary information of Checkmarx Ltd. © All rights reserved worldwide
          </Copyright>
        </Subtitle>
        <Logo>
          <CheckmarxBlue />
        </Logo>
      </Header>
      <Slides>
        <Slide src={img3_1} />
      </Slides>
      <Description>
        <TextBlock>
          <Name>Problem</Name>
          <Text>
            Come up with a system design for the event that corresponds to the theme of
            this year (Platform Play, Self Service, Low-Touch, Advanced solutions,
            Operational excellent) and shows Innovations, Speed and theme of Fast and
            Furious/Formula 1.
          </Text>
        </TextBlock>
        <TextBlock>
          <Name>Concept</Name>
          <Text>
            A logo and visuals were created that emphasize movement through dynamic
            elements. In addition to movement, the elements are part of the code, which
            represents Checkmarx&apos;s main direction. The word hackathon is a
            portmanteau of the words hacker, which means clever programmer, and marathon,
            an event marked by endurance. HTML is the code that is used to structure a web
            page and its content. HTML elements are delineated by tags, written using
            angle brackets. The hackathon atmosphere should be emphasized by using
            enthusiastic people who are passionate about the lesson.
          </Text>
        </TextBlock>
      </Description>
      <Slides>
        <Slide src={img3_2} />
        <Slide src={img3_3} />
        <Slide src={img3_4} />
        <Slide src={img3_5} />
        <Slide src={img3_6} />
        <Slide src={img3_7} />
        <Slide src={img3_8} />
        <Slide src={img3_9} />
        <Slide src={img3_10} />
        <Slide src={img3_11} />
        <Slide src={img3_12} />
      </Slides>
    </Project>
  );
};
