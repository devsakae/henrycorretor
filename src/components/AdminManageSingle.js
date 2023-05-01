import React, { useContext, useEffect, useRef, useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { PropertyContext } from '../lib/PropertiesContext';
import { db } from '../lib/firebase';
import { doc, setDoc } from '@firebase/firestore';
import { Link } from 'react-router-dom';
import AdminDelete from './AdminDelete';

export default function AdminManageSingle({ data }) {
  const { bairros } = useContext(PropertyContext);

  const [active, setActive] = useState(false);
  const [bairroadmin, setBairroadmin] = useState(bairros);
  const [insertBairro, setInsertBairro] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [startDelete, setStartDelete] = useState(false);

  const inputName = useRef(data.name);
  const inputType = useRef(data.type);
  const inputExcert = useRef(data.excert);
  const inputDescription = useRef(data.description);
  const inputAddress = useRef(data.address);
  const inputBairro = useRef(data.bairro);
  const inputArea = useRef(data.area);
  const inputPrivateArea = useRef(data.privatearea);
  const inputPrice = useRef(data.price);
  const inputComodos = useRef(data.comodos);
  const inputBanheiros = useRef(data.banheiros);
  const inputVagas = useRef(data.vagas);

  const styleInput =
    'border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-2 h-8 text-sm';

  useEffect(() => {
    const fixBairros = bairros.filter((b) => b !== 'Todos os bairros');
    fixBairros.push('➕ Inserir novo bairro...');
    setBairroadmin(fixBairros);
  }, [bairros]);

  const handleBairros = ({ target }) => {
    setInsertBairro(false);
    if (target.value.includes('Inserir novo bairro')) setInsertBairro(true);
  };

  const vsf = (field) => field.trim().length === 0;

  const validateFields = () => {
    const name = inputName.current.value;
    const type = inputType.current.value;
    const excert = inputExcert.current.value;
    const description = inputDescription.current.value;
    const address = inputAddress.current.value;
    const bairro = inputBairro.current.value;
    const area = inputArea.current.value;
    const privatearea = inputPrivateArea.current.value;
    const price = inputPrice.current.value;
    const comodos = inputComodos.current.value;
    const banheiros = inputBanheiros.current.value;
    const vagas = inputVagas.current.value;
    if (
      vsf(name) ||
      vsf(description) ||
      vsf(address) ||
      vsf(bairro) ||
      vsf(comodos) ||
      vsf(banheiros) ||
      vsf(vagas)
    ) {
      return alert('Preencha todos os campos obrigatórios');
    }
    return {
      name,
      type,
      excert,
      description,
      address,
      bairro,
      area: Number(area),
      privatearea: Number(privatearea),
      price: Number(price),
      comodos: Number(comodos),
      banheiros: Number(banheiros),
      vagas: Number(vagas),
    };
  };

  const updateImovel = async (event) => {
    setLoading(true);
    event.preventDefault();
    const payload = validateFields();
    const docRef = doc(db, 'imoveis', data.id);
    await setDoc(docRef, payload, { merge: true });
    setTimeout(() => {
      setSaved(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      className={`w-full flex flex-col justify-between ${
        active
          ? 'border-violet-500 border-opacity-75'
          : 'border-violet-500 border-opacity-25'
      } border-solid border-2 py-2 px-4`}
    >
      <div className='flex flex-row gap-x-4'>
        <button onClick={() => setActive(!active)}>
          {active ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
        </button>
        <h2 className={`${active ? 'font-semibold' : ''}`}>{data.name}</h2>
        <span>ID: {data.id}</span>
      </div>
      {active && (
        <div className='flex flex-col justify-center'>
          <form className='flex flex-col lg:flex-row lg:w-full items-center justify-evenly'>
            <div className='flex flex-col items-start gap-y-4 p-4 w-full lg:w-2/3'>
              <input
                id='name'
                type='text'
                placeholder='Título do imóvel ✷'
                defaultValue={data.name}
                className={styleInput}
                ref={inputName}
              />
              <input
                id='address'
                type='text'
                placeholder='Endereço ✷'
                defaultValue={data.address}
                className={styleInput}
                ref={inputAddress}
              />
              <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                <select
                  name='type'
                  ref={inputType}
                  className={styleInput}
                  defaultValue={data.type}
                >
                  <option name='type' value='Apartamento'>
                    Apartamento
                  </option>
                  <option name='type' value='Casa'>
                    Casa
                  </option>
                  <option name='type' value='Sala'>
                    Sala
                  </option>
                  <option name='type' value='Sítio'>
                    Sítio
                  </option>
                  <option name='type' value='Terreno'>
                    Terreno
                  </option>
                </select>
                <select
                  name='bairro'
                  ref={inputBairro}
                  className={styleInput}
                  onChange={handleBairros}
                  defaultValue={data.bairro}
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
                    placeholder='Digite o nome do bairro ✷'
                    className={styleInput}
                  />
                </div>
              )}
              <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                <div>
                  <legend className='text-xs text-left ml-2'>Área total</legend>
                  <input
                    type='number'
                    placeholder='m²'
                    className={styleInput}
                    ref={inputArea}
                    defaultValue={data.area}
                  />
                </div>
                <div>
                  <legend className='text-xs text-left ml-2'>Área privativa</legend>
                  <input
                    type='number'
                    placeholder='m²'
                    className={styleInput}
                    ref={inputPrivateArea}
                    defaultValue={data.privatearea}
                  />
                </div>
                <div>
                  <legend className='text-xs text-left ml-2'>Preço</legend>
                  <input
                    type='number'
                    placeholder='Número'
                    className={styleInput}
                    ref={inputPrice}
                    defaultValue={data.price}
                  />
                </div>
                <div>
                  <legend className='text-xs text-left ml-2'>Cômodos</legend>
                  <input
                    type='number'
                    placeholder='Número'
                    className={styleInput}
                    ref={inputComodos}
                    defaultValue={data.comodos}
                  />
                </div>
                <div>
                  <legend className='text-xs text-left ml-2'>Banheiros</legend>
                  <input
                    type='number'
                    placeholder='Número'
                    className={styleInput}
                    ref={inputBanheiros}
                    defaultValue={data.banheiros}
                  />
                </div>
                <div>
                  <legend className='text-xs text-left ml-2'>Vagas</legend>
                  <input
                    type='number'
                    placeholder='Número'
                    className={styleInput}
                    ref={inputVagas}
                    defaultValue={data.vagas}
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-y-4 p-4 w-full lg:w-1/3'>
              <textarea
                ref={inputExcert}
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full p-4 h-24 text-sm resize-none'
                placeholder='Resumo do imóvel'
                defaultValue={data.excert}
              ></textarea>
              <textarea
                ref={inputDescription}
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full p-4 h-32 text-sm resize-none'
                placeholder='Descrição completa do imóvel'
                defaultValue={data.description}
              ></textarea>
            </div>
          </form>
          { 
            startDelete ? <AdminDelete data={ data } /> : ''
          }
          {loading ? (
            'Enviando...'
          ) : saved ? (
            <Link to={`/imoveis/${data.id}`}>Salvo! Ir para o imóvel salvo</Link>
          ) : (
            <div className='flex flex-row gap-x-4 justify-center'>
              <button
                className='bg-violet-700 hover:bg-violet-900 text-white rounded p-4 text-sm min-w-[200px] transition'
                onClick={updateImovel}
              >
                Salvar
              </button>
              <button
                className='bg-violet-800 text-white hover:bg-violet-900 rounded p-4 text-sm min-w-[200px] transition'
                onClick={ () => setStartDelete(!startDelete) }
              >
                { startDelete ? 'Cancelar exclusão' : 'Excluir imóvel' }
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
