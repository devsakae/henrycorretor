import React, { useContext, useEffect, useState } from 'react';
import { PropertyContext } from '../lib/PropertiesContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase';
import AdminAddPhoto from './AdminAddPhoto';
import Loading from './Loading';

export default function AdminAdd() {
  const { bairros } = useContext(PropertyContext);

  const [newId, setNewId] = useState(null);
  const [bairroadmin, setBairroadmin] = useState(bairros);
  const [insertBairro, setInsertBairro] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabledSaveButton, setDisabledSaveButton] = useState(true);
  const [form, setForm] = useState({
    name: '',
    address: '',
    type: 'Apartamento',
    bairro: '',
    area: '',
    privatearea: '',
    price: '',
    comodos: '',
    banheiros: '',
    vagas: '',
    excert: '',
    description: ''
  });

  const styleInput =
    'border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-2 h-14 text-sm';

  useEffect(() => {
    const fixBairros = bairros.filter((b) => b !== 'Todos os bairros');
    fixBairros.push('➕ Inserir novo bairro...');
    setBairroadmin(fixBairros);
    handleChange({ target: { name: 'bairro', value: fixBairros[0] } })
  }, [bairros]);

  useEffect(() => {
    const { name, excert, description, address, bairro, comodos, banheiros, vagas } = form;
    if (
      vsf(name) ||
      vsf(excert) ||
      vsf(description) ||
      vsf(address) ||
      vsf(bairro) ||
      vsf(comodos) ||
      vsf(banheiros) ||
      vsf(vagas)
    ) {
      setDisabledSaveButton(true);
    } else {
      setDisabledSaveButton(false);
    }
  }, [form])

  const vsf = (field) => field.trim().length === 0;

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleBairros = (e) => {
    handleChange(e);
    e.target.value.includes('Inserir novo bairro')
      ? setInsertBairro(true)
      : setInsertBairro(false);
  };

  const saveNewImovel = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { name, type, excert, description, address, bairro, area, privatearea, price, comodos, banheiros, vagas } = form;
    const payload = {
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
    const docRef = await addDoc(collection(db, "imoveis"), payload);
    setNewId(docRef.id);
    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <div className='container flex flex-col gap-y-4 mx-auto w-full justify-center items-center'>
      <h1 className='font-bold text-lg p-4'>Adicionar novo imóvel</h1>
      {newId ? (
        <AdminAddPhoto imovelId={newId} imovelName={form.name} />
      ) : (
        <>
          <form className='flex flex-col lg:flex-row lg:w-full items-center justify-evenly'>
            <div className='flex flex-col items-start gap-y-4 p-4 w-full lg:w-2/3'>
              <input
                name='name'
                type='text'
                required
                placeholder='Título do imóvel ✷'
                className={styleInput}
                onChange={handleChange}
                value={form.name}
              />
              <input
                name='address'
                type='text'
                required
                placeholder='Endereço ✷'
                className={styleInput}
                onChange={handleChange}
                value={form.address}
              />
              <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                <select
                  name='type'
                  className={styleInput}
                  onChange={handleChange}
                  value={form.type}
                >
                  <option name='type' value='Apartamento'>
                    Apartamento
                  </option>
                  <option name='type' value='Casa'>
                    Casa
                  </option>
                  <option name='type' value='Sala comercial'>
                    Sala comercial
                  </option>
                  <option name='type' value='Sítio'>
                    Sítio
                  </option>
                  <option name='type' value='Studio'>
                    Studio
                  </option>
                  <option name='type' value='Terreno'>
                    Terreno
                  </option>
                </select>
                <select
                  name='bairro'
                  className={styleInput}
                  onChange={handleBairros}
                  required
                >
                  {bairroadmin.map((b, i) => (
                    <option name='bairro' value={b} key={i}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              {(insertBairro || bairroadmin.length < 2) && (
                <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                  <input
                    type='text'
                    name='bairro'
                    placeholder='Digite o nome do bairro ✷'
                    className={styleInput}
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                <input
                  type='number'
                  name='area'
                  placeholder='Área total (m²)'
                  className={styleInput}
                  onChange={handleChange}
                  value={form.area}
                />
                <input
                  type='number'
                  name='privatearea'
                  placeholder='Área privativa (m²)'
                  className={styleInput}
                  onChange={handleChange}
                  value={form.privatearea}
                />
                <input
                  type='number'
                  name='price'
                  placeholder='Preço'
                  className={styleInput}
                  pattern="^\R$ \d{1,3}(.\d{3})*(\,\d+)?$"
                  onChange={handleChange}
                  value={form.price}
                />
              </div>
            </div>
            <div className='flex flex-col gap-y-4 p-4 w-full lg:w-1/3'>
              <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                <input
                  type='number'
                  name='comodos'
                  placeholder='Comodos ✷'
                  className={styleInput}
                  onChange={handleChange}
                />
                <input
                  type='number'
                  name='banheiros'
                  placeholder='Banheiros ✷'
                  className={styleInput}
                  onChange={handleChange}
                />
                <input
                  type='number'
                  name='vagas'
                  placeholder='Vagas ✷'
                  className={styleInput}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name='excert'
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full p-4 h-20 text-sm resize-none'
                placeholder='Descrição resumida ✷'
                value={form.excert}
                onChange={handleChange}
              ></textarea>
              <textarea
                name='description'
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full p-4 h-40 text-sm resize-none'
                placeholder='Informações complementares ✷'
                value={form.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
          <button
            className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-2/3 transition disabled:bg-purple-400 disabled:text-gray-200 disabled:cursor-not-allowed'
            onClick={saveNewImovel}
            disabled={disabledSaveButton}
          >
            Cadastrar novo imóvel
          </button>
        </>
      )}
    </div>
  );
}
