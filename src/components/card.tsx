import Card from 'react-bootstrap/Card';
import { FC, useEffect, useState } from 'react';
import ButtonCom from './button';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

interface CardComProps {
  item: Product;
  handleSetCartDetails?: (item: Product) => void;
  id?: number[];
  handleRemoveCartDetails?: (item: Product) => void;
}

const CardCom: FC<CardComProps> = ({ item, handleSetCartDetails, id, handleRemoveCartDetails }) => {

  const isMobile = useSelector((state: RootState) => state.counter.isMobile)

  const [title, setTitle] = useState<string>("")
  const [slicedTitle, setSlicedTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [slicedDescription, setSlicedDescription] = useState<string>("")
  const [showAddToCart, setShowAddToCart] = useState<boolean>(true)
  const [showDetails, setShowDetails] = useState<boolean>(false)

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
    if (showDetails) {
      setSlicedTitle(title)
      setSlicedDescription(description)
    } else {
      setSlicedTitle(title.slice(0, 10) + "...")
      setSlicedDescription(description.slice(0, 15) + "...")
    }
  }, [showDetails, title, description])

  return (
    <>

      {

        !showDetails ?

          (isMobile ?
            null
          :
          <Card style={{ width: '16rem', minHeight: "500px" }}>
            <Card.Img className='p-5' variant="top" src={item.image} width="300" height="300" />
            <Card.Body>
              <Card.Title className='ps-2 fw-bol fs-3'>{slicedTitle}</Card.Title>
              <Card.Text className='ps-2 fw-bold fs-5 text-secondary '>
                <p>Price: ${item.price}</p>
                <p><span className='bg-success rounded-1 text-light p-1 '>{item.rating?.rate}<i className="fa-solid fa-star fa-xs ps-1" style={{ color: "#ffffff" }}></i></span><span className='p-1 ps-3'>{item.rating?.count} ratings</span></p>
                <div className='d-flex flex-column gap-1' >
                  <p style={{ marginBottom: 0 }} ><u>Product Description</u></p>
                  <p>{slicedDescription}</p>
                  <p className='text-black' role='button' onClick={() => setShowDetails(true)} >
                    <i className="fa-solid fa-angle-down" ></i>More Details
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
              <div className='d-flex flex-row justify-content-center'>
                {

                  handleSetCartDetails && showAddToCart ?
                    <ButtonCom value='Add to Cart' bs='btn-outline-primary' onClick={() => handleSetCartDetails(item)} />
                    :
                    handleSetCartDetails &&
                    <p className='fs-5 fw-bold text-info' style={{ marginBottom: 0 }} >Added to cart</p>

                }
                {
                  !handleSetCartDetails &&

                  <ButtonCom value='Remove from Cart' bs='btn-outline-primary' onClick={() => { handleRemoveCartDetails ? handleRemoveCartDetails(item) : null }} />

                }
              </div>
            </Card.Body>
          </Card>)


          :// true part


          (isMobile ?
            null
          :
          <Card style={{ width: '65rem', minHeight: "300px" }}>
            <div className='d-flex flex-row'>
              <div className='d-flex justify-content-center align-items-center ps-5 pe-5'><img className='p-2' src={item.image} width="auto" height="300" /></div>
              <div className='d-flex flex-column p-3 bg-warning-subtle'>
                <Card.Body>
                  <Card.Title className='fw-bol fs-3'>{slicedTitle}</Card.Title>
                  <Card.Text className='fw-bold fs-5 text-secondary '>
                    <p>Price: ${item.price}</p>
                    <p><span className='bg-success rounded-1 text-light p-1 '>{item.rating?.rate}<i className="fa-solid fa-star fa-xs ps-1" style={{ color: "#ffffff" }}></i></span><span className='p-1 ps-3'>{item.rating?.count} ratings</span></p>
                    <div className='d-flex flex-column gap-1' >
                      <p style={{ marginBottom: 0 }} ><u>Product Description</u></p>
                      <p>{slicedDescription}</p>
                      <p className='text-black' role='button' onClick={() => setShowDetails(false)} >
                        <i className="fa-solid fa-angle-up" ></i>Less Details
                      </p>
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Body className='d-flex flex-row justify-content-center align-items-center bg-info-subtle border border-2 border-secondary-subtle rounded-3 p-1' >
                  {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
                  <div>
                    {

                      handleSetCartDetails && showAddToCart ?
                        // <ButtonCom value='Add to Cart' bs='btn btn-primary btn-lg' onClick={() => handleSetCartDetails(item)} />
                        <p className='fs-5 fw-bold text-primary bg-info-subtle' role='button' onClick={() => handleSetCartDetails(item)} style={{ marginBottom: 0, padding: "0.5rem 10rem 0.5rem 10rem" }} >Add to cart</p>
                        :
                        handleSetCartDetails &&
                        <p className='fs-5 fw-bold text-info bg-info-subtle' style={{ marginBottom: 0, padding: "0.5rem 10rem 0.5rem 10rem" }} >Added to cart</p>

                    }
                    {
                      !handleSetCartDetails &&

                      // <ButtonCom value='Remove from Cart' bs='btn-outline-primary' onClick={() => { handleRemoveCartDetails ? handleRemoveCartDetails(item) : null }} />
                      <p className='fs-5 fw-bold text-primary bg-info-subtle' role='button' onClick={() => { handleRemoveCartDetails ? handleRemoveCartDetails(item) : null }} style={{ marginBottom: 0, padding: "0.5rem 10rem 0.5rem 10rem" }} >Remove from cart</p>

                    }
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>)



      }

    </>
  );
};

export default CardCom;
