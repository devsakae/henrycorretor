import React, { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import ModalImage from 'react-modal-image';
const MAX_PHOTOS = process.env.REACT_APP_MAX_PHOTOS || 3;

export default function Pictures({ data }) {
  const [pictures, setPictures] = useState([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setPictures([]);
    if (data.name.includes('Não encontrado')) return;
    for (let i = 0; i < MAX_PHOTOS; i++) {
      const tag = `img${i}`;
      if (!data[tag]) break;
      setPictures((prev) => [...prev, data[tag]]);
    }
  }, [data]);

  const nextPicture = (n) => {
    if (idx >= pictures.length - 1 && n) return setIdx(0);
    if (idx <= 0 && !n) return setIdx(pictures.length - 1);
    n ? setIdx((prev) => prev + 1) : setIdx((prev) => prev - 1);
  };

  return (
    <div className='flex flex-row justify-between py-4'>
      <div className={`flex flex-row items-stretch ${pictures.length < 2 && 'hidden'}`}>
        <button className='flex items-center w-10 justify-center' onClick={() => nextPicture(false)} disabled={pictures.length < 2}>
          <GrPrevious />
        </button>
      </div>
      <div>
        <ModalImage
          small={ pictures[idx] }
          medium={ pictures[idx] }
          alt='Imagem do imóvel'
          className='h-96'
        />
      </div>
      <div className={`flex flex-row items-stretch ${pictures.length < 2 && 'hidden'}`}>
        <button className='flex items-center w-10 justify-center' onClick={() => nextPicture(true)} disabled={pictures.length < 2}>
          <GrNext />
        </button>
      </div>
    </div>
  );
}
