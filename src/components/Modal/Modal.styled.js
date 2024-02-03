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
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
  width: 541px;
  height: 752px;
  border-radius: 24px;
`;

export const WrapImg = styled.div`
  height: 248px;
  width: 461px;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
