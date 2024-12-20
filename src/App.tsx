import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import CartPage from './pages/cartPage'

function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkevent = () => {
      if (window.innerWidth < 678) {
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

  useEffect(()=> {
    console.log(`Window width: ${window.innerWidth}, isMobile: ${isMobile}`);
  },[isMobile])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  console.log("isMobile" + isMobile);
  


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
