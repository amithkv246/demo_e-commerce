import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/homePage'
import CartPage from './pages/cartPage'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsMobile, updateIsSearch, updateNoResults, updateSearchId } from './redux/slice/slice'
import { RootState } from './redux/store/store'

function App() {

  const searchText = useSelector((state: RootState) => state.counter.searchText)

  const [products, setProducts] = useState<Product[]>([])
  const [isMob, setIsMob] = useState<boolean>(false)
  const [cartDetails, setCartDetails] = useState<Product[]>([])
  const [id, setId] = useState<number[]>([])

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log(`Inner Width: ${window.innerWidth}px`);
  //   console.log(`Client Width: ${document.documentElement.clientWidth}px`);
  //   console.log(`Screen Width: ${window.screen.width}px`);
  //   console.log(`DPR: ${window.devicePixelRatio}`);
  //   console.log(`Actual width: ${window.innerWidth * window.devicePixelRatio}`);
  // }, [])

  useEffect(() => {
    const checkWidth = () => setIsMob(document.documentElement.clientWidth <= 600)
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    }
  }, [])

  useEffect(() => {
    // console.log("clientWidth : " + document.documentElement.clientWidth + " , isMobile : " + isMob);
    dispatch(updateIsMobile(isMob))
  }, [isMob])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  // useEffect(() => {
  //   console.log(products);
  // }, [products])

  // homePage
  const handleCartButton = () => {
    navigate("/Cart")
  }

  function handleSetCartDetails(item: Product) { //add to cart btn
    setCartDetails([...cartDetails, item])
  }

  useEffect(() => {
    const i = cartDetails.length - 1
    if (i >= 0 && cartDetails !== undefined) {
      setId([...id, cartDetails[i].id])
    }
  }, [cartDetails])

  // cartPage
  const handleBrandonClick = () => {
    navigate("/")
  }

  function handleRemoveCartDetails(item: Product) { //remove from cart btn
    const newArray1 = id.filter((itm) => itm !== item.id)
    setId(newArray1)
    const newArray2 = cartDetails.filter((itm) => itm.id !== item.id)
    setCartDetails(newArray2)
  }

  useEffect(() => {
    for (let i = 0; i < products.length; i++) {
      if ((products[i].title && products[i].title?.toLowerCase().includes(searchText.toLowerCase())) ||
        (products[i].description && products[i].description?.toLowerCase().includes(searchText.toLowerCase()))
      ) {
        dispatch(updateIsSearch(true))
        dispatch(updateSearchId(products[i].id))
      } else {
        dispatch(updateNoResults(products[i].id))
      }
    }
  }, [searchText])

  // function handleSearchButton() {
  //   isSearch ? null : alert("No Search Results Found.")

  //   dispatch(updateIsSearch(products.some( product => 
  //     Object.values(product).some( value => 
  //     typeof(value) === "string" && value.toLowerCase().includes(searchText.toLowerCase())
  //     )
  //   )))

  //   dispatch(updateIsSearch(products.some( product =>
  //     (product.title && product.title.toLowerCase().includes(searchText.toLowerCase())) ||
  //     (product.description && product.description.toLowerCase().includes(searchText.toLowerCase()))
  //   )))
  // }

  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage products={products} handleCartButton={handleCartButton} handleSetCartDetails={handleSetCartDetails} id={id} />} />
        <Route path={"/Cart"} element={<CartPage handleBrandonClick={handleBrandonClick} handleRemoveCartDetails={handleRemoveCartDetails} cartDetails={cartDetails} />} />
      </Routes>
    </>
  )
}

export default App
