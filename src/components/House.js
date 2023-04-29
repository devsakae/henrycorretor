import React from 'react';
import { BiBed, BiBath, BiArea, BiCar } from 'react-icons/bi';
import defaultImg from '../assets/img/default.png';

const House = ({ house }) => {
  const { thumb, type, bairro, name, comodos, banheiros, area, price, vagas } = house;
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-sm mx-auto cursor-pointer hover:shadow-2xl transition'>
      <div className='flex justify-center'>
        <img src={ thumb ? thumb : defaultImg } alt='Preview do imóvel' className='mb-6' />
      </div>
      <div className='mb-4 flex gap-x-2 text-sm justify-center'>
        <div className='bg-green-500 rounded-full text-white px-3'>{ type }</div>
        <div className='bg-violet-500 rounded-full text-white px-3'>{ bairro }</div>
      </div>
      <div className='text-lg font-semibold text-left'>{ name }</div>
      <div className='flex gap-x-4 mb-2 justify-left'>
        <div className='flex text-gray-600 gap-1 items-center'>
          <div className='text-[20px]'>
            <BiBed alt='Cômodos' />
          </div>
          <div>{ comodos }</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'>
            <BiBath alt='Banheiros' />
          </div>
          <div>{ banheiros }</div>
        </div>
        <div className='flex text-gray-600 gap-1 items-center'>
          <div className='text-[20px]'>
            <BiCar alt='Vagas de garagem' />
          </div>
          <div>{ vagas }</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'>
            <BiArea alt='Área total' />
          </div>
          <div>{ area } m²</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4 text-right'>
        { Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
      </div>
    </div>
  );
};

export default House;
