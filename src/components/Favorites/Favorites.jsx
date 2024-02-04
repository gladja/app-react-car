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
  const { make, price } = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvert(page));
  }, [dispatch, favorite, page]);
  //make.length > 0
  const filter =
    make !== '' || price !== ''
      ? favorite.filter(
          (itm) =>
            itm.make === make ||
            Number(itm.rentalPrice.replace('$', '')) <= price
        )
      : favorite;

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
