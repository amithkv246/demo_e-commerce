import { FC, useEffect, useState } from 'react';
import NavbarCom from '../components/navbar';
import CardCom from '../components/card';
import FooterCom from '../components/footer';
import Heading2 from '../components/heading2';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { updateSearchResults } from '../redux/slice/slice';

interface HomePageProps {
  products: Product[],
  handleCartButton: () => void;
  handleSetCartDetails: (item: Product) => void;
  id: number[];
}

const HomePage: FC<HomePageProps> = ({ products, handleCartButton, handleSetCartDetails, id }) => {

  const isMobile = useSelector((state: RootState) => state.counter.isMobile)
  const { searchText, isSearch } = useSelector((state: RootState) => state.counter)
  const searchId: number[] = useSelector((state: RootState) => state.counter.searchId)
  const noSearchId: number[] = useSelector((state: RootState) => state.counter.noSearchId)
  const searchResults: Product[] = useSelector((state: RootState) => state.counter.searchResults)
  const [isNoResults, setIsNoResults] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isSearch && searchId.length > 0) {
      dispatch(updateSearchResults(products.filter((item) => searchId.includes(item.id))))
    }
  }, [isSearch, searchId])

  useEffect(() => {
    setIsNoResults(noSearchId.length == 20 && products.length == 20)
  }, [noSearchId])

  return (
    <>
      <NavbarCom handleCartButton={handleCartButton} />
      {
        isSearch ?
          <div className={isMobile ? "ps-5" : "container me-0"} >
            <Heading2 value={`Search results for " ${searchText} "`} />
            <div className={isMobile ? "d-flex flex-column gap-3 justify-content-center" : "d-flex flex-row flex-wrap gap-3 justify-content-start"} >
              {
                searchResults.length > 0 &&
                searchResults.map((product: Product, index: number) => (
                  <CardCom item={product} key={index + "homeSearchResult"} handleSetCartDetails={handleSetCartDetails} id={id} />
                ))
              }
            </div>
          </div>
          :
          <div className={isMobile ? "ps-5" : "container me-0"} style={{ minHeight: "17vh" }} >
            <Heading2 value={isNoResults ? "No search results found." : "Products"} />
            <div className={isMobile ? "d-flex flex-column gap-3 justify-content-center" : "d-flex flex-row flex-wrap gap-3 justify-content-start"} >
              {
                isNoResults ?
                  null
                  :
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