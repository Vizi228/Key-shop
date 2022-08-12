import React, { FC } from 'react';

type IText = {
  text: string;
  size: string;
};

const Text: FC<IText> = ({ text, size }) => {
  return <p style={{ fontSize: `${size}px` }}>{text}</p>;
};

export default Text;
