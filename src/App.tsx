import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/homePage'
import CartPage from './pages/cartPage'
import { useDispatch } from 'react-redux'
import { updateIsMobile, updateIsSearch, updateIsSorted, updateIsTablet, updateSearchText } from './redux/slice/slice'

function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [isMob, setIsMob] = useState<boolean>(false)
  const [isTab, setIsTab] = useState<boolean>(false)
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
    const checkWidth = () => {
      const screenWidth = document.documentElement.clientWidth
      setIsMob(screenWidth < 768) //screenWidth >= 576 && screenWidth < 768
    }
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    }
  }, [])

  useEffect(() => {
    const checkWidth = () => {
      const screenWidth = document.documentElement.clientWidth
      setIsTab(screenWidth >= 768 && screenWidth < 992)
    }
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    }
  }, [])

  useEffect(() => {
    console.log("clientWidth : " + document.documentElement.clientWidth + " , isMobile : " + isMob);
    dispatch(updateIsMobile(isMob))
  }, [isMob])

  useEffect(() => {
    console.log("clientWidth : " + document.documentElement.clientWidth + " , isTablet : " + isTab);
    dispatch(updateIsTablet(isTab))
  }, [isTab])

  //Responsive design breakpoint checking ABOVE^^^

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
    dispatch(updateIsSearch(false))
    dispatch(updateIsSorted(false))
    dispatch(updateSearchText(""))
  }

  function handleRemoveCartDetails(item: Product) { //remove from cart btn
    const newArray1 = id.filter((itm) => itm !== item.id)
    setId(newArray1)
    const newArray2 = cartDetails.filter((itm) => itm.id !== item.id)
    setCartDetails(newArray2)
  }

  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage products={products} handleBrandonClick={handleBrandonClick} handleCartButton={handleCartButton} handleSetCartDetails={handleSetCartDetails} id={id} />} />
        <Route path={"/Cart"} element={<CartPage handleBrandonClick={handleBrandonClick} handleRemoveCartDetails={handleRemoveCartDetails} cartDetails={cartDetails} />} />
      </Routes>
    </>
  )
}

export default App
