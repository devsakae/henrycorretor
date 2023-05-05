import React, { Fragment } from 'react';
import Image from '../assets/img/house-banner.png';
import Search from './Search';

const Banner = () => {
  return (
    <Fragment>
      <section className='h-full max-h-[640px] banner'>
        <div className='flex flex-col lg:flex-row'>
          <div className="flex flex-col items-center lg:items-end lg:text-right lg:mr-6 text-center justify-center flex-1 px-4 lg:px-0">
            <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 lg:mr-6'>
              Compre o seu <span className='text-violet-700'>imóvel dos sonhos</span> conosco.
            </h1>
            <p className='max-w-[480px] lg:text-right lg:mr-6 '>
              Viva no estado de Santa Catarina com conforto, qualidade e segurança. Vem ser feliz!
            </p>
          </div>
          <div className='hidden flex-1 lg:flex justify-end items-end'>
            <img src={Image} alt='Compre sua casa em Florianópolis' />
          </div>
        </div>
      </section>
      <Search />
    </Fragment>
  );
};

export default Banner;
