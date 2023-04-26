import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { HouseContext } from '../components/HouseContext';

const PropertyDetails = () => {
  const { id } = useParams();
  const { houses, loading } = useContext(HouseContext);
  const [detailed, setDetailed] = useState('');

  useEffect(() => {
    console.log(houses);
    const found = houses.find((house) => house.id === id);
    console.log(found);
    setDetailed(found);
  }, [houses, id])

  return (
    <section>
      {
        loading ? 'Carregando...' : (
        <div className='container mx-auto min-h-[800px] mb-14'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
            <div>
              <h2 className='text-2xl font-semibold'>{detailed.name}</h2>
              <h3 className='text-lg mb-4'>{detailed.address}</h3>
            </div>
            <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
              <div className='bg-green-500 text-white px-3 rounded-full'>
                {detailed.type}
              </div>
              <div className='bg-violet-500 text-white px-3 rounded-full'>
                {detailed.bairro}
              </div>
            </div>
            <div className='text-3xl font-semibold text-violet-600'>
              { Number(detailed.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
            </div>
          </div>
          <div className='flex flex-col items-start gap-8 lg:flex-row'>
            <div className='max-w-[768px]'>
              <div className='mb-8'>
                <img src={detailed.imageLg} alt='' />
              </div>
              <div className='flex gap-x-6 mb-6 text-violet-700'>
                <div className='flex gap-x-2 items-center'>
                  <BiBed className='text-2xl' />
                  <div className='text-black'>{detailed.comodos}</div>
                </div>
                <div className='flex gap-x-2 items-center'>
                  <BiBath className='text-2xl' />
                  <div className='text-black'>{detailed.banheiros}</div>
                </div>
                <div className='flex gap-x-2 items-center'>
                  <BiArea className='text-2xl' />
                  <div className='text-black'>{detailed.area} m2</div>
                </div>
              </div>
              <div>{detailed.description}</div>
            </div>
            <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
              <div className='flex items-center gap-x-4 mb-8'>
                <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                  <img src='' alt='' />
                </div>
                <div>
                  <div className='font-bold text-lg'>Henry Simon</div>
                  <Link to='' className='text-violet-700 text-sm'>
                    Ver imóveis deste corretor
                  </Link>
                </div>
              </div>
              <form className='flex flex-col gap-y-4'>
                <input
                  className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                  type='text'
                  placeholder='Nome'
                />
                <input
                  className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                  type='text'
                  placeholder='Endereço de e-mail'
                />
                <input
                  className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                  type='text'
                  placeholder='Telefone (com DDD)'
                />
                <textarea
                  className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-700'
                  placeholder='Mensagem'
                  defaultValue='Estou interessado no seu imóvel'
                >
                </textarea>
                <div className='flex gap-x-2'>
                  <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Enviar e-mail</button>
                  <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'>Ligar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        )
      }      
    </section>
  );
};

export default PropertyDetails;
