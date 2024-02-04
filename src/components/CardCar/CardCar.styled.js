import styled from 'styled-components';

export const WrapList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px 29px;

  margin: 60px auto;
  max-width: 1184px;
`;

export const WrapCard = styled.div`
  display: flex;
  width: 274px;
  height: 426px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const WrapFavoriteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
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

export const WrapModel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextColor = styled.span`
  color: #3470ff;
`;

export const Text = styled.p`
  line-height: 1.9;
  color: #12141780;
  font-size: 12px;
`;

export const Border = styled.span`
  border-left: 1px solid #12141780;
  margin: 0 4px;
`;

export const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
