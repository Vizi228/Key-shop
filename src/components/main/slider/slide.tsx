import { FC } from 'react';
import styles from '../../../styles/main/slider.module.scss';
import img from '../../../assets/slide-img1.jpg';

interface ISlide {
  currentSlide: number;
  id: number;
  slideCoor: number;
}

const Slide: FC<ISlide> = ({ currentSlide, id, slideCoor }) => {
  const slideStyle = {
    transform: `translateX(${slideCoor}px)`,
  };
  return (
    <div className={currentSlide === id ? 'slide_main active' : 'slide_main'} style={slideStyle}>
      <img src={img} alt="slide" />
      <div className={styles.info}>
        <p>
          Цена: 1499р. <span>1999р.</span>
        </p>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default Slide;
