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
import OrderCompleted from './pages/OffersPage/OrderCompleted/OrderCompleted.js';
import Users from './pages/AdminPage/Users/Users.js';
import NewUser from './pages/AdminPage/Users/NewUser.js';
import Trips from './pages/AdminPage/TripsPage/TripsPage.js'
import TripsEdit from './pages/AdminPage/TripsPage/TripsEdit.js'
import TripsAdd from './pages/AdminPage/TripsPage/TripsAdd.js'
import Transactions from './pages/AdminPage/TransactionsPage/TransactionPage.js'
import Settings from './pages/AdminPage/SettingsPage/SettingsPage.js'
import AddUser from './pages/AdminPage/Users/AddUser.js'
import EditProfile from './pages/EditProfilePage/EditProfile.js'
import Booked from './pages/BookingsPage/Booking.js'
import SearchResultList from './components/SearchBar/SearchResultList.js'

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
        <Route path='/offers/search' element={<SearchResultList/>}></Route>
        <Route exact path='/offers/:id' element={<OfferDetails/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/adminPage' element={<Admin/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/OrderCompleted' element={<OrderCompleted/>}></Route>
        <Route path='/adminPage/Users' element={<Users/>}></Route>
        <Route path='/adminPage/Users/:id' element={<NewUser/>}></Route>
        <Route path='/adminPage/Trips' element={<Trips/>}></Route>
        <Route path='/adminPage/Trips/:id' element={<TripsEdit/>}></Route>
        <Route path='/adminPage/TripsAdd' element={<TripsAdd/>}></Route>
        <Route path='/adminPage/Transactions' element={<Transactions/>}></Route>
        <Route path='/adminPage/Settings' element={<Settings/>}></Route>
        <Route path='/adminPage/AddUser' element={<AddUser/>}></Route>
        <Route path='/EditProfile' element={<EditProfile/>}></Route>
        <Route path='/Booked' element={<Booked/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
 