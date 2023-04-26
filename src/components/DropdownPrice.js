import { Menu } from '@headlessui/react';
import React, { useContext, useState } from 'react';
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
import { PropertyContext } from '../lib/PropertiesContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(PropertyContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    'Todos os preços',
    'Até R$ 200.000,00',
    'Até R$ 500.000,00',
    'Até R$ 1.000.000,00',
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        className='dropdown-btn w-full text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Selecione a faixa de preço</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((c, i) => {
          return (
            <Menu.Item
              onClick={() => setPrice(c)}
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

export default PriceRangeDropdown;
