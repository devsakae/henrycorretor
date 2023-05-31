import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import YouTube from 'react-youtube';
const MAX_PHOTOS = process.env.REACT_APP_MAX_PHOTOS || 20;

export default function Fotos({ data }) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setPictures([]);
    if (data.name.includes('Não encontrado')) return;
    for (let i = 0; i < MAX_PHOTOS; i++) {
      const tag = `img${i}`;
      if (!data[tag]) break;
      setPictures((prev) => [...prev, data[tag]]);
    }
  }, [data]);

  
  return (
    <Carousel showThumbs={ false } dynamicHeight={ true } infiniteLoop={ true } >
      {
        pictures.map((pic, idx) => (
          <div key={ idx }><img src={ pic } alt="Imagem do imóvel" /></div>
          ))
        }
      {
        (data.youtube) && (<YouTube videoId={ data.youtube } />)
      }
    </Carousel>
  )
}
