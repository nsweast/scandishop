import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../../constants';

export const AttributesContainer = styled.div`
  padding-top: 2%;
  display: flex;
  gap: 3%;
`;
export const AttributeButton = styled.div`
  padding: 4px;
  min-height: ${(props) => (props.miniCart ? '20px' : '40px')};
  min-width: ${(props) => (props.miniCart ? '20px' : '40px')};

  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${(props) => (props.miniCart ? 'small' : 'larger')};

  background-color: ${(props) =>
    props.type === 'swatch' ? props.color : ALL_COLORS.white};

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px ${ALL_COLORS.textBlack} solid;
  color: ${ALL_COLORS.sizeButtonBlack};
  cursor: pointer;
`;

export const SelectedAttribute = styled(AttributeButton)`
  border: ${ALL_COLORS.textBlack} solid;
  border-width: ${(props) => (props.type === 'swatch' ? '2px' : '1px')};
  background-color: ${(props) =>
    props.type === 'swatch' ? props.color : ALL_COLORS.textBlack};
  color: ${ALL_COLORS.white};
  cursor: default;
`;

export const UnavailableAttribute = styled(AttributeButton)`
  color: ${ALL_COLORS.grey};
  border: 1px ${ALL_COLORS.grey} solid;
  cursor: not-allowed;
  opacity: ${(props) => (props.type === 'swatch' ? '0.6' : '1')};
`;
