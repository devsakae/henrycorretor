import React, { useContext, useEffect, useRef, useState } from 'react';
import { PropertyContext } from '../lib/PropertiesContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase'

export default function AdminAdd() {
  const { bairros } = useContext(PropertyContext);
  const [bairroadmin, setBairroadmin] = useState(bairros);
  const [insertBairro, setInsertBairro] = useState(false);
  const inputTitle = useRef();
  const inputType = useRef('Casa');
  const inputDescription = useRef();
  const inputAddress = useRef();
  const inputBairro = useRef();
  const inputArea = useRef();
  const inputPrice = useRef();
  const inputComodos = useRef();
  const inputBanheiros = useRef();
  const inputVagas = useRef();

  const styleInput =
    'border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-2 h-14 text-sm';

  useEffect(() => {
    const fixBairros = bairros.filter((b) => b !== 'Todos os bairros');
    fixBairros.push('➕ Inserir novo bairro...');
    setBairroadmin(fixBairros);
  }, [bairros]);

  const handleBairros = ({ target }) => {
    setInsertBairro(false);
    if (target.value.includes('Inserir novo bairro')) setInsertBairro(true);
  };

  const saveNewImovel = async (event) => {
    event.preventDefault();
    const payload = {
      name: inputTitle.current.value,
      type: inputType.current.value,
      description: inputDescription.current.value,
      address: inputAddress.current.value,
      bairro: inputBairro.current.value,
      area: inputArea.current.value,
      price: inputPrice.current.value,
      comodos: inputComodos.current.value,
      banheiros: inputBanheiros.current.value,
      vagas: inputVagas.current.value,
    };
    const docRef = await addDoc(collection(db, "imoveis"), payload);
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <div className='container flex flex-col gap-y-4 mx-auto w-full justify-center items-center'>
      <h1 className='font-bold text-lg p-4'>Adicionar novo imóvel</h1>
      <form className='flex flex-col lg:flex-row lg:w-full items-center justify-evenly'>
        <div className='flex flex-col items-start gap-y-4 p-4 w-full lg:w-2/3'>
          <input
            type='text'
            placeholder='Título do imóvel'
            className={styleInput}
            ref={inputTitle}
          />
          <input
            type='text'
            placeholder='Endereço'
            className={styleInput}
            ref={inputAddress}
          />
          <div className='flex flex-row items-center justify-between w-full gap-x-4'>
            <select name='type' ref={inputType} className={styleInput}>
              <option name='type' value='Casa'>
                Casa
              </option>
              <option name='type' value='Apartamento'>
                Apartamento
              </option>
            </select>
            <select
              name='bairro'
              ref={inputBairro}
              className={styleInput}
              onChange={handleBairros}
            >
              {bairroadmin.map((b, i) => (
                <option name='bairro' value={b} key={i}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          {insertBairro && (
            <div className='flex flex-row items-center justify-between w-full gap-x-4'>
              <input
                type='text'
                name='bairro'
                ref={inputBairro}
                placeholder='Digite o nome do bairro'
                className={styleInput}
              />
            </div>
          )}
          <div className='flex flex-row items-center justify-between w-full gap-x-4'>
            <input type='number' placeholder='Área' className={styleInput} ref={ inputArea } />
            <input type='number' placeholder='Preço' className={styleInput} ref={ inputPrice } />
          </div>
        </div>
        <div className='flex flex-col gap-y-4 p-4 w-full lg:w-1/3'>
          <div className='flex flex-row items-center justify-between w-full gap-x-4'>
            <input type='number' placeholder='Comodos' className={styleInput} ref={ inputComodos } />
            <input
              type='number'
              placeholder='Banheiros'
              className={styleInput}
              ref={ inputBanheiros }
            />
            <input
              type='number'
              placeholder='Vagas'
              className={styleInput}
              ref={ inputVagas }
            />
          </div>
          <textarea
            ref={inputDescription}
            className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-52 text-sm'
            placeholder='Descrição completa do imóvel'
          ></textarea>
        </div>
      </form>
      <button
        className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-2/3 transition'
        onClick={saveNewImovel}
      >
        Submit
      </button>
    </div>
  );
}
