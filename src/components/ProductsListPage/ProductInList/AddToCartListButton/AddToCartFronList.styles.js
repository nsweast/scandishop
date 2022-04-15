import styled from 'styled-components/macro';
import { ProductInListContainer } from '../ProductInList.styles';
import { ALL_COLORS } from '../../../../constants';

export const CartListContainer = styled.div`
  position: absolute;
  top: -70%;
  right: 5%;

  height: 50px;
  width: 50px;
  border-radius: 50%;

  display: none;
  align-items: center;
  justify-content: center;

  background-color: ${ALL_COLORS.green};

  cursor: pointer;

  ${ProductInListContainer}:hover & {
    display: flex;
  }
`;
export const CartIcon = styled.svg`
  color: ${ALL_COLORS.white};
`;
export const AddedToCartInList = styled(CartListContainer)`
  background-color: ${ALL_COLORS.grey};
  cursor: default;
`;
