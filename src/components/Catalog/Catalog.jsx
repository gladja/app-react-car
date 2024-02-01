import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvert } from '../../redux/advert';
import { selectCars } from '../../redux/advert';
import { useFormik } from 'formik';
import { getAdvertFilter } from '../../redux/advert/operations';

export const Catalog = () => {
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdvert(page));
  }, [dispatch, page]);

  const initialValues = {
    make: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: ({ make }) => {
      console.log(make);
      dispatch(getAdvertFilter({ make, page }));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <select name="make" onChange={formik.handleChange}>
          <option value="volvo">Volvo</option>
          <option value="buick">Buick</option>
          <option value="hummer">HUMMER</option>
        </select>
        <button type={'submit'}>search</button>
      </form>
      <div>Catalog Car!</div>
      {cars.map((itm) => (
        <ul key={itm.id}>
          <li>
            <div>
              {itm.make}___{itm.model}
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
