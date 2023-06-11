import React, { useContext } from 'react';
import { PropertyContext } from '../lib/PropertiesContext';
import House from './House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading, searchResults } = useContext(PropertyContext);
  if (loading)
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );

  if (houses.length < 1)
    return (
      <div className='text-center text-3xl text-gray-400 mt-8'>
        Nenhum imóvel encontrado.
      </div>
    );
  return (
    <section className='lg:mt-10 md:mt-6 mb-20'>
      <div className='container mx-auto'>
        {searchResults && (
          <div className='text-center text-xl text-gray-400 mb-4'>
            Encontramos <span className='font-bold'>{ searchResults } { ' ' } { searchResults < 2 ? 'imóvel' : 'imóveis'}</span> que correspondem a sua pesquisa.
          </div>
        )}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10'>
          {houses.map((house, idx) => {
            return (
              <Link to={`imovel/${house.id}`} key={idx} data-aos="fade-up">
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
