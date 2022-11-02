import { Route, Routes } from 'react-router-dom';
import { Catalogo } from '../../pages/Catalogo/index';
import { Home } from '../../pages/Home';



export const Content = () => (
    
    <Routes>
      <Route path="/" element={<Home />} exact={true}/>
      <Route path="/catalogo" element={ <Catalogo /> } />
    </Routes>
  

);

