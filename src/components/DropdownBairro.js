import React, { useState, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { PropertyContext } from '../lib/PropertiesContext';

const DropdownBairro = () => {
  const { bairro, setBairro, bairros } = useContext(PropertyContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        className='dropdown-btn w-full text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className={ `text-[15px] leading-tight ${ !bairro.includes('Todos') && 'text-violet-600 font-medium' }` }>{bairro}</div>
          <div className='text-[13px]'>Selecione a localização</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {bairros.map((c, i) => {
          return (
            <Menu.Item
              onClick={() => setBairro(c)}
              as='li'
              key={i}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {c}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default DropdownBairro;
