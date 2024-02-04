import {
  WrapModal,
  ModalWindow,
  WrapImg,
  Img,
  WrapCloseIcon,
  TextColor,
  TextTitle,
  Text,
  Border,
  TextDesc,
  TextFunc,
  TextCondition,
} from './Modal.styled';
import img from '../../assets/no_img.jpeg';
import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const Modal = ({ car, setSelectedCar }) => {
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedCar(false);
    }
  };
  return (
    <>
      <WrapModal onClick={handleBackdrop}>
        <ModalWindow>
          <WrapCloseIcon>
            <Button
              shape="circle"
              style={{ border: 'none' }}
              onClick={() => setSelectedCar(false)}
            >
              <CloseOutlined style={{ fontSize: '20px' }} />
            </Button>
          </WrapCloseIcon>
          <WrapImg>
            <Img src={car.img ? car.img : img} alt={car.make} />
          </WrapImg>
          <TextTitle>
            {car.make} <TextColor>{car.model}</TextColor>, {car.year}
          </TextTitle>
          <Text>
            <div>
              {car.address
                .split(' ')
                [car.address.split(' ').length - 2].slice(0, -1)}
              <Border />
              {car.address.split(' ')[car.address.split(' ').length - 1]}
              <Border />
              Id: {car.id}
              <Border />
              Year: {car.year}
              <Border />
              Type: {car.type}
            </div>
            <div>
              Fuel Consumption: {car.fuelConsumption}
              <Border />
              Engine Size: {car.engineSize}
            </div>
          </Text>
          <TextDesc>{car.description}</TextDesc>
          <TextFunc>Accessories and functionalities:</TextFunc>
          <Text>{car.accessories.join(' | ')}</Text>
          <Text>{car.functionalities.join(' | ')}</Text>
          <TextCondition>Rental Conditions: </TextCondition>
        </ModalWindow>
      </WrapModal>
    </>
  );
};
