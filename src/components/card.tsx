import Card from 'react-bootstrap/Card';

import { FC } from 'react';

interface CardComProps {
  item: any;
  setCartDetails: (cartDetails: any) => void;
}

const CardCom: FC<CardComProps> = ({ item, setCartDetails }) => {
  const { image, title, price } = item;
  return (
    <>
      <Card style={{ width: '15rem' }}>
//         <Card.Img variant="top" src={image} width="300" height="300"/>
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>
//             <p>{price}</p>
//           </Card.Text>
//         </Card.Body>
//         <Card.Body>
//           <Card.Link href="#">Card Link</Card.Link>
//           <Card.Link href="#">Another Link</Card.Link>
//         </Card.Body>
//       </Card>
    </>
  );
};

export default CardCom;
