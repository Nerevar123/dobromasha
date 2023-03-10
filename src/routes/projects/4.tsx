import { Connectika } from '../../assets/main';
import {
  img4_1,
  img4_2,
  img4_3,
  img4_4,
  img4_5,
  img4_6,
  img4_7,
  img4_8,
  img4_9,
} from '../../assets/projects/4';
import {
  BigSlide,
  Copyright,
  Header,
  Logo,
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
          Connectika (previous Ecosystem) is an app integration platform that automates
          workflows by moving information between web apps.
          <Copyright>
            Intellectual property of Connectika. © All rights reserved worldwide
          </Copyright>
        </Subtitle>
        <Logo>
          <Connectika />
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
        <BigSlide src={img4_9} />
      </Slides>
    </Project>
  );
};
