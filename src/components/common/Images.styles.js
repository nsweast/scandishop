import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

export const SmallImage = styled.img`
  max-height: 80px;
  max-width: 80px;
  object-fit: scale-down;
  border: ${(props) =>
    props.preview ? '2px ' + ALL_COLORS.textBlack + ' solid' : null};
  cursor: pointer;
`;

export const MainImage = styled.img`
  width: 80%;
  max-height: 600px;
  object-fit: scale-down;
`;

export const MiniCartImage = styled.img`
  width: 100px;
  height: 120px;
  object-fit: scale-down;
`;
