import React, { useContext } from 'react';
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';
import { HouseContext } from '../components/HouseContext';

const Home = () => {
  const { houses } = useContext(HouseContext);
  console.log(houses);

  return <div className='min-h-[1800px]'>
    <Banner />
    <HouseList />
  </div>;
};

export default Home;
