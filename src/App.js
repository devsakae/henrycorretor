import React, { Fragment, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Admin from './pages/Admin';
import ReactGA from 'react-ga';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_FIREBASE_MEASUREMENTID);
    ReactGA.pageview(window.location.pathname + window.location.search);
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className='max-w-[1440px] mx-auto bg-white'>
        <Routes>
          <Route path='/imovel/:id' element={<PropertyDetails />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
