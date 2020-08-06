import React from 'react';
import MainBoard from './pages/MainBoard';
import Menu from './pages/Menu';
import Splash from './pages/Splash';
import { Router, Route } from './components/Route';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={Splash} />
        <Route path="/menu" component={Menu} />
        <Route path="/board" component={MainBoard} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
