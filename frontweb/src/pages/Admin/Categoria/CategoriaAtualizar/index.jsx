import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../services/api";
import { MenuAdmin } from "../../MenuAdmin/index.jsx";
import { ButtonEnviar, DivContainer, DivDescricao, DivInputs, DivLeft, Main, Section, TextPrincipal } from "./style.js";

export const AtualizarCategoria = () => {
  const [nome,setNome] = useState("")
  const [descricao,setDescricao] = useState("")
  const {id} = useParams()
  
   
  const editarCategoria = () => {
   console.log(id)
    api.put(`/categoria/${id}`,{
      "nome": nome,
      "descricao": descricao
    }).then(() => {
      
    })  
  }

  return (

    <Section>
        <div className="menu">
          <MenuAdmin />
        </div>
      <Main>
          <DivContainer>
            <DivLeft>
              <TextPrincipal>DADOS DO CATEGORIA</TextPrincipal>

                <DivInputs>
                  <input type="text" value={nome} placeholder="Digite o Nome da Categoria" onChange={(e) => setNome(e.target.value)} />
                </DivInputs>
                <ButtonEnviar onClick={editarCategoria}>Enviar</ButtonEnviar>
            </DivLeft>
            <DivDescricao>
              <textarea placeholder="Descricao da Categoria" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
            </DivDescricao>
          </DivContainer>
          
      </Main>
    </Section>
  
   
  )
};