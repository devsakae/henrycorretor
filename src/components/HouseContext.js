import React, { useState, useEffect, createContext } from 'react';

import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Localização (todos)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Tipo (todos)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Faixa de preço (todos)');
  const [loading, setLoading] = useState(false);

  return (
    <HouseContext.Provider value={{
      houses,
      setHouses,
      country,
      setCountry,
      countries,
      setCountries,
      property,
      setProperty,
      properties,
      setProperties,
      price,
      setPrice,
      loading,
      setLoading,
    }}>
      { children }
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
