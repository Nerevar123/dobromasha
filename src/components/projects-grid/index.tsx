import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  Checkmarx,
  Checkmate,
  Connectika,
  Hackathon,
  img1,
  img2,
  img3,
  img4,
  img5,
  Yeda,
} from '../../assets/main/';
import { Colors } from '../../styles/colors.styles';

const Root = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'a b'
    'c c'
    'd e'
    'f f';
  gap: 30px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

const WrapperLink = styled(Link)<{ area: string }>`
  grid-area: ${({ area }) => area};
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(27, 44, 127, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s ease-in-out, visibility 0.35s ease-in-out;
  z-index: 10;

  ${WrapperLink}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const OverlayText = styled.span`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: ${Colors.white};
  margin-block: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProjectsGrid = () => {
  return (
    <Root>
      <WrapperLink to={'projects/1'} area={'a'}>
        <Overlay>
          <Checkmarx />
          <OverlayText>SKO 2023 event</OverlayText>
        </Overlay>
        <Image src={img1} />
      </WrapperLink>
      <WrapperLink to={'projects/2'} area={'b'}>
        <Image src={img2} />
        <Overlay>
          <Checkmarx />
          <OverlayText>Social Tiles and Banners</OverlayText>
        </Overlay>
      </WrapperLink>
      <WrapperLink to={'projects/3'} area={'c'}>
        <Image src={img3} />
        <Overlay>
          <Hackathon />
        </Overlay>
      </WrapperLink>
      <WrapperLink to={'projects/4'} area={'d'}>
        <Image src={img4} />
        <Overlay>
          <Connectika />
          <OverlayText>Web Design & Illustrations</OverlayText>
        </Overlay>
      </WrapperLink>
      <WrapperLink to={'projects/5'} area={'e'}>
        <Image src={img5} />
        <Overlay>
          <Yeda />
          <OverlayText>Web Design & Illustrations</OverlayText>
        </Overlay>
      </WrapperLink>
      <WrapperLink to={'projects/6'} area={'f'}>
        <Image src={img3} />
        <Overlay>
          <Checkmate />
        </Overlay>
      </WrapperLink>
    </Root>
  );
};
