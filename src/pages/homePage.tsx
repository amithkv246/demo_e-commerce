import { FC } from 'react';
import NavbarCom from '../components/navbar';
import CardCom from '../components/card';
import FooterCom from '../components/footer';
import Heading2 from '../components/heading2';

interface HomePageProps {
  isMobile: boolean,
  products: Product[],
  handleCartButton: () => void;
  handleSetCartDetails: (item: Product) => void;
  id: number[];
}

const HomePage: FC<HomePageProps> = ({ isMobile, products, handleCartButton, handleSetCartDetails, id }) => {

  return (
    <>
      <NavbarCom handleCartButton={handleCartButton} isMobile={isMobile} />
      <Heading2 value='Products' />
      <div className={isMobile ? "ps-5 d-flex flex-column gap-3 justify-content-center" : "container me-0 pe-5 d-flex flex-row flex-wrap gap-3 justify-content-start"} >
        {
          products.length > 0 ?
            products.map((product: Product, index: number) => (
              <CardCom item={product} key={index + "product"} handleSetCartDetails={handleSetCartDetails} id={id} isMobile={isMobile} />
            ))
            :
            <p>Nothing to show.</p>
        }
      </div>
      <FooterCom isMobile={isMobile} />
    </>
  );
};

export default HomePage;