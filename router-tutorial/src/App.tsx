import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile'

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/'>홈</Link>
          </li>
          <li>
            <Link to='/about'>소개</Link>
          </li>
        </ul>
      </div>
      <hr/>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/about' component={About} />
      <Route path='/profile/:username' component={Profile} />
    </BrowserRouter>
  );
}

export default App;
