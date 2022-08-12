import { FC } from 'react';
import styles from '../../../styles/main/main.module.scss';
import Content from './content';
import Slider from './slider';
import mainBackground from '../../../assets/main-background.jpg';

const Main: FC = () => {
  return (
    <div className={styles.container}>
      <Slider />
      <img src={mainBackground} alt="main" />
      <div className={styles.main__text}>
        <h1>KEY-SHOP</h1>
        <p>Фаворит в выборе магазина ключей!</p>
      </div>
      <Content />
    </div>
  );
};
export default Main;
