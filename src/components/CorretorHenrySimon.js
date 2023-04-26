import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../assets/img/agents/henrysimon.png';
import { FaWhatsapp } from 'react-icons/fa';

export default function CorretorHenrySimon({ user, imovel, id }) {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPhone = useRef();
  const inputText = useRef();

  const sendMail = (event) => {
    event.preventDefault();
    const name = inputName.current.value;
    const email = inputEmail.current.value;
    const phone = inputPhone.current.value;
    const message = inputText.current.value;
    console.log(name, email, phone, message);
  }

  return (
    <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
      <div className='flex items-center gap-x-4 mb-8'>
        <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
          <img src={ProfilePicture} alt='Corretor de imóveis Henry Simon' />
        </div>
        <div>
          <div className='font-bold text-lg'>Henry Simon</div>
          <Link
            to='http://wa.me/+5548996300018'
            className='text-green-600 text-sm flex flex-row gap-x-1 items-center justify-center hover:bg-green-200 transition'
          >
            <FaWhatsapp /> <span className='text-black'>WhatsApp</span>
          </Link>
        </div>
      </div>
      <form className='flex flex-col gap-y-4'>
        <input
          className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
          type='text'
          placeholder='Nome'
          ref={inputName}
          defaultValue={user && user.displayName}
        />
        <input
          className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
          type='text'
          placeholder='Endereço de e-mail'
          ref={inputEmail}
          defaultValue={user && user.email}
        />
        <input
          className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
          type='text'
          placeholder='Telefone (com DDD)'
          ref={inputPhone}
        />
        <textarea
          className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-700'
          placeholder='Mensagem'
          defaultValue={`Estou interessado no seu imóvel ${imovel.name} (${id})`}
          ref={inputText}
        ></textarea>
        <div className='flex gap-x-2'>
          <button
            className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
            onClick={ sendMail }
          >
            Enviar e-mail
          </button>
          <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'>
            Ligar
          </button>
        </div>
      </form>
    </div>
  );
}
