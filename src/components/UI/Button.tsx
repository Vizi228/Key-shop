import React, { FC } from 'react';

type IButton = {
  text: string;
};

const Button: FC<IButton> = ({ text }) => {
  return <button>{text}</button>;
};
export default Button;
