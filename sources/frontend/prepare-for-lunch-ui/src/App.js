import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuPage from './pages/MenuPage/MenuPage';
import UserPage from './pages/UserPage/UserPage';
import OverviewPage from './pages/OverviewPage/OverviewPage';

const socket = io('127.0.0.1:6699');
function App() {
  useEffect(() => {
    socket.on('greeting', (res) => {});
  }, []);
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={UserPage} />
          <Route path='/user' exact component={UserPage} />
          <Route path='/menu' component={MenuPage} />
          <Route path='/overview' exact component={OverviewPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
