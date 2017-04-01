import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const BubbleOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(.5);
  }
  75% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export default styled(Link)`
  border-radius: 50%;
  position: fixed;
  right: 10px;
  background-color: #ce177c;
  bottom: 75px;
  overflow: hidden;
  height: 75px;
  width: 75px;
  font-size: 2rem;
  z-index: 2;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  transition: all 0.25s;
  text-decoration: none;
  color: transparent;
  text-shadow: 0 0 0 white;
  &:active {
    transform: translate(1px, 1px);
  }
  animation: ${BubbleOut} linear .25s;
`;
