import React, { useContext } from 'react';
import DropdownBairro from './DropdownBairro';
import DropdownType from './DropdownType';
import DropdownPrice from './DropdownPrice';
import { RiSearch2Line } from 'react-icons/ri';
import { PropertyContext } from '../lib/PropertiesContext';

const Search = () => {
  const { handleClick } = useContext(PropertyContext);
  return (
    <div className='px-6 py-4 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur lg:mt-20 rounded-lg'>
      <DropdownBairro />
      <DropdownType />
      <DropdownPrice />
      <button onClick={ handleClick } className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-2xl'>
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
