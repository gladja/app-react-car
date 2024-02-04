import { Container } from '../components/Container';
import { Favorites } from '../components/Favorites';
import { Header } from '../components/Header';

const FavoritesPage = () => {
  return (
    <>
      <Container>
        <Header />
        <Favorites />
      </Container>
    </>
  );
};

export default FavoritesPage;