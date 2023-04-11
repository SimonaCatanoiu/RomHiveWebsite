import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home.js';
import Offers from './pages/OffersPage/Offers.js';
import Reviews from './pages/ReviewsPage/Reviews.js';
import Admin from './pages/AdminPage/Admin.js';
import OfferDetails from './pages/OffersPage/CardDetailsPage/OfferDetails.js';
import SignIn from './pages//SignInPage/SignIn.js';
import SignUp from './pages//SignUpPage/SignUp.js';
import OrderCompleted from './pages/OffersPage/OrderCompleted/OrderCompleted';

import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/offers' element={<Offers/>}></Route>
        <Route path='/offers/:id' element={<OfferDetails/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/adminPage' element={<Admin/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/OrderCompleted' element={<OrderCompleted/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
 