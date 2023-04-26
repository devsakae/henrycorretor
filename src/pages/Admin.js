import React, { useContext } from 'react';
import { PropertyContext } from '../lib/PropertiesContext';
import {
  BsBuildingFillAdd,
  BsFillHouseGearFill,
  BsBuildingX,
} from 'react-icons/bs';

export default function Admin() {
  const { addNewImovel } = useContext(PropertyContext);

  return (
    <section>
      <div className='container mx-auto mb-14'>
        <div className='flex flex-row items-center justify-center gap-x-4'>
          <button
            className='flex flex-col gap-y-4 items-center p-4 min-w-[160px] hover:bg-gray-100'
            onClick={ addNewImovel }
          >
            <BsBuildingFillAdd size={'50px'} />
            <div className='text-center'>Cadastrar novo</div>
          </button>
          <button
            className='flex flex-col gap-y-4 items-center p-4 min-w-[160px] hover:bg-gray-100'
            onClick={ () => console.log('modify') }
          >
            <BsFillHouseGearFill size={'50px'} />
            <div className='text-center'>Modificar imóvel</div>
          </button>
          <button
            className='flex flex-col gap-y-4 items-center p-4 min-w-[160px] hover:bg-gray-100'
            onClick={ () => console.log('erase') }
          >
            <BsBuildingX size={'50px'} />
            <div className='text-center'>Excluir imóvel</div>
          </button>
        </div>
      </div>
    </section>
  );
}
