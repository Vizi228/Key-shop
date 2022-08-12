import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import styles from '../../../../styles/catalog/catalogNavigation.module.scss';
import { NavBar } from './NavBar';
import { sorts } from '../../../../utils/consts';
import searchIcon from '../../../../assets/icon-search.png';

interface INavigation {}

export const Navigation: FC<INavigation> = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const onHandleSort = () => {
    setIsVisible(!isVisible);
  };
  const onHandleItem = (id: number) => {
    setActiveItem(id);
    setIsVisible(false);
  };

  const sortRef = useRef<any>();
  useEffect(() => {
    document.body.addEventListener('click', (e: any) => {
      if (!e.path.includes(sortRef.current)) {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <div className={styles.navigation}>
      <NavBar />
      <form className={styles.search}>
        <input type="search" name="filter" placeholder="Поиск..." autoComplete="off" />
        <button type="submit">
          <img src={searchIcon} alt="search" />
        </button>
      </form>

      <div className={styles.sort_bar} ref={sortRef} onClick={() => onHandleSort()}>
        <span>{sorts[activeItem].name}</span>
        <div className={classNames(styles.sort_items, `${isVisible ? styles.active : ''}`)}>
          {sorts.map((s) => (
            <div
              onClick={() => onHandleItem(s.id)}
              className={classNames(
                styles.sort_item,
                `${s.id === activeItem ? styles.active : ''}`,
              )}>
              <p>{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
