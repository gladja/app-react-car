import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvert } from '../../redux/advert';
import { selectCars } from '../../redux/advert';
import { Filters } from '../Filters';
import { Modal } from '../Modal/Modal';
import { CardCar } from '../CardCar';

export const Catalog = () => {
  const [page, setPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState(false);
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdvert(page));
  }, [dispatch, page]);

  const handleModal = (car) => {
    setSelectedCar(car);
  };
  return (
    <>
      {selectedCar && (
        <Modal car={selectedCar} setSelectedCar={setSelectedCar} />
      )}
      <Filters page={page} setPage={setPage} />
      <CardCar
        cars={cars}
        handleModal={handleModal}
        page={page}
        setPage={setPage}
      />
    </>
  );
};
