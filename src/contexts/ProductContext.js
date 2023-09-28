import React, {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fecthProducts = async ()=>{
      const response =  await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fecthProducts();
  }, []);

  return <ProductContext.Provider value={{products}} >{children}</ProductContext.Provider>;
};

export default ProductProvider;
