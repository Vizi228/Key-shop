import React, { FC } from 'react';

type IHeading = {
  size: string;
  text: string;
};

const Heading: FC<IHeading> = ({ size, text }) => {
  return <h1 style={{ fontSize: `${size}px` }}>{text}</h1>;
};

export default Heading;
