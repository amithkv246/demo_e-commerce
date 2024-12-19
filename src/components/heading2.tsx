import { FC } from 'react';

interface Heading2Props {
  value: string;
}

const Heading2: FC<Heading2Props> = ({ value }) => {
  return (
    <>
      <h2 className='container fs-1 mt-5 mb-3' >{value}</h2>
    </>
  );
};

export default Heading2;