import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import remove from "../../../../assets/img/fechar.png";
import api from "../../../../services/api";
import { MenuAdmin } from "../../MenuAdmin";
import {
  DivButton, DivClient, DivContainer, DivInfo, DivInfoPedido, DivInfos, DivRemove, Main, Section
} from "./style";
export const ListarClientes = () => {
   const [clientes,setClientes] = useState([])

  useEffect(() => {
    api.get("/clientes").then(res => {
      setClientes(res.data)
      console.log(res.data)
  }) 
  },[])

  function excluirCliente (id)  {  
    api.delete(`/clientes/${id}`).then((res) => {
      toast.info("Cliente Deletado com Sucesso!")
    })  
    }
  
    return (
      <Section>
        <div className="menu">
          <MenuAdmin />
        </div>
        <Main>
          <DivContainer>
            <DivInfos> 
                {clientes?.map((cliente,index) => (
                  <DivInfo key={index}> 
                
                    <DivClient>
                      <DivRemove onClick={() => {excluirCliente(cliente?.id)}}>
                        <img src={remove} alt="" />
                      </DivRemove>
                      <h2>DADOS CLIENTE</h2>
                      <span>CODIGO CLIENTE: {cliente?.id}</span>
                      <span>CPF: {cliente?.cpf}</span> 
                      <span>EMAIL: {cliente?.email}</span>
                      <span>NOME: {cliente?.nomeCompleto} </span>
                      <p></p>
                    </DivClient>

                    
                    <DivInfoPedido>
                      <h2>ENDEREÇO</h2>
                      <span>CEP: {cliente?.endereco.cep}</span>
                      <span>BAIRRO: {cliente?.endereco.bairro}</span> 
                      <span>CIDADE: {cliente?.endereco.cidade} </span> 
                      <span>COMPLEMENTO: {cliente?.endereco.complemento} </span> 
                      <span>ESTADO: {cliente?.endereco.estado} </span> 
                      <span>LOGRADOURO: {cliente?.endereco.logradouro} </span> 
                      <span>NUMERO: {cliente?.endereco.numero} </span> 
                      <p></p>
                      </DivInfoPedido>  

                  
                  </DivInfo>
                ))}
            </DivInfos>
          
           
                <DivButton>
                <Link to="/admin/cliente/listar/id">
                  Busca Cliente por Codigo
                </Link> 
                </DivButton>  
             
      
          </DivContainer>
        </Main>
      </Section>
    )
};

