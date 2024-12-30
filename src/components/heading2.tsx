import { FC } from 'react';

interface Heading2Props {
  value: string;
}

const Heading2: FC<Heading2Props> = ({ value }) => {
  return (
    <>
      <h2 className='fs-1 container me-0 mt-5 mb-3 pe-5' >{value}</h2>
    </>
  );
};

export default Heading2;