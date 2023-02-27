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
        <Title>Hackathon event for Checkmarx</Title>
        <Subtitle>
          For the Employee Hackathon, I led a rebranding initiative with the main message
          of &quot;Ready. Set. Code.&quot; The design system included social tiles, email
          design, landing page design, posters, Zoom and Teams wallpaper, desktop and
          mobile screen savers, email signatures, stage and booth design, photography
          curation, and others. The Hackathon aimed to create innovative projects that
          generate ROI and provide an opportunity to engage people with the company&apos;s
          products.
          <Copyright>
            Intellectual property of Checkmarx Ltd. © All rights reserved worldwide
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
        </TextBlock>
        <Text>
          Develop a system design for the hackathon event that aligns with this
          year&apos;s theme, which includes Platform Play, Self Service, Low-Touch,
          Advanced Solutions, and Operational Excellence. The system design should
          showcase Innovations, Speed, and the Fast and Furious/Formula 1 theme.
        </Text>
        <TextBlock>
          <Name>Concept</Name>
        </TextBlock>
        <Text>
          The logo and visuals feature dynamic elements that highlight movement and are
          integrated with Checkmarx&apos; code-centric direction. The term
          &quot;hackathon&quot; combines &quot;hacker&quot; and &quot;marathon&quot;
          symbolizing clever programming and endurance, respectively. To create a
          hackathon atmosphere, the visuals should feature enthusiastic people passionate
          about the event, with a focus on HTML code and its tags used to structure web
          pages.
        </Text>
      </Description>
      <Slides>
        <TextBlock>
          <Name>Designed Logo</Name>
        </TextBlock>
        <Slide src={img3_2} />
        <TextBlock>
          <Name>Power Point slides</Name>
        </TextBlock>
        <Slide src={img3_3} />
        <TextBlock>
          <Name>Social tiles</Name>
        </TextBlock>
        <Slide src={img3_4} />
        <TextBlock>
          <Name>Wallpapers and digital banners</Name>
        </TextBlock>
        <Slide src={img3_5} />
        <Slide src={img3_6} />
        <TextBlock>
          <Name>Printed assets and SWAG</Name>
        </TextBlock>
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
