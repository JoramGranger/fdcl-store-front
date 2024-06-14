import React from 'react'
import {
  BrowserRouter, 
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import PasswordRecovery from './pages/PasswordRecovery';
import Checkout from './pages/Checkout';
import MyAccount from './pages/MyAccount';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* Auth */}
            <Route path="auth">
              <Route index element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="passwordRecovery" element={<PasswordRecovery />} />
            </Route>
            {/* products */}
            <Route path="shop">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<Product />} />
            </Route>
            {/* cart */}
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            {/*my account */}
            <Route path="my">
              <Route index element={<MyAccount />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  )
}

export default App;