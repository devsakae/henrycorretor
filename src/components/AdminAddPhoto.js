import React, { useState } from 'react';
import { db, storage } from '../lib/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';

export default function AdminAddPhoto({ imovelId, imovelName }) {
  const [progress, setProgress] = useState(0);
  const [uploadingImage, setUploadingImage] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setUploadingImage(e.target.name);
    const storageRef = ref(storage, `${imovelId}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      error => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          const imovelRef = doc(db, 'imoveis', imovelId);
          updateDoc(imovelRef, {
            [e.target.name]: url
          })
        })
      })
  };

  return (
    <div className='container'>
      <h1>Upload de imagens</h1>
      <h2 className='font-semibold mb-4'>{ imovelName }</h2>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center justify-between'>
          <div className='max-w-1/3'>
            Imagem pequena (capa)
          </div>
          <input
            type='file'
            name='thumb'
            accept='image/png, image/jpg, image/jpeg'
            onChange={ uploadImage }
          />
          { uploadingImage === 'thumb' ? (<progress value={progress} max='100' />) : (<div>Selecione um arquivo</div>) }
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div className='max-w-1/3'>
            Imagem #1
          </div>
          <input
            type='file'
            name='image1'
            accept='image/png, image/jpg, image/jpeg'
            onChange={ uploadImage }
          />
          { uploadingImage === 'image1' ? (<progress value={progress} max='100' />) : (<div>Selecione um arquivo</div>) }
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div className='max-w-1/3'>
            Imagem #2
          </div>
          <input
            type='file'
            name='image2'
            accept='image/png, image/jpg, image/jpeg'
            onChange={ uploadImage }
          />
          { uploadingImage === 'image2' ? (<progress value={progress} max='100' />) : (<div>Selecione um arquivo</div>) }
        </div>
      </div>
    </div>
  )
}
