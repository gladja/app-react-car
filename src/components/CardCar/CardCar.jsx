import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/advert';
import {
  Border,
  Card,
  Img,
  Text,
  TextColor,
  WrapCard,
  WrapFavoriteIcon,
  WrapImg,
  WrapModel,
  WrapBtn,
  WrapList,
} from './CardCar.styled';
import { Button } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import img from '../../assets/no_img.jpeg';
import { removeFavorite, setFavorite } from '../../redux/advert/slice';
import { theme } from '../../styles';

export const CardCar = ({ cars, handleModal, page, setPage }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleFavoriteClick = (itemId) => {
    const clickedCar = cars?.find((itm) => itm.id === itemId);
    if (clickedCar) {
      dispatch(setFavorite(clickedCar));
    }
  };

  const handleFavoriteRemove = (itemId) => {
    const clickedCar = cars?.find((itm) => itm.id === itemId);
    if (clickedCar) {
      dispatch(removeFavorite(clickedCar));
    }
  };
  return (
    <>
      <WrapList>
        {cars?.map((itm) => (
          <li key={itm.id}>
            <WrapCard>
              <Card>
                {favorites.some((item) => item.id === itm.id) ? (
                  <WrapFavoriteIcon>
                    <Button
                      htmlType="button"
                      shape="circle"
                      style={{ border: 'none', background: 'none' }}
                      onClick={() => handleFavoriteRemove(itm.id)}
                    >
                      <HeartFilled
                        style={{
                          fontSize: '20px',
                          color: `${theme.colors.blue}`,
                        }}
                      />
                    </Button>
                  </WrapFavoriteIcon>
                ) : (
                  <WrapFavoriteIcon>
                    <Button
                      htmlType="button"
                      shape="circle"
                      style={{ border: 'none', background: 'none' }}
                      onClick={() => handleFavoriteClick(itm.id)}
                    >
                      <HeartOutlined
                        style={{
                          fontSize: '20px',
                          color: `${theme.colors.white}`,
                        }}
                      />
                    </Button>
                  </WrapFavoriteIcon>
                )}
                <WrapImg>
                  <Img src={itm.img ? itm.img : img} alt={itm.make} />
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
                  {itm.accessories[1]}
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
