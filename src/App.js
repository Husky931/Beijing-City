import React from 'react';
import Navbar from './navigation-components/Navbar'
import Home from './pages/Home'
import Attractions from './pages/Attraction'
import Tours from './pages/Tours'
import Museum from './pages/Museum'
import Foods from './pages/Foods'
import Nightlife from './pages/Nightlife'
import Maps from './pages/Maps'
import Error from './pages/Error'

import AttractionTemplatePage from './attraction-components/AttractionTemplatePage'
import AttractionSinglePage from './attraction-components/AttractionSinglePage'
import MuseumSinglePage from './museum-components/MuseumSinglePage'

import allTheMuseumData from './museum-components/ThumbnailsData'


import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      
      {/* <div className='pages-body'> */}
      <Switch >
      <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/attractions'>
          <Attractions />
        </Route>
        <Route exact path='/attractions/:slug'>
          <AttractionTemplatePage />
        </Route>  
        <Route path='/tours'>
          <Tours />
        </Route>
        <Route exact path='/museum'>
          <Museum />
        </Route>
        <Route exact path='/museum/:smug'>
          <MuseumSinglePage allTheMuseumData={allTheMuseumData} />
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
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    {/* </div> */}
    </>
  );
}





