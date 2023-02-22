import { CheckmarxBlue } from '../../assets/projects';
import {
  img1_1,
  img1_2,
  img1_3,
  img1_4,
  img1_5,
  img1_6,
  img1_7,
  img1_8,
  img1_9,
  img1_10,
  img1_11,
  img1_12,
  img1_13,
} from '../../assets/projects/1';
import {} from '../../assets/projects/2';
import {
  Copyright,
  Header,
  Logo,
  Project,
  Slide,
  Slides,
  Subtitle,
  Title,
} from './project.styles';

export const Project1 = () => {
  return (
    <Project>
      <Header>
        <Title>SKO Event</Title>
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
        <Slide src={img1_1} />
        <Slide src={img1_2} />
        <Slide src={img1_3} />
        <Slide src={img1_4} />
        <Slide src={img1_5} />
        <Slide src={img1_6} />
        <Slide src={img1_7} />
        <Slide src={img1_8} />
        <Slide src={img1_9} />
        <Slide src={img1_10} />
        <Slide src={img1_11} />
        <Slide src={img1_12} />
        <Slide src={img1_13} />
      </Slides>
    </Project>
  );
};
