import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const WrapBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.4;
  min-width: 300px;
  max-width: 500px;
`;

export const Color = styled.span`
  color: #3470ff;
`;

export const Text = styled.p`
  font-size: 24px;
  line-height: 1.5;
  min-width: 200px;
  max-width: 400px;
  margin-bottom: 20px;
`;

export const WrapImg = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  max-width: 100%;
  margin-left: 30%;
`;
