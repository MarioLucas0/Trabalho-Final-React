import { Route, Routes } from 'react-router-dom';
import { Catalogo } from '../../pages/Catalogo/index';
import { Home } from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import { ProdutoInfo } from '../ProdutoInfo';



export const Content = () => (
    
    <Routes>
      <Route path="/" element={<Home />} exact={true}/>
      <Route path="/catalogo" element={ <Catalogo /> } />
      <Route path="/catalogo/:id" element={ <ProdutoInfo /> } />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  

);

