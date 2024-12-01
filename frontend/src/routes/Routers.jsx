import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Restaurants from '../pages/Restaurants/Restaurants';
import RestaurantDetails from '../pages/Restaurants/RestaurantDetails';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/restaurant-account/Dashboard';
import ProtectedRoute from './ProtectedRoute';

import {Routes, Route} from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/restaurants' element={<Restaurants/>}/>
        <Route path='/restaurants/:id' element={<RestaurantDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={['tourist']}><MyAccount/></ProtectedRoute>}/>
        <Route path='/restaurants/profile/me' element={<ProtectedRoute allowedRoles={['restaurant']}><Dashboard/></ProtectedRoute>}/>
    </Routes>
  );
};

export default Routers;