import styled, { keyframes } from 'styled-components';

import { Colors } from '../../styles/colors.styles';

const spin = keyframes`
 100% { transform: rotate(360deg) }
`;

export const Root = styled.div`
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  border: 5px solid ${Colors.gray};
  border-bottom-color: ${Colors.black};
  border-radius: 50%;
  animation: ${spin} 0.75s infinite linear;
`;

export const Preloader = ({ visible }: { visible: boolean }) => {
  return <Root>{visible && <Circle />}</Root>;
};
