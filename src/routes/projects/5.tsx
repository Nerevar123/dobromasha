import { YedaBlue } from '../../assets/projects';
import {
  img5_1,
  img5_2,
  img5_3,
  img5_4,
  img5_5,
  img5_6,
  img5_7,
  img5_8,
} from '../../assets/projects/5';
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

export const Project5 = () => {
  return (
    <Project>
      <Header>
        <Title>Web Design and Illustrations</Title>
        <Subtitle>
          Yeda is a centralized platform that provides tools for creating online courses,
          connecting professionals with workplaces for employee training, and offering a
          simple and convenient learning process.
          <Copyright>
            Intellectual property of Yeda. © All rights reserved worldwide
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
        <BigSlide src={img5_8} />
      </Slides>
    </Project>
  );
};
