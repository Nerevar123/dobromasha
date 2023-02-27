import { CheckmarxBlue } from '../../assets/projects';
import {
  img2_1,
  img2_2,
  img2_3,
  img2_4,
  img2_5,
  img2_6,
  img2_7,
  img2_8,
  img2_9,
  img2_10,
} from '../../assets/projects/2';
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

export const Project2 = () => {
  return (
    <Project>
      <Header>
        <Title>Social tiles, banners and collateral</Title>
        <Subtitle>
          Checkmarx is the global leader in software security solutions for modern
          application development. Checkmarx is trusted by more than 40 percent of the
          Fortune 100 and half of the Fortune 50, including leading organizations such as
          SAP, Samsung, and Salesforce.com
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
          <Name>Social tiles and special banners</Name>
        </TextBlock>
        <Slide src={img2_1} />
        <Slide src={img2_2} />
        <Slide src={img2_3} />
        <TextBlock>
          <Name>Collateral</Name>
        </TextBlock>
        <Slide src={img2_4} />
        <Slide src={img2_5} />
        <Slide src={img2_6} />
        <TextBlock>
          <Name>Banners</Name>
        </TextBlock>
        <Slide src={img2_7} />
        <Slide src={img2_8} />
        <Slide src={img2_9} />
        <Slide src={img2_10} />
      </Slides>
    </Project>
  );
};
