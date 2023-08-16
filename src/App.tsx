import React, { useState } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import CountryDetails from './country-details';

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<CountryDetails />} />
       </Routes>
     </BrowserRouter>
  );
}

export default App;
