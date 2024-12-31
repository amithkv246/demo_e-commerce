import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/homePage'
import CartPage from './pages/cartPage'

function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [cartDetails, setCartDetails] = useState<Product[]>([])
  const [id, setId] = useState<number[]>([])

  const navigate = useNavigate()

  useEffect(()=> {
    console.log("initial innerWidth:" + window.innerWidth);
  },[])

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 600)
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    }
  }, [])

  useEffect(() => {
    console.log("innerWidth:" + window.innerWidth + "isMobile" + isMobile);
  }, [isMobile])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  useEffect(() => {
    console.log(products);
  }, [products])

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



  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage isMobile={isMobile} products={products} handleCartButton={handleCartButton} handleSetCartDetails={handleSetCartDetails} id={id} />} />
        <Route path={"/Cart"} element={<CartPage isMobile={isMobile} handleBrandonClick={handleBrandonClick} handleRemoveCartDetails={handleRemoveCartDetails} cartDetails={cartDetails} />} />
      </Routes>
    </>
  )
}

export default App
