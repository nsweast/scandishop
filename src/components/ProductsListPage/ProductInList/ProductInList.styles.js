import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../../constants';
import { Link } from 'react-router-dom';

export const ProductLink = styled(Link)`
  height: 100%;
  width: 100%;
  color: inherit;
  text-decoration: none;
`;

export const ProductInListContainer = styled.div`
  position: relative;
  opacity: ${(props) => (props.available ? '1' : '.5')};

  color: inherit;
  text-decoration: none;

  width: 28%;
  height: 400px;

  padding: 15px;
  margin-bottom: 3%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  &:hover {
    background-color: ${ALL_COLORS.white};
    box-shadow: 1px 1px 15px ${ALL_COLORS.frameShadow},
      -1px -1px 15px ${ALL_COLORS.frameShadow};
    border-radius: 5px;
    cursor: default;
  }
`;

export const ProductOutOfStock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  opacity: 1;

  font-size: x-large;

  color: grey;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductInListPhoto = styled.img`
  width: 100%;
  height: 300px;
  object-fit: scale-down;
`;

export const ProductInListDescription = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  strong {
    font-weight: 600;
  }
`;
