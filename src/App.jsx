import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { ContextProvider } from './context/Usecontext'
import { FilterContextProvider } from './context/FilterContext'
import { CartContexProvider } from './context/CartContext'


function App() {


  return (
    <ContextProvider>
    <FilterContextProvider>
    <CartContexProvider>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/singleproduct/:id' element={<SingleProduct />}/>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </CartContexProvider>
    </FilterContextProvider>
    </ContextProvider>
  )
}

export default App
