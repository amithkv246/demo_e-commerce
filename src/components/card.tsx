import Card from 'react-bootstrap/Card';
import { FC } from 'react';

type Product = {
  id?: number,
  image?: string,
  title?: string,
  description?: string,
  price?: number
}

interface CardComProps {
  item: Product;
  setCartDetails: (cartDetails: any) => void;
}

const CardCom: FC<CardComProps> = ({ item, setCartDetails }) => {

  return (
    <>
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={item.image} width="300" height="300" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            <p>{item.price}</p>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
          {/* Button */}
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCom;
