import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { signout } from './actions/userActions'
import AdminRoute from './components/AdminRoute'
import PrivateRoute from './components/PrivateRoute'
import CartScreen from './screen/CartScreen'
import HomeScreen from './screen/HomeScreen'
import OrderHistoryScreen from './screen/OrderHistoryScreen'
import OrderListScreen from './screen/OrderListScreen'
import OrderScreen from './screen/OrderScreen'
import PaymentMethodScreen from './screen/PaymentMethodScreen'
import PlaceOrderScreen from './screen/PlaceOrderScreen'
import ProductEditScreen from './screen/ProductEditScreen'
import ProductListScreen from './screen/ProductListScreen'
import ProductScreen from './screen/ProductScreen'
import ProfileScreen from './screen/ProfileScreen'
import RegisterScreen from './screen/RegisterScreen'
import ShippingAdressScreen from './screen/ShippingAdressScreen'
import SigninScreen from './screen/SigninScreen'

function App() {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
   const userSignin = useSelector((state) => state.userSignin)
   const { userInfo } = userSignin
   const dispatch = useDispatch()
   const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <Link className='brand' to='/'>
              Precious Store
            </Link>
          </div>
          <div>
            <Link to='/cart'>
              Cart
              {cartItems.length > 0 && (
                <span className='badge'>{cartItems.length}</span>
              )}
            </Link>
            {
             userInfo ? (
               <div className='dropdown'>
               <Link to = "#">{userInfo.name} <i className="fa fa-caret-down"></i></Link>
               <ul className='dropdown-content'>
               <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
               <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
               <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
               </ul>
               </div>
             ) :
             (
               <Link to='/signin'>Sign In</Link>
               )
               
              } 
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>



          <Routes>
            <Route
              path='/product/:id'
              element={<ProductScreen />}
              exact
            ></Route>
            <Route
              path="/product/:id/edit"
              element={<ProductEditScreen/>}
              exact
            ></Route>

            <Route path='/cart' element={<CartScreen />}></Route>
            <Route path='/cart/:id' element={<CartScreen />}></Route>


            
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path='/shipping' element={<ShippingAdressScreen />}></Route>
            <Route path='/payment' element={<PaymentMethodScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
             <Route path="/order/:id" element={<OrderScreen />}></Route> 
             <Route path="/orderhistory" element={<OrderHistoryScreen/>}></Route> 
            
             <Route
              path="/productlist"
              element={
                <AdminRoute>
                  <ProductListScreen />
                </AdminRoute>
              }
            />

           <Route
              path="/orderlist"
              element={
                <AdminRoute>
                  <OrderListScreen />
                </AdminRoute>
              }
            />

             <Route
              path="/profile"
              element={
                
                <PrivateRoute>
                <ProfileScreen />
              </PrivateRoute>
                
              }
            />
                
            
            <Route path='/' element={<HomeScreen />} exact></Route>
          </Routes>
        </main>

        <footer className='row center'>All right reserved</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
