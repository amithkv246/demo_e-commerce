import React, { FC } from 'react';
import NavbarCom from '../components/navbar';
import CardCom from '../components/card';
import FooterCom from '../components/footer';

interface EkartPageProps {
  isMobile: boolean,
  products:any,
  setCartDetails: (cartDetails:any) => void
}

const EkartPage: FC<EkartPageProps> = ({ isMobile, products, setCartDetails}) => {
  return (
    <>
      <NavbarCom />
      <div className={`${isMobile ? "d-flex flex-column justify-content-around gap-1 p-1" : "container d-flex flex-row flex-wrap gap-3 p-3"}`}>

        {
          products.map((product:string, index:number) => (
            <CardCom item={product} key={index + "product"} setCartDetails={setCartDetails} />
          ))
        }
      </div>

      <footer><FooterCom /></footer>
    </>
  );
};

export default EkartPage;