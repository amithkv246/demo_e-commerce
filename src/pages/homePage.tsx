import { FC, useEffect, useState } from 'react';
import NavbarCom from '../components/navbar';
import CardCom from '../components/card';
import FooterCom from '../components/footer';
import Heading2 from '../components/heading2';
import { useNavigate } from 'react-router';

interface HomePageProps {
  isMobile: boolean,
  products: Product[],
}

const HomePage: FC<HomePageProps> = ({ isMobile, products }) => {

  const [cartDetails, setCartDetails] = useState<Product[]>([])
  const navigate = useNavigate()

  function handleSetCartDetails(item: Product) {
    setCartDetails([...cartDetails, item])
  }

  const handleCartButton = () => {
    navigate("/Cart", { state: { cartDetails: cartDetails } })
  }

  return (
    <>
      <NavbarCom handleCartButton={handleCartButton}  />
      <Heading2 value='Products' />
      <div className={isMobile ? "ps-5 d-flex flex-column gap-3 justify-content-center" : "container me-0 pe-5 d-flex flex-row flex-wrap gap-3 justify-content-start"} >
        {
          products.map((product: Product, index: number) => (
            <CardCom item={product} key={index + "product"} handleSetCartDetails={handleSetCartDetails} />
          ))
        }
      </div>
      <FooterCom />
    </>
  );
};

export default HomePage;