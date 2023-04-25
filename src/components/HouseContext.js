import React, { useState, createContext, useEffect } from 'react';

import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  // const [country, setCountry] = useState('Todos os bairros');
  // const [countries, setCountries] = useState([]);
  const [bairro, setBairro] = useState('Todos os bairros');
  const [bairros, setBairros] = useState([]);
  const [property, setProperty] = useState('Todos os tipos');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Todos os preços');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const allCountries = houses.map((house) => house.country);
    // const uniqueCountries = ['Todos os bairros', ...new Set(allCountries)];
    // setCountries(uniqueCountries);

    const allBairros = houses.map((house) => house.bairro);
    const uniqueBairros = ['Todos os bairros', ...new Set(allBairros)];
    setBairros(uniqueBairros)

    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ['Todos os tipos', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    const isDefault = (str) => str.split(' ').includes('Todos');
    // price handling
    let priceParsed = 9999999999;
    if (price.includes('200.000,00')) priceParsed = 200000;
    if (price.includes('500.000,00')) priceParsed = 500000;
    if (price.includes('1.000.000,00')) priceParsed = 1000000;

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      if (
        house.bairro === bairro &&
        house.type === property &&
        housePrice <= priceParsed
      ) {
        return house;
      }
      if (isDefault(bairro) && isDefault(property) && isDefault(price)) return house;
      if (!isDefault(bairro) && isDefault(property) && isDefault(price)) return house.bairro === bairro;
      if (isDefault(bairro) && !isDefault(property) && isDefault(price)) return house.type === property;
      if (isDefault(bairro) && isDefault(property) && !isDefault(price)) return housePrice <= priceParsed;
      if (!isDefault(bairro) && !isDefault(property) && isDefault(price)) return house.bairro === bairro && house.type === property;
      if (!isDefault(bairro) && isDefault(property) && !isDefault(price)) return house.bairro === bairro && housePrice <= priceParsed;
      return house;
    });
    return newHouses;
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        bairro,
        setBairro,
        bairros,
        setBairros,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
        setLoading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
