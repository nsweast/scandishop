import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../../constants';

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const CounterButton = styled.div`
  width: ${(props) => (props.miniCart ? '20px' : '30px')};
  height: ${(props) => (props.miniCart ? '20px' : '30px')};
  border: 1px ${ALL_COLORS.textBlack} solid;
  color: ${ALL_COLORS.textBlack};
  font-size: x-large;
  font-weight: lighter;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;