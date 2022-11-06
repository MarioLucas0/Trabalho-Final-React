import { useContext } from "react";
import { context } from "../../../context";
import api from "../../../services/api";
import { ButtonFazerPedido, ButtonLimpar, DivButtons, DivContainer, DivContainerCard, DivImg, DivInfo, Main, Section, TextoPrincipal } from "./style";
export const CarrinhoCompras = () => {
  

  const {
    productsCart,
    clearCart,
    handleRemoveItemToCart
  } = useContext(context);


  let totalPrice = 0 

  const comprar = async () =>{

    const novoArray = []

    for(let i = 0; i < productsCart.length; i++) {
      novoArray.push({
        produtoId: productsCart[i].id,
        quantidade: productsCart[i].quantidade
      })
    }

    console.log(novoArray)
    
    api.post("/pedido",{
      "id": 0,
      "dataEntrega": "17/07/2000",
      "dataEnvio": "17/07/2000",
      "client": {
        "id": 1
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

   async function requestPost() {}
  
  

/*     //let params;
    productsCart.map((prod) => {
      // const item = [...productsCart]
      
          
        params = {
            "id": 0,
            "dataEntrega": "17/07/2000",
            "dataEnvio": "17/07/2000",
            "client": {
              "id": 3
            },
            "items": novoArray
          } 
  
      })
 */

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
              <DivInfo>
                <span>NOME PRODUTO</span>
                <h1>{product?.nome}</h1>
                <span>VALOR DO PRODUTO</span>
                <p>R$ {product?.valorUnitario.toFixed(2)}</p>
                <span>QUANTIDADE: {product?.quantidade}</span>
                <p></p>
                <span>SUB TOTAL</span>
                <p>R$ {subTotal.toFixed(2)}</p>
                
              </DivInfo> 
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

