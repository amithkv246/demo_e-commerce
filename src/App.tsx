import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EkartPage from './pages/ekartPage'

function App() {

  type Product = {
    id?: number,
    image?: string,
    title?: string,
    description?: string,
    price?: number
  }

  const [products, setProducts] = useState<Product[]>([])
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [cartDetails, setCartDetails] = useState<string[]>([])

  useEffect(() => {
    const checkevent = () => {
      if (window.innerWidth <= 678) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkevent();
    window.addEventListener("resize", checkevent);

    return () => {
      window.removeEventListener("resize", checkevent);
    };
  }, []);

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
          <Route path={"/"} element={<EkartPage isMobile={isMobile} products={products} setCartDetails={setCartDetails} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
