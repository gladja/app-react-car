import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvert } from '../../redux/advert';
import { selectCars } from '../../redux/advert';
import { useFormik } from 'formik';
import { getAdvertFilter } from '../../redux/advert/operations';
import { Filters } from './Filters/Filters';
import { filterCars } from '../../redux/advert/slice';
import { Button } from 'antd';
import { WrapCard, WrapList, Card, WrapImg, Img } from './Catalog.styled';
import img from '../../assets/no_img.jpeg';

export const Catalog = () => {
  const [page, setPage] = useState(1);
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
      // console.log(make, price);
      dispatch(getAdvertFilter({ make, page }));
      dispatch(filterCars(price));
    },
  });
  console.log(cars);
  return (
    <>
      <Filters formik={formik} setPage={setPage} />
      <WrapList>
        {cars?.map((itm) => (
          <li key={itm.id}>
            <WrapCard>
              {/* {itm.make}___{itm.model}___{itm.rentalPrice.replace('$', '')} */}
              <Card>
                <WrapImg>
                  <Img src={itm.img ? itm.img : img} alt="" />
                </WrapImg>
                <div>{itm.make}</div>
                <div>{itm.model}</div>
                <Button
                  size="large"
                  type="primary"
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
      {cars?.length > 11 && (
        <button type={'button'} onClick={() => setPage(page + 1)}>
          Load more
        </button>
      )}
    </>
  );
};
