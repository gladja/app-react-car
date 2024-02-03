import { Button, Select, Input, Space } from 'antd';
import { makes, price } from '../filterValues.js';
import { Label, LabelWrap, WrapFilter } from './Filters.styled.js';

export const Filters = ({ formik, setPage }) => {
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
            <Label htmlFor="price">Сar mileage / km</Label>
            <Space.Compact>
              <Input
                size="large"
                placeholder="From"
                style={{ width: 160 }}
                type="number"
                min={0}
              />
              <Input
                size="large"
                placeholder="To"
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
