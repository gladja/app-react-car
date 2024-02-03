import { WrapModal, ModalWindow, WrapImg, Img } from './Modal.styled';
import img from '../../assets/no_img.jpeg';
import { TextColor } from '../Catalog/Catalog.styled';

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
          <WrapImg>
            <Img src={car.img ? car.img : img} alt="" />
          </WrapImg>
          {/* <WrapModel> */}
          <div>
            {car.make} <TextColor>{car.model}</TextColor>, {car.year}
          </div>
          {/* </WrapModel> */}
        </ModalWindow>
      </WrapModal>
    </>
  );
};
