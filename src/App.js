import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imoveil/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
