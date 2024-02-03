import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvert } from '../../redux/advert';
import { selectCars } from '../../redux/advert';
import { useFormik } from 'formik';
import { getAdvertFilter } from '../../redux/advert/operations';
import { Filters } from './Filters/Filters';
import { filterCars } from '../../redux/advert/slice';
import { Button } from 'antd';
import {
  WrapCard,
  WrapList,
  Card,
  WrapImg,
  Img,
  WrapBtn,
  WrapModel,
  TextColor,
  Text,
  Border,
} from './Catalog.styled';
import img from '../../assets/no_img.jpeg';
import { Modal } from '../Modal/Modal';

export const Catalog = () => {
  const [page, setPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState(false);
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdvert(page));
  }, [dispatch, page]);

  const initialValues = {
    make: '',
    price: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: ({ make, price }) => {
      dispatch(getAdvertFilter({ make, page }));
      dispatch(filterCars(price));
    },
  });

  const handleModal = (car) => {
    setSelectedCar(car);
  };
  return (
    <>
      {selectedCar && (
        <Modal car={selectedCar} setSelectedCar={setSelectedCar} />
      )}
      <Filters formik={formik} setPage={setPage} />
      <WrapList>
        {cars?.map((itm) => (
          <li key={itm.id}>
            <WrapCard>
              <Card>
                <WrapImg>
                  <Img src={itm.img ? itm.img : img} alt="" />
                </WrapImg>
                <WrapModel>
                  <div>
                    {itm.make} <TextColor>{itm.model}</TextColor>, {itm.year}
                  </div>
                  <div>{itm.rentalPrice}</div>
                </WrapModel>
                <Text>
                  {itm.address
                    .split(' ')
                    [itm.address.split(' ').length - 2].slice(0, -1)}
                  <Border />
                  {itm.address.split(' ')[itm.address.split(' ').length - 1]}
                  <Border />
                  {itm.rentalCompany}
                  <Border />
                  {itm.type}
                  <Border />
                  {itm.model}
                  <Border />
                  {itm.id}
                  <Border />
                  {itm.accessories[0]}
                </Text>
                <Button
                  size="large"
                  type="primary"
                  htmlType="button"
                  onClick={() => handleModal(itm)}
                  style={{
                    borderRadius: '12px',
                  }}
                >
                  Learn more
                </Button>
              </Card>
            </WrapCard>
          </li>
        ))}
      </WrapList>
      <WrapBtn>
        {cars?.length > 11 && (
          <Button
            htmlType="button"
            size="large"
            onClick={() => setPage(page + 1)}
            style={{
              padding: '0 44px',
              borderRadius: '12px',
            }}
          >
            Load more
          </Button>
        )}
      </WrapBtn>
    </>
  );
};
