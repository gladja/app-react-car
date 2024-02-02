import styled from 'styled-components';

export const WrapBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;

  background-image: url('../../assets/sprite.svg');
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.4;
  max-width: 500px;
`;

export const Color = styled.span`
  color: #3470ff;
`;

export const Text = styled.p`
  font-size: 24px;
  line-height: 1.5;
  max-width: 400px;
  margin-bottom: 20px;
`;
