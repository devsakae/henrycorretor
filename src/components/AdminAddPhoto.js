import React, { useState } from 'react';
import { db, storage } from '../lib/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import thumbImg from '../assets/img/default.png';
import noimage from '../assets/img/noimage.jpeg';
import { Link } from 'react-router-dom';
// Get the max photos possible on your environment variable, or else declares it's 3.
const MAX_PHOTOS = process.env.REACT_APP_MAX_PHOTOS || 3;

export default function AdminAddPhoto({ imovelId, imovelName }) {
  const [imageBucket, setImageBucket] = useState({ thumb: null, images: [] });
  const [imagesUrl, setImagesUrl] = useState([noimage]);
  const [defaultThumb, setDefaultThumb] = useState(true);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const iWantDefaultThumb = () => {
    setDefaultThumb((prev) => !prev);
    setImageBucket((prev) => ({ ...prev, thumb: null }));
  };

  const handleFiles = (e) => {
    if (e.target.files.length > MAX_PHOTOS)
      return alert(
        `Você pode enviar no máximo ${MAX_PHOTOS} fotos. Selecione novamente.`,
      );
    if (e.target.name === 'imovel_thumb') {
      setDefaultThumb(false);
      return setImageBucket((prev) => ({ ...prev, thumb: e.target.files[0] }));
    }
    setImageBucket(prev => ({ thumb: prev.thumb, images: [] }));  
    for (let i = 0; i < MAX_PHOTOS; i++) {
      if (e.target.files[i] === undefined) break;
      setImageBucket((prev) => ({
        ...prev,
        images: [
          ...prev.images,
          { [`img${i}`]: e.target.files[i] }
        ]
      }));
    }
  };

  const uploadImage = () => {
    setImagesUrl([]);
    const allFiles = defaultThumb ? [...imageBucket.images] : [{ thumb: imageBucket.thumb }, ...imageBucket.images];
    const allKeys = [];
    const filenames = [];
    allFiles.forEach((file) => {
      allKeys.push(...Object.keys(file));
    });
    for (let i = 0; i < allFiles.length; i++) {
      const actualKey = allKeys[i];
      const file = allFiles[i][actualKey];
      filenames.push(file.name);
      const storageRef = ref(storage, `${imovelId}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => alert(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            const imovelRef = doc(db, 'imoveis', imovelId);
            updateDoc(imovelRef, { [actualKey]: url });
            setImagesUrl(prev => [...prev, url]);
            if (i === (allFiles.length - 1)) {
              const picsRef = doc(db, 'imoveis', imovelId);
              updateDoc(picsRef, { pics: filenames });
              if (i === (allFiles.length - 1)) {
                const picsRef = doc(db, 'imoveis', imovelId);
                updateDoc(picsRef, { pics: filenames });
              }
            }
          });
        },
      );
    }
    setTimeout(() => setDone(true), 3500);
  };

  return (
    <div className='container'>
      <h1 className='mb-8'>
        Upload de imagens para{' '}
        <span className='font-semibold'>{imovelName}</span>
      </h1>
      <div className='flex flex-col lg:flex-row w-auto gap-x-4'>
        <div className='flex flex-col gap-y-4 w-auto mb-8'>
          <div className='flex flex-col lg:flex-row items-center gap-x-8 justify-center'>
            <div>
              <div className='flex flex-col items-start justify-center'>
                <legend className='text-xs'>
                  Imagem de capa (312 x 312px) - Facultativo
                </legend>
                <label htmlFor='defaultThumb' className='text-xs items-center'>
                  <input
                    id='defaultThumb'
                    type='checkbox'
                    checked={defaultThumb}
                    onChange={iWantDefaultThumb}
                  />{' '}
                  Quero usar padrão
                </label>
              </div>
              <input
                type='file'
                name='imovel_thumb'
                accept='image/png, image/jpg, image/jpeg, image/svg'
                onChange={ handleFiles }
                className='hover:border-violet-400 border-2 p-4'
              />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-x-8 justify-center'>
            <div>
              <legend className='text-xs text-left'>
                Máximo de fotos autorizado:{' '}
                <span className='font-semibold'>{MAX_PHOTOS}</span>
              </legend>
              <input
                type='file'
                name='imovel_images'
                multiple
                accept='image/png, image/jpg, image/jpeg, image/svg'
                onChange={ handleFiles }
                className='hover:border-violet-400 border-2 p-4'
              />
            </div>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 items-center'>
          {defaultThumb && (
            <img
              src={thumbImg}
              alt='Imagem destaque padrão'
              style={{ height: '150px' }}
            />
          )}
          { imagesUrl.map((url) => (<img src={ url } alt='Preview do imóvel' key={ url } style={{ maxHeight: '150px' }} />)) }
        </div>
      </div>
      <progress value={ progress } max='100' />
      <div className='flex flex-row gap-x-4 items-center justify-center'>
        <button
          onClick={ uploadImage }
          className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 mt-6 min-w-[300px] transition'
        >
          Enviar
        </button>
        <Link
          disabled={ !done }
          to={`/imovel/${imovelId}`}
          className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 mt-6 min-w-[300px] transition'
        >
          Ver imóvel!
        </Link>
      </div>
    </div>
  );
}
