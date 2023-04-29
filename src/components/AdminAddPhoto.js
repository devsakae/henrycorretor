import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db, storage } from '../lib/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import thumbImg from '../assets/img/default.png';

export default function AdminAddPhoto({ imovelId, imovelName }) {
  const [progress, setProgress] = useState({});
  const [uploadingImage, setUploadingImage] = useState({});
  const [defaultThumb, setDefaultThumb] = useState(false);

  const progressBar = (value) => <progress value={value} max='100' />;

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `${imovelId}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prev => ({ ...prev, [e.target.name]: progress }));
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          const imovelRef = doc(db, 'imoveis', imovelId);
          setUploadingImage(prev => ({ ...prev, [e.target.name]: url }));
          updateDoc(imovelRef, {
            [e.target.name]: url,
          });
        });
      },
    );
  };

  return (
    <div className='container'>
      <h1 className='mb-8'>
        Upload de imagens para{' '}
        <span className='font-semibold'>{imovelName}</span>
      </h1>
      <div className='flex flex-col gap-y-4 w-auto mb-8'>
        <div className='flex flex-col lg:flex-row items-center gap-x-8 justify-center'>
          <div>
            <div className='flex flex-col items-start justify-center'>
              <legend className='text-xs'>
                Imagem de capa (312 x 312px) - Facultativo
              </legend>
              <label htmlFor='defaultThumb' className='text-xs items-center'>
                <input id='defaultThumb' type='checkbox' checked={ defaultThumb } onChange={ () => setDefaultThumb(!defaultThumb) } />
                { ' ' }
                Quero usar padrão
              </label>
            </div>
            <input
              type='file'
              name='thumb'
              accept='image/png, image/jpg, image/jpeg, image/svg'
              onChange={uploadImage}
              className='hover:border-violet-400 border-2 p-4'
            />
          </div>
          <div className='flex min-w-[350px] justify-center'>
            {uploadingImage.thumb ? (
              <img
                src={uploadingImage.thumb}
                alt='Preview da imagem destaque'
                className='max-h-[80px]'
              />
            ) : defaultThumb ? <img src={ thumbImg } alt='Thumb padrão' className='max-h-[80px]' /> : (
              progressBar(progress.thumb)
            )}
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-x-8 justify-center'>
          <div>
            <legend className='text-xs text-left'>Imagem #1</legend>
            <input
              type='file'
              name='image1'
              accept='image/png, image/jpg, image/jpeg, image/svg'
              onChange={uploadImage}
              className='hover:border-violet-400 border-2 p-4'
            />
          </div>
          <div className='flex min-w-[350px] justify-center'>
            {uploadingImage.image1 ? (
              <img
                src={uploadingImage.image1}
                alt='Preview da imagem #1'
                className='max-h-[80px]'
              />
            ) : (
              progressBar(progress.image1)
            )}
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-x-8 justify-center'>
          <div>
            <legend className='text-xs text-left'>Imagem #2</legend>
            <input
              type='file'
              name='image2'
              accept='image/png, image/jpg, image/jpeg, image/svg'
              onChange={uploadImage}
              className='hover:border-violet-400 border-2 p-4'
            />
          </div>
          <div className='flex min-w-[350px] justify-center'>
            {uploadingImage.image2 ? (
              <img
                src={uploadingImage.image2}
                alt='Preview da imagem #2'
                className='max-h-[80px]'
              />
            ) : (
              progressBar(progress.image2)
            )}
          </div>
        </div>
      </div>
      <Link
        to={ `/imovel/${imovelId}` }
        className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 mt-6 min-w-[300px] transition'
      >
        Finalizar
      </Link>
    </div>
  );
}
