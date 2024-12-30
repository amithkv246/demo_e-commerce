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

  useEffect(() => {
    const checkevent = () => setIsMobile(window.innerWidth <= 400)
    checkevent();
    window.addEventListener("resize", checkevent);
    return () => {
      window.removeEventListener("resize", checkevent);
    }
  }, [])

  useEffect(() => {
    console.log(isMobile);
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
    const newArray = cartDetails.filter((itm) => itm.id !== item.id )
    setCartDetails(newArray)
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
