import { useEffect, useState } from 'react'
import './App.css'
import CardCom from './components/card'
import FooterCom from './components/footer'
import NavbarCom from './components/navbar'

function App() {
  const [products, setProducts] = useState([])



  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])


  // useEffect(() => {
  //   console.log(products);
  //   alert("values got")
  // }, [products])
  
  return (
    <>
      <NavbarCom />
      <div className='container d-flex flex-row flex-wrap gap-3 p-3'>
        {
          products.map((product, index) => (
            <CardCom item={product} />
          ))
        }
      </div>

      <footer><FooterCom /></footer>
    </>
  )
}

export default App
