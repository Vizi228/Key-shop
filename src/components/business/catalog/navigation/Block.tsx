import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import styles from '../../../../styles/catalog/catalogNavigation.module.scss';

interface INavBlock {
  name: string;
  objects: any[];
}

export const NavBlock: FC<INavBlock> = ({ name, objects }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(1);

  const onHadleBlock = () => {
    setIsVisible(!isVisible);
  };
  const onHadleItem = (id: number) => {
    setCurrentItem(id);
  };
  const filterRef = useRef<any>();
  useEffect(() => {
    document.body.addEventListener('click', (e: any) => {
      if (!e.path.includes(filterRef.current)) {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <div className={styles.filter_block} onClick={() => onHadleBlock()}>
      <h1 ref={filterRef} className={styles.h1}>
        {name}
      </h1>
      <div className={classNames(styles.filter_items, `${isVisible ? styles.active : ''}`)}>
        {objects.map((obj) => (
          <div
            className={classNames(
              styles.filter_item,
              `${obj.id === currentItem ? styles.active : ''}`,
            )}
            onClick={() => onHadleItem(obj.id)}>
            {obj.name}
          </div>
        ))}
      </div>
    </div>
  );
};
