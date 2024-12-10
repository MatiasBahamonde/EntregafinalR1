import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import products from './Data/asyncMock';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Home from './components/Home/Home';
import About from './components/About/About';
import Loading from './components/Loading/Loading';
import Contact from './components/Contact/Contact'; 
import { AppProvider, useAppContext } from './Context/AppContext';
import { CartProvider, useCartContext } from './CartContext/CartContext'; 
import './index.css';

const App = () => {
  const {
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
  } = useAppContext();

const { cart: cartFromContext, addToCart: addToCartFromContext } = useCartContext();

const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const handleCategoryChange = (category) => {
    if (category === 'home' || category === 'about' || category === 'contact') {
    setCurrentPage(category); 
    setCategory(null); 
    } else {
    setCategory(category); 
    setCurrentPage('home'); 
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
    const isInCart = prevCart.find((item) => item.id === product.id);
    if (!isInCart) {
    return [...prevCart, { ...product, quantity: 1 }];
    } else {
    return prevCart.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen">
    <Navbar 
    cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} 
    toggleCart={toggleCart} 
    />

    <Header onCategoryChange={handleCategoryChange} />

    <div className="flex-grow container mx-auto py-4">
    {currentPage === 'home' && category === null && <Home />}
    {currentPage === 'about' && <About />}
    {currentPage === 'contact' && <Contact />} 

    {currentPage === 'home' && category !== null && (
    <ProductList
    products={filteredProducts}
    addToCart={addToCartFromContext}  
    onSelectProduct={handleSelectProduct}
    />
    )}

    {isCartOpen && (
    <Cart
    cart={cart}
    removeFromCart={removeFromCart}
    closeCart={() => setIsCartOpen(false)}
    />
    )}

    {selectedProduct && (
    <ProductDetail
    product={selectedProduct}
    onClose={handleCloseDetail}
    addToCart={addToCart}
    />
    )}
    </div>

    <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <CartProvider>
    <AppProvider>
    <App />
    </AppProvider>
  </CartProvider>
);

export default AppWrapper;
