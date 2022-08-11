import { Dispatch, FC, SetStateAction } from 'react';
import { slides } from '../../../utils/consts';

interface IDots {
  currentSlide: number;
  onHandleDot: (id: number) => void;
}

const Dots: FC<IDots> = ({ currentSlide, onHandleDot }) => {
  return (
    <>
      {slides.map((s) => (
        <li
          key={s}
          onClick={() => onHandleDot(s)}
          className={currentSlide === s ? 'slider_dot active' : 'slider_dot'}></li>
      ))}
    </>
  );
};
export default Dots;
