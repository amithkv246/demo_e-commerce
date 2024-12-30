import Card from 'react-bootstrap/Card';
import { FC, useEffect, useState } from 'react';
import ButtonCom from './button';

interface CardComProps {
  item: Product;
  handleSetCartDetails?: (item: Product) => void;
  id?: number[];
  handleRemoveCartDetails?: (item: Product) => void;
}

const CardCom: FC<CardComProps> = ({ item, handleSetCartDetails, id, handleRemoveCartDetails }) => {

  const [title, setTitle] = useState<string>("")
  const [slicedTitle, setSlicedTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [slicedDescription, setSlicedDescription] = useState<string>("")
  const [showAddToCart, setShowAddToCart] = useState<boolean>(true)

  useEffect(() => {
    if (item.id !== undefined && id?.includes(item.id)) {
      setShowAddToCart(false);
    }
  }, [id, item])

  useEffect(() => {
    setTitle(item.title ?? "")
    setDescription(item.description ?? "")
  }, [item])

  useEffect(() => {
    setSlicedTitle(title.slice(0, 12) + "...")
    setSlicedDescription(description.slice(0, 17) + "...")
  }, [title, description])


  return (
    <>
      <Card style={{ width: '16rem', minHeight: "500px" }}>
        <Card.Img className='p-5' variant="top" src={item.image} width="300" height="300" />
        <Card.Body>
          <Card.Title className='fw-bol fs-3'>{slicedTitle}</Card.Title>
          <Card.Text className='fw-bold fs-5 text-secondary '>
            <p>Price: ${item.price}</p>
            <p><span className='bg-success rounded-1 text-light p-1 '>{item.rating?.rate}<i className="fa-solid fa-star fa-xs ps-1" style={{ color: "#ffffff" }}></i></span><span className='p-1 ps-3'>{item.rating?.count} ratings</span></p>
            <div className='d-flex flex-column gap-1' >
              <p style={{ marginBottom: 0 }} ><u>Product Description</u></p>
              <p>{slicedDescription}</p>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
          <div className='d-flex flex-row justify-content-evenly'>
            {
              handleSetCartDetails &&
              showAddToCart &&

              <ButtonCom value='Add to Cart' bs='btn-outline-primary' onClick={() => handleSetCartDetails(item)} />

            }
            {
              !handleSetCartDetails &&

              <ButtonCom value='Remove from Cart' bs='btn-outline-primary' onClick={() => { handleRemoveCartDetails ? handleRemoveCartDetails(item): null}} />

            }
            <ButtonCom value='Details' bs='btn-outline-primary' />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCom;
