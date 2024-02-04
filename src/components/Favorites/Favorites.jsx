import { useEffect, useState } from 'react';
import { Filters } from '../Filters';
import { useDispatch, useSelector } from 'react-redux';
import { CardCar } from '../CardCar';
import { Modal } from '../Modal/Modal';
import {
  getAdvert,
  selectFavorites,
  selectFilter,
  selectIsLoading,
} from '../../redux/advert';
import { Spiner } from '../Spiner';

export const Favorites = () => {
  const [page, setPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState(false);
  const favorite = useSelector(selectFavorites);
  const isLOading = useSelector(selectIsLoading);
  const { make } = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvert(page));
  }, [dispatch, favorite, page]);

  const filter =
    make.length > 0 ? favorite.filter((itm) => itm.make === make) : favorite;

  const handleModal = (car) => {
    setSelectedCar(car);
  };

  return (
    <>
      {selectedCar && (
        <Modal car={selectedCar} setSelectedCar={setSelectedCar} />
      )}
      {isLOading ? (
        <Spiner />
      ) : (
        <>
          <Filters page={page} setPage={setPage} />
          <CardCar
            cars={filter}
            handleModal={handleModal}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
};
