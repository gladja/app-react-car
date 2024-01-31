import { useEffect } from 'react';
import { Catalog } from '../components/Catalog';
import { Header } from '../components/Header';
import { apiService } from '../services';

export const CatalogPage = () => {
  useEffect(() => {
    apiService(9582);
  }, []);

  return (
    <>
      <Header />
      <Catalog />
    </>
  );
};
