import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvert } from '../../redux/advert';
import { selectCars } from '../../redux/advert';
import { useFormik } from 'formik';
import { getAdvertFilter } from '../../redux/advert/operations';
import { Filters } from './Filters/Filters';
import { filterCars } from '../../redux/advert/slice';

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
  // console.log(cars);
  // const filter = cars.filter((itm) => {
  //   if (formik.values.price === '') {
  //     return cars;
  //   }
  //   return (
  //     Number(itm.rentalPrice.replace('$', '')) <= Number(formik.values.price)
  //   );
  // });
  // console.log(filter);
  return (
    <>
      <Filters formik={formik} setPage={setPage} />
      <h2>Catalog Car!</h2>
      {cars?.map((itm) => (
        <ul key={itm.id}>
          <li>
            <div>
              {itm.make}___{itm.model}___{itm.rentalPrice.replace('$', '')}
            </div>
          </li>
        </ul>
      ))}
      {cars?.length > 11 && (
        <button type={'button'} onClick={() => setPage(page + 1)}>
          Load more
        </button>
      )}
    </>
  );
};
