import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import CartPage from './pages/cartPage'

function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [isMobile, setIsMobile] = useState<boolean>(false)

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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage isMobile={isMobile} products={products} />} />
          <Route path={"/Cart"} element={<CartPage isMobile={isMobile} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
