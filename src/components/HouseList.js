import React, { useContext } from 'react';
import { PropertyContext } from '../lib/PropertiesContext';
import House from './House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(PropertyContext);
  if (loading)
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  
  if (houses.length < 1) return (<div className='text-center text-3xl text-gray-400 mt-48'>Nenhum imóvel encontrado.</div>)
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4'>
          {houses.map((house, idx) => {
            return (
              <Link to={`imovel/${house.id}`} key={idx}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
