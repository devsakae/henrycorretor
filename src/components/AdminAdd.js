import React, { useRef } from 'react'

export default function AdminAdd() {
  const inputTitle = useRef();
  const inputType = useRef('Casa');
  const inputDescription = useRef();
  const inputAddress = useRef();

  const styleInput = 'border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm';

  const saveNewImovel = (event) => {
    event.preventDefault();
    const payload = {
      title: inputTitle.current.value,
      type: inputType.current.value,
      description: inputDescription.current.value,
      address: inputAddress.current.value,
    }
    console.log(payload);
  };

  return (
    <div className='flex flex-col gap-y-4 mx-auto w-auto'>
      <h1 className='font-bold text-lg p-4'>Adicionar novo imóvel</h1>
      <form className='flex flex-col lg:flex-row items-center justify-evenly'>
        <div className='flex flex-col items-start gap-y-4 w-full p-4'>
          <input
            type='text'
            placeholder='Título do imóvel'
            className={ styleInput }
            ref={ inputTitle }
          />
          <input
            type='text'
            placeholder='Endereço'
            className={ styleInput }
            ref={ inputAddress }
          />
          <div className='flex flex-row items-center justify-between w-full gap-x-4'>
            <select
              name='type'
              ref={ inputType }
              className={ styleInput }
            >
              <option name='type' value='Casa'>Casa</option>
              <option name='type' value='Apartamento'>Apartamento</option>
            </select>
          </div>
          <div className='flex flex-row items-center justify-between w-full gap-x-4'>
            <input type="number" placeholder='Área' className={ styleInput } />
            <input type='number' placeholder='Comodos' className={ styleInput } />            
            <input type='number' placeholder='Banheiros' className={ styleInput } />            
            <input type='number' placeholder='Vagas' className={ styleInput } />            
          </div>
        </div>
        <div className='w-full flex flex-col gap-y-4'>
          <button>Upload de imagens</button>
          <textarea
            ref={ inputDescription }
            className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-56 text-sm'
          >
          </textarea>
        </div>
      </form>
      <button
        className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-2/3 transition'
        onClick={ saveNewImovel }
      >
        Submit
      </button>
    </div>
  )
}
