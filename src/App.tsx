import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EkartPage from './pages/ekartPage'

function App() {
  const [products, setProducts] = useState<string[]>([])
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
  
    checkevent(); // Check on initial render
    window.addEventListener("resize", checkevent);
  
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", checkevent);
    };
  }, []);
  

  useEffect(()=>{
    console.log(isMobile);
    console.log(window.innerWidth);
    
  },[isMobile])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])
  
  

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
