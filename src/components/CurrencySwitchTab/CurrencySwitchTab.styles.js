import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

export const CurrencyTabContainer = styled.div`
  position: absolute;
  right: 0;
  top: 100%;

  display: flex;
  flex-direction: column;

  box-shadow: 1px 1px 7px lightgrey, -1px -1px 7px lightgrey;
  z-index: 3;
`;

export const CurrencyTab = styled.div`
  padding: 15px 20px;

  background-color: ${ALL_COLORS.white};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: ${ALL_COLORS.cartStrokeGray};
  }
`;
