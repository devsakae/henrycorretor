import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react'

export const PropertyContext = createContext();

const PropertyContextProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);
  const [bairro, setBairro] = useState('Todos os bairros');
  const [bairros, setBairros] = useState([]);
  const [property, setProperty] = useState('Todos os tipos');
  const [types, setTypes] = useState([]);
  const [price, setPrice] = useState('Todos os preços');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const colRef = collection(db, 'imoveis');
    getDocs(colRef)
      .then((snapshot) => {
        let imoveis = [];
        snapshot.docs.forEach((doc) => imoveis.push({ ...doc.data(), id: doc.id }));
        setHouses(imoveis);
        
        const allBairros = imoveis.map((im) => im.bairro);
        const uniqueBairros = ['Todos os bairros', ...new Set(allBairros)];
        setBairros(uniqueBairros);

        const allProperties = imoveis.map((im) => im.type);
        const uniqueProperties = ['Todos os tipos', ...new Set(allProperties)];
        setTypes(uniqueProperties);    
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => str.split(' ').includes('Todos');
    // price handling
    let priceParsed = 9999999999;
    if (price.includes('200.000,00')) priceParsed = 200000;
    if (price.includes('500.000,00')) priceParsed = 500000;
    if (price.includes('1.000.000,00')) priceParsed = 1000000;

    const newHouses = houses.filter((house) => {
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
      if (isDefault(bairro) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= house.price) {
          return house.type === property;
        }
      }
      return house;
    });
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
        )
    }, 1000)    
    return newHouses;
  };

  const value = {
    houses,
    setHouses,
    bairro,
    setBairro,
    bairros,
    setBairros,
    property,
    setProperty,
    types,
    price,
    setPrice,
    loading,
    handleClick,
  }

  return (
    <PropertyContext.Provider value={ value }>{ children }</PropertyContext.Provider>
  )
}

export default PropertyContextProvider;