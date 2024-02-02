import { Catalog } from '../components/Catalog';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

export const CatalogPage = () => {
  return (
    <>
      <Container>
        <Header />
        <Catalog />
      </Container>
    </>
  );
};
