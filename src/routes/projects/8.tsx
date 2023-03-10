import { PostKorona } from '../../assets/projects';
import {
  img8_1,
  img8_2,
  img8_3,
  img8_4,
  img8_5,
  img8_6,
  img8_7,
} from '../../assets/projects/8';
import {
  BigSlide,
  BoldBlock,
  Description,
  Header,
  Logo,
  Project,
  Slide,
  Slides,
  Subtitle,
  Text,
  TextLink,
  Title,
} from './project.styles';

export const Project8 = () => {
  return (
    <Project>
      <Header>
        <Title>Creative project</Title>
        <Subtitle>
          In May 2020 I&apos;ve launched{' '}
          <TextLink to={'https://www.instagram.com/post_korona'} target="_blank">
            @post_korona project
          </TextLink>{' '}
          on Instagram. Every day I upload a new illustration with masks, gloves, or other
          pieces of post-COVID trash. I&apos;ve started the project because I&apos;m
          really concerned about the amount of garbage I see on the streets and I&apos;d
          like to draw everyone&apos;s attention to the situation we are were.
        </Subtitle>
        <Logo>
          <PostKorona />
        </Logo>
      </Header>
      <Slides>
        <Slide src={img8_1} />
      </Slides>
      <Description mt={70}>
        <Text>
          The Covid-19 pandemic has been the biggest challenge for the whole world but
          while we are fighting this enemy we shouldn&apos;t forget about the
          environmental issues we&apos;ve been having for quite a while.
        </Text>
      </Description>
      <Slides>
        <Slide src={img8_2} />
        <Description mt={70}>
          <Text>
            By using my imagination and an iPad, I added illustrations to photos of
            pandemic-related trash, developing different art pieces that showcased
            attention to the environmental impact of the pandemic.
          </Text>
        </Description>
        <Slide src={img8_3} />
        <Slide src={img8_4} />
        <Description mt={70}>
          <Text>
            COVID-19 was the biggest threat to the world in 2019-2020 and is now a
            significant part of our history. As an artist, I combine reality and art in
            order to capture the historical moment and raise awareness of post-Covid
            garbage.
          </Text>
        </Description>
        <Slide src={img8_5} />
        <Description mt={70}>
          <Text>
            I have more than 5000 followers on Instagram and I’m happy that most of them
            share my values and help me to develop the project. People send me pictures
            from Italy, Spain, Greece, Russia, and other countries.
          </Text>
          <Text>
            My intention as an artist was to show how even discarded trash can be
            transformed into beautiful art. I was delighted to see how my approach
            inspired people from all over the world to create their own art from discarded
            materials. This demonstrated the immense potential for artistic expression in
            even the most unlikely places, a reminder of the transformative power of art
            and the limitless nature of the human imagination.
          </Text>
        </Description>
        <Slide src={img8_6} />
        <Description>
          <Text>
            It&apos;s really important to bring this theme up. I believe that together we
            can change the world and bring attention to global problems through a creative
            approach.
          </Text>
          <Text>
            <BoldBlock>
              I&apos;d like to see fewer materials for my artworks on the streets.
            </BoldBlock>
            <BoldBlock>Better yet, none of them.</BoldBlock>
            <BoldBlock>Be careful. Wear masks and gloves.</BoldBlock>
            <BoldBlock>Then, dispose of them properly.</BoldBlock>
          </Text>
        </Description>
        <BigSlide src={img8_7} />
      </Slides>
    </Project>
  );
};
