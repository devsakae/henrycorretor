import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Admin from './pages/Admin';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/imovel/:id' element={<PropertyDetails />} />
        <Route path='/admin' element={ <Admin /> } />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
