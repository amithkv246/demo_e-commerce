import { FC } from 'react';
import NavbarCom from '../components/navbar';
import Heading2 from '../components/heading2';
import FooterCom from '../components/footer';
import CardCom from '../components/card';
import { useLocation, useNavigate } from 'react-router';

interface CartPageProps {
  isMobile: boolean;
}

const CartPage: FC<CartPageProps> = ({ isMobile }) => {

  const location = useLocation()
  const { cartDetails } = location.state || {}

  const navigate = useNavigate()
  const handleBrandonClick = () => {
    navigate("/")
  }

  return (
    <>
      <NavbarCom handleBrandonClick={handleBrandonClick} />
      <Heading2 value='Cart' />

      <div className={isMobile ? "ps-5 d-flex flex-column gap-3 justify-content-center" : "container me-0 pe-5 d-flex flex-row flex-wrap gap-3 justify-content-start"} >
        {
          cartDetails.map((product: Product, index: number) => (
            <CardCom item={product} key={index + "cartProduct"} />
          ))
        }
      </div>
      <FooterCom />
    </>
  );
};

export default CartPage;