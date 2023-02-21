import styled from 'styled-components';

import { Colors } from '../../styles/colors.styles';

export const Project = styled.section``;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'title logo'
    'text logo';
  column-gap: 120px;
  row-gap: 30px;
  padding-top: 60px;
  padding-bottom: 60px;
  color: ${Colors.gray};
`;

export const Title = styled.h2`
  font-size: 90px;
  font-weight: 500;
  line-height: 100px;
  margin-block: 0;
  grid-area: title;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 28px;
  grid-area: text;
`;

export const Logo = styled.div`
  grid-area: logo;
  padding-top: 60px;
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
