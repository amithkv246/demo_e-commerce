import React, { FC } from 'react';
import Card from 'react-bootstrap/Card';

interface CardComProps {
  title:string;
  // description:string;
  price:number;
  img:string;
}

const CardCom = (props:any) => {
  // console.log(props.item);
  const {image, title, price} = props.item
  
  
  
  return (
    <>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>{price}</p>
            
          </Card.Text>
        </Card.Body>
        {/* <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCom;