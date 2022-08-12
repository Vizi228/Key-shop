import React, { Dispatch, FC, SetStateAction } from 'react';

type IField = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
};

const Field: FC<IField> = ({ value, setValue, placeholder }) => {
  return (
    <input placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export default Field;
