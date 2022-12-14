import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Content } from './components/Content/index';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { ContextProvider } from './context/index';

export const App = () => {
  

  return (
    <div className="App">
      
     
        <ContextProvider>
        <ToastContainer />
          <Router>
            <NavBar />
            <Content />
            <Footer />
          </Router>
        </ContextProvider>
    
    </div>
  )
}

