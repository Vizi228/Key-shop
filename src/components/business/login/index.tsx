import React, { FC, useState } from 'react';
import Field from '../../UI/Field';
import styles from '../../../styles/login/login.module.scss';
import Button from '../../UI/Button';
import Heading from '../../UI/Heading';
import Text from '../../UI/Text';
import { Link } from 'react-router-dom';

const LoginComponent: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <div className={styles.container}>
      <Heading size="28" text="Login" />
      <Field placeholder="Your email" value={email} setValue={setEmail} />
      <Field placeholder="Your password" value={password} setValue={setPassword} />
      <Button text="Log in" />
      <Link to="/register">
        <Text size="10" text={`Don't have account?Register here`} />
      </Link>
    </div>
  );
};

export default LoginComponent;
