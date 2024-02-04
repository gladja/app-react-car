import styled from 'styled-components';
import { theme } from '../../styles';

export const WrapFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

export const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${theme.colors.grey};
  margin-bottom: 8px;
`;
