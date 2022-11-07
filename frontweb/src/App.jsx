import { BrowserRouter as Router } from 'react-router-dom';
import { Content } from './components/Content/index';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { AuthProvider } from './context/auth';
import { ContextProvider } from './context/index';

export const App = () => {
  

  return (
    <div className="App">
      
       <AuthProvider>
        <ContextProvider>
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

