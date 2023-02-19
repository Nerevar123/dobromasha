import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  Checkmarx,
  Checkmate,
  Hackathon,
  img1,
  img2,
  img3,
  img4,
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
`;

const Wrapper = styled(Link)<{ area: string }>`
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

  ${Wrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const OverlayText = styled.span`
  font-size: 30px;
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
      <Wrapper to={''} area={'a'}>
        <Overlay>
          <Checkmarx />
          <OverlayText>SKO 2023 event</OverlayText>
        </Overlay>
        <Image src={img1} />
      </Wrapper>
      <Wrapper to={''} area={'b'}>
        <Image src={img2} />
        <Overlay>
          <Checkmarx />
          <OverlayText>Social Tiles and Banners</OverlayText>
        </Overlay>
      </Wrapper>
      <Wrapper to={''} area={'c'}>
        <Image src={img3} />
        <Overlay>
          <Hackathon />
        </Overlay>
      </Wrapper>
      <Wrapper to={''} area={'d'}>
        <Image src={img1} />
        <Overlay>
          <Checkmate />
        </Overlay>
      </Wrapper>
      <Wrapper to={''} area={'e'}>
        <Image src={img4} />
        <Overlay>
          <Checkmate />
        </Overlay>
      </Wrapper>
    </Root>
  );
};
