import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

export const CartPageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const CartPageProduct = styled.div`
  border-top: 1px ${ALL_COLORS.cartStrokeGray} solid;
  padding: 20px 0;
  width: 90%;

  display: flex;
  justify-content: space-between;
`;

export const CartItemLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const CartItemRightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5%;
`;

export const CartProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: x-large;
  span {
    font-weight: 600;
  }
`;

export const CartAttributesSection = styled.div``;
