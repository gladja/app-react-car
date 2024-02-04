import { Spin } from 'antd';
import { Wrap } from './Spiner.styled';

export const Spiner = () => {
  return (
    <>
      <Wrap>
        <Spin size="large" />
      </Wrap>
    </>
  );
};
