import { FC } from 'react';
import styles from '../../../styles/catalog/catalogNavigation.module.scss';
import { filtres } from '../../../utils/consts';
import { NavBlock } from './Block';
export const NavBar: FC = () => {
  return (
    <div className={styles.filter_bar}>
      {filtres.map((obj) => (
        <NavBlock key={obj.id} {...obj} />
      ))}
    </div>
  );
};
