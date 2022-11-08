import { useState } from "react";
import Pesquisa from "../../../../../assets/img/Pesquisa.svg";
import api from "../../../../../services/api";
import { MenuAdmin } from "../../../MenuAdmin";
import {
  ButtonLimpar, DivClient, DivContainer, DivInfoPedido, DivInfos, DivInput,
  DivInputs, Main, Section
} from "./style";

export const ListarClientesId = () => {
  const [clienteId,setClienteId] = useState("")
  

  const limpar = () => {
    if(busca != "") {
      setClienteId("")
    }
  }

  const busca = (id) => { 
    api.get(`/clientes/${id}`).then((res) => {
      console.log(res)
      setClienteId(res.data) 
  })
  }


    return (
      <Section>
         <div className="menu">
          <MenuAdmin />
        </div>
      <Main>
        <DivInputs>  
            <DivInput>
                <input type="text" placeholder="Nome do produto" value={clienteId}  onChange={(e) => setClienteId(e.target.value)}/>
                <img src={Pesquisa} alt="" onClick={() => busca(clienteId)}/>
              </DivInput>
                <ButtonLimpar onClick={limpar}>Limpar Filtro</ButtonLimpar> 
            </DivInputs>
          <DivContainer>
          <DivInfos> 
               <DivClient>
                      <h2>DADOS CLIENTE</h2>
                      <span>CODIGO CLIENTE: {clienteId?.id}</span>
                      <span>CPF: {clienteId?.cpf}</span> 
                      <span>EMAIL: {clienteId?.email}</span>
                      <span>NOME: {clienteId?.nomeCompleto} </span>
                      <p></p> 
                    
                    </DivClient>

                    
                    <DivInfoPedido>
                     <h2>ENDEREÇO</h2>
                      <span>CEP: {clienteId.endereco?.cep}</span>
                      <span>BAIRRO: {clienteId.endereco?.bairro}</span> 
                      <span>CIDADE: {clienteId.endereco?.cidade} </span> 
                      <span>COMPLEMENTO: {clienteId.endereco?.complemento} </span> 
                      <span>ESTADO: {clienteId.endereco?.estado} </span> 
                      <span>LOGRADOURO: {clienteId.endereco?.logradouro} </span> 
                      <span>NUMERO: {clienteId.endereco?.numero} </span> 
                      <p></p> 
                      </DivInfoPedido>  

                    

              </DivInfos> 
        </DivContainer>
      </Main> 
  
    </Section>

    )
};

