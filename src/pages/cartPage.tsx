import { FC } from 'react';
import NavbarCom from '../components/navbar';
import Heading2 from '../components/heading2';
import FooterCom from '../components/footer';
import CardCom from '../components/card';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import ButtonCom from '../components/button';

interface CartPageProps {
  handleBrandonClick: () => void;
  handleRemoveCartDetails: (item: Product) => void;
  cartDetails: Product[];
}

const CartPage: FC<CartPageProps> = ({ handleBrandonClick, handleRemoveCartDetails, cartDetails }) => {

  const isMobile: boolean = useSelector((state: RootState) => state.counter.isMobile)
  const no_of_items: number = cartDetails.length;
  const price_of_items: number = cartDetails.reduce((acc, item) => (acc + (item.price ?? 0)), 0);
  const delivery_charge: number = cartDetails.length * 10;
  const total_price: number = delivery_charge + cartDetails.reduce((acc, item) => (acc + (item.price ?? 0)), 0);
  const height: string | number = (cartDetails.length > 0 ? "30rem" : "0rem")

  return (
    <>
      <NavbarCom handleBrandonClick={handleBrandonClick} />
      <div className={isMobile ? "ps-5" : "container me-5"} style={{ minHeight: "17vh" }} >
        <Heading2 value='My Cart' />
        <div className='d-flex gap-2'>
          <div className={isMobile ? "d-flex flex-column gap-3 justify-content-center" : (cartDetails.length > 0 ? "d-flex flex-row flex-wrap gap-3 justify-content-start overflow-y-scroll p-2 border border-3 border-secondary-emphasis rounded-3 bg-light" : "d-flex")} style={{ height: height, width: "53rem" }} >
            {
              cartDetails.length > 0 ?
                cartDetails.map((product: Product, index: number) => (
                  <CardCom item={product} key={index + "cartProduct"} handleRemoveCartDetails={handleRemoveCartDetails} />
                ))
                :
                <p>Nothing to show.</p>
            }
          </div>
          {
            cartDetails.length > 0 &&
            <div className='border border-2 rounded-3 bg-warning bg-opacity-10' style={{ height: "25rem", width: "17rem", boxShadow: "0px 0px 2px 1px #aaa" }}>
              <div className='m-3 mt-1 priceBox grid row row-gap-3 fs-5'>
                <p className='col-12 fw-bold fs-3 text-secondary' >Price Details</p>
                <p className='col-8'>Price({no_of_items} Items)</p><p className='col-1'>:</p><p className='col-3 text-end'>${price_of_items.toFixed(2)}</p>
                <p className='col-8'>Delivery Charges</p><p className='col-1'>:</p><p className='col-3 text-end'>${delivery_charge}</p>
                <p className='col-8'>Total Amount</p><p className='col-1'>:</p><p className='col-3 text-end'>${total_price.toFixed(2)}</p>
              </div>
            </div>
          }
        </div>
        {
          cartDetails.length > 0 &&
          <div className='mt-4 p-3 d-flex justify-content-center bg-warning-subtle border rounded-3' style={{ boxShadow: "0px 0px 2px 1px #aaa" }}>
            <ButtonCom bs='btn btn-warning btn-lg' value={"Place Order"} />
          </div>
        }
      </div>
      <FooterCom />
      <style>
        {`
        .priceBox p{
          margin: 0px;
          padding: 5px;
        }
        `}
      </style>
    </>
  );
};

export default CartPage;