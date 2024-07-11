import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black py-8 text-center text-white'>
      <div className='container mx-auto'>
        <p>
          Copyright 2023 Henry Simon Corretor Imobiliário
        </p>
        <p className='text-sm mt-4'>
          Website desenvolvido por <a href="http://devsakae.vercel.app" className='font-semibold' target='blank'>Rodrigo Sakae</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
