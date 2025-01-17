import { FC } from 'react';
import NavbarCom from '../components/navbar';
import CardCom from '../components/card';
import FooterCom from '../components/footer';
import Heading2 from '../components/heading2';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import Search from '../components/search';

interface HomePageProps {
  products: Product[],
  handleCartButton: () => void;
  handleSetCartDetails: (item: Product) => void;
  id: number[];
}

const HomePage: FC<HomePageProps> = ({ products, handleCartButton, handleSetCartDetails, id }) => {

  const { isMobile, searchText, isSearch } = useSelector((state: RootState) => state.counter)

  return (
    <>
      <NavbarCom handleCartButton={handleCartButton} />
      {
        isSearch ?
          <div className={isMobile ? "ps-5" : "container me-0"} >
            <Heading2 value={`Search results for " ${searchText} "`} />
            <div className={isMobile ? "d-flex flex-column gap-3 justify-content-center" : "d-flex flex-row flex-wrap gap-3 justify-content-start"} >
              <Search products={products} searchText={searchText} handleSetCartDetails={handleSetCartDetails} id={id} />
            </div>
          </div>
          :
          <div className={isMobile ? "ps-5" : "container me-0"} style={{ minHeight: "17vh" }} >
            <Heading2 value={"Products"} />
            <div className={isMobile ? "d-flex flex-column gap-3 justify-content-center" : "d-flex flex-row flex-wrap gap-3 justify-content-start"} >
              {
                products.length > 0 ?
                  products.map((product: Product, index: number) => (
                    <CardCom item={product} key={index + "product"} handleSetCartDetails={handleSetCartDetails} id={id} />
                  ))
                  :
                  <p>Nothing to show.</p>
              }
            </div>
          </div>
      }
      <FooterCom />
    </>
  );
};

export default HomePage;