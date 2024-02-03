import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  Color,
  Img,
  Text,
  Title,
  Wrap,
  WrapBlock,
  WrapImg,
} from './Home.styled';
import car from '../../assets/car.png';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrap>
        <WrapBlock>
          <Title>
            Want to <Color>find the car</Color> you want when you need it?
          </Title>
          <Text>Do you want to discover the best cars for you?</Text>
          <Button
            size="large"
            type="primary"
            htmlType="button"
            onClick={() => navigate('/catalog')}
            style={{
              padding: '0 44px',
              borderRadius: '12px',
            }}
          >
            Discover
          </Button>
        </WrapBlock>
        <WrapImg>
          <Img src={car} alt="car" />
        </WrapImg>
      </Wrap>
    </>
  );
};
