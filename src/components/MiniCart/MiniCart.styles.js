import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { ALL_COLORS } from '../../constants';

export const MiniCartContainer = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  max-height: 600px;
  min-width: 430px;
  padding: 10px;
  overflow: scroll;

  background-color: ${ALL_COLORS.white};

  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const MiniCartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MiniCartItemLeftSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  font-weight: 300;

  strong {
    font-weight: 600;
  }
`;
export const MiniCartItemRightSection = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  gap: 3%;
`;
export const MiniCartHeadTitle = styled.div``;

export const MiniCartAttributeSection = styled.div``;

export const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MiniCartNav = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ViewBagButton = styled(Link)`
  height: 40px;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${ALL_COLORS.textBlack};
  color: ${ALL_COLORS.textBlack};

  text-decoration: none;
`;
export const CheckoutButton = styled(ViewBagButton)`
  border: 1px solid ${ALL_COLORS.green};
  color: ${ALL_COLORS.white};
  background-color: ${ALL_COLORS.green};
`;
