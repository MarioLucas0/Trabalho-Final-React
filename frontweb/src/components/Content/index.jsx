import { Route, Routes } from 'react-router-dom';
import { Admin } from '../../pages/Admin/Admin';
import { AtualizarProduto } from '../../pages/Admin/AtualizarProduto';
import { CadastroProduto } from '../../pages/Admin/CadastroProduto';
import { CategoriaInfo } from '../../pages/Admin/Categoria';
import { CadastrarCategoria } from '../../pages/Admin/Categoria/CadastrarCategoria';
import { AtualizarCategoria } from '../../pages/Admin/Categoria/CategoriaAtualizar';
import { CarrinhoCompras } from '../../pages/Catalogo/CarrinhoDeCompras';
import {Login} from "../../pages/Login/index"

import { Catalogo } from '../../pages/Catalogo/index';
import { Home } from '../../pages/Home';
import NotFound from '../../pages/NotFound';

import { ProdutoInfo } from '../ProdutoInfo';



export const Content = () => (

    <Routes>
      <Route path="/home" element={<Home />} exact={true}/>
      <Route path="/catalogo" element={ <Catalogo /> } />
      <Route path="/catalogo/carrinho" element={ <CarrinhoCompras />} />
      <Route path="/admin/produto" element={ <Admin /> } />
      <Route path="/admin/produto/cadastro" element={ <CadastroProduto /> } />
      <Route path="/admin/produto/:id/atualizar" element={ <AtualizarProduto /> } />
      <Route path="/admin/categoria/cadastrar" element={ <CadastrarCategoria /> } />
      <Route path="/admin/categoria/:id/atualizar" element={ <AtualizarCategoria /> } />
      <Route path="/admin/categoria" element={ <CategoriaInfo />} />
      <Route path="/catalogo/:id" element={ <ProdutoInfo /> } />
      <Route path="/" element={<Login/>}/>
   
      <Route path="*" element={<NotFound />}/>

    </Routes>
  

);

