import { Catalog } from '../components/Catalog';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

const CatalogPage = () => {
  return (
    <>
      <Container>
        <Header />
        <Catalog />
      </Container>
    </>
  );
};

export default CatalogPage;
