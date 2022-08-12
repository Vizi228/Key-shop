import { FC } from 'react';
import styles from '../../../../styles/main/content.module.scss';
import { products } from '../../../../utils/consts';
import ContentBlock from './block';

const Content: FC = () => {
  return (
    <div className={styles.content}>
      <h2>Новинки</h2>
      <ul>
        {products.map((p) => (
          <ContentBlock key={p} />
        ))}
      </ul>
      <button className={styles.button}>Смотреть еще</button>
    </div>
  );
};

export default Content;
