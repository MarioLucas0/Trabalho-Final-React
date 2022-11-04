import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoriaIcon from "../../../assets/img/categoriaIcon.png";
import descricao from "../../../assets/img/descricao.png";
import editar from "../../../assets/img/edit.png";
import IdIcon from "../../../assets/img/IdIcon.png";
import remove from "../../../assets/img/remove.png";
import api from "../../../services/api";
import { MenuAdmin } from "../MenuAdmin";
import {
  DivContainer, DivCrud, DivDescricao, DivEditar, DivId, DivInfo, DivInfoContainer, DivNome, DivRemove, Main, Section
} from "./style";

export const CategoriaInfo = () => {
  const [categoria,setCategorias] = useState()
  const [success,setSuccess] = useState(false)

  useEffect(() => {
    api.get("/categoria").then(res => {
      setCategorias(res.data)
      console.log(res)
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
                      <p>{prod.descricao}</p>
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
    </Section>
    )
}