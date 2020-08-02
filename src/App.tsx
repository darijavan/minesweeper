import React from 'react';
import MainBoard from './pages/MainBoard';
import Menu from './pages/Menu';
import Splash from './pages/Splash';
import { Router, Route } from './components/Route';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Splash} />
      <Route path="/menu" component={Menu} />
      <Route path="/board" component={MainBoard} />
    </Router>
  );
};

export default App;
