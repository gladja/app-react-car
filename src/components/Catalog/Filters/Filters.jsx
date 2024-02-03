import { Select } from 'antd';
import { Button } from 'antd';
import { makes, price } from '../filterValues.js';

export const Filters = ({ formik, setPage }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Select
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
        <Select
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
      </form>
    </>
  );
};
