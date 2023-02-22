import { CheckmarxBlue } from '../../assets/projects';
import {
  img2_1,
  img2_2,
  img2_3,
  img2_4,
  img2_5,
  img2_6,
  img2_7,
} from '../../assets/projects/2';
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

export const Project2 = () => {
  return (
    <Project>
      <Header>
        <Title>Social Tiles and Banners</Title>
        <Subtitle>
          Rebranding for Employee event which will take place both online and offline.
          Hackathon (also known as a hack day, hackfest, datathon or codefest) - is a
          social coding event that brings computer programmers and other interested people
          together to improve upon or build a new software program.{' '}
          <Copyright>
            Proprietary information of Checkmarx Ltd. © All rights reserved worldwide
          </Copyright>
        </Subtitle>
        <Logo>
          <CheckmarxBlue />
        </Logo>
      </Header>
      <Slides>
        <Slide src={img2_1} />
        <Slide src={img2_2} />
        <Slide src={img2_3} />
        <Slide src={img2_4} />
        <Slide src={img2_5} />
        <Slide src={img2_6} />
        <Slide src={img2_7} />
      </Slides>
    </Project>
  );
};
