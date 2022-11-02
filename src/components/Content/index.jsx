import { Route, Routes } from 'react-router-dom';
import { Catalogo } from '../../pages/Catalogo/index';
import { Home } from '../../pages/Home';
import NotFound from '../../pages/NotFound';



export const Content = () => (
    
    <Routes>
      <Route path="/" element={<Home />} exact={true}/>
      <Route path="/catalogo" element={ <Catalogo /> } />
      <Route path="/catalogo/:id" element={ <Catalogo /> } />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  

);

