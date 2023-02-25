import { YedaBlue } from '../../assets/projects';
import {
  img5_1,
  img5_2,
  img5_3,
  img5_4,
  img5_5,
  img5_6,
  img5_7,
} from '../../assets/projects/5';
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

export const Project5 = () => {
  return (
    <Project>
      <Header>
        <Title>Web Design and Illustrations</Title>
        <Subtitle>
          Rebranding for Employee event which will take place both online and offline.
          Hackathon (also known as a hack day, hackfest, datathon or codefest) - is a
          social coding event that brings computer programmers and other interested people
          together to improve upon or build a new software program.
          <Copyright>
            Proprietary information of Yeda. © All rights reserved worldwide
          </Copyright>
        </Subtitle>
        <Logo>
          <YedaBlue />
        </Logo>
      </Header>
      <Slides>
        <Slide src={img5_1} />
        <Slide src={img5_2} />
        <Slide src={img5_3} />
        <Slide src={img5_4} />
        <Slide src={img5_5} />
        <Slide src={img5_6} />
        <Slide src={img5_7} />
      </Slides>
    </Project>
  );
};
