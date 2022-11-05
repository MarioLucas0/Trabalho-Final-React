import { createContext, useState } from "react";

export const context = createContext({});

export const  ContextProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);
  const [quantidadeItems,setQuantidadeItems] = useState(0);

  function handleAddItemToCart(produto) {
    const itemObject = [...productsCart];
    const item = itemObject.find((product) => product.id === produto.id);
    if (!item) {
      
      itemObject.push({
        id: produto.id,
        imagemUrl: produto.imagemUrl,
        nome: produto.nome,
        valorUnitario: produto.valorUnitario,
        descricao: produto.descricao,
        quantidade: 1,
    
      });
    } else {
      if(item.quantidade != 1) {
       item.quantidade = item.quantidade + 1;
      }
    }

    setProductsCart(itemObject);
  }

  function handleRemoveItemToCart(id) {
    const itemObject = [...productsCart];
    const item = itemObject.find((product) => product.id === id);

    if (item && item.quantidade > 1) {
      item.quantidade = item.quantidade - 1;
      setProductsCart(itemObject);
    } else {
      const arrayFiltered = itemObject.filter((product) => product.id !== id);
      setProductsCart(arrayFiltered);
    }
  }

  function removalItem(id) {
    const itemObject = [...productsCart];

    const arrayFiltered = itemObject.filter((product) => product.id !== id);
    setProductsCart(arrayFiltered);
  }

  function clearCart() {
    setProductsCart([]);
  }

  return (
    <context.Provider
      value={{
        productsCart,
        handleAddItemToCart,
        handleRemoveItemToCart,
        removalItem,
        clearCart,
        quantidadeItems,
        setQuantidadeItems
      }}
    >
      {children}
    </context.Provider>
  );
};