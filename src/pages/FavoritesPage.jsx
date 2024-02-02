import { Container } from '../components/Container';
import { Favorites } from '../components/Favorites';
import { Header } from '../components/Header';

export const FavoritesPage = () => {
  return (
    <>
      <Container>
        <Header />
        <Favorites />
      </Container>
    </>
  );
};
