import React, { useContext } from 'react';
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';
import { PropertyContext } from '../lib/PropertiesContext';

const Home = () => {
  const { houses } = useContext(PropertyContext);
  console.log(houses);

  return <div className='min-h-[1800px]'>
    <Banner />
    <HouseList />
  </div>;
};

export default Home;
