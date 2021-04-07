import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Chat from './chat/Index';
import Main from './main/Index';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/" />
          <Link to="/chat">ChatPage</Link>
        </nav>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/chat" component={Chat} />
        </Switch>
      </div>
    </Router>
  );
}
