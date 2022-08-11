import { FC, useEffect, useRef, useState } from 'react';
import styles from '../../../styles/main/slider.module.scss';
import { slides } from '../../../utils/consts';
import Dots from './dots';
import Slide from './slide';

const Slider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideCoor, setSlideCoor] = useState(0);
  const interval = useRef<any>();
  const onHandleDot = (id: number) => {
    if (id > slides.length) {
      setCurrentSlide(1);
      setSlideCoor(0);
      return;
    }
    setCurrentSlide(id);
    setSlideCoor(id * -490 + 490);
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      onHandleDot(currentSlide + 1);
    }, 3500);

    return () => clearInterval(interval.current);
  }, [currentSlide]);

  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        {slides.map((obj) => (
          <Slide key={obj} id={obj} currentSlide={currentSlide} slideCoor={slideCoor} />
        ))}
        <ul className={styles.dots}>
          <Dots onHandleDot={onHandleDot} currentSlide={currentSlide} />
        </ul>
      </div>
    </div>
  );
};

export default Slider;
