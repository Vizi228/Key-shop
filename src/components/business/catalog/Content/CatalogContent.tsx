import { FC } from 'react';
import styles from '../../../../styles/catalog/catalogContent.module.scss';
import ContentItems from './contentItems';

const CatalogContent: FC = () => {
  return (
    <div className={styles.container}>
      <ContentItems />
    </div>
  );
};
export default CatalogContent;
