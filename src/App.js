import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Attractions from './pages/Attraction'
import Tours from './pages/Tours'
import Museum from './pages/Museum'
import Foods from './pages/Foods'
import Nightlife from './pages/Nightlife'
import Maps from './pages/Maps'

import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <Switch >
      <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/attractions'>
          <Attractions />
        </Route>
        <Route path='/tours'>
          <Tours />
        </Route>
        <Route path='/museum'>
          <Museum />
        </Route>
        <Route path='/foods'>
          <Foods />
        </Route>
        <Route path='/nightlife'>
          <Nightlife />
        </Route>
        <Route path='/maps'>
          <Maps />
        </Route>
        
      </Switch>

    </>
  );
}





