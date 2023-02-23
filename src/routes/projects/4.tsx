import {
  img4_1,
  img4_2,
  img4_3,
  img4_4,
  img4_5,
  img4_6,
  img4_7,
  img4_8,
} from '../../assets/projects/4';
import {
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

export const Project4 = () => {
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
            Proprietary information of Connectika (Ecosystem). © All rights reserved
            worldwide
          </Copyright>
        </Subtitle>
        <Logo>
          <Name>Connectika (Ecosystem)</Name>
        </Logo>
      </Header>
      <Slides>
        <Slide src={img4_1} />
        <Slide src={img4_2} />
        <Slide src={img4_3} />
        <Slide src={img4_4} />
        <Slide src={img4_5} />
        <Slide src={img4_6} />
        <Slide src={img4_7} />
        <Slide src={img4_8} />
      </Slides>
    </Project>
  );
};
