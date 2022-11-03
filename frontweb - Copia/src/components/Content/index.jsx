import { Route, Routes } from 'react-router-dom';
import { Admin } from '../../pages/Admin/Admin';
import { Catalogo } from '../../pages/Catalogo/index';
import { Home } from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import { CadastroProduto } from '../CadastroProduto';
import { ProdutoInfo } from '../ProdutoInfo';



export const Content = () => (

    <Routes>
      <Route path="/" element={<Home />} exact={true}/>
      <Route path="/catalogo" element={ <Catalogo /> } />
      <Route path="/admin/produto" element={ <Admin /> } />
      <Route path="/admin/produto/cadastro" element={ <CadastroProduto /> } />
      <Route path="/catalogo/:id" element={ <ProdutoInfo /> } />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  

);

