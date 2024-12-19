import React, { FC, useEffect } from 'react';
import NavbarCom from '../components/navbar';
import Heading2 from '../components/heading2';
import FooterCom from '../components/footer';
import CardCom from '../components/card';
import { useLocation } from 'react-router';

interface CartPageProps {
  isMobile:boolean
}

const CartPage: FC<CartPageProps> = ({ isMobile }) => {

  const location = useLocation()
  const { cartDetails } = location.state || {}

  return (
    <>
      <NavbarCom />
      <Heading2 value='Cart' />
      
      <div className={`${isMobile ? "d-flex flex-column justify-content-around gap-1 p-1" : "container d-flex flex-row flex-wrap gap-3 p-3"}`}>
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