import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import { MenuAdmin } from "../MenuAdmin/index";
import {
  DivButton, DivClient, DivContainer, DivInfo, DivInfoPedido, DivInfos,
  DivItemsPedido, Main, Section
} from "./style";
export const ListarPedidos = () => {
   const [pedidos,setPedidos] = useState([])

  useEffect(() => {
    api.get("/pedido").then(res => {
      setPedidos(res.data)
      console.log(res.data)
  }) 
  },[])
  
    return (
      <Section>
        <div className="menu">
          <MenuAdmin />
        </div>
        <Main>
          <DivContainer>
            <DivInfos> 
                {pedidos?.map((pedidos,index) => (
                  <DivInfo key={index}> 
                
                    <DivClient>
                      <h2>DADOS CLIENTE</h2>
                      <span>CPF: {pedidos?.client.cpf}</span> 
                      <span>EMAIL: {pedidos?.client.email}</span>
                      <span>NOME: {pedidos?.client.nomeCompleto} </span>
                      <p></p>
                    </DivClient>

                    <DivInfoPedido>
                    <h2>DADOS PEDIDO</h2>
                    <span>DATA DE ENTREGA: {pedidos?.dataEntrega}</span> 
                    <span>DATA DE ENVIO: {pedidos?.dataEnvio}</span>
                    <span>DATA DO PEDIDO: {pedidos?.dataPedido} </span>
                    <p></p>
                    </DivInfoPedido>
                    
                    <DivItemsPedido>
                    <h2>ITEMS PEDIDO</h2>
                    {pedidos?.items.map((items,index) => (
                      <div className="items" key={index}>
                         <span>NOME DO PRODUTO: {items.name}</span> 
                         <span>PRECO DE VENDA: {items.precoVenda}</span>
                         <span className="itemsQuantidade">QUANTIDADE: {items.quantidade} </span>
                      </div>
                    ))}
                  
                    </DivItemsPedido>
                  </DivInfo>
                ))}
            </DivInfos>
          
           
                <DivButton>
                <Link to="/admin/pedido/listar/id">
                  Busca pedidos por Id
                </Link> 
                </DivButton>  
             
      
          </DivContainer>
        </Main>
      </Section>
    )
};

