import { Button, Select, Input, Space } from 'antd';
import { makes, price } from './filterValues.js';
import { Label, LabelWrap, WrapFilter } from './Filters.styled.js';
import { useFormik } from 'formik';
import { getAdvertFilter } from '../../redux/advert';
import { filterCars } from '../../redux/advert/slice.js';
import { useDispatch } from 'react-redux';

export const Filters = ({ page, setPage }) => {
  const dispatch = useDispatch();
  const initialValues = {
    make: '',
    price: '',
    from: '',
    to: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: ({ make, price, from, to }) => {
      dispatch(getAdvertFilter({ make, page }));
      dispatch(filterCars({ price, make, from, to }));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <WrapFilter>
          <LabelWrap>
            <Label htmlFor="makes">Car brand</Label>
            <Select
              id="makes"
              size="large"
              showSearch
              placeholder={'Enter the text'}
              allowClear
              onChange={(value = '') => {
                formik.setFieldValue('make', value);
              }}
              style={{ width: 224 }}
              options={makes.map((item) => ({
                value: item,
                label: item,
              }))}
            ></Select>
          </LabelWrap>
          <LabelWrap>
            <Label htmlFor="price">Price/ 1 hour</Label>
            <Select
              id="price"
              size="large"
              placeholder={'To $'}
              allowClear
              onChange={(value = '') => {
                formik.setFieldValue('price', value);
              }}
              style={{ width: 125 }}
              options={price.map((item) => ({
                value: item,
                label: item,
              }))}
            ></Select>
          </LabelWrap>

          <LabelWrap>
            <Label htmlFor="from">Сar mileage / km</Label>
            <Space.Compact>
              <Input
                id="from"
                name="from"
                size="large"
                placeholder="From"
                onChange={formik.handleChange}
                style={{ width: 160 }}
                type="number"
                min={0}
              />
              <Input
                name="to"
                size="large"
                placeholder="To"
                onChange={formik.handleChange}
                style={{ width: 160 }}
                type="number"
                min={0}
              />
            </Space.Compact>
          </LabelWrap>

          <Button
            size="large"
            type="primary"
            htmlType="submit"
            onClick={() => setPage(1)}
            style={{
              padding: '0 44px',
              borderRadius: '12px',
            }}
          >
            Search
          </Button>
        </WrapFilter>
      </form>
    </>
  );
};
