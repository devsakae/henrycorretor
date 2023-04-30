import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../assets/img/agents/henrysimon.png';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const API_KEY = process.env.REACT_APP_EMAILJS_API || 'emailjsapikey'

export default function CorretorHenrySimon({ user, imovel, id }) {
  const form = useRef();
  const [warning, setWarning] = useState();
 
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('henrycorretor', 'contact_form', form.current, API_KEY)
      .then(() => {
          handleWarning('Sua mensagem foi enviada!')
      }, (err) => handleWarning(`Erro: ${err.message}. Por favor, tente novamente`));
  };

  const handleWarning = (msg) => {
    setWarning(msg);
    setTimeout(() => setWarning(''), 5000)
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
      <form className='flex flex-col gap-y-4' ref={ form } onSubmit={ sendEmail }>
        <input
          className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
          type='text'
          name='from_name'
          placeholder='Nome'
          defaultValue={user && user.displayName}
        />
        <input
          className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
          type='text'
          placeholder='Endereço de e-mail'
          name='reply_to'
          defaultValue={user && user.email}
        />
        <input
          className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
          type='text'
          name=''
          placeholder='Telefone (com DDD)'
        />
        <textarea
          className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-700'
          placeholder='Mensagem'
          name='message'
          defaultValue={`Estou interessado no seu imóvel ${imovel.name} (${id})`}
        ></textarea>
        { warning && (<div className='bg-yellow-200'>{ warning }</div>) }
        <div className='flex gap-x-2'>
          <button
            className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
            type='submit'
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
