import { FC } from 'react';
import styles from '../../../styles/main/content.module.scss';
import img from '../../../assets/main-img1.jpg';

const ContentBlock: FC = () => {
  return (
    <div className={styles.block}>
      <img src={img} alt="main" />
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
