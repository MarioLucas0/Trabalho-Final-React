import { createContext, useState } from "react";

export const context = createContext({});

export const  ContextProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);
  const [clientId2,setClientId] = useState("");

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
        clientId: clientId2
      });
    } 
    
    setProductsCart(itemObject);
  }


  function aumentarItem(produto){
    const itemObject = [...productsCart];
    const item = itemObject.find((product) => product.id === produto.id);

    if (item) {
      item.quantidade = item.quantidade + 1;
      setProductsCart(itemObject);
      console.log("ok")
  }

}

  function removerItem(id) {
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
    const arrayFiltrado = itemObject.filter((product) => product.id !== id);

    setProductsCart(arrayFiltrado);
  }

  
  function clearCart() {
    console.log(productsCart)
    setProductsCart([]);

  }

  return (
    <context.Provider
      value={{
        productsCart,
        handleAddItemToCart,
        removerItem,
        removalItem,
        clearCart,
        aumentarItem,
        clientId2,
        setClientId
       
      }}
    >
      {children}
    </context.Provider>
  );
};