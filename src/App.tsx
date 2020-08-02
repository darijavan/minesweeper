import React from 'react';
import Splash from './pages/Splash';
import MainBoard from './pages/MainBoard';
import { Router, Route } from './components/Route';
import Menu from './pages/Menu';

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
