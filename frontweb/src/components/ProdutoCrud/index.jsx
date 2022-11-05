import { Link } from "react-router-dom";
import api from "../../services/api";
import { ButtonEditar, ButtonExcluir, Categoria, DivButtons, DivContainer, DivImg, DivInfo, DivPreco, H2NomeProduto } from "./style";



export const ProdutoCrud = ({produto}) => {
    const excluirProduto = () => {
       
       api.delete(`/produtos/${produto.id}`).then(res => {
            console.log(res)
          
        }) 
     
      }

 

    return (
    <DivContainer>
        <DivImg>
      <img src={produto?.imagemUrl} alt="" />
      </DivImg>
      <DivInfo>
          <H2NomeProduto>{produto?.nome}</H2NomeProduto>
          <DivPreco>
          <p>R$</p>
          <span>{produto?.valorUnitario}</span>
          </DivPreco>
          <Categoria>{produto?.categoria.nome}</Categoria>
      </DivInfo>
      <DivButtons>
        <Link to={`/admin/produto/${produto.id}/atualizar`}>
          <ButtonEditar>EDITAR</ButtonEditar>
        </Link>
          <ButtonExcluir onClick={excluirProduto}>EXCLUIR</ButtonExcluir>
      </DivButtons>

  </DivContainer>
    )
};
  

