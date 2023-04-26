import React from 'react';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../lib/AuthContext';

export default function Login() {
  const { googleSignIn } = UserAuth();
  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-semibold py-2'>Faça o login para acessar</h1>
      <GoogleButton
        type='light'
        label='Conectar com Google'
        onClick={ googleSignIn }
      />
    </div>
  )
}
