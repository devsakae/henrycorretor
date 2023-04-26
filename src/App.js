import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import { AuthContextProvider } from './lib/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <div className='max-w-[1440px] mx-auto bg-white'>
        <Header />
        <Routes>
          <Route path='/imovel/:id' element={<PropertyDetails />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </AuthContextProvider>
  );
};

export default App;
