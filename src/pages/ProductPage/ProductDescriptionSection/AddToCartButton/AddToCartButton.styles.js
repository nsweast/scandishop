import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../../../constants';

export const AddProductToCartButton = styled.div`
  height: 50px;

  color: ${ALL_COLORS.white};
  background-color: ${ALL_COLORS.green};
  border: 1px ${ALL_COLORS.green} solid;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 3px;

  cursor: pointer;
`;
export const AddedToCartButton = styled(AddProductToCartButton)`
  color: ${ALL_COLORS.green};
  background-color: ${ALL_COLORS.white};
  border: 1px ${ALL_COLORS.green} solid;

  cursor: default;
`;

export const OutOfStockButton = styled(AddProductToCartButton)`
  color: ${ALL_COLORS.white};
  background-color: ${ALL_COLORS.cartStrokeGray};
  border: 1px ${ALL_COLORS.cartStrokeGray} solid;
  cursor: not-allowed;
`;
