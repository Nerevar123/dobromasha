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
  CaptureBlock,
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

export const Project2 = () => {
  return (
    <Project>
      <Header>
        <Title>Social Tiles, Banners and Collateral</Title>
        <Subtitle>
          As a graphic marketing designer for Checkmarx Company, I created a wide range of
          visually engaging and effective marketing assets, including social graphics,
          banners, special tiles, email structures, digital banners, ads, landing pages,
          whitepapers, e-books, solution briefs, brochures, datasheets, case studies, and
          other materials. These designs were aimed at promoting the company&apos;s
          campaigns and effectively communicating key information to prospects and
          customers.
          <Copyright>
            Proprietary information of Checkmarx Ltd. © All rights reserved worldwide
          </Copyright>
        </Subtitle>
        <Logo>
          <CheckmarxBlue />
        </Logo>
      </Header>
      <Slides>
        <CaptureBlock>
          <Name>Social tiles and special banners</Name>
        </CaptureBlock>
        <Slide src={img2_1} />
        <Slide src={img2_2} />
        <Slide src={img2_3} />
        <CaptureBlock>
          <Name>Collateral</Name>
        </CaptureBlock>
        <Slide src={img2_4} />
        <Slide src={img2_5} />
        <Slide src={img2_6} />
        <CaptureBlock>
          <Name>Banners</Name>
        </CaptureBlock>
        <Slide src={img2_7} />
        <Slide src={img2_8} />
        <Slide src={img2_9} />
        <Slide src={img2_10} />
      </Slides>
    </Project>
  );
};
