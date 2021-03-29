import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Profiles from './components/Profiles';

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
          <li>
            <Link to='/profile/velopert'>velopert 프로필</Link>
          </li>
          <li>
            <Link to='/profile/gildong'>gildong 프로필</Link>
          </li>
          <li>
            <Link to='/profiles'>프로필</Link>
          </li>
        </ul>
      </div>
      <hr/>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/about' component={About} />
        <Route path='/profile/:username' component={Profile} />
        <Route path='/profiles' component={Profiles} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
