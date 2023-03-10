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
  img1_14,
} from '../../assets/projects/1';
import {} from '../../assets/projects/2';
import {
  BigSlide,
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

export const Project1 = () => {
  return (
    <Project>
      <Header>
        <Title>SKO Event</Title>
        <Subtitle>
          As the graphic designer for Checkmarx Company&apos;s SKO (Sales Kick-Off), I
          created a wide range of print and digital assets, including banners, backwalls,
          signboards, flags, table runners, swag, registration desk, podiums, email
          banners, and various other digital assets. My cohesive designs aligned with the
          event&apos;s theme and the company&apos;s brand, and contributed to a successful
          and memorable experience for attendees.
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
          <Name>Printed and digital assets</Name>
        </TextBlock>
        <Slide src={img1_1} />
        <Slide src={img1_2} />
        <Slide src={img1_3} />
        <Slide src={img1_4} />
        <Slide src={img1_5} />
        <Slide src={img1_6} />
        <Slide src={img1_7} />
        <Slide src={img1_8} />
        <TextBlock>
          <Name>SWAG</Name>
        </TextBlock>
        <Slide src={img1_9} />
        <Slide src={img1_10} />
        <Slide src={img1_11} />
        <Slide src={img1_12} />
        <Slide src={img1_13} />
        <BigSlide src={img1_14} />
      </Slides>
    </Project>
  );
};
