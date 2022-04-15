import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

export const TransparentBackground = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: ${ALL_COLORS.transparentGrey};
`;
