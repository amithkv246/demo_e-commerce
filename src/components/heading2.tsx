import React, { FC } from 'react';

interface Heading2Props {
  value:string;
}

const Heading2: FC<Heading2Props> = ({ value }) => {
  return (
    <>
      <h2>{value}</h2>
    </>
  );
};

export default Heading2;