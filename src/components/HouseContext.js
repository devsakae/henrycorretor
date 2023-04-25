import React, { useState, createContext, useEffect } from 'react';

import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Por localização');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Tipo de imóvel');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Faixa de preço (todos)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ['Todos os bairros', ...new Set(allCountries)];
    setCountries(uniqueCountries);
    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ['Todos os tipos', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

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
