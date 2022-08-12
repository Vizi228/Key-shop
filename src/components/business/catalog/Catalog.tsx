import { FC } from 'react';
import styles from '../../../styles/catalog/catalog.module.scss';
import CatalogContent from './Content/CatalogContent';
import { Navigation } from './navigation/Navigation';

const CatalogMain: FC = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <CatalogContent />
    </div>
  );
};
export default CatalogMain;
