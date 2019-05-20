import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './componentes/Home';
import About from './componentes/About';
import Pricing from './componentes/Pricing';

import { Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
