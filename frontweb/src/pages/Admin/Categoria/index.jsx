import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoriaIcon from "../../../assets/img/categoriaIcon.png";
import descricao from "../../../assets/img/descricao.png";
import editar from "../../../assets/img/edit.png";
import IdIcon from "../../../assets/img/IdIcon.png";
import remove from "../../../assets/img/remove.png";
import api from "../../../services/api";
import { MenuAdmin } from "../MenuAdmin";
import { ButtonAdicionarCategoria, DivButton, DivContainer, DivCrud, DivDescricao, DivEditar, DivId, DivInfo, DivInfoContainer, DivNome, DivRemove, Main, Section } from "./style";

export const CategoriaInfo = () => {
  const [categoria,setCategorias] = useState()
  const [success,setSuccess] = useState(false)

  useEffect(() => {
    api.get("/categoria").then(res => {
      setCategorias(res.data)
  }) 
  },[success])

  function excluirCategoria (id)  { 
  api.delete(`/categoria/${id}`).then(() => {
      setSuccess(true)
  })  
  }


  return (
    <Section >
    <MenuAdmin />
      <DivContainer>
        <DivButton>
          <Link to={"/admin/categoria/cadastrar"}>
            <ButtonAdicionarCategoria>Adicionar</ButtonAdicionarCategoria>
           </Link>
        </DivButton>
        <Main>
          {categoria?.map((prod,index) => (
            <DivContainer key={index}> 
              <DivInfoContainer >
                <DivInfo>
          
                    <DivId>
                      <img src={IdIcon} alt="" />
                      <p>{prod.id}</p>
                    </DivId>
                    <DivNome>
                      <img src={categoriaIcon} alt="Icon Categoria" />
                      <p>{prod.nome}</p>
                    </DivNome>  
                    <DivDescricao>
                      <img src={descricao} alt="Icon Categoria" />
                      <p>{prod.descricao.substring(0,20)}...</p>

                    </DivDescricao>
                  </DivInfo>
                <DivCrud>
                <DivRemove onClick={() => {excluirCategoria(prod.id)}}>
                  <img src={remove} alt="" />
                </DivRemove>
                <Link to={`/admin/categoria/${prod.id}/atualizar`}>
                  <DivEditar>
                    <img src={editar} alt="" />   
                  </DivEditar>
                </Link>
              </DivCrud>     
              </DivInfoContainer>
            </DivContainer> 
          
          ))}
     
          
        </Main>
      </DivContainer>
    </Section>
    )
}