import { Route, Routes } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
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
import Signin from '../../pages/Signin';
import Signup from '../../pages/Signup';

import { ProdutoInfo } from '../ProdutoInfo';


const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};



export const Content = () => (
  

    <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
  {/*     <Route path="/" element={<Home />} exact={true}/> */}
      <Route path="/catalogo" element={ <Catalogo /> } />
      <Route path="/catalogo/carrinho" element={ <CarrinhoCompras />} />
      <Route path="/admin/produto" element={ <Admin /> } />
      <Route path="/admin/produto/cadastro" element={ <CadastroProduto /> } />
      <Route path="/admin/produto/:id/atualizar" element={ <AtualizarProduto /> } />
      <Route path="/admin/categoria/cadastrar" element={ <CadastrarCategoria /> } />
      <Route path="/admin/categoria/:id/atualizar" element={ <AtualizarCategoria /> } />
      <Route path="/admin/pedido/listar" element={ <ListarPedidos /> } />
      <Route path="/admin/pedido/listar/id" element={<ListarPedidosId />} />
      <Route path="/admin/categoria" element={ <CategoriaInfo />} />
      <Route path="/catalogo/:id" element={ <ProdutoInfo /> } />
 
  
      <Route path="*" element={<NotFound />}/>

    </Routes>
  

);

