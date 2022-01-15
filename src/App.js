import React, { Fragment } from 'react';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
//import PrivateRoute from './component/routing/PrivateRoute';
import NavBar from './component/layout/NavBar';
import Home from './component/pages/Home';
import PageNotFound from './component/pages/PageNotFound'
import About from './component/pages/About';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Alerts from './component/layout/Alerts';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './ultils/setAuthToken';
import './App.css';


if(localStorage.token) {
  setAuthToken(localStorage.token);
}

 const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <NavBar/>
              <div className='container'>
                <Alerts/>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/register' element={<Register/>} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='*' element={<PageNotFound/>}/>
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>  
  );
}

export default App;
