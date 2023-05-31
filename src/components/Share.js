import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { IconContext } from 'react-icons';
import { ImWhatsapp } from 'react-icons/im'
import { FiTwitter } from 'react-icons/fi'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { RiMailSendFill } from 'react-icons/ri';

export default function Share({ info }) {
  const url = `https://henrycorretor.com.br/imovel/${info.id}`;
  const title = 'Encontrei um imóvel excelente no HenryCorretor.com.br!'
  const message = 'Navegando pelo site http://www.henrycorretor.com.br encontrei um imóvel que você vai gostar! Veja em'
  const hashtags = ['imoveis', 'floripa', 'corretor']
  return (
    <div className='flex gap-x-2'>
      <IconContext.Provider value={{ color: '#8B5CF6', size: '18' }}>
        <EmailShareButton subject={ title } body={ message + ' ' + url }>
          <RiMailSendFill />
        </EmailShareButton>
        <FacebookShareButton quote={ message } url={ url } hashtag='#Floripa'>
          <FaFacebookSquare />
        </FacebookShareButton>
        <TwitterShareButton title={ title } url={ url } hashtags={ hashtags }>
          <FiTwitter />
        </TwitterShareButton>
        <LinkedinShareButton title={ title } summary={ message } source='henrycorretor.com.br' url={ url }>
          <FaLinkedin />
        </LinkedinShareButton>
        <WhatsappShareButton title={ title } url={ url }>
          <ImWhatsapp />
        </WhatsappShareButton>
      </IconContext.Provider>
    </div>
  )
}
