import React from 'react';
import { UserAuth } from '../lib/AuthContext';
import { Link } from 'react-router-dom';

export default function UserBox() {
  const { user, googleSignOut } = UserAuth();
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>Logado como <span className='font-semibold'>{ user.displayName }</span></div>
      <div className='flex flex-row gap-x-4'>
        {
          user.email === process.env.REACT_APP_ADMIN_EMAIL &&
          <Link
            className='text-sm'
            to='/admin'
          >
            Administrar
          </Link>
        }
        <button
          className='text-sm'
          onClick={ googleSignOut }
        >
          Desconectar
        </button>
      </div>
    </div>
  )
}
