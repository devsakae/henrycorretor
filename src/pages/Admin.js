import React, { useState } from 'react';
import {
  BsBuildingFillAdd,
  BsFillHouseGearFill,
  BsBuildingX,
} from 'react-icons/bs';
import { UserAuth } from '../lib/AuthContext';
import AdminAdd from '../components/AdminAdd';
import AdminManage from '../components/AdminManage';

export default function Admin() {
  const { user } = UserAuth();
  const [adminMode, setAdminMode] = useState('');

  const handleMode = (mode) => {
    setAdminMode(mode);
    if (mode === adminMode) setAdminMode('');
  }

  if (!user || user.email !== process.env.REACT_APP_ADMIN_EMAIL) return (<div className='text-center text-3xl text-gray-400 mt-20 mb-20'>Acesso proibido.</div>);

  return (
    <section>
      <div className='container mx-auto mb-6'>
        <div className='flex flex-row items-center justify-center'>
          <button
            className={ `flex flex-col gap-y-4 items-center p-4 min-w-[160px] hover:bg-gray-100 ${adminMode === 'add' && 'bg-gray-200 shadow-gray-800 shadow-sm'}`}
            onClick={ () => handleMode('add') }
            disabled={ user.email !== process.env.REACT_APP_ADMIN_EMAIL }
          >
            <BsBuildingFillAdd size={'40px'} />
            <div className='text-center'>Cadastrar novo</div>
          </button>
          <button
            className={ `flex flex-col gap-y-4 items-center p-4 min-w-[160px] hover:bg-gray-100 ${adminMode === 'manage' && 'bg-gray-200 shadow-gray-800 shadow-sm'}` }
            onClick={ () => handleMode('manage') }
            disabled={ user.email !== process.env.REACT_APP_ADMIN_EMAIL }
          >
            <BsFillHouseGearFill size={'40px'} />
            <div className='text-center'>Modificar imóvel</div>
          </button>
          <button
            className={ `flex flex-col gap-y-4 items-center p-4 min-w-[160px] hover:bg-gray-100 ${adminMode === 'delete' && 'bg-gray-200 shadow-gray-800 shadow-sm'}` }
            onClick={ () => handleMode('delete') }
            disabled={ user.email !== process.env.REACT_APP_ADMIN_EMAIL }
          >
            <BsBuildingX size={'40px'} />
            <div className='text-center'>Excluir imóvel</div>
          </button>
        </div>
      </div>
      <div className='text-center mb-14'>
        { adminMode === 'add' && <AdminAdd /> }
        { adminMode === 'manage' && <AdminManage /> }
        { adminMode === 'delete' && 'Deletar' }
      </div>
    </section>
  );
}
