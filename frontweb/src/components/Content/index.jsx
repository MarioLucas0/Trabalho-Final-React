import { Route, Routes } from 'react-router-dom';
import { Login } from "../../../src/pages/Login/index";
import { Admin } from '../../pages/Admin/Admin';
import { AtualizarProduto } from '../../pages/Admin/AtualizarProduto';
import { CadastroProduto } from '../../pages/Admin/CadastroProduto';
import { CategoriaInfo } from '../../pages/Admin/Categoria';
import { CadastrarCategoria } from '../../pages/Admin/Categoria/CadastrarCategoria';
import { AtualizarCategoria } from '../../pages/Admin/Categoria/CategoriaAtualizar';
import { ListarPedidos } from '../../pages/Admin/ListarPedidos';
import { ListarPedidosId } from '../../pages/Admin/ListarPedidos/ListarPedidosId';
import { CarrinhoCompras } from '../../pages/Catalogo/CarrinhoDeCompras';

import { Catalogo } from '../../pages/Catalogo/index';
import { Home } from '../../pages/Home';
import NotFound from '../../pages/NotFound';

import { ProdutoInfo } from '../ProdutoInfo';






export const Content = () => (
  

    <Routes>
      <Route path="/" element={<Home />} exact={true}/>
      <Route path="/catalogo" element={ <Catalogo /> } />
      <Route path="/catalogo/carrinho" element={ <CarrinhoCompras />} />
      <Route path="/admin/produto" element={ <Admin /> } />
      <Route path="/admin/produto/cadastro" element={ <CadastroProduto /> } />
      <Route path="/admin/produto/:id/atualizar" element={ <AtualizarProduto /> } />
      <Route path="/admin/categoria/cadastrar" element={ <CadastrarCategoria /> } />
      <Route path="/admin/categoria/:id/atualizar" element={ <AtualizarCategoria /> } />
      <Route path="/admin/pedido/listar" element={ <ListarPedidos /> } />
      <Route path="/admin/pedido/listar/id" element={<ListarPedidosId/ >} />
      <Route path="/admin/categoria" element={ <CategoriaInfo />} />
      <Route path="/catalogo/:id" element={ <ProdutoInfo /> } />


      {/* Bernado */}
      <Route path="/login" element={ <Login />}/>

   
      <Route path="*" element={<NotFound />}/>

    </Routes>
  

);

