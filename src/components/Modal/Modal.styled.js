import styled from 'styled-components';

export const WrapModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: relative;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 1);
  width: 541px;
  border-radius: 24px;
`;

export const WrapCloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const WrapImg = styled.div`
  height: 248px;
  width: 461px;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextTitle = styled.div`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const TextColor = styled.span`
  color: #3470ff;
`;

export const Text = styled.div`
  line-height: 1.9;
  color: #12141780;
  font-size: 12px;
`;

export const Border = styled.span`
  border-left: 1px solid #12141780;
  margin: 0 4px;
`;

export const TextDesc = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const TextFunc = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const TextCondition = styled.p`
  font-size: 14px;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const TextConditionItm = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const TextBorder = styled.div`
  font-size: 12px;
  color: #363535;
  background: #f9f9f9;
  padding: 8px 16px;
  border-radius: 35px;
`;
