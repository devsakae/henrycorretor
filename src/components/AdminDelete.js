import React, { useState } from 'react';
import { db } from '../lib/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref, deleteObject } from "firebase/storage";

const DELETE_CONFIRMATION = process.env.REACT_APP_DELETE_CONFIRMATION || 'quero deletar';

export default function AdminDelete({ data }) {
  const { id, pics } = data;
  const [confirmation, setConfirmation] = useState();
  const [validate, setValidate] = useState(true);

  const handleChange = (e) => {
    setConfirmation(e.target.value);
    (e.target.value === DELETE_CONFIRMATION) ? setValidate(false) : setValidate(true);
  };

  const deleteImovel = async () => {
    await deleteDoc(doc(db, 'imoveis', id));
    const storage = getStorage();
    pics.forEach((picname) => {
      const idRef = ref(storage, `${id}/${picname}`);
      deleteObject(idRef).catch((err) => {
        alert(err.message);
      });
    });
    setValidate(true);
    alert('Imóvel deletado com sucesso!');
  };
  
  return (
    <div className='flex flex-col items-center justify-center mb-6 gap-y-2'>
      <p>Digite <span className='font-semibold'>{ DELETE_CONFIRMATION }</span> no campo abaixo para liberar o botão.</p>
      <div className='flex flex-row gap-x-4'>
        <input
          name='deleteField'
          type='text'
          onChange={ handleChange }
          value={ confirmation }
          className='border border-gray-300 focus:border-violet-700 outline-none rounded w-60 px-2 h-8 text-sm'
        />
        <button
          className='bg-violet-700 text-white rounded p-2 text-sm px-6 transition disabled:bg-violet-300 disabled:text-gray-100'
          disabled={ validate }
          onClick={ deleteImovel }
        >
          Deletar imóvel
        </button>
      </div>
    </div>
  )
}
