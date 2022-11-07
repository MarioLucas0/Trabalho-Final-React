import { BrowserRouter as Router } from 'react-router-dom';
import { Content } from './components/Content/index';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { ContextProvider } from './context/index';
import {AuthProvider} from './context/AuthProviderLogin/AuthProvider'

export const App = () => {
  

  return (
    <div className="App">
        <ContextProvider>
          <Router>
            <NavBar />
             <Content />
            <Footer />
          </Router>
        </ContextProvider>
    </div>
  )
}

