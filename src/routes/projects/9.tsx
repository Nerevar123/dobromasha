import { Katya, Maskit } from '../../assets/projects';
import {
  img9_1,
  img9_2,
  img9_3,
  img9_4,
  img9_5,
  img9_6,
  img9_7,
  img9_8,
  img9_9,
  img9_10,
  img9_11,
  img9_12,
  img9_13,
  img9_14,
  img9_15,
  img9_16,
  img9_17,
  img9_18,
  img9_19,
  img9_20,
  img9_21,
  img9_22,
  img9_23,
  img9_24,
  img9_25,
} from '../../assets/projects/9';
import {
  BigSlide,
  Copyright,
  Header,
  Name,
  Project,
  Slide,
  Slides,
  Subtitle,
  SubtitlePart,
  Text,
  TextBlock,
  TextBlockWithLogo,
  Title,
} from './project.styles';

export const Project9 = () => {
  return (
    <Project>
      <Header>
        <Title>Textile design</Title>
        <Subtitle>
          <SubtitlePart>
            As a seasoned textile designer, I have had the pleasure of working with
            various fashion companies to create stunning assets that elevate their
            collections.
          </SubtitlePart>
          <SubtitlePart>
            My creative process always starts with the theme of the collection. I conduct
            thorough research to come up with three distinct directions, which I then
            develop into a cohesive collection in line with the brand guidelines and the
            collection&apos;s theme. I&apos;m not only focused on creating beautiful
            illustrations or pictures. I also have a solid understanding of the production
            process, working closely with suppliers to lead the collection to its final
            manifestation.
          </SubtitlePart>
          <SubtitlePart>
            Over the years, I have had the opportunity to lead and mentor junior designers
            while working on collections. My skill set extends beyond digital programs,
            and I enjoy combining hand-drawing, print, and embroidery techniques to create
            unique designs that tell a story.
          </SubtitlePart>
        </Subtitle>
      </Header>
      <Slides>
        <BigSlide src={img9_1} />
      </Slides>
      <TextBlockWithLogo>
        <TextBlock>
          <Name>Hand-painting, embroidery, and pattern design for Maskit</Name>
        </TextBlock>
        <Maskit />
      </TextBlockWithLogo>
      <Text>
        <Copyright>
          Intellectual property of Maskit. © All rights reserved worldwide
        </Copyright>
      </Text>
      <Slides>
        <BigSlide src={img9_2} />
        <BigSlide src={img9_3} />
        <BigSlide src={img9_4} />
        <BigSlide src={img9_5} />
        <TextBlockWithLogo>
          <TextBlock>
            <Name>
              Prints, embroidery and pattern design for Katya Dobryakova. Collection
              “Muse”
            </Name>
          </TextBlock>
          <Katya />
        </TextBlockWithLogo>
        <BigSlide src={img9_6} />
        <Slide src={img9_7} />
        <BigSlide src={img9_8} />
        <BigSlide src={img9_9} />
        <BigSlide src={img9_10} />
        <TextBlockWithLogo>
          <TextBlock>
            <Name>Katya Dobryakova. Collection “Circus”</Name>
          </TextBlock>
          <Katya />
        </TextBlockWithLogo>
        <BigSlide src={img9_11} />
        <Slide src={img9_12} />
        <BigSlide src={img9_13} />
        <BigSlide src={img9_14} />
        <BigSlide src={img9_15} />
        <BigSlide src={img9_16} />
        <TextBlockWithLogo>
          <TextBlock>
            <Name>Other collections Katya Dobryakova</Name>
          </TextBlock>
          <Katya />
        </TextBlockWithLogo>
        <BigSlide src={img9_17} />
        <Slide src={img9_18} />
        <Slide src={img9_19} />
        <Slide src={img9_20} />
        <BigSlide src={img9_21} />
        <TextBlock>
          <Name>Hand-painting custom design</Name>
        </TextBlock>
        <Slide src={img9_22} />
        <Slide src={img9_23} />
        <Slide src={img9_24} />
        <BigSlide src={img9_25} />
      </Slides>
    </Project>
  );
};
