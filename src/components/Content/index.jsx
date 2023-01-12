import { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from "../../context/auth";
import { Admin } from '../../pages/Admin/Admin';
import { AtualizarProduto } from '../../pages/Admin/AtualizarProduto';
import { CadastroProduto } from '../../pages/Admin/CadastroProduto';
import { CategoriaInfo } from '../../pages/Admin/Categoria';
import { CadastrarCategoria } from '../../pages/Admin/Categoria/CadastrarCategoria';
import { AtualizarCategoria } from '../../pages/Admin/Categoria/CategoriaAtualizar';
import { EditarCliente } from '../../pages/Admin/Cliente/AtualizarCliente';
import { ListarClientes } from '../../pages/Admin/Cliente/ListarCliente';
import { ListarClientesId } from '../../pages/Admin/Cliente/ListarCliente/ListarClientId';
import { ListarPedidos } from '../../pages/Admin/ListarPedidos';
import { ListarPedidosId } from '../../pages/Admin/ListarPedidos/ListarPedidosId';
import { CarrinhoCompras } from '../../pages/Catalogo/CarrinhoDeCompras';
import { Catalogo } from '../../pages/Catalogo/index';
import { Home } from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Signin from '../../pages/Signin';
import Signup from '../../pages/Signup';

import { ProdutoInfo } from '../ProdutoInfo';
  

export const Content = () => {
  const { authenticated } = useContext(AuthContext);
  const Private = ({children}) => {
   
    
    if(!authenticated) {
      
      return <Navigate to="/" />
    }
  
    return children
  }
  
  
   useEffect(() => {
    console.log(authenticated)
  },[]) 
  return (
    <Routes>
      <Route exact path="/home" element={<Private> <Home/> </Private> } />
      <Route path="/" element={<Signin />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route path="*" element={<Signin />} />
      <Route path="/catalogo" element={ <Private> <Catalogo /> </Private>} />
      <Route path="/catalogo/carrinho" element={ <Private> <CarrinhoCompras /></Private> } />
      <Route path="/admin/produto" element={<Private> <Admin /> </Private>  } />
      <Route path="/admin/produto/cadastro" element={ <CadastroProduto /> } />
      <Route path="/admin/produto/:id/atualizar" element={ <AtualizarProduto /> } />
      <Route path="/admin/categoria/cadastrar" element={ <CadastrarCategoria /> } />
      <Route path="/admin/categoria/:id/atualizar" element={ <AtualizarCategoria /> } />
      <Route path="/admin/pedido/listar" element={ <ListarPedidos /> } />
      <Route path="/admin/pedido/listar/id" element={<ListarPedidosId />} />
      <Route path="/admin/cliente/listar" element={ <ListarClientes/> } />
      <Route path="/admin/cliente/listar/id" element={ <ListarClientesId /> } />
      <Route path="/admin/categoria" element={ <CategoriaInfo />} />
      <Route path="/admin/cliente/:id/editar" element={ <EditarCliente />} />
      <Route path="/catalogo/:id" element={ <ProdutoInfo /> } />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
  

};

