import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import CorretorHenrySimon from '../components/CorretorHenrySimon';
import { UserAuth } from '../lib/AuthContext';

const PropertyDetails = () => {
  const { id } = useParams();
  const { user } = UserAuth();
  const [detailed, setDetailed] = useState({ name: 'Aguarde' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchById = async () => {
      const db = getFirestore();
      const docRef = doc(db, 'imoveis', id);
      await getDoc(docRef).then((response) => {
        if (response.exists) setDetailed(response.data());
        else setDetailed({ name: 'Não encontrado' })
      }).catch((err) => setDetailed({ name: err.message }))
      .finally(() => setLoading(false));
    }
    fetchById();
  }, [id])
  
  if (!detailed) return (<div className='text-center text-3xl text-gray-400 mt-12 min-h-[300px]'>Nenhum imóvel encontrado.</div>);

  return (
    <section className='mb-10'>
      {
        loading ? 'Carregando...' : (
        <div className='container mx-auto min-h-[800px] mb-14'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
            <div>
              <h2 className='text-2xl font-semibold'>{detailed?.name}</h2>
              <h3 className='text-lg mb-4'>{detailed?.address}</h3>
            </div>
            <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
              <div className='bg-green-500 text-white px-3 rounded-full'>
                {detailed?.type}
              </div>
              <div className='bg-violet-500 text-white px-3 rounded-full'>
                {detailed?.bairro}
              </div>
            </div>
            <div className='text-3xl font-semibold text-violet-600'>
              { Number(detailed?.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
            </div>
          </div>
          <div className='flex flex-col items-start gap-8 lg:flex-row'>
            <div className='max-w-[768px]'>
              <div className='mb-8'>
                <img src={detailed?.image1} alt='' />
              </div>
              <div className='flex gap-x-6 mb-6 text-violet-700'>
                <div className='flex flex-col gap-x-2 items-center'>
                  <div className='flex flex-row items-center gap-x-2'>
                    <BiBed className='text-2xl' alt='Cômodos' />
                    <div className='text-black'>{detailed?.comodos}</div>
                  </div>
                  <div className='text-xs text-black'>
                    Cômodos
                  </div>
                </div>
                <div className='flex flex-col gap-x-2 items-center'>
                  <div className='flex flex-row items-center gap-x-2'>
                  <BiBath className='text-2xl' />
                  <div className='text-black'>{detailed?.banheiros}</div>
                  </div>
                  <div className='text-xs text-black'>
                    Banheiros
                  </div>
                </div>
                <div className='flex flex-col gap-x-2 items-center'>
                  <div className='flex flex-row items-center gap-x-2'>
                    <BiArea className='text-2xl' />
                    <div className='text-black'>{detailed?.area} m²</div>
                  </div>
                  <div className='text-xs text-black'>
                    Área total
                  </div>
                </div>
              </div>
              <div>{detailed?.description}</div>
            </div>
            <CorretorHenrySimon user={ user } imovel={ detailed } id={ id } />
          </div>
        </div>
        )
      }      
    </section>
  );
};

export default PropertyDetails;
