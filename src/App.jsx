import { BrowserRouter as Router } from 'react-router-dom';
import { Content } from './components/Content/index';
import { NavBar } from './components/NavBar';
import { ContextProvider } from './context/index';
import GlobalStyle from './style/global';

export const App = () => {
  

  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <GlobalStyle />
          <NavBar />
          <Content />
        </Router>
      </ContextProvider>
    </div>
  )
}

