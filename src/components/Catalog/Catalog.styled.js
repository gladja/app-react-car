import styled from 'styled-components';
import { Wrap } from '../Container/Container.styled';

export const WrapList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px 29px;

  margin: 50px auto;
  max-width: 1184px;
`;

export const WrapCard = styled.div`
  width: 274px;
  height: 426px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WrapImg = styled.div`
  height: 268px;
  width: 274px;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
