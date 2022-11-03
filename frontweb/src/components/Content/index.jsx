import { Route, Routes } from 'react-router-dom';
import { Admin } from '../../pages/Admin/Admin';
import { AtualizarProduto } from '../../pages/Admin/AtualizarProduto';
import { CadastroProduto } from '../../pages/Admin/CadastroProduto';
import { Catalogo } from '../../pages/Catalogo/index';
import { Home } from '../../pages/Home';
import NotFound from '../../pages/NotFound';

import { ProdutoInfo } from '../ProdutoInfo';



export const Content = () => (

    <Routes>
      <Route path="/" element={<Home />} exact={true}/>
      <Route path="/catalogo" element={ <Catalogo /> } />
      <Route path="/admin/produto" element={ <Admin /> } />
      <Route path="/admin/produto/cadastro" element={ <CadastroProduto /> } />
      <Route path="/admin/produto/:id/atualizar" element={ <AtualizarProduto /> } />
      <Route path="/catalogo/:id" element={ <ProdutoInfo /> } />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  

);

