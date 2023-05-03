import React from 'react';
import { UserAuth } from '../lib/AuthContext';
import { Link } from 'react-router-dom';
import { FiUserCheck, FiUser } from 'react-icons/fi';

export default function UserBox() {
  const { user, googleSignOut } = UserAuth();
  return (
    <div className='flex flex-row items-center gap-x-4'>
      { user ? <FiUserCheck size={ '30px' } /> : <FiUser size={ '30px' } /> }
      <div className='flex flex-col items-center'>
        <div><span className='font-semibold text-sm text-violet-700'>{ user.displayName }</span></div>
        <div className='flex flex-row gap-x-4 items-center justify-center'>
          {
            user.email === process.env.REACT_APP_ADMIN_EMAIL &&
            <Link
              className='text-xs'
              to='/admin'
            >
              Administrar
            </Link>
          }
          <button
            className='text-xs'
            onClick={ googleSignOut }
          >
            Desconectar
          </button>
        </div>
      </div>
    </div>
  )
}
