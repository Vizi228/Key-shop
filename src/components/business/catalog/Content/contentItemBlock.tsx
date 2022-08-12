import { FC } from 'react';
import styles from '../../../../styles/catalog/catalogContent.module.scss';
import mainImg from '../../../../assets/main-img1.jpg';

const ContentBlock: FC = () => {
  return (
    <div className={styles.block}>
      <img src={mainImg} alt="main" />
      <div className={styles.main_price}>
        <p>
          Цена: <span>1499 р.</span>
        </p>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default ContentBlock;
