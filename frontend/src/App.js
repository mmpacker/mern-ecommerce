import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Shipping from './pages/Shipping'
import Payment from './pages/Payment'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import UserList from './pages/UserList'
import UserEdit from './pages/UserEdit'


const App = () => {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Route path='/order/:id' component={Order} />
            <Route path='/shipping' component={Shipping} />
            <Route path='/payment' component={Payment} />
            <Route path='/placeOrder' component={PlaceOrder} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} /> 
            <Route path='/product/:id' component={ProductDetails} />
            <Route path='/cart/:id?' component={Cart} />
            <Route path='/admin/userList' component={UserList} />
            <Route path='/admin/user/:id/edit' component={UserEdit} />
            <Route path='/' component={Home} exact />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
