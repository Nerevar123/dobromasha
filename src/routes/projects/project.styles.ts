import styled from 'styled-components';

import { Colors } from '../../styles/colors.styles';

export const Project = styled.section``;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'title logo'
    'text logo';
  align-items: center;
  column-gap: 120px;
  row-gap: 30px;
  padding-block: 60px;
  color: ${Colors.gray};

  @media screen and (max-width: 800px) {
    grid-template-areas:
      'title logo'
      'text text';
    row-gap: 20px;
    column-gap: 20px;
    padding-block: 30px;
  }
`;

export const Title = styled.h2`
  font-size: 90px;
  font-weight: 500;
  line-height: 1.1;
  margin-block: 0;
  grid-area: title;

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }

  @media screen and (max-width: 450px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 28px;
  grid-area: text;
  margin-block: 0;
`;

export const Copyright = styled.span`
  color: ${Colors.textGray};
  margin-top: 12px;
  margin-bottom: 0;
  display: block;
`;

export const Logo = styled.div`
  grid-area: logo;
  align-self: flex-start;
  padding-top: 66px;

  @media screen and (max-width: 800px) {
    padding-top: 0;
    align-self: center;

    & > svg {
      width: 120px;
    }
  }
`;

export const Slides = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Slide = styled.img`
  width: 100%;
  height: 100%;
`;

export const Description = styled.div``;

export const TextBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-block: 80px;
  padding-top: 8px;
  border-top: 1px solid ${Colors.gray};
`;

export const CaptureBlock = styled.div`
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${Colors.gray};
`;

export const Name = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  margin-block: 0;
  color: ${Colors.gray};
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 28px;
  margin-block: 0;
  color: ${Colors.textGray};
`;
