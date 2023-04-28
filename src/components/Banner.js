import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from './Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24 banner'>
      <div className='flex flex-col lg:flex-row'>
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className='text-4x1 lg:text-[58px] font-semibold leading-none mb-6'>
            Compre a <span className='text-violet-700'>casa dos sonhos</span> comigo!
          </h1>
          <p className='max-w-[480px] mb-8'>
            Viva na melhor cidade do mundo. Floripa, ilha da magia, te espera.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='Compre sua casa em Florianópolis' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
