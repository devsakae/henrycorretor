import React, { useState, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { PropertyContext } from '../lib/PropertiesContext';

const PropertyDropdown = () => {
  const { property, setProperty, types } = useContext(PropertyContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        className='dropdown-btn w-full text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Selecione o tipo</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        { types.map((c, i) => {
          return (
            <Menu.Item
              onClick={() => setProperty(c)}
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

export default PropertyDropdown;