import React, { useContext } from 'react'
import { PropertyContext } from '../lib/PropertiesContext'

export default function AdminDelete() {
  const { carteira } = useContext(PropertyContext);
  return (
    <div className='container flex flex-col gap-y-4 mx-auto w-full justify-center items-center'>
    <h1 className='font-bold text-lg p-4'>Modificar imóveis</h1>
      {
        carteira.map((im, idx) => <div key={ idx }>{ im.name }</div>)
      }
    </div>
  )
}
