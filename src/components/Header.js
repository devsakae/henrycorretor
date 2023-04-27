import React from 'react';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';
// import Logo from '../assets/img/logo.svg';
import { UserAuth } from '../lib/AuthContext';
import Logo from '../assets/img/HenrySimon.png'
import UserBox from './UserBox';

const Header = () => {
  const { googleSignIn, user } = UserAuth();
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex flex-col justify-between items-center lg:flex-row'>
        <Link to='/'>
          <img src={Logo} alt='Henry Simon Corretor' />
        </Link>
        <div className='flex items-center gap-6'>
          {
            user ?
            <UserBox /> :
            <GoogleButton
              type='light'
              label='Conectar com Google'
              onClick={ googleSignIn }
            />
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
