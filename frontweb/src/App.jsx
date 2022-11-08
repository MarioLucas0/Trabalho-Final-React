import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Content } from './components/Content/index';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { AuthProvider } from './context/auth';
import { ContextProvider } from './context/index';
import {AuthProvider} from './context/AuthProviderLogin/AuthProvider'

export const App = () => {
  

  return (
    <div className="App">
      
       <AuthProvider>
        <ContextProvider>
        <ToastContainer />
          <Router>
            <NavBar />
             <Content />
            <Footer />
          </Router>
        </ContextProvider>
        </AuthProvider>
    </div>
  )
}

