import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        selectedProduct,
        setSelectedProduct,
        isLoading,
        setIsLoading,
        category,
        setCategory,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


AppProvider.displayName = 'AppProvider';

export const useAppContext = () => {
  return useContext(AppContext);
};
