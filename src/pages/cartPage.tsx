import { FC } from 'react';
import NavbarCom from '../components/navbar';
import Heading2 from '../components/heading2';
import FooterCom from '../components/footer';
import CardCom from '../components/card';

interface CartPageProps {
  isMobile: boolean;
  handleBrandonClick: () => void;
  handleRemoveCartDetails: (item: Product) => void;
  cartDetails: Product[];
}

const CartPage: FC<CartPageProps> = ({ isMobile, handleBrandonClick, handleRemoveCartDetails, cartDetails }) => {
  return (
    <>
      <NavbarCom handleBrandonClick={handleBrandonClick} isMobile={isMobile} />
      <Heading2 value='My Cart' />

      <div className={isMobile ? "ps-5 d-flex flex-column gap-3 justify-content-center" : "container me-0 pe-5 d-flex flex-row flex-wrap gap-3 justify-content-start"} >
        {
          cartDetails.length > 0 ?
            cartDetails.map((product: Product, index: number) => (
              <CardCom item={product} key={index + "cartProduct"} handleRemoveCartDetails={handleRemoveCartDetails} isMobile={isMobile} />
            ))
            :
            <p>Nothing to show.</p>
        }
      </div>
      <FooterCom isMobile={isMobile} />
    </>
  );
};

export default CartPage;