import Card from 'react-bootstrap/Card';
import { FC, useEffect, useState } from 'react';
import ButtonCom from './button';

interface CardComProps {
  item: Product;
  handleSetCartDetails?: ( item:Product ) => void
}

const CardCom: FC<CardComProps> = ({ item, handleSetCartDetails }) => {

  const [title, setTitle] = useState<string>("")
  const [slicedTitle, setSlicedTitle] = useState<string>("")

  useEffect(() => {
    if (item !== undefined) {
      setTitle(item.title ?? "")
    }
  }, [item])

  useEffect(() => {
    setSlicedTitle(title.slice(0, 17) + "....")
  }, [title])

  return (
    <>
      <Card style={{ width: '16.5rem' }}>
        <Card.Img variant="top" src={item.image} width="300" height="300" />
        <Card.Body>
          <Card.Title>{slicedTitle}</Card.Title>
          <Card.Text>
            <p>{item.price}</p>
            <p>{  }</p>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
          <div className='d-flex flex-row justify-content-evenly'>
            { 
              handleSetCartDetails &&
              <ButtonCom value='Add to Cart' onClick={() => handleSetCartDetails(item)} />
            }
            <ButtonCom value='Details' />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCom;
