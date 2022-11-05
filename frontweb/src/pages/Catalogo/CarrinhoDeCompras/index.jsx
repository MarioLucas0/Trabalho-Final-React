import { useContext } from "react";
import { context } from "../../../context";
import { ButtonLimpar, DivContainer, DivContainerCard, DivImg, DivInfo, Main, Section } from "./style";
export const CarrinhoCompras = () => {
  const {
    productsCart,
    clearCart,
    handleRemoveItemToCart,
  } = useContext(context);

/*   useEffect(() => {
  console.log(productsCart[0].descricao)
  },[])  */
  
  return (
    <Section>
      <Main>
        <DivContainer>
          {productsCart?.map((product,index) => (
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
              </DivInfo> 
            </DivContainerCard>
            
          ))}
        </DivContainer>
        <ButtonLimpar onClick={clearCart}>Limpar Carrinho</ButtonLimpar>
      </Main>
    </Section>
  )
};

