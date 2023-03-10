import { KinoFest } from '../../assets/projects';
import {
  img7_1,
  img7_2,
  img7_3,
  img7_4,
  img7_5,
  img7_6,
  img7_7,
  img7_8,
  img7_9,
  img7_10,
  img7_11,
  img7_12,
} from '../../assets/projects/7';
import {
  BigSlide,
  Bold,
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

export const Project7 = () => {
  return (
    <Project>
      <Header>
        <Title>Branding for film festival</Title>
        <Subtitle>
          <Bold>The International Student Film Festival</Bold> has been held in St.
          Petersburg since 2016. Every year, the festival presents works selected among
          applications from students from all over the world. In addition to film
          screenings, the program includes master classes with famous guests,
          presentations, workshops and open discussions. The purpose of the festival is to
          help aspiring filmmakers promote their work and connect with others in the film
          industry.
        </Subtitle>
        <Logo>
          <KinoFest />
        </Logo>
      </Header>
      <Slides>
        <Slide src={img7_1} />
      </Slides>
      <Description mb={70}>
        <TextBlock>
          <Name>Concept</Name>
        </TextBlock>
        <Text>
          In designing the branding for the International Student Film Festival, I made a
          conscious decision to forgo photographs and instead focus on simple, clean, and
          graphic designs.
        </Text>
        <Text>
          One of the key objectives of the rebranding was to increase the festival&apos;s
          recognition, and to achieve this, I developed bright and memorable illustrations
          accompanied by the slogan &quot;Life is Shorts.&quot; This slogan emphasizes the
          event&apos;s theme and idea.
        </Text>
        <Text>
          The primary elements of the design consist of graphic illustrations and
          specially designed elements that take into account the festival&apos;s venue and
          themes. These design elements are highly adaptable to any medium and can easily
          be scaled.
        </Text>
        <Text>
          The illustrations are based on three iconic architectural monuments in St.
          Petersburg: the Copper Horseman, Rostral Columns, and Divorce Bridges. These
          monuments not only embody the essence of the city for its residents but also
          serve as a symbol of St. Petersburg for international audiences.
        </Text>
      </Description>
      <Slides>
        <BigSlide src={img7_2} />
        <TextBlock>
          <Name>Series of digital posters</Name>
        </TextBlock>
        <Slide src={img7_3} />
        <TextBlock>
          <Name>Stories for social networks</Name>
        </TextBlock>
        <Slide src={img7_4} />
        <TextBlock>
          <Name>Tiles for social networks</Name>
        </TextBlock>
        <Slide src={img7_5} />
        <TextBlock>
          <Name>Other assets and SWAG</Name>
        </TextBlock>
        <BigSlide src={img7_6} />
        <BigSlide src={img7_7} />
        <BigSlide src={img7_8} />
        <BigSlide src={img7_9} />
        <BigSlide src={img7_10} />
        <BigSlide src={img7_11} />
        <BigSlide src={img7_12} />
      </Slides>
    </Project>
  );
};
