import styles from '../../styles/header.module.scss';
import { FC, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import profileLogo from '../../assets/profile-logo.svg';
import burgerOpen from '../../assets/burger-menu.svg';
import burgerClose from '../../assets/close-burger.png';

const Header: FC = () => {
  const [isBurger, setIsBurger] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className={classNames(styles.content, `${isBurger ? '' : styles.active}`)}>
        <ul>
          <Link to="/catalog">
            <li>Catalog</li>
          </Link>
          <Link to="/how-buy">
            <li>How Buy</li>
          </Link>
        </ul>
        <div className={styles.login}>
          <Link to="/login">
            <img src={profileLogo} alt="profileLogo" />
          </Link>
        </div>
      </div>
      <div className={styles.burger} onClick={() => setIsBurger(!isBurger)}>
        {isBurger ? <img src={burgerOpen} alt="open" /> : <img src={burgerClose} alt="close" />}
      </div>
    </div>
  );
};

export default Header;
