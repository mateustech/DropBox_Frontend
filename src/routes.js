import { Switch, Route, BrowserRouter } from 'react-router-dom'
import React from 'react';
import Main from './pages/Main/index'
import Box from './pages/Box/index'

// import { Container } from './styles';

export default function src() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/box/:id' component={Box} />
      </Switch>
    </BrowserRouter>
  );
}
