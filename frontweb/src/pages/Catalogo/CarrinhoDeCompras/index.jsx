import { useContext, useState } from "react";
import iconFechar from "../../../assets/img/fechar.png";
import { context } from "../../../context";
import api from "../../../services/api";
import { ButtonFazerPedido, ButtonLimpar, DivButtons, DivContainer, DivContainerCard, DivIconFechar, DivImg, DivInfo, DivInfos, Main, Section, TextoPrincipal } from "./style";
export const CarrinhoCompras = () => {
  

  const {
    productsCart,
    clearCart,
    removalItem,
    removerItem,
    aumentarItem
  } = useContext(context);

  const [clientCart,setClientCart] = useState()




  let totalPrice = 0 

  const comprar = async () =>{

    const novoArray = []

    for(let i = 0; i < productsCart.length; i++) {
      novoArray.push({
        produtoId: productsCart[i].id,
        quantidade: productsCart[i].quantidade
      })
    }

    
    api.post("/pedido",{
      "id": 0,
      "dataEntrega": "17/07/2000",
      "dataEnvio": "17/07/2000",
      "client": {
        "id": productsCart[1].clientId
      },
      "items": novoArray,
      "valorTotal": totalPrice.toFixed(2),
    }).then((response) => {
      console.log(response)

    }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    }).finally(() => {
    
    });   
 }


 


  return (
    <Section>
        <TextoPrincipal>CARRINHO DE COMPRAS</TextoPrincipal>
      <Main>
          
        <DivContainer>
          {productsCart?.map((product,index) => {
            
            const subTotal = product.valorUnitario * product.quantidade
            totalPrice += subTotal

            
            return (
          
            <DivContainerCard key={index}>
              <DivImg>   
                <img src={product.imagemUrl}  />
              </DivImg>
              <DivInfos>
                <DivInfo>
                  <span>NOME PRODUTO</span>
                  <h1>{product?.nome}</h1>
                  <span>VALOR DO PRODUTO</span>
                  <p>R$ {product?.valorUnitario.toFixed(2)}</p>
                  <span>SUB TOTAL</span>
                  <p>R$ {subTotal.toFixed(2)}</p>
                  <span>QUANTIDADE: {product?.quantidade}</span>
                 
              
                  <button onClick={() => aumentarItem(product)}>+</button>
                  <button onClick={() => removerItem(product.id)}>-</button>
                </DivInfo> 
                <DivIconFechar><img src={iconFechar} onClick={() => removalItem(product?.id)}/></DivIconFechar>  
              </DivInfos>
            </DivContainerCard>   
          )})}
        </DivContainer>
       <DivButtons>
        <ButtonFazerPedido onClick={comprar}>Realizar Pedido</ButtonFazerPedido>
        <ButtonLimpar onClick={clearCart}>Limpar Carrinho</ButtonLimpar>
        <p>Valor  Total:  R$ {totalPrice.toFixed(2)}</p>
       
       </DivButtons>
      </Main>
    </Section>
  )
};

