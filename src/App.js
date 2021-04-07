import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Chat from './chat/Index';
import Main from './main/Index';
import ChatList from './chatList/Index';
import Setting from './setting/Index';
import MenuBar from './MenuBar';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export default function App(props) {
  return (
    <Router>
      <Container>
        <Link to="/"></Link>
        <Link to="/chat"></Link>
        <Link to="/chatlist"></Link>
        <Link to="/setting"></Link>
        <Route path={['/', '/chatlist', '/setting']} component={MenuBar} />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/chat" component={Chat} />
          <Route path="/chatlist" component={ChatList} />
          <Route path="/setting" component={Setting} />
        </Switch>
      </Container>
    </Router>
  );
}
