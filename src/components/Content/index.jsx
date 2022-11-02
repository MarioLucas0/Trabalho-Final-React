import { Route, Routes } from 'react-router-dom';
import { Catalogo } from '../../pages/Catalogo/index';
import { Home } from '../../pages/Home';



export const Content = props => (
    
  <main className="content">

    <Routes>
      <Route path="/" element={<Home />} exact={true}/>
      <Route path="/catalogo" element={ <Catalogo /> } />
    </Routes>
  
  </main>
);

