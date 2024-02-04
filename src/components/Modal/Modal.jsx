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
  TextBorder,
  TextConditionItm,
} from './Modal.styled';
import img from '../../assets/no_img.jpeg';
import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect } from 'react';

export const Modal = ({ car, setSelectedCar }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        setSelectedCar(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setSelectedCar]);

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
              htmlType="button"
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
          <Text>
            {car.accessories.map((itm, i) => (
              <span key={i}>
                {itm}
                <Border />
              </span>
            ))}
            {car.functionalities.map((itm, i) => (
              <span key={i}>
                {itm}
                <Border />
              </span>
            ))}
          </Text>
          <TextCondition>Rental Conditions: </TextCondition>
          <TextConditionItm>
            {car.rentalConditions.split('\n').map((itm, i) => (
              <TextBorder key={i}>
                {itm
                  .split(/(\d+)/)
                  .map((item, i) =>
                    isNaN(item) ? item : <TextColor key={i}>{item}</TextColor>
                  )}
              </TextBorder>
            ))}
            <TextBorder>
              Mileage:{' '}
              <TextColor>
                {new Intl.NumberFormat('en-US').format(car.mileage)}
              </TextColor>
            </TextBorder>
            <TextBorder>
              Price: <TextColor>{car.rentalPrice}</TextColor>
            </TextBorder>
          </TextConditionItm>
          <a href="tel:+380730000000">
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              style={{
                padding: '0 44px',
                borderRadius: '12px',
              }}
            >
              Rental car
            </Button>
          </a>
        </ModalWindow>
      </WrapModal>
    </>
  );
};
