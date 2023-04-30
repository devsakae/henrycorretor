import React, { useEffect, useState } from 'react';
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
      setPictures(prev => [...prev, data[tag]]);
    };
  }, [data]);

  const nextPicture = (n) => {
    console.log('idx igual a', idx);
    if (idx >= (pictures.length - 1) && n) return setIdx(0);
    if (idx <= 0 && !n) return setIdx(pictures.length - 1);
    n ? setIdx(prev => prev + 1) : setIdx(prev => prev - 1);
  };

  return (
    <div className='flex flex-col items-center justify-between'>
      <img src={ pictures[idx] } alt="Imagem do imóvel" onClick={ nextPicture } style={{ maxHeight: '450px' }} />
      <div className='flex flex-row w-full justify-between mt-4'>
        <button onClick={ () => nextPicture(false) }>Anterior</button>
        <button onClick={ () => nextPicture(true) }>Próxima</button>
      </div>
    </div>
  )
}
