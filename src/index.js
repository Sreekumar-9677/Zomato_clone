import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Homepage from './Homepage/Homepage';
import router from "./routers";
import Navbar from './Homepage/Navbar';
import Footer from './Homepage/Footer';
import Addrestaurant from './Restaurant/Addrestaurant';
import { Link } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
       
    {/* <BrowserRouter>
    <Homepage/> */}
    <RouterProvider router={router}/>
{/*     
      <Routes>
       
      <Route path="/Addrestaurant" element={<Addrestaurant />} />
      </Routes> */}
     
    {/* </BrowserRouter> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
